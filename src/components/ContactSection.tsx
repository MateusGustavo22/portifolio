'use client';
import { BsLinkedin, BsBoxArrowInUpRight, BsSend } from 'react-icons/bs';
import {  useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import ConfirmCard from './ConfirmCard';
import ErrorCard from './ErrorCard';
import Loading from './Loading';

export default function ContactSection() {
  const [contactStatus, setContactStatus] = useState('');

  const contectFormSchema = z.object({
    name: z
      .string()
      .nonempty('Insira seu nome')
      .transform((name) => {
        return name
          .trim()
          .split(' ')
          .map((word) => {
            return word[0].toLocaleUpperCase().concat(word.substring(1));
          })
          .join(' ');
      }),
    email: z.string().nonempty('Insira seu e-mail').email('Esse e-mail não é válido').toLowerCase(),
    message: z.string().nonempty('Preencha o campo de mensagem'),
  });

  type contactFormData = z.infer<typeof contectFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<contactFormData>({
    resolver: zodResolver(contectFormSchema),
  });

  function submitContact(data: any) {
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email,
    };

    setContactStatus('LOADING');

    emailjs
      .send('service_n8jocgl', 'template_z14w91k', templateParams, 'T5Jfo1MOuJ9yGkVki')
      .then((reponse) => {
        setContactStatus('OK');
      })
      .catch((error) => {
        setContactStatus('ERROR');
      });
  }

  return (
    <div id="contact" className="h-max w-full bg-[url('/assets/background2.jpg')] bg-cover bg-center">
      <div className="h-full w-full justify-center space-y-[64px] bg-[rgba(22,30,44,0.77)] pb-[96px] pl-4 pr-4 pt-[96px] display1:space-y-[32px] display1:pb-[52px] display1:pt-[52px]">
        <span className="block text-center font-sans text-4xl font-bold text-white display1:text-2xl">
          Vamos trabalhar juntos 🚀
        </span>
        <div className="pace-y-[40px] m-auto grid  h-max w-full max-w-[500px] rounded-[15px] border-2 border-white p-8 backdrop-blur-xl">
          <span className="mb-4 font-sans text-2xl font-bold text-white">Entrar em contato</span>
          <div className="grid h-max w-full justify-items-center space-y-6">
            <form onSubmit={handleSubmit(submitContact)} className="flex w-full flex-col space-y-4">
              <label htmlFor="name" className="w-full font-sans text-lg text-[#b8b7b7]">
                Nome
              </label>
              <input
                {...register('name')}
                className="mt-4 w-full border-b-2 border-[#b8b7b7] bg-transparent pb-2 font-sans text-base text-white outline-none placeholder:text-white focus:border-color2 "
                type="text"
                placeholder="Seu nome"
                autoComplete="off"
              />
              {errors.email && <span className="font-sans text-sm text-red-500">{errors.name?.message}</span>}
              <label htmlFor="email" className="relative w-full font-sans text-lg text-[#b8b7b7]">
                E-mail
              </label>
              <input
                {...register('email')}
                className="mt-4 w-full border-b-2 border-[#b8b7b7] bg-transparent pb-2 font-sans text-base text-white outline-none placeholder:text-white focus:border-color2 "
                type="text"
                placeholder="Insira seu e-mail para contato"
                autoComplete="off"
              />
              {errors.email && <span className="font-sans text-sm text-red-500">{errors.email.message}</span>}
              <label htmlFor="message" className="w-full font-sans text-lg text-[#b8b7b7]">
                Mensagem
              </label>
              {errors.email && <span className="font-sans text-sm text-red-500">{errors.message?.message}</span>}
              <textarea
                id="text-area"
                {...register('message')}
                className="placeholder:text-md mt-4 h-[200px] w-full overflow-auto rounded-md border-2 border-b-2 border-white bg-transparent pl-3  pt-3 font-sans text-base text-white outline-none placeholder:text-white focus:border-color2"
                placeholder="Deixe sua mensagem"
              />
              <button
                type="submit"
                className="text-md group  relative w-full rounded-md bg-color1 pb-4 pt-4 font-sans font-bold text-white"
              >
                <div className="absolute top-0 h-full w-0 rounded-md bg-color2 transition-all duration-300 group-hover:w-full"></div>
                <div className="relative z-20 m-auto flex h-max w-max flex-row-reverse items-center">
                  {contactStatus === 'LOADING' ? null : <BsSend size={18} />}
                  <span className="ml-2 mr-2 font-sans text-sm text-white">
                    {contactStatus === 'LOADING' ? <Loading /> : 'ENVIAR MENSAGEM'}
                  </span>
                </div>
              </button>
            </form>
            <a
              href="https://www.linkedin.com/in/matteus-gustavo/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-max w-max cursor-pointer items-center space-x-2"
            >
              <BsLinkedin size={20} className="text-[#b8b7b7] group-hover:text-color2" />
              <span className="font-base cursor-pointer font-sans text-base text-[#b8b7b7] group-hover:text-color2">
                Linkedin
              </span>
            </a>
          </div>
        </div>
      </div>
      <ConfirmCard setContactStatus={setContactStatus} contactStatus={contactStatus} />
      <ErrorCard setContactStatus={setContactStatus} contactStatus={contactStatus} />
    </div>
  );
}
