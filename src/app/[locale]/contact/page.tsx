import PageTitle from "@/components/common/PageTitle";
import ContactForm from "./components/ContactForm";
import AboutStats from "./components/AboutStats";

const ContactPage = () => {
  return (
    <main className="section-container">
      <PageTitle translationNamespace="Pages.Contact" />

      <section className="grid grid-cols-1 xl:grid-cols-6 bg-white rounded-xl">
        <ContactForm containerStyles="xl:col-span-4 max-lg:border-b max-lg:border-b-app-white-95 lg:border-r lg:border-r-app-white-95" />
        <AboutStats containerStyles="xl:col-span-2" />
      </section>
    </main>
  );
};

export default ContactPage;
