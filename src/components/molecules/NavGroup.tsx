"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { ButtonLink } from "@/components/atoms/Button";
import { menuLinks } from "@/constants/navigation";

function NavGroup() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 justify-center text-sm text-solid-text rounded-md lg:hidden hover:bg-secondary-bg"
      >
        {!open ? <Menu className="size-8" /> : <X className="size-8" />}
      </button>
      <div
        className={clsx("w-full lg:block lg:w-auto", {
          hidden: !open,
        })}
      >
        <nav className="flex flex-col font-bold text-sm uppercase p-4 mt-4 rounded-sm  lg:flex-row lg:items-center lg:space-x-10 lg:p-0 lg:mt-0 lg:border-0 lg:bg-primary-bg">
          {menuLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 px-3 text-solid-text hover:bg-secondary-bg rounded-sm lg:hover:bg-transparent lg:p-0"
            >
              {item.name}
            </Link>
          ))}
          <ButtonLink
            size="lg"
            variant="primary"
            href={"/sign-in"}
            className="mt-2 lg:mt-0"
          >
            Sign In
          </ButtonLink>
        
        </nav>
      </div>
    </>
  );
}

export default NavGroup;
