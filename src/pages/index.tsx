import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import InitialSection from "@/components/InitialSection";
import ProjectSections from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head >
        <title>Mateus Gustavo | Portifólio</title>
      </Head>
      <Header />
      <InitialSection />
      <ProjectSections />
      <AboutSection />
      <ContactSection />
    </>
  );
}
