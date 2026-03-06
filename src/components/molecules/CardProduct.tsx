import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ButtonLink } from "../atoms/Button";

function CardProduct() {
  return (
    <div className="bg-main-bg shadow-lg rounded-sm transition duration-100 hover:shadow-sm">
      <div className="h-65 w-auto rounded-t-sm relative overflow-hidden">
        <Image
          src="/assets/hero.jpg"
          alt="Luxury Room"
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-medium mb-2">
          <Link
            href="#"
            className="text-solid-text hover:text-brand-primary transition duration-150"
          >
            Luxury Room
          </Link>
        </h2>
        <h4 className="text-2xl mb-7">
          <span className="font-semibold text-soft-text">Rp 2100000</span>
          <span className="text-muted-text text-sm">/Night</span>
        </h4>
        <div className="flex items-center justify-between">
          <span className="text-soft-text">2 People</span>
          <ButtonLink href={"#"} variant="primary" size="lg">
            Book Now
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
