'use client'
import { useState } from 'react'
import { Link } from 'react-scroll'
import MobileMenu from './MobileMenu'
import MenuButton from './MenuButton'

export default function Header() {
  const [showMenu, setShowMenu] = useState(-300)

  function closeMobileMenu() {
    setShowMenu(-300)
  }

  return (
    <div className="absolute z-40 mt-4 h-[80px] w-full  pl-8 pr-8 display1:mt-2 display1:pl-4 display1:pr-4">
      <div className="m-auto  flex h-full w-full max-w-[1700px] items-center justify-between">
        <div className="flex h-max w-max items-center">
          <div className="mr-4 h-[50px] w-[50px] rounded-full bg-[url('/assets/avatar.png')] bg-cover bg-top "></div>
          <span className="font-sans text-lg leading-none text-white">Mateus</span>
        </div>
        <div className="flex h-full w-max items-center gap-10 display1:hidden">
          <a
            href={`${process.env.NEXT_PUBLIC_CURRICULO}`}
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
        <MenuButton onClick={() => setShowMenu(0)}></MenuButton>
        <MobileMenu active={showMenu} closeMobileMenu={closeMobileMenu} />
      </div>
    </div>
  )
}
