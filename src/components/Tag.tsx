interface Props {
  text: string;
}

export default function Tag({ text }: Props) {
  return (
    <div className="mb-2 mr-2 h-max w-max rounded-[4px] bg-[#525864] pb-1 pl-2 pr-2 pt-1">
      <span className="font-sans text-sm font-semibold text-white">{text}</span>
    </div>
  );
}
