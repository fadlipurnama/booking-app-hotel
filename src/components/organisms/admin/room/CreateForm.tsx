"use client";

import { Button } from "@/components/atoms/Button";
import { CheckboxField } from "@/components/atoms/CheckboxFIeld";
import { ImageUpload } from "@/components/molecules/ImageUpload";
import { InputField } from "@/components/atoms/InputField";
import { TextAreaField } from "@/components/atoms/TextAreaField";
import { Amenities } from "@/generated/prisma/client";
import { useActionState } from "react";
import { saveRoom } from "@/lib/actions/room-actions";
import { AlertMessage } from "@/components/atoms/AlertMessage";

const CreateForm = ({ amenities }: { amenities: Amenities[] }) => {
  const [state, formAction, isPending] = useActionState(saveRoom, null);
  return (
    <form action={formAction}>
      <div className="grid md:grid-cols-12 gap-5">
        <div className=" md:col-span-8 bg-white p-4">
          <div className="mb-4">
            <InputField
              type="text"
              name="name"
              placeholder="Room Name"
              defaultValue={state?.fields?.name}
              error={state?.error?.name}
              suppressHydrationWarning
            />
          </div>
          <div className="mb-4">
            <TextAreaField
              name="description"
              rows={8}
              placeholder="Description"
              defaultValue={state?.fields?.description}
              error={state?.error?.description}
              suppressHydrationWarning
            />
          </div>
          <div className="mb-4 grid md:grid-cols-3">
            {amenities.map((item) => (
              <CheckboxField
                key={item.id}
                label={item.name}
                name="amenities"
                defaultChecked={state?.fields?.amenities?.includes(item.id)}
                error={state?.error?.amenities}
                suppressHydrationWarning
              />
            ))}
          </div>
        </div>
        <div className=" md:col-span-4 bg-white p-4">
          <ImageUpload
            message={state?.error?.image?.[0]}
            name="image"
            aspect={16 / 9}
          />

          <div className="mb-4">
            <InputField
              type="text"
              name="capacity"
              placeholder="Capacity"
              defaultValue={state?.fields?.capacity}
              error={state?.error?.capacity}
              suppressHydrationWarning
            />
          </div>
          <div className="mb-4">
            <InputField
              type="text"
              name="price"
              placeholder="Price"
              defaultValue={state?.fields?.price}
              error={state?.error?.price}
              suppressHydrationWarning
            />
          </div>
          {/* {state?.error?.image && (
            <AlertMessage type="error" message={state.error.image[0]} />
          )} */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            isPending={isPending}
            suppressHydrationWarning
          >
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CreateForm;
