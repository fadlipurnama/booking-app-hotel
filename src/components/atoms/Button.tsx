// components/atoms/Button.tsx
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

export const buttonStyles = (
  variant: "primary" | "outline" | "ghost" | "warn",
  size: "sm" | "md" | "lg" | "xl",
  className: string,
) => {
  const baseStyles =
    "flex border-brand-primary items-center justify-center gap-4 transition-all hover:cursor-pointer";

  const variants: Record<"primary" | "outline" | "ghost" | "warn", string> = {
    primary:
      "border-1 bg-brand-primary text-white hover:bg-brand-secondary rounded-sm",
    outline: "border-1 text-white hover:bg-brand-secondary rounded-sm",
    ghost:
      "border-1 border-white text-solid-text bg-gray-50 hover:bg-gray-100 rounded-sm",
    warn: "border-1 bg-red-400 border-red-400 text-white hover:bg-red-600 rounded-sm",
  };

  const sizes: Record<"sm" | "md" | "lg" | "xl", string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5",
    lg: "px-6 py-2.5",
    xl: "px-10 py-4",
  };

  return `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "warn";
  size?: "sm" | "md" | "lg" | "xl";
  type?: "button" | "submit";
  className?: string;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) => (
  <button className={buttonStyles(variant, size, className)} {...props}>
    {children}
  </button>
);

interface ButtonLinkProps {
  children: ReactNode;
  href: Url;
  variant?: "primary" | "outline" | "ghost" | "warn";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string; // Untuk tambahan styling spesifik/luar
}

export const ButtonLink = ({
  href = "",
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonLinkProps) => (
  <Link
    href={href}
    className={buttonStyles(variant, size, className)}
    {...props}
  >
    {children}
  </Link>
);
