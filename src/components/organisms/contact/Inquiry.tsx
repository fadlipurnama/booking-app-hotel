import ContactForm from "@/components/organisms/contact/ContactForm";
import { ContactItem } from "@/components/molecules/ContactItem";
import { CONTACT_INFO } from "@/constants/contact";

function InquirySection() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-8">
      <article>
        <span className="block text-lg text-subtle-text mb-3 uppercase tracking-wider">
          Contact Us
        </span>
        <h2 className="text-5xl font-semibold text-solid-text mb-4">
          Get In Touch Today
        </h2>
        <p className="text-soft-text py-5 leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          assumenda consequatur, ea consectetur saepe veritatis.
        </p>
        <ul className="space-y-8 pt-8">
          {CONTACT_INFO.map((info) => (
            <ContactItem key={info.id} {...info} />
          ))}
        </ul>
      </article>

      <ContactForm />
    </section>
  );
}

export default InquirySection;
