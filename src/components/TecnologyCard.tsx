interface Props {
  icon: string;
  name: string;
}

export default function TecnologyCard({ icon, name }: Props) {
  return (
    <div className="mb-4 mr-4 flex h-[120px] w-[120px] flex-col items-center justify-center space-y-4 rounded-md bg-[#313E57] display1:h-[90px] display1:w-[90px] display1:space-y-2">
      <div
        style={{ backgroundImage: `url(${icon})` }}
        className={`h-[40px] w-[40px] bg-cover bg-center display1:h-[30px] display1:w-[30px]`}
      ></div>
      <span className="font-sans text-sm text-[#CBCBCB] display1:text-[0.75rem]">{name}</span>
    </div>
  );
}
