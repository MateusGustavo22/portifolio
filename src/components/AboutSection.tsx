import TecnologyCard from "./TecnologyCard";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="w-full h-max flex pt-[96px] pb-[96px] display1:pt-[52px] display1:pb-[52px] bg-color5"
    >
      <div className="max-w-[1400px] w-full display2:flex-col-reverse display2:items-center pl-8 pr-8 display1:pl-6 display1:pr-6 h-max m-auto flex justify-between">
        <div className="max-w-[700px] display2:max-w-[800px] space-y-8 w-full h-max">
          <div className="w-full h-max flex flex-col space-y-8">
            <span className="text-white font-sans font-semibold text-4xl">
              Um pouco sobre mim
            </span>
            <p className="text-[#D7D1D1] font-sans leading-8 text-lg">
              Olá! Sou o Mateus Gustavo, nascido em 2004, e minha curiosidade
              pelo desenvolvimento de softwares me levou ao vasto mundo da
              programação. Escolhi me especializar no desenvolvimento de
              interfaces de usuário, também conhecido como front-end. Investi
              meu tempo em aprender tecnologias como JavaScript, CSS, ReactJS,
              entre outras. Com disciplina diária, estudei e apliquei meus
              conhecimentos em projetos pessoais.
            </p>
            <span className="text-white font-sans font-semibold text-4xl">
              Minhas habilidades
            </span>
            <div className="w-full flex  flex-wrap">
              <TecnologyCard icon="/skills-icons/html.svg" name="Html" />
              <TecnologyCard icon="/skills-icons/css.svg" name="Css" />
              <TecnologyCard
                icon="/skills-icons/javascript.svg"
                name="Javascript"
              />
              <TecnologyCard icon="/skills-icons/react.svg" name="react" />
              <TecnologyCard
                icon="/skills-icons/typescript.svg"
                name="typescript"
              />
              <TecnologyCard icon="/skills-icons/next.svg" name="Next" />
              <TecnologyCard
                icon="/skills-icons/tailwind.svg"
                name="Tailwind"
              />
              <TecnologyCard icon="/skills-icons/sass.svg" name="Sass" />
              <TecnologyCard icon="/skills-icons/git.svg" name="Git" />
              <TecnologyCard icon="/skills-icons/linux.svg" name="Linux" />
            </div>
            <span className="text-white font-sans font-semibold text-4xl">
              Meus diferenciais
            </span>
            <ul className="w-full pl-6 h-max flex flex-col space-y-4 list-disc">
              <li>
                Tenho uma forte dedicação e foco ao realizar minhas tarefas,
                sempre buscando executá-las com qualidade e eficiência.
              </li>
              <li>
                Sou uma pessoa comunicativa e valorizo a oportunidade de ouvir e
                aprender com pessoas mais experientes, sempre aberto a receber
                dicas e ensinamentos.
              </li>
              <li>
                Tenho um alto nível de organização, o que contribui para a minha
                produtividade e efetividade no trabalho.
              </li>
              <li>
                Possuo habilidade em aprender rapidamente novas tecnologias,
                como frameworks e bibliotecas, de forma autodidata.
              </li>
              <li>
                Em relação a código, busco sempre escrever um código limpo e de
                fácil compreensão.
              </li>
              <li>
                Busco sempre compreender claramente cada linha de código que
                escrevo, em vez de apenas fazê-lo funcionar.
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-[300px] w-full h-[400px] display2:mb-10 rounded-xl bg-[url('/assets/foto.png')] bg-cover bg-center "></div>
      </div>
    </div>
  );
}
