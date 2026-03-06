// components/atoms/Button.tsx
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

export const buttonStyles = (
  variant: "primary" | "outline",
  size: "sm" | "md" | "lg",
  className: string,
) => {
  const baseStyles =
    "flex border-1 border-brand-primary items-center justify-center gap-4 transition-all hover:cursor-pointer";

  const variants: Record<"primary" | "outline", string> = {
    primary: "bg-brand-primary text-white hover:bg-brand-secondary rounded-sm",
    outline:
      "text-white hover:bg-brand-secondary rounded-sm",
  };

  const sizes: Record<"sm" | "md" | "lg", string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-2.5",
  };

  return `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
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
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
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
