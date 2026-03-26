import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export const getAmenities = async () => {
  // 1. Cek Autentikasi
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized Access"); // : Silakan login terlebih dahulu.
  }

  try {
    // 2. Query Data
    const result = await prisma.amenities.findMany({
      orderBy: {
        name: "asc", // Selalu urutkan data agar UI konsisten
      },
    });

    return result;
  } catch (error) {
    // 3. Error Logging yang lebih informatif
    console.error("Database Error [getAmenities]:", error);

    // 4. Selalu return atau throw error yang bermakna
    // Jangan biarkan mengembalikan 'undefined' secara misterius
    throw new Error("Failed to load amenities.");
  }
};
