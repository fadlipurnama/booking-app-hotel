import CreateForm from "./CreateForm";
import { getAmenities } from "@/lib/data";

async function CreateRoomSection() {
  const amenities = await getAmenities();
  if (!amenities) return null;

  return (
    <section className="max-w-7xl px-4 py-16 mt-10 mx-auto">
      <h1 className="text-3xl font-bold text-solid-text mb-4">
        Create New Room
      </h1>
      <CreateForm amenities={amenities} />
    </section>
  );
}

export default CreateRoomSection;
