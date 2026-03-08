import SubHeroSection from "@/components/organisms/SubHero";
import { Metadata } from "next";
import InquirySection from "@/components/organisms/contact/Inquiry";

export const metadata: Metadata = {
  title: "Contact",
};


function ContactPage() {
  return (
    <>
      <SubHeroSection
        title="Contact Us"
        subTitle="Lorem ipsum dolor sit amet."
      />

      {/* <section className="max-w-7xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-8">
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
            {CONTACT_INFO.map(({ id, label, value, icon: Icon, href }) => (
              <li key={id} className="flex items-start gap-5">
                <span className="flex-none bg-gray-100 p-3 shadow-sm rounded-sm">
                  <Icon className="size-7 text-solid-text" />
                </span>
                <address className="not-italic">
                  <h3 className="text-lg font-semibold mb-1">{label} :</h3>
                  <a
                    href={href}
                    className="text-soft-text hover:text-solid-text transition-colors"
                  >
                    {value}
                  </a>
                </address>
              </li>
            ))}
          </ul>
        </article>
    
        <ContactForm />
      </section> */}

      <InquirySection />
    </>
  );
}

export default ContactPage;
