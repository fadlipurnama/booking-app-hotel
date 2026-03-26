import { object, string, coerce, array } from "zod";

export const RoomSchema = object({
  name: string().min(1, { message: "Room name is required" }),

  description: string().min(50, {
    message: "Description must be at least 50 characters long",
  }),

  // Kita tambahkan min(1) SEBELUM coerce supaya ketahuan kalau kosong,
  // atau pakai logika yang lebih eksplisit
  capacity: coerce
    .number()
    .int({ message: "Capacity must be a whole number" }) // Kapasitas gak boleh desimal (0.5 orang?)
    .positive({ message: "Capacity must be at least 1 person" }),

  price: coerce.number().positive({ message: "Price must be greater than 0" }),

  amenities: array(string()).nonempty({
    message: "Please select at least one amenity",
  }),
  image: string().min(1, { message: "Image is required" }),
});
