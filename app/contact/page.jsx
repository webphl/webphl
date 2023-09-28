import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Page Contact"
        description="Si vous avez des questions, contactez-nous. Nous vous apporterons une répose rapidement."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
