import { LucideIcon } from "lucide-react";

interface InfoItemProps {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const InfoItem = ({ icon: Icon, title, text }: InfoItemProps) => (
  <li className="flex gap-5">
    <div className="flex-none mt-1 ">
      <Icon className="size-7" />
    </div>
    <div className="flex-1">
      <h3 className="text-lg font-semibold mb-1">{title} :</h3>
      <p className="text-soft-text">{text}</p>
    </div>
  </li>
);