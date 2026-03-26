"use server";

import { prisma } from "@/lib/prisma";

export const registerImage = async (url: string, type: "ROOM" | "PRODUCT") => {
  try {
    await prisma.uploadedImage.create({
      data: {
        url: url,
        entityType: type,
        status: "PENDING", // Status awal saat baru upload
      },
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to register image:", error);
    return { success: false, error: "Database registration failed" };
  }
};