import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import InitialSection from "@/components/InitialSection";
import ProjectSections from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <Header />
      <InitialSection />
      <ProjectSections />
      <AboutSection />
      <ContactSection />
    </>
  );
}
