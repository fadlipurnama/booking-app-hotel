// src/components/molecules/ContactForm.tsx
import { Button } from "../atoms/Button";
import { InputField } from "../atoms/InputField";
import { TextAreaField } from "../atoms/TextAreaField";

function ContactForm() {
  return (
    <div className="bg-primary-bg p-8 rounded-sm shadow-sm">
      <form action="">
        <div className="grid md:grid-cols-2 gap-7 mt-6">
          <InputField
            name="name"
            placeholder="Name*"
            required
            error="" // Nanti bisa diisi pesan error dari state
          />

          <InputField
            type="email"
            name="email"
            placeholder="johndoe@example.com*"
            required
            error=""
          />

          <div className="md:col-span-2">
            <InputField name="subject" placeholder="Subject*" required />
          </div>

          <div className="md:col-span-2">
            <TextAreaField
              name="message"
              placeholder="Your Message*"
              rows={5}
              required
              error=""
            />
          </div>
        </div>

        <div className="mt-8">
          <Button
            variant="primary"
            size="xl"
            className="font-semibold w-full md:w-auto"
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
