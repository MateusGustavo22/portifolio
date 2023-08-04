import TecnologyCard from './TecnologyCard'

export default function AboutSection() {
  return (
    <div id="about" className="flex h-max w-full bg-[#141925] pb-20 pt-20 display1:pb-16 display1:pt-16">
      <div className="m-auto flex  h-max w-full max-w-[1400px] justify-between pl-8 pr-8 display1:pl-6 display1:pr-6 display2:flex-col-reverse display2:items-center">
        <div className="h-max w-full max-w-[700px] display2:max-w-[800px]">
          <div className="flex h-max w-full flex-col gap-8">
            <span className="font-sans text-4xl font-semibold text-white">Sobre mim 👋</span>
            <p className="font-sans text-lg leading-8 text-[#D7D1D1]">
              Olá! Sou o Mateus Gustavo, nascido em 2004, e minha curiosidade pelo desenvolvimento de softwares me levou
              ao vasto mundo da programação. Escolhi me especializar no desenvolvimento de interfaces de usuário, também
              conhecido como front-end. Investi meu tempo em aprender tecnologias como JavaScript, CSS, ReactJS, entre
              outras. Com disciplina diária, estudei e apliquei meus conhecimentos em projetos pessoais.
            </p>
            <span className="font-sans text-4xl font-semibold text-white">Meu objetivo</span>
            <p className="font-sans text-lg leading-8 text-[#D7D1D1]" >
              Atualmente, estou em busca de uma oportunidade como desenvolvedor front-end para aplicar meus conhecimentos, ajudar a empresa/projeto a seguir evoluindo e trabalhar em equipe com outros desenvolvedores, designers, entre outros. Desejo crescer profissionalmente nessa área e contribuir para o sucesso do projeto.
            </p>
            <span className="font-sans text-4xl font-semibold text-white">Minhas habilidades</span>
            <div className="flex w-full flex-wrap gap-4 display1:justify-center">
              <TecnologyCard icon="/skills-icons/html.svg" name="Html" />
              <TecnologyCard icon="/skills-icons/css.svg" name="Css" />
              <TecnologyCard icon="/skills-icons/javascript.svg" name="Javascript" />
              <TecnologyCard icon="/skills-icons/react.svg" name="react" />
              <TecnologyCard icon="/skills-icons/typescript.svg" name="typescript" />
              <TecnologyCard icon="/skills-icons/next.svg" name="Next" />
              <TecnologyCard icon="/skills-icons/figma.svg" name="Figma" />
              <TecnologyCard icon="/skills-icons/tailwind.svg" name="Tailwind" />
              <TecnologyCard icon="/skills-icons/git.svg" name="Git" />
              <TecnologyCard icon="/skills-icons/github.svg" name="GitHub" />
              <TecnologyCard icon="/skills-icons/graphql.svg" name="GraphQL" />
              <TecnologyCard icon="/skills-icons/linux.svg" name="Linux" />
            </div>

          </div>
        </div>
        <div className="h-[400px] w-full max-w-[300px] rounded-xl bg-[url('/assets/foto.png')] bg-cover bg-center display2:mb-10 "></div>
      </div>
    </div>
  )
}
