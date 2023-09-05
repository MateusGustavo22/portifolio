import ProjectCard from './ProjectCard'

export default function ProjectSections() {
  return (
    <div
      id="projects"
      className="flex h-max w-full flex-col place-content-center gap-10 bg-color3 pb-16 pl-4 pr-4 pt-16 display1:gap-6 display1:pb-12 display1:pt-12"
    >
      <span className="text-center font-nunito text-4xl font-bold text-white display1:text-3xl">
        Meus projetos
      </span>
      <div className="m-auto flex h-max w-full max-w-[1400px] flex-wrap justify-center gap-12">
        <ProjectCard
          name="Type Weather"
          image="/projects/project01.png"
          tags={['Next', 'Typescript', 'Tailwind', 'API REST']}
          github="https://github.com/MateusGustavo22/type-weather"
          link="https://type-weather-zeta.vercel.app/"
        />
        <ProjectCard
          name="Capputeeno"
          image="/projects/project03.png"
          tags={['Next', 'Typescript', 'ContextAPI', 'GraphQL']}
          github="https://github.com/MateusGustavo22/frontend-challeng"
        />
        <ProjectCard
          name="Xmoedas"
          link="https://xmoedas.com.br/"
          image="/projects/project05.png"
          tags={['React', 'Next', 'Tailwind']}
          github="https://github.com/MateusGustavo22/conversor-moedas"
        />
        <ProjectCard
          name="Megaflix"
          image="/projects/project02.png"
          tags={['React', 'Typescript', 'Next', 'Tailwind']}
          github="https://github.com/MateusGustavo22/megaflix"
        />
      </div>
    </div>
  )
}
