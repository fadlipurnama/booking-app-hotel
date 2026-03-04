import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-20">
      <div className="max-w-7xl flex flex-wrap items-center justify-between p-4">
        <Link href={"/"}>
          <Image src={"/assest/logo-hotel.png"} alt={"Logo Hotel"} width={128} height={49} priority/>
        </Link>
      </div>
    </header>
  );
}

export default Header;
