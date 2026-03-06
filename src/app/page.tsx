import HeroSection from "@/components/organisms/home/Hero";
import MainSection from "@/components/organisms/home/Main";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Home Page</h1>
      <HeroSection />
      <MainSection />
    </>
  );
}
