import Image from 'next/image';
import Tag from './Tag';
import Button from './Button';

interface projectCardProps {
  image: string;
  name: string;
  description: string;
  github: string;
  link?: string;
  tags: string[];
}

export default function ProjectCard({ image, description, link, name, tags, github }: projectCardProps) {
  return (
    <div className=" m-4 h-max w-full max-w-[414px] rounded-lg bg-gradient-to-r from-color1 to-color2  p-[2px] display1:ml-0 display1:mr-0 ">
      <div className="flex min-h-[590px] w-full justify-between flex-col rounded-md bg-color4 pb-4 pl-4 pr-4 pt-4">
        <div className="h-max w-full">
          <Image src={`${image}`} width={1080} height={720} alt="Foto do projeto" />
          <div className="flex h-max w-full flex-col gap-3 pb-4 pr-8 pt-4"> 
            <span className=" font-sans text-3xl font-medium text-white">{name}</span>
            <p className="font-sans text-base text-[#D7D1D1]">{description}</p>
          </div>
        </div>

        <div className="flex h-max w-full flex-col gap-3 ">
          <div className="flex h-max max-w-[370px] flex-wrap">
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
  );
}