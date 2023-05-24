import { BsLinkedin, BsGithub, BsBoxArrowInUpRight } from "react-icons/bs";

interface Props {
  text: string;
  type: string;
  github?: string;
  link?: string;
}

export default function Button({ text, type, link }: Props) {
  const renderIcon = () => {
    if (type === "linkedin") {
      return <BsLinkedin size={20} />;
    } else if (type === "github") {
      return <BsGithub size={20} />;
    } else if (type === "acessar") {
      return <BsBoxArrowInUpRight size={20} />;
    } else {
      return null;
    }
  };

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <button onClick={handleClick} className="group w-full  relative pt-4 pb-4 font-sans text-md font-bold bg-color1 text-white rounded-md">
      <div className="w-0 group-hover:w-full transition-all duration-300 h-full top-0 absolute rounded-md bg-color2"></div>
      <div className="w-max h-max m-auto relative z-20 flex items-center">
        {renderIcon()}
        <span className="text-white font-sans text-sm ml-2 mr-2">{text}</span>
      </div>
    </button>
  );
}
