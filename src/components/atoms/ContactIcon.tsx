import { LucideIcon } from "lucide-react";

interface ContactIconProps {
  icon: LucideIcon;
}

export const ContactIcon = ({ icon: Icon }: ContactIconProps) => (
  <span className="flex-none bg-gray-100 p-3 shadow-sm rounded-sm">
    <Icon className="size-7 text-solid-text" />
  </span>
);