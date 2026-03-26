// components/atoms/Button.tsx
import clsx from "clsx";
import { LoaderCircle } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

export const buttonStyles = (
  variant: "primary" | "outline" | "ghost" | "warn",
  size: "sm" | "md" | "lg" | "xl",
  className: string,
  // disabled?: boolean,
) => {
  const baseStyles =
    "flex border-brand-primary items-center justify-center gap-4 transition-all";

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
    md: "px-4 py-2",
    lg: "px-6 py-2.5",
    xl: "px-10 py-4",
  };

  return `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
};

// BUTTON
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "warn";
  size?: "sm" | "md" | "lg" | "xl";
  type?: "button" | "submit";
  className?: string;
  isPending?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  isPending = false,
  ...props
}: ButtonProps) => (
  // <button className={buttonStyles(variant, size, className)} {...props}>
  //   {children}
  // </button>

  <button
    disabled={isPending}
    type={type}
    className={clsx(buttonStyles(variant, size, className), {
      "opacity-50 cursor-not-allowed h-fit": isPending,
      "cursor-pointer": !isPending,
    })}
    {...props}
  >
    <>
      {isPending ? (
        // Spinner SVG sederhana yang berputar (animate-spin)
        <LoaderCircle size={6}  className="opacity-75 animate-spin h-5 w-5 text-current"/>
      ) : (
         children 
      )}
    </>
  </button>
);

// BUTTON LINK
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
