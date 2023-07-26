import ProjectCard from './ProjectCard';

export default function ProjectSections() {
  return (
    <div
      id="projects"
      className="flex h-max w-full flex-col place-content-center gap-10 bg-color3 pb-16 pl-4 pr-4 pt-16 display1:gap-6 display1:pt-12 display1:pb-12"
    >
      <span className="text-center font-sans text-4xl font-bold text-white display1:text-3xl">Meus projetos</span>
      <div className="m-auto flex h-max max-w-[1400px] flex-wrap justify-center">
        <ProjectCard
          name="Capputeeno"
          description="
          O projeto é um desafio para uma vaga de front-end na Rocketseat, que tem como objetivo a criação de uma mini loja virtual com vários recursos legais."
          image="/projects/image05.png"
          tags={['Next', 'Typescript', 'ContextAPI', 'GraphQL']}
          github="https://github.com/MateusGustavo22/frontend-challeng"
        />
        <ProjectCard
          name="Xmoedas"
          link="https://xmoedas.com.br/"
          description="O xmoedas.com.br permiti que você fique atualizado da cotação atual do dólar, euro, libra e ontre outras moedas. Também é possível realizar a converção para o real brasileiro."
          image="/projects/image03.png"
          tags={['React', 'Next', 'Tailwind']}
          github="https://github.com/MateusGustavo22/conversor-moedas"
        />
        <ProjectCard
          name="Megaflix"
          description="O Megaflix é um projeto de front-end para um serviço de streaming de filmes e séries, com categorias, scroll horizontal e busca utilizando a API do TMDB."
          image="/projects/image01.png"
          tags={['React', 'Typescript', 'Next', 'Tailwind']}
          github="https://github.com/MateusGustavo22/megaflix"
        />
        <ProjectCard
          name="Weather App"
          link="https://previsao-do-tempo-flame.vercel.app/"
          description="Este projeto front-end consiste em um website de previsão do tempo, onde você pode visualizar informações climáticas atuais e dos próximos 5 dias de qualquer cidade no mundo."
          image="/projects/image02.png"
          tags={['React', 'Typescript', 'Next', 'Tailwind']}
          github="https://github.com/MateusGustavo22/previsao-do-tempo"
        />
        <ProjectCard
          name="Starlink clone"
          link="https://starlink-clone.vercel.app/"
          description="Clone da página do starlink 100% responsiva com menu lateral utiliziando React e Tailwind. "
          image="/projects/image04.png"
          tags={['Html', 'React', 'Tailwind']}
          github="https://github.com/MateusGustavo22/starlink-clone"
        />
      </div>
    </div>
  );
}
