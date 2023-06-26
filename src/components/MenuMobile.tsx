import { BsXLg } from 'react-icons/bs';
import { Link } from 'react-scroll';
import React, { RefObject } from 'react';

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
      className="fixed z-50 flex h-screen w-[300px] flex-col items-end space-y-[64px] bg-[#0a0808b0] pb-[64px] pl-8 pr-8 pt-[32px] backdrop-blur-xl transition-all duration-500 "
    >
      <BsXLg onClick={() => setShowMenu(-300)} size={32} className="cursor-pointer text-white hover:text-color2" />
      <div className="m-auto flex  h-max w-max flex-col items-center space-y-[64px]">
        <a
          href="/curriculo01.pdf"
          download
          onClick={() => setShowMenu(-300)}
          className="w-max cursor-pointer font-sans text-xl text-white hover:text-color2"
        >
          Currículo
        </a>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          onClick={() => setShowMenu(-300)}
          className="w-max cursor-pointer text-center font-sans text-xl text-white hover:text-color2"
        >
          Projetos
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          onClick={() => setShowMenu(-300)}
          className="w-max cursor-pointer font-sans text-xl text-white hover:text-color2"
        >
          Sobre
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          onClick={() => setShowMenu(-300)}
          className="w-max cursor-pointer font-sans text-xl text-white hover:text-color2"
        >
          Contato
        </Link>
      </div>
    </div>
  );
}
