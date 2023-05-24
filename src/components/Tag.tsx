interface Props {
  text: string
}

export default function Tag({text}:Props) {
  return (
    <div className="w-max h-max  pt-1 pb-1 pl-2 pr-2 rounded-[4px] mr-2 mb-2 bg-[#525864]">
      <span className="text-white font-semibold text-sm font-sans">
        {text}
      </span>
    </div>
  );
}
