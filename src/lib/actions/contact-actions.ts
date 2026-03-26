"use server";

import { ContactSchema } from "@/schemas/contact";
import { prisma } from "@/lib/prisma";

export const contactMessage = async (
  _prevData: unknown,
  formData: FormData,
) => {
  const validatedFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );
  if (!validatedFields.success) {
    return { error: validatedFields.error?.flatten().fieldErrors };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });
    return { message: "Thanks for contact us." };
  } catch (error) {
    console.error("Actions Error [contactMessage]:", error);

    throw new Error("Failed to contact message");
  }
};
