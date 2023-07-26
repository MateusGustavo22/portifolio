import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import InitialSection from '@/components/InitialSection';
import ProjectSections from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import BackToTopButton from '@/components/BackToTopButton';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function scrollToTop() {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    document.addEventListener('scroll', scrollToTop);

    return () => {
      document.removeEventListener('scroll', scrollToTop);
    };
  }, [scrolled]);

  return (
    <>
      <Head>
        <title>Mateus Gustavo | Portifólio</title>
      </Head>
      <Header />
      <InitialSection />
      <ProjectSections />
      <AboutSection />
      <ContactSection />
      <BackToTopButton scrolled={scrolled} />
    </>
  );
}
