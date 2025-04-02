import Header from "@/components/layout/Header";
import ContactFormSection from "@/components/medium/ContactFormSection";
import ContactBanner from "@/components/medium/ContactUsBanner";
import ContactForm from "@/components/medium/form/ContactForm";
import ContactUsNewsletter from "@/components/small/ContactUsNewsletter";

const ContactUsPage = () => {
  return (
    <>
      <Header />
      <ContactBanner />
      <ContactFormSection />
      <ContactUsNewsletter />
    </>
  );
};

export default ContactUsPage;
