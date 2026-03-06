import { menuLinksFooter, policyLinksFooter } from "@/constants/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../atoms/Button";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 w-full">
        <div className="container mx-auto gap-4 grid px-4 grid-cols-12 py-10 lg:py-16">
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-7">
            <Link href={"/"}>
              <Image
                src={"/assets/logo-hotel.png"}
                alt="Logo Hotel"
                width={128}
                height={49}
              />
            </Link>
            <p className="text-muted-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              tempore! Labore consectetur maiores dolor voluptatibus.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 justify-between  flex w-full  lg:justify-normal gap-6 border">
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-semibold text-white">Links</h4>
              <nav className="flex flex-col gap-y-5 text-muted-text">
                {menuLinksFooter.map((item, i) => (
                  <Link key={i} href={item.href}>
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-semibold text-white">Legals</h4>
              <nav className="flex flex-col gap-y-5 text-muted-text">
                {policyLinksFooter.map((item, i) => (
                  <Link key={i} href={item.href}>
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col">
            <h4 className="mb-8 text-xl font-semibold text-white">
              Newsletter
            </h4>
            <p className="text-muted-text">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <form action={""} className="mt-5">
              <input
                className="w-full mb-5 p-3 rounded-sm bg-primary-bg"
                placeholder="johndoe@gmail.com"
              />
              <Button size="lg" variant="primary" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-subtle-text py-8 text-center text-base text-soft-text">
          &copy; 2026 | Fadli Purnama | All Right Reserved
        </div>
      </footer>
    </>
  );
}

export default Footer;
