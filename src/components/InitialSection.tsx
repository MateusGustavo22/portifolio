import Button from './Button';

export default function InitialSection() {
  return (
    <div
      id="home"
      className="h-screen w-full bg-[url('/assets/background1.jpg')] bg-cover bg-center display1:h-[700px]"
    >
      <div className="h-full w-full bg-[rgb(22,30,44,0.84)] pl-4 pr-4 ">
        <div className="m-auto flex h-full max-w-[1600px] items-center justify-center">
          <div className="flex h-max w-max flex-col space-y-10 p-1">
            <div className="flex w-full flex-col items-center space-y-4">
              <h1 className="bg-gradient-to-r from-[#004CFF] to-[#4AD6C5] bg-clip-text text-center font-sans text-7xl font-[900] tracking-widest text-transparent display1:text-4xl">
                Mateus Gustavo
              </h1>
              <h3 className="text-center font-sans text-xl text-white display1:text-lg ">FRONTEND DEVELOPER 👨🏻‍💻</h3>
              <div className="h-max max-w-[590px]">
                <p className="w-full break-words  text-center font-sans text-lg text-white display1:text-base">
                  Eu desenvolvo interfaces de alta qualidade que são bonitas e responsivas para proporcionar uma ótima experiência ao usuário.
                </p>
              </div>
            </div>
            <div className="m-auto flex w-full max-w-[500px] flex-row space-x-4 pt-4 display1:flex-wrap display1:space-x-0 display1:space-y-4">
              <Button text="LINKEDIN" type="linkedin" link="https://www.linkedin.com/in/matteus-gustavo/" />
              <Button text="GITHUB" type="github" link="https://github.com/MateusGustavo22" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
