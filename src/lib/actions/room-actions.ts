"use server";

import { RoomSchema } from "@/schemas/room";
import { prisma } from "@/lib/prisma";
import { flattenError } from "zod/v4/core";
import { redirect } from "next/navigation";
import { auth } from "@/auth"; // Asumsi pakai NextAuth

export const saveRoom = async (_prevState: unknown, formData: FormData) => {
  // 1. Cek Autentikasi (Security First!)
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  const rawData = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    capacity: formData.get("capacity") as string,
    price: formData.get("price") as string,
    amenities: formData.getAll("amenities"),
    image: formData.get("image") as string, // Masukkan ke sini
  }; // 2. Validasi Satu Pintu

  const validatedFields = RoomSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      error: flattenError(validatedFields.error).fieldErrors,
      fields: rawData,
    };
  }

  const { name, description, price, capacity, amenities, image } =
    validatedFields.data;

  try {
    // 3. Database Transaction (All or Nothing)
    await prisma.$transaction(async (tx) => {
      const newRoom = await tx.room.create({
        data: {
          name,
          description,
          image,
          price: Number(price), // Pastikan Number
          capacity: Number(capacity),
          roomAmenities: {
            create: amenities.map((id: string) => ({
              amenities: { connect: { id } }, // Cara yang lebih rapi di Prisma
            })),
          },
        },
      });

      await tx.uploadedImage.update({
        where: { url: image },
        data: {
          status: "ATTACHED",
          entityId: newRoom.id,
        },
      });
    });
  } catch (error) {
    console.error("Actions Error [saveRoom]:", error);
    return { message: "Database Error: Gagal menyimpan data." };
  } // 4. Redirect SELALU di luar Try-Catch

  redirect("/admin/room");
};
