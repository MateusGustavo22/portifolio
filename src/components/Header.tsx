'use client';
import MenuMobile from './MenuMobile';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineArrowUp } from 'react-icons/ai';

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
      } else if (menuButton.current && menuButton.current.contains(event.target as Node)) {
        showMenu === -300 ? setShowMenu(0) : setShowMenu(-300);
      } else {
        setShowMenu(-300);
      }
    }

    if (showMenu === 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
      document.body.removeEventListener('click', handleClickOutside);
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

    document.addEventListener('scroll', scrollToTop);

    return () => {
      document.removeEventListener('scroll', scrollToTop);
    };
  }, [scrolled]);

  return (
    <div className="absolute h-max w-full pt-4 display1:pt-0">
      <div className="absolute z-40 h-[80px] w-full pl-8 pr-8 display1:pl-4 display1:pr-4">
        <div className="m-auto flex h-full w-full max-w-[1700px] items-center justify-between">
          <div className="flex h-max w-max items-center">
            <div className="mr-4 h-[50px] w-[50px] -rotate-6 rounded-full bg-[url('/assets/avatar.png')] bg-cover bg-top "></div>
            <span className="font-sans  text-lg leading-none text-white">Mateus</span>
          </div>
          <div className="flex h-full w-max items-center space-x-10 display1:hidden">
            <a
              href="/curriculo01.pdf"
              download
              className="group relative flex h-full cursor-pointer items-center border-transparent font-sans text-lg text-white"
            >
              Currículo
              <div className="absolute bottom-0 h-[2px] w-0 bg-color2 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="group group relative flex h-full cursor-pointer items-center border-transparent font-sans text-lg text-white"
            >
              Projetos
              <div className="absolute bottom-0 h-[2px] w-0 bg-color2 transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="group relative flex h-full cursor-pointer items-center border-transparent font-sans text-lg text-white"
            >
              Sobre
              <div className="absolute bottom-0 h-[2px] w-0 bg-color2 transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="group relative flex h-full cursor-pointer items-center border-transparent font-sans text-lg text-white"
            >
              Contato
              <div className="absolute bottom-0 h-[2px] w-0 bg-color2 transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </div>
          <button
            ref={menuButton}
            className="group hidden h-[20px] w-[26px] cursor-pointer flex-col justify-between display1:flex"
          >
            <div className="w-full border-[1px] border-white group-hover:border-color2"></div>
            <div className="w-full border-[1px] border-white group-hover:border-color2"></div>
            <div className="w-full border-[1px] border-white group-hover:border-color2"></div>
          </button>
        </div>
      </div>
      <MenuMobile menuRef={menuRef} right={showMenu} setShowMenu={setShowMenu} />
      <Link
        to="home"
        smooth={true}
        duration={500}
        className={`group z-50 flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full hover:bg-color2 ${
          scrolled ? 'fixed' : 'hidden'
        } bottom-0 right-0 mb-4 mr-4 bg-[#ffffff94]`}
      >
        <AiOutlineArrowUp size={26} className="text-black group-hover:text-white" />
      </Link>
    </div>
  );
}
