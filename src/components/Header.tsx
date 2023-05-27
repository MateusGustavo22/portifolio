"use client";
import MenuMobile from "./MenuMobile";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Header() {
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(-300);

  //Controla a exibição do menu mobile
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (menuRef.current && menuRef.current.contains(event.target as Node)) {
        return;
      } else if (
        menuButton.current &&
        menuButton.current.contains(event.target as Node)
      ) {
        showMenu === -300 ? setShowMenu(0) : setShowMenu(-300);
      } else {
        setShowMenu(-300);
      }
    }

    if (showMenu === 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  //Verfica se o usuário já roulou a tela para exibir o botão de voltar ao topo
  useEffect(() => {
    function scrollToTop() {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    document.addEventListener("scroll", scrollToTop);

    return () => {
      document.removeEventListener("scroll", scrollToTop);
    };
  }, [scrolled]);

  return (
    <div className="w-full h-max pt-4 display1:pt-0 absolute">
      <div className="w-full h-[80px] z-40 absolute pl-8 pr-8 display1:pl-4 display1:pr-4">
        <div className="max-w-[1700px] w-full h-full flex justify-between items-center m-auto">
          <div className="w-max h-max flex items-center">
            <div className="w-[50px] h-[50px] rounded-full bg-[url('/assets/avatar.png')] mr-4 -rotate-6 bg-top bg-cover "></div>
            <span className="text-white  font-sans leading-none text-lg">
              Mateus
            </span>
          </div>
          <div className="w-max h-full flex items-center display1:hidden space-x-10">
            <a href="/curriculo01.pdf" download className="group cursor-pointer text-white h-full relative flex items-center border-transparent text-lg font-sans">
              Currículo
              <div className="w-0 h-[2px] group-hover:w-full transition-all duration-300 absolute bottom-0 bg-color2"></div>
            </a>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="group group cursor-pointer text-white h-full relative flex items-center border-transparent text-lg font-sans"
            >
              Projetos
              <div className="w-0 h-[2px] group-hover:w-full transition-all duration-300 absolute bottom-0 bg-color2"></div>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="group cursor-pointer text-white h-full relative flex items-center border-transparent text-lg font-sans"
            >
              Sobre
              <div className="w-0 h-[2px] group-hover:w-full transition-all duration-300 absolute bottom-0 bg-color2"></div>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="group cursor-pointer text-white h-full relative flex items-center border-transparent text-lg font-sans"
            >
              Contato
              <div className="w-0 h-[2px] group-hover:w-full transition-all duration-300 absolute bottom-0 bg-color2"></div>
            </Link>
          </div>
          <button
            ref={menuButton}
            className="group w-[26px] h-[20px] cursor-pointer hidden display1:flex flex-col justify-between"
          >
            <div className="w-full border-[1px] border-white group-hover:border-color2"></div>
            <div className="w-full border-[1px] border-white group-hover:border-color2"></div>
            <div className="w-full border-[1px] border-white group-hover:border-color2"></div>
          </button>
        </div>
      </div>
      <MenuMobile
        menuRef={menuRef}
        right={showMenu}
        setShowMenu={setShowMenu}
      />
      <Link
        to="home"
        smooth={true}
        duration={500}
        className={`w-[46px] h-[46px] cursor-pointer z-50 group hover:bg-color2 flex items-center justify-center rounded-full ${
          scrolled ? "fixed" : "hidden"
        } right-0 mb-4 mr-4 bottom-0 bg-[#ffffff94]`}
      >
        <AiOutlineArrowUp
          size={26}
          className="text-black group-hover:text-white"
        />
      </Link>
    </div>
  );
}
