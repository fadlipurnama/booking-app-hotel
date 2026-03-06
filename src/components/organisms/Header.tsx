import Image from "next/image";
import Link from "next/link";
import NavGroup from "../molecules/NavGroup";

function Header() {
  return (
    <header className="fixed top-0 w-full bg-primary-bg shadow-sm z-20">
      <div className="max-w-7xl flex flex-wrap items-center justify-between p-4">
        <Link href={"/"}>
          <Image src={"/assets/logo-hotel.png"} alt={"Logo Hotel"} width={128} height={49} priority/>
        </Link>
        <NavGroup />
      </div>
    </header>
  );
}

export default Header;
