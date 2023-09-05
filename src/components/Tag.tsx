interface Props {
  text: string
}

export default function Tag({ text }: Props) {
  return (
    <div className="h-max w-max rounded-[4px] bg-gray-600 p-2 pb-[4px] pt-[2px]">
      <span className="text-center font-nunito text-sm leading-none text-white mobile1:text-xs">
        {text}
      </span>
    </div>
  )
}
