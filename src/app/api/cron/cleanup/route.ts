import { prisma } from "@/lib/prisma";
import { del } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // 1. Keamanan: Cek Authorization Header (Opsional tapi disarankan)
  // Vercel mengirimkan header khusus untuk memverifikasi ini beneran Cron Job mereka
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    // 2. Cari gambar PENDING yang umurnya lebih dari 10 menit
    // const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
    const zombies = await prisma.uploadedImage.findMany({
      where: {
        status: "PENDING",
        createdAt: { lt: tenMinutesAgo },
      },
    });

    if (zombies.length === 0) {
      return NextResponse.json({
        message: "No zombies found. Kebun bersih, Bang!",
      });
    }

    // 3. Eksekusi pembersihan
    for (const zombie of zombies) {
      await del(zombie.url); // Hapus di Vercel Blob
      await prisma.uploadedImage.delete({ where: { id: zombie.id } }); // Hapus di DB
    }

    return NextResponse.json({
      message: `Berhasil menyapu ${zombies.length} gambar zombie.`,
    });
  } catch (error) {
    console.error("Cron Error:", error);
    return NextResponse.json(
      { error: "Gagal nyapu nih, Bang." },
      { status: 500 },
    );
  }
}
