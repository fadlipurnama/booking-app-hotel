import Image from "next/image";

const SubHeroSection = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <section className="relative h-60 text-white overflow-hidden">
      <div className="absolute inset-0 after:absolute after:inset-0 after:bg-black after:opacity-50">
        <Image
          src={"/assets/hero.jpg"}
          alt="Sub Hero Image"
          fill
          className="object-cover object-center size-full"
        />
      </div>
      <div className="relative flex flex-col justify-center items-center h-60 text-center pt-14">
        <h1 className="text-5xl font-bold leading-tight capitalize">{title}</h1>
        <p className="text-xl text-soft-text">{subTitle}</p>
      </div>
    </section>
  );
};

export default SubHeroSection;
