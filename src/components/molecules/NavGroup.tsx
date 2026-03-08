"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { Button, ButtonLink } from "@/components/atoms/Button";
import { menuLinks } from "@/constants/navigation";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

function NavGroup() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <>
      {session?.user ? (
        <div className="flex items-center justify-end lg:order-2">
          <div className="hidden text-sm bg-gray-50 border rounded-full lg:me-0 lg:block focus:ring-4 focus:ring-gray-300 cursor-pointer">
            <Image
              src={session.user.image || "/assets/avatar.svg"}
              width={64}
              height={64}
              alt="Avatar"
              className="rounded-full size-8"
            />
          </div>
          <div className="flex items-center ">
            <Button
              onClick={() => signOut()}
              variant="ghost"
              size="md"
              className="hidden lg:block font-semibold"
            >
              Sign Out
            </Button>
          </div>
        </div>
      ) : null}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 justify-center text-sm text-solid-text cursor-pointer rounded-md lg:hidden hover:bg-secondary-bg"
      >
        {!open ? <Menu className="size-8" /> : <X className="size-8" />}
      </button>
      <div
        className={clsx("w-full lg:block lg:w-auto", {
          hidden: !open,
        })}
      >
        <nav className="font-bold text-sm p-4 mt-4 lg:p-0 lg:mt-0 lg:border-0 lg:bg-primary-bg">
          <ul className="flex flex-col lg:flex-row uppercase rounded-sm lg:space-x-10 lg:items-center">
            {menuLinks
              .filter((item) => {
                if (!item.protected) return true;
                if (!session) return false;
                if (item.role === "admin")
                  return session?.user?.role === "admin";
                return true;
              })
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 w-fit px-3 text-solid-text hover:bg-secondary-bg rounded-sm lg:hover:bg-transparent lg:p-0"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            {session ? (
              <Button
                onClick={() => signOut()}
                size="md"
                variant="warn"
                className="lg:hidden w-fit uppercase font-semibold"
              >
                Sign Out
              </Button>
            ) : (
              <ButtonLink
                size="lg"
                variant="primary"
                href={"/sign-in"}
                className="mt-2 w-fit lg:mt-0"
              >
                Sign In
              </ButtonLink>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavGroup;
