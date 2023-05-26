import Loading from "./Loading";
import ProjectCard from "./ProjectCard";

export default function ProjectSections() {
  return (
    <div
      id="projects"
      className="w-full h-max flex flex-col pt-[64px] pb-[64px] space-y-[64px]  display1:space-y-[32px] pl-4 pr-4 place-content-center bg-color3"
    >
      <span className="text-white text-center display1:text-3xl font-bold font-sans text-4xl">
        Meus projetos
      </span>
      <div className="max-w-[1400px] flex flex-wrap justify-center h-max m-auto">
        <ProjectCard
          name="Megaflix"
          description="O Megaflix é um projeto de front-end para um serviço de streaming de filmes e séries, com categorias, scroll horizontal e busca utilizando a API do TMDB."
          image="/projects/image01.png"
          tags={["React", "Typescript", "Nextjs", "Tailwind"]}
          github="https://github.com/MateusGustavo22/megaflix"
        />
        <ProjectCard
          name="Previsão do tempo"
          link="https://previsao-do-tempo-flame.vercel.app/"
          description="Este projeto front-end consiste em um website de previsão do tempo, onde você pode visualizar informações climáticas atuais e dos próximos 5 dias de qualquer cidade no mundo."
          image="/projects/image02.png"
          tags={["React", "Typescript", "Nextjs", "Tailwind"]}
          github="https://github.com/MateusGustavo22/previsao-do-tempo"
        />
        <ProjectCard
          name="Xmoedas"
          link="https://xmoedas.com.br/"
          description="O xmoedas.com.br permiti que você fique atualizado da cotação atual do dólar, euro, libra e ontre outras moedas. Também é possível realizar a converção para o real brasileiro."
          image="/projects/image03.png"
          tags={["React", "Nextjs", "Sass"]}
          github="https://github.com/MateusGustavo22/conversor-moedas"
        />
        <ProjectCard
          name="Starlink clone"
          link="https://starlink-clone.vercel.app/"
          description="Clone da página do starlink 100% responsiva com menu lateral utiliziando React e Tailwind. "
          image="/projects/image04.png"
          tags={["Html","React", "Tailwind"]}
          github="https://github.com/MateusGustavo22/starlink-clone"
        />
      </div>
    </div>
  );
}
