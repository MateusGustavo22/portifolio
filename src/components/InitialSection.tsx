import Button from "./Button";

export default function InitialSection() {
  return (
    <div
      id="home"
      className="w-full h-screen display1:h-[700px] bg-[url('/assets/background1.jpg')] bg-cover bg-center"
    >
      <div className="w-full h-full pl-4 pr-4 bg-[rgb(22,30,44,0.84)] ">
        <div className="max-w-[1600px] h-full m-auto flex items-center justify-center">
          <div className="w-max h-max flex flex-col space-y-10 p-1">
            <div className="w-full items-center flex flex-col space-y-4">
              <h1 className="text-center text-7xl display1:text-4xl tracking-widest font-[900] font-sans text-transparent bg-gradient-to-r from-[#004CFF] to-[#4AD6C5] bg-clip-text">
                Mateus Gustavo
              </h1>
              <h3 className="text-center text-xl display1:text-lg text-white font-sans ">
                FRONTEND DEVELOPER 👨🏻‍💻
              </h3>
              <div className="max-w-[590px] h-max">
                <p className="text-center w-full  break-words text-lg display1:text-base font-sans text-white">
                  Eu desenvolvo interfaces de alta qualidade, que são
                  responsivas e possuem a performance necessária para
                  proporcionar uma excelente experiência ao usuário.{" "}
                </p>
              </div>
            </div>
            <div className="max-w-[500px] display1:flex-wrap display1:space-x-0 display1:space-y-4 w-full space-x-4 pt-4 m-auto flex flex-row">
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
    </div>
  );
}
