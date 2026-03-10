"use client";
import { Button } from "../atoms/Button";
import { InputField } from "../atoms/InputField";
import { TextAreaField } from "../atoms/TextAreaField";
import { useActionState } from "react";
import { ContactMessage } from "@/lib/actions/contact";
import { AlertMessage } from "../atoms/AlertMessage";

function ContactForm() {
  const [state, formAction, isPending] = useActionState(ContactMessage, null);

  // console.log("state :", state?.error);
  return (
    <div className="bg-primary-bg p-8 rounded-sm shadow-sm">
      {state?.message && <AlertMessage message={state.message} />}
      <form action={formAction}>
        <div className="grid md:grid-cols-2 gap-7 mt-6">
          <InputField
            name="name"
            placeholder="Name*"
            error={state?.error?.name} // Nanti bisa diisi pesan error dari state
          />

          <InputField
            type="email"
            name="email"
            placeholder="johndoe@example.com*"
            error={state?.error?.email}
          />

          <div className="md:col-span-2">
            <InputField
              name="subject"
              placeholder="Subject*"
              error={state?.error?.subject}
            />
          </div>

          <div className="md:col-span-2">
            <TextAreaField
              name="message"
              placeholder="Your Message*"
              rows={5}
              error={state?.error?.message}
            />
          </div>
        </div>

        <div className="mt-8">
          <Button
            variant="primary"
            size="xl"
            className="font-semibold w-full"
            isPending={isPending}
          >
            {isPending ? "Loading..." : " Send Message"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
