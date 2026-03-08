// src/constants/contact.ts
import { Mail, Phone, Locate } from "lucide-react";

export const CONTACT_INFO = [
  {
    id: "email",
    label: "Email",
    value: "email-us@example.com",
    icon: Mail,
    href: "mailto:email-us@example.com",
  },
  {
    id: "phone",
    label: "Phone Number",
    value: "+62 123-4567-8901, +62 987-6543-2101",
    icon: Phone,
    href: "tel:+6212345678901",
  },
  {
    id: "address",
    label: "Address",
    value: "Coderx Street Road 2026, PDG, INDONESIA",
    icon: Locate,
    href: "https://maps.google.com/?q=Coderx+Street+Road+2026",
  },
];