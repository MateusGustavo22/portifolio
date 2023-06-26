import { useEffect } from 'react';

interface Props {
  contactStatus: string;
  setContactStatus: (e: string) => void;
}

export default function ConfirmCard({ contactStatus, setContactStatus }: Props) {
  useEffect(() => {
    if (contactStatus === 'OK' || contactStatus === 'ERROR') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [contactStatus]);

  function closeConfirmCard() {
    setContactStatus('');
  }

  return (
    <div
      className={`h-screen w-full  ${
        contactStatus === 'OK' ? 'flex' : 'hidden'
      } fixed top-0 z-50 flex items-center justify-center bg-[#ffffff1c] p-1 backdrop-blur-sm`}
    >
      <div className="flex w-full max-w-[340px] flex-col items-center space-y-6 rounded-2xl bg-color5 p-8  shadow-3xl">
        <div className="mb-4 h-20 w-20 bg-[url('/assets/ok.svg')] bg-cover bg-center bg-no-repeat "></div>
        <span className="text-center font-sans text-2xl font-semibold text-white">SUCESSO!</span>
        <span className="text-center font-sans text-slate-300">Muito obrigado por entrar em contato! </span>
        <button onClick={closeConfirmCard} className="w-full bg-[#20c997] p-2 font-bold text-white hover:bg-[#12a176]">
          OK
        </button>
      </div>
    </div>
  );
}
