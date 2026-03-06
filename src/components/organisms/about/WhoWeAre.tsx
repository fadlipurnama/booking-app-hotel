import Image from "next/image";
import { Eye, Locate } from "lucide-react";
import { InfoItem } from "@/components/molecules/InfoItem";

const ABOUT_DATA = [
  {
    icon: Eye,
    title: "Vision",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit laborum mollitia dolorem possimus eum reprehenderit!",
  },
  {
    icon: Locate,
    title: "Mission",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At magni aliquid iste vero earum consequatur quam officia, suscipit aut voluptates?",
  },
];

export const WhoWeAreSection = () => (
  <section className="max-w-7xl mx-auto py-20 px-4">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <Image
        src="/assets/about-image.jpg"
        alt="About Hotel Luxury"
        width={650}
        height={579}
        className="rounded-lg"
      />
      <article>
        <h2 className="text-5xl font-semibold text-solid-text mb-4">
          Who We Are
        </h2>
        <p className="text-soft-text py-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
          expedita molestiae ipsa quam impedit et.
        </p>
        <ul className="space-y-6 pt-8">
          {ABOUT_DATA.map((item, index) => (
            <InfoItem key={index} {...item} />
          ))}
        </ul>
      </article>
    </div>
  </section>
);
