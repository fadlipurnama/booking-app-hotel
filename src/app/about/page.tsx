import SubHeroSection from "@/components/organisms/SubHero";
import { WhoWeAreSection } from "@/components/organisms/about/WhoWeAre";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Booking Hotel",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil officiis rerum, hic facere omnis assumenda soluta repellat expedita enim fugit. Aliquam assumenda praesentium quod veritatis?",
};

function AboutPage() {
  return (
    <>
      <SubHeroSection title="About" subTitle="Lorem ipsum dolor sit amet." />
      <WhoWeAreSection />
    </>
  );
}

export default AboutPage;
