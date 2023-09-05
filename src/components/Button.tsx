import { BsLinkedin, BsGithub, BsBoxArrowInUpRight } from 'react-icons/bs'

interface buttonProps {
  text: string
  type: string
  github?: string
  link?: string
}

export default function Button({ text, type, link }: buttonProps) {
  const renderIcon = () => {
    if (type === 'linkedin') {
      return <BsLinkedin size={20} />
    } else if (type === 'github') {
      return <BsGithub size={20} />
    } else if (type === 'acessar') {
      return <BsBoxArrowInUpRight size={20} />
    } else {
      return null
    }
  }

  const handleClick = () => {
    window.open(link, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="text-md group relative flex w-[242px] rounded-md bg-[#3e46ad] pb-4 pt-4 font-sans font-bold text-white display1:w-[340px] display1:pb-3 display1:pt-3"
    >
      <div className="absolute top-0 h-full w-0 rounded-md bg-color2 transition-all duration-200 group-hover:w-full" />
      <div className="relative z-20 m-auto flex h-max w-max items-center gap-2">
        {renderIcon()}
        <span className=" font-nunito text-sm text-white display1:text-xs">
          {text}
        </span>
      </div>
    </button>
  )
}
