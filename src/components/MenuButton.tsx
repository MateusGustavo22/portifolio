import { ButtonHTMLAttributes } from 'react'

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function MenuButton({ ...props }: CustomButtonProps) {
  return (
    <button
      {...props}
      className="group hidden h-[20px] w-[26px] cursor-pointer flex-col justify-between display1:flex"
    >
      <div className="w-full border-[1px] border-white group-hover:border-color2"></div>
      <div className="w-full border-[1px] border-white group-hover:border-color2"></div>
      <div className="w-full border-[1px] border-white group-hover:border-color2"></div>
    </button>
  )
}
