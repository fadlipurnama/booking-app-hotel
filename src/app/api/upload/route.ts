import { put, del } from "@vercel/blob";
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { uploadRateLimit } from "@/lib/ratelimit";

export const PUT = async (request: Request) => {
  // 1. SATPAM IP (Upstash) - Nahan serangan bot/spam
  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for") ?? "127.0.0.1";
  const { success } = await uploadRateLimit.limit(ip);
  if (!success) {
    return NextResponse.json(
      { message: "Too many requests. Please try again in a minute." },
      { status: 429 },
    );
  }

  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Login dulu, Bang!" }, { status: 401 });
  }

  const form = await request.formData();
  const file = form.get("file") as File;

  if (file.size === 0 || file.size === undefined) {
    return NextResponse.json({ message: "File is required." }, { status: 400 });
  }

  if (file.size >= 4000000) {
    return NextResponse.json(
      { message: "File must be less than 4MB." },
      { status: 400 },
    );
  }
  if (!file.type.startsWith("image/")) {
    return NextResponse.json(
      { message: "File must be an image." },
      { status: 400 },
    );
  }
  try {
    const pendingCount = await prisma.uploadedImage.count({
      where: {
        userId: session.user.id,
        status: "PENDING",
      },
    });

    if (pendingCount >= 5) {
      return NextResponse.json(
        {
          message:
            "Antrean penuh! Selesaikan dulu 5 gambar sebelumnya atau tunggu robot pembersih (1 jam).",
        },
        { status: 429 }, // 429 = Too Many Requests
      );
    }

    // D. Kalau lolos sensor, baru upload ke Vercel Blob
    const blob = await put(file.name, file, {
      access: "public",
      multipart: true,
      addRandomSuffix: true,
    });

    return NextResponse.json(blob);
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error." },
      { status: 500 },
    );
  }
};

export const DELETE = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  const imageUrl = searchParams.get("imageUrl") as string;

  await del(imageUrl);

  return NextResponse.json({ status: 200 });
};
