'use client';
import { BsLinkedin } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import ConfirmCard from './ConfirmCard';
import ErrorCard from './ErrorCard';
import SubmitButton from './SubmitButton';

export default function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState('');

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

    setSubmitStatus('LOADING');

    emailjs
      .send('service_n8jocgl', 'template_z14w91k', templateParams, 'T5Jfo1MOuJ9yGkVki')
      .then((reponse) => {
        setSubmitStatus('OK');
      })
      .catch((error) => {
        setSubmitStatus('ERROR');
      });
  }

  return (
    <div id="contact" className="h-full flex flex-col gap-12 pl-4 pr-4 pt-16 pb-16 display1:pt-12 display1:pb-12 w-full bg-color3 justify-center ">
      <span className="block text-center font-sans text-4xl font-bold text-white display1:text-3xl">
        Vamos trabalhar juntos 🚀
      </span>
      <div className="flex flex-col gap-4 m-auto h-max w-full bg-color4 max-w-[500px] rounded-[15px] p-8 display1:pl-5 display1:pr-5">
        <span className="mb-4 font-sans text-2xl font-bold text-white">Entrar em contato</span>
        <form onSubmit={handleSubmit(submitContact)} className="flex w-full gap-4 flex-col ">
          <label htmlFor="name" className="w-full font-sans text-lg text-[#b8b7b7]">
            Nome
          </label>
          <input
            {...register('name')}
            className=" w-full border-b-2 border-[#b8b7b7] bg-transparent pb-2 font-sans text-base text-white outline-none placeholder:text-white focus:border-color2 "
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
            className="w-full border-b-2 border-[#b8b7b7] bg-transparent pb-2 font-sans text-base text-white outline-none placeholder:text-white focus:border-color2 "
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
            className="placeholder:text-md  h-[200px] w-full overflow-auto rounded-md border-2 border-b-2 border-white bg-transparent pl-3  pt-3 font-sans text-base text-white outline-none placeholder:text-white focus:border-color2"
            placeholder="Deixe sua mensagem"
          />
          <SubmitButton submitStatus={submitStatus} />
        </form>
        <a
          href="https://www.linkedin.com/in/matteus-gustavo/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex m-auto h-max w-max cursor-pointer items-center space-x-2"
        >
          <BsLinkedin size={20} className="text-[#b8b7b7] group-hover:text-color2" />
          <span className="font-base cursor-pointer font-sans text-base text-[#b8b7b7] group-hover:text-color2">
            Linkedin
          </span>
        </a>
      </div>
      <ConfirmCard setSubmitStatus={setSubmitStatus} submitStatus={submitStatus} />
      <ErrorCard setSubmitStatus={setSubmitStatus} submitStatus={submitStatus} />
    </div>
  );
}
