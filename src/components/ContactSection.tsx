"use client";
import Image from "next/image";
import { BsLinkedin, BsBoxArrowInUpRight, BsSend } from "react-icons/bs";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import ConfirmCard from "./ConfirmCard";
import ErrorCard from "./ErrorCard";
import Loading from "./Loading";

export default function ContactSection() {
  const [contactStatus, setContactStatus] = useState("");

  const contectFormSchema = z.object({
    name: z
      .string()
      .nonempty("Insira seu nome")
      .transform(name => {
        return name
          .trim()
          .split(" ")
          .map(word => {
            return word[0].toLocaleUpperCase().concat(word.substring(1));
          })
          .join(" ");
      }),
    email: z
      .string()
      .nonempty("Insira seu e-mail")
      .email("Esse e-mail não é válido")
      .toLowerCase(),
    message: z.string().nonempty("Preencha o campo de mensagem")
  });

  type contactFormData = z.infer<typeof contectFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<contactFormData>({
    resolver: zodResolver(contectFormSchema)
  });

  function submitContact(data: any) {
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email
    };

    setContactStatus("LOADING");

    emailjs
      .send(
        "service_n8jocgl",
        "template_z14w91k",
        templateParams,
        "T5Jfo1MOuJ9yGkVki"
      )
      .then(reponse => {
        setContactStatus("OK");
      })
      .catch(error => {
        setContactStatus("ERROR");
      });
  }

  return (
    <div
      id="contact"
      className="w-full h-max bg-[url('/assets/background2.jpg')] bg-cover bg-center"
    >
      <div className="w-full h-full pl-4 pr-4 pt-[96px] pb-[96px] display1:pt-[52px] display1:pb-[52px] display1:space-y-[32px] justify-center space-y-[64px] bg-[rgba(22,30,44,0.77)]">
        <span className="text-white block text-4xl display1:text-2xl text-center font-sans font-bold">
          Vamos trabalhar juntos 🚀
        </span>
        <div className="max-w-[500px] p-8 backdrop-blur-xl  pace-y-[40px] rounded-[15px] w-full h-max m-auto grid border-2 border-white">
          <span className="text-white text-2xl font-sans mb-4 font-bold">
            Entrar em contato
          </span>
          <div className="w-full h-max grid justify-items-center space-y-6">
            <form
              onSubmit={handleSubmit(submitContact)}
              className="w-full flex flex-col space-y-4"
            >
              <label
                htmlFor="name"
                className="w-full text-[#b8b7b7] text-lg font-sans"
              >
                Nome
              </label>
              <input
                {...register("name")}
                className="w-full mt-4 pb-2 text-base outline-none focus:border-color2 text-white placeholder:text-white font-sans bg-transparent border-b-2 border-[#b8b7b7] "
                type="text"
                placeholder="Seu nome"
                autoComplete="off"
              />
              {errors.email && (
                <span className="text-sm font-sans text-red-500">
                  {errors.name?.message}
                </span>
              )}
              <label
                htmlFor="email"
                className="w-full relative text-[#b8b7b7] text-lg font-sans"
              >
                E-mail
              </label>
              <input
                {...register("email")}
                className="w-full mt-4 pb-2 text-base outline-none focus:border-color2 text-white placeholder:text-white font-sans bg-transparent border-b-2 border-[#b8b7b7] "
                type="text"
                placeholder="Insira seu e-mail para contato"
                autoComplete="off"
              />
              {errors.email && (
                <span className="text-sm font-sans text-red-500">
                  {errors.email.message}
                </span>
              )}
              <label
                htmlFor="message"
                className="w-full text-[#b8b7b7] text-lg font-sans"
              >
                Mesagem
              </label>
              {errors.email && (
                <span className="text-sm font-sans text-red-500">
                  {errors.message?.message}
                </span>
              )}
              <textarea
                id="text-area"
                {...register("message")}
                className="w-full h-[200px] text-base mt-4 border-2 overflow-auto rounded-md outline-none focus:border-color2 pt-3 pl-3  font-sans text-white placeholder:text-white placeholder:text-md bg-transparent border-b-2 border-white"
                placeholder="Deixe sua mensagem"
              />
              <button
                type="submit"
                className="group w-full  relative pt-4 pb-4 font-sans text-md font-bold bg-color1 text-white rounded-md"
              >
                <div className="w-0 group-hover:w-full transition-all duration-300 h-full top-0 absolute rounded-md bg-color2"></div>
                <div className="w-max h-max m-auto flex-row-reverse relative z-20 flex items-center">
                  {contactStatus === "LOADING" ? null : <BsSend size={18} />}
                  <span className="text-white font-sans text-sm ml-2 mr-2">
                    {contactStatus === "LOADING" ? <Loading /> : "ENVIAR MENSAGEM"}
                  </span>
                </div>
              </button>
            </form>
            <a
              href="https://www.linkedin.com/in/matteus-gustavo/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-max h-max cursor-pointer flex space-x-2 items-center"
            >
              <BsLinkedin
                size={20}
                className="text-[#b8b7b7] group-hover:text-color2"
              />
              <span className="text-[#b8b7b7] group-hover:text-color2 cursor-pointer text-base font-sans font-base">
                Linkedin
              </span>
            </a>
          </div>
        </div>
      </div>
      <ConfirmCard
        setContactStatus={setContactStatus}
        contactStatus={contactStatus}
      />
      <ErrorCard
        setContactStatus={setContactStatus}
        contactStatus={contactStatus}
      />
    </div>
  );
}
