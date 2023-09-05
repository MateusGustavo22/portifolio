import { AiOutlineArrowUp } from 'react-icons/ai'
import { Link } from 'react-scroll'

interface Props {
  scrolled: boolean
}

export default function BackToTopButton({ scrolled }: Props) {
  return (
    <Link
      to="home"
      smooth={true}
      duration={500}
      className={`group z-50 flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full hover:bg-color2 ${
        scrolled ? 'fixed' : 'invisible'
      } bottom-0 right-0 mb-4 mr-4 bg-[#ffffff94]`}
    >
      <AiOutlineArrowUp
        size={26}
        className="text-black group-hover:text-white"
      />
    </Link>
  )
}
