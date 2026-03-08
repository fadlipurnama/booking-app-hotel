// src/components/molecules/ContactItem.tsx
import { LucideIcon } from "lucide-react";
import { ContactIcon } from "../atoms/ContactIcon";

interface ContactItemProps {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}

export const ContactItem = ({
  label,
  value,
  href,
  icon,
}: ContactItemProps) => (
  <>
    <li className="flex items-start gap-5">
      <ContactIcon icon={icon} />
      <address className="not-italic">
        <h3 className="text-lg font-semibold mb-1">{label} :</h3>
        <a
          href={href}
          className="text-soft-text hover:text-solid-text transition-colors"
        >
          {value}
        </a>
      </address>
    </li>
  </>
);
