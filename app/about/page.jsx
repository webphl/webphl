import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Page de Présentation WebPhL"
        description="WEBPHL SAS est une Entreprise de Services numériques (ESN) destiné à des PME-TPE-ETI et Organismes publics pour une transformation Numérique responsable et écologique en incluant des solutions de Cybersécurité et de Souveraineté Numérique en France et en Europe apportant à ses clients, des solutions évolutives et modulaires."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
