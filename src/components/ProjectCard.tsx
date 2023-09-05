import Image from 'next/image'
import Tag from './Tag'
import Button from './Button'

interface projectCardProps {
  image: string
  name: string
  github: string
  link?: string
  tags: string[]
}

export default function ProjectCard({
  image,
  link,
  name,
  tags,
  github,
}: projectCardProps) {
  return (
    <div className="flex h-max w-full max-w-[600px] flex-col justify-between gap-2 rounded-lg border-[1px] border-gray-600 bg-color4 p-4 mobile1:p-3">
      <Image
        width={1280}
        height={720}
        src={`${image}`}
        alt="Foto do projeto"
        className="aspect-[558/364]"
      />
      <div className="flex h-max w-full flex-col gap-6">
        <span className=" font-nunito text-3xl font-medium text-gray-300  mobile1:text-2xl">
          {name}
        </span>
        <div className="flex h-max w-full flex-col gap-4 ">
          <div className="flex h-max max-w-[370px] flex-wrap gap-2">
            {tags.map((item) => (
              <Tag key={item} text={item} />
            ))}
          </div>
          <div className="flex h-max w-full gap-2">
            <Button text="GITHUB" type="github" link={github} />
            {link ? <Button text="ACESSAR" type="acessar" link={link} /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}
