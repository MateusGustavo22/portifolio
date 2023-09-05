import Button from './Button'

export default function InitialSection() {
  return (
    <div
      id="home"
      className="h-screen w-full bg-color5 display1:h-[700px] display3:h-[900px]"
    >
      <div className="m-auto flex h-full max-w-[1600px] items-center justify-center pl-4 pr-4">
        <div className="flex h-max w-max flex-col gap-10">
          <div className="flex w-full flex-col items-center gap-4">
            <h1 className="bg-gradient-to-r from-[#3e46ad] to-[#5ba8ff] bg-clip-text text-center font-title text-7xl tracking-widest text-transparent display1:text-6xl">
              Mateus Gustavo
            </h1>
            <h3 className="text-center font-nunito text-xl font-semibold text-gray-200 display1:text-lg ">
              FRONTEND DEVELOPER 👨🏻‍💻🔥
            </h3>
            <div className="h-max max-w-[590px]">
              <p className="w-full break-words text-center font-nunito text-xl text-gray-300 display1:text-lg">
                Eu desenvolvo interfaces de alta qualidade que são bonitas e
                responsivas para proporcionar uma ótima experiência ao usuário.
              </p>
            </div>
          </div>
          <div className="m-auto flex w-full max-w-[500px] flex-row justify-center gap-4 display1:flex-wrap">
            <Button
              text="LINKEDIN"
              type="linkedin"
              link="https://www.linkedin.com/in/matteus-gustavo/"
            />
            <Button
              text="GITHUB"
              type="github"
              link="https://github.com/MateusGustavo22"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
