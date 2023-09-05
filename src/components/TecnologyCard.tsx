interface Props {
  icon: string
  name: string
}

export default function TecnologyCard({ icon, name }: Props) {
  return (
    <div className="flex h-[140px] w-[140px] flex-col items-center justify-center gap-3 rounded-md border border-gray-600 bg-color4">
      <div
        style={{ backgroundImage: `url(${icon})` }}
        className={`h-[50px] w-[50px] bg-cover bg-center`}
      ></div>
      <span className="font-nunito text-lg text-gray-300">{name}</span>
    </div>
  )
}
