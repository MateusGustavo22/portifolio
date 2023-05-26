import { useEffect } from "react";

interface Props {
  contactStatus: string;
  setContactStatus: (e: string) => void;
}

export default function ConfirmCard({ contactStatus, setContactStatus }: Props) {
  useEffect(() => {
    if (contactStatus === "OK" || contactStatus === "ERROR") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [contactStatus]);

  function closeConfirmCard() {
    setContactStatus("");
  }

  return (
    <div className={`w-full h-screen  ${contactStatus === "OK" ? "flex" : "hidden"} fixed top-0 flex items-center justify-center z-50 p-1 backdrop-blur-sm bg-[#ffffff1c]`}>
      <div className="max-w-[340px] flex space-y-6 rounded-2xl flex-col items-center w-full shadow-3xl p-8  bg-color5">
        <div className="w-20 h-20 mb-4 bg-[url('/assets/ok.svg')] bg-center bg-cover bg-no-repeat "></div>
        <span className="font-sans text-center font-semibold text-white text-2xl">SUCESSO!</span>
        <span className="font-sans text-center text-slate-300">Muito obrigado por entrar em contato! </span>
        <button onClick={closeConfirmCard} className="w-full p-2 bg-[#20c997] text-white font-bold hover:bg-[#12a176]">
          OK
        </button>
      </div>
    </div>
  );
}
