interface Props {
  icon: string;
  name: string;
}

export default function TecnologyCard({ icon, name }: Props) {
  return (
    <div className="w-[120px] h-[120px] display1:w-[90px] display1:h-[90px] mr-4 mb-4 flex flex-col space-y-4 display1:space-y-2 justify-center items-center rounded-md bg-[#313E57]">
      <div
        style={{ backgroundImage: `url(${icon})` }}
        className={`w-[40px] h-[40px] display1:w-[30px] display1:h-[30px] bg-cover bg-center`}
      ></div>
      <span className="text-[#CBCBCB] display1:text-[0.75rem] text-sm font-sans">{name}</span>
    </div>
  );
}
