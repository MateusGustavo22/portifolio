import BackToTopButton from "@/components/BackToTopButton";
import Button from "@/components/Button";
import ConfirmCard from "@/components/ConfirmCard";
import MobileMenu from "@/components/MobileMenu";
import ProjectCard from "@/components/ProjectCard";
import SubmitButton from "@/components/SubmitButton";
import Tag from "@/components/Tag";
import TecnologyCard from "@/components/TecnologyCard";

export default function Teste() {
  return (
    <div className="flex flex-col gap-2">
      <ProjectCard
        name="Megaflix"
        description="O Megaflix é um projeto de front-end para um serviço de streaming de filmes e séries, com categorias, scroll horizontal e busca utilizando a API do TMDB."
        image="/projects/image01.png"
        tags={['React', 'Typescript', 'Nextjs', 'Tailwind']}
        github="https://github.com/MateusGustavo22/megaflix"
      />

      <Button text="LINKEDIN" type="linkedin" link="https://www.linkedin.com/in/matteus-gustavo/" />

      <BackToTopButton scrolled={true} />

      <MobileMenu active={300} closeMobileMenu={() => { }} />

      <Tag text="Javascript" />

      <TecnologyCard icon="/skills-icons/typescript.svg" name="typescript" />

      <SubmitButton submitStatus="LOADING" />

      <ConfirmCard submitStatus="OK" setSubmitStatus={() => {}} />
    </div>
  )
}