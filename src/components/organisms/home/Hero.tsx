import { ButtonLink } from "@/components/atoms/Button";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="relative h-screen text-white overflow-hidden">
      <div className="aboslute inset-0 after:absolute after:inset-0 after:bg after:bg-black after:opacity-50">
        <Image
          src={"/assets/hero.jpg"}
          alt="hero image"
          fill
          className="object-cover object-center w-full"
        />
      </div>
      <div className="relative flex flex-col justify-center items-center h-full text-center">
        <h2 className="text-7xl font-extrabold leading-tight mb-3 capitalize">
          Book your luxury room
        </h2>
        <p className="text-xl text-subtle-text mb-8">
          Get Special offer just for you today
        </p>
        <div className="flex gap-5">
          <ButtonLink href={"/room"} variant="primary" size="lg">
            Book Now
          </ButtonLink>
          <ButtonLink href={"/contact"} variant="outline" size="lg">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
