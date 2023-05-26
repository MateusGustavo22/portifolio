import Image from "next/image";
import Tag from "./Tag";
import Button from "./Button";

interface Props {
  image: string;
  name: string;
  description: string;
  github: string;
  link?: string;
  tags: string[];
}

export default function ProjectCard({
  image,
  description,
  link,
  name,
  tags,
  github
}: Props) {

  return (
    <div className=" max-w-[414px] min-h-[590px] w-full m-4 display1:ml-0 display1:mr-0 rounded-lg p-[2px]  bg-gradient-to-r from-color1 to-color2 ">
      <div className="w-full h-full pt-4 pl-4 pr-4 display1:pl-3 display1:pr-3 pb-4 space-y-[40px] bg-color4 rounded-md ">
        <div className="w-full h-full space-y-6 flex flex-col justify-between">
          <div className="w-full h-max ">
            <Image
              src={`${image}`}
              width={1080}
              height={720}
              alt="Foto do projeto"
            />
            <div className="w-full h-max pr-8 pt-4 space-y-4 pb-4">
              <span className=" text-white font-sans text-3xl font-medium">
                {name}
              </span>
              <p className="text-[#D7D1D1] font-sans text-base">
                {description}
              </p>
            </div>
          </div>

          <div className="w-full h-max space-y-4">
            <div className="max-w-[370px] h-max flex flex-wrap">
              {tags.map(item => (
                <Tag key={item} text={item} />
              ))}
            </div>
            <div className="w-full h-max flex space-x-2">
              <Button text="GITHUB" type="github" link={github} />
              {link ? <Button text="ACESSAR" type="acessar" link={link} /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
