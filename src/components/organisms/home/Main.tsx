import CardProduct from "@/components/molecules/CardProduct";

function MainSection() {
  return (
    <section className="mt-16 max-w-7xl py-6 pb-20 px-4 mx-auto">
      <h2 className="text-center text-4xl font-bold uppercase">Room & Rates</h2>
      <p className="mb-8 mt-3 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, pariatur.</p>
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <CardProduct key={index} />
        ))}
      </div>
    </section>
  );
}

export default MainSection;
