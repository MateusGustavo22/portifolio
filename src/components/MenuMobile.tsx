import { BsXLg } from "react-icons/bs";
import { Link } from "react-scroll";
import React, { RefObject } from "react";

interface Props {
  setShowMenu: (height: number) => void;
  right: number;
  menuRef: RefObject<HTMLDivElement>;
}

export default function MenuMobile({ setShowMenu, right, menuRef }: Props) {
  return (
    <div
      ref={menuRef}
      style={{ right: right }}
      className="w-[300px] h-screen fixed z-50 transition-all duration-500 items-end pt-[32px] pb-[64px] pl-8 pr-8 bg-[#0a0808b0] backdrop-blur-xl flex flex-col space-y-[64px] "
    >
      <BsXLg
        onClick={() => setShowMenu(-300)}
        size={32}
        className="text-white cursor-pointer hover:text-color2"
      />
      <div className="w-max h-max  m-auto items-center flex flex-col space-y-[64px]">
        <Link
          to="home"
          smooth={true}
          duration={500}
          onClick={() => setShowMenu(-300)}
          className="w-max text-white cursor-pointer hover:text-color2 font-sans text-xl"
        >
          Inicio
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          onClick={() => setShowMenu(-300)}
          className="w-max text-white cursor-pointer text-center hover:text-color2 font-sans text-xl"
        >
          Projetos
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          onClick={() => setShowMenu(-300)}
          className="w-max text-white cursor-pointer hover:text-color2 font-sans text-xl"
        >
          Sobre
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          onClick={() => setShowMenu(-300)}
          className="w-max text-white cursor-pointer hover:text-color2 font-sans text-xl"
        >
          Contato
        </Link>
      </div>
    </div>
  );
}
