import { object, string, email } from "zod";

export const ContactSchema = object({
  name: string().min(6, { message: "Name must be at least 6 characters" }),

  // Menggunakan email() mandiri sudah benar (Best Practice v3.22+)
  email: email({ message: "Please enter a valid email" })
    .min(6, { message: "Email must be at least 6 characters" }),

  subject: string()
    .min(6, { message: "Subject must be at least 6 characters" })
    .max(100, { message: "Subject is too long" }),

  message: string()
    .min(20, { message: "Message must be at least 20 characters" }) // Lebih ramah user
    .max(500, { message: "Message cannot exceed 500 characters" }),
});