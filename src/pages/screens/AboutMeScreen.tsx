const AboutMeScreen = ({ refs }: { refs: Record<string, React.RefObject<HTMLDivElement>> }) => {

  return (
    <div className="grid grid-cols-12 h-[90vh] justify-center items-start" ref={refs.studies}>
      <div className="col-span-12 grid grid-cols-12">
        <h2 className="col-span-12 text-3xl md:text-4xl text-center text-darkblue font-bold py-14">
          Estudios y Certificaciones
        </h2>
        <section className="col-span-12 grid grid-cols-12 pt-1">
          <div className="col-span-5 flex flex-col gap-y-5 md:grid md:grid-cols-5">
            <div className="bg-darkblue h-36 col-span-5 rounded-tr-lg rounded-br-lg shadow-lg flex flex-col items-start justify-center pl-36 md:pl-[2.6rem] md:grid md:grid-cols-6 md:place-content-center">
              <div className="hidden md:block md:col-span-1"></div>
              <h2 className="col-span-5 text-2xl text-lightblue font-semibold">
                Ingeniería de desarrollo de Software
              </h2>
              <div className="hidden md:block md:col-span-1"></div>
              <h3 className="col-span-5 text-midblue font-semibold text-lg">
                6to Semestre
              </h3>
              <div className="hidden md:block md:col-span-1"></div>
              <span className="col-span-5 text-midblue font-semibold text-lg">
                Politécnico Grancolombiano
              </span>
              <div className="hidden md:block md:col-span-1"></div>
              <span className="col-span-5 text-midblue font-semibold text-lg">
                2025
              </span>
            </div>
            <div className="bg-darkblue h-36 col-span-5 rounded-tr-lg rounded-br-lg shadow-lg flex flex-col items-start justify-center pl-36 md:pl-[2.6rem] md:grid md:grid-cols-6 md:place-content-center">
              <div className="hidden md:block md:col-span-1"></div>
              <h2 className="col-span-5 text-2xl text-lightblue font-semibold">
                Diplomado en desarrollo web
              </h2>
              <div className="hidden md:block md:col-span-1"></div>
              <h3 className="col-span-5 text-midblue font-semibold text-lg">
                Graduado
              </h3>
              <div className="hidden md:block md:col-span-1"></div>
              <span className="col-span-5 text-midblue font-semibold text-lg">
                Universidad Industrial de Santander - UIS
              </span>
              <div className="hidden md:block md:col-span-1"></div>
              <span className="col-span-5 text-midblue font-semibold text-lg">
                2023
              </span>
            </div>
          </div>
          <div className="col-span-2 rounded-tr-lg rounded-br-lg"></div>
          <div className="col-span-5 flex flex-col gap-y-5">
            <div className="bg-midblue h-36 rounded-tl-lg rounded-bl-lg shadow-lg flex flex-col justify-center items-start pl-14">
            <div className="hidden md:block md:col-span-1"></div>
              <span className="text-darkblue text-xl">Microsoft Azure Administrator AZ-104</span>
              <span className="text-darkblue text-xl">Microsoft Azure Architect solutions AZ-305</span>
              <span className="text-darkblue text-xl">Microsoft Azure Data Engineer DP-203</span>
            </div>
            <div className="bg-midblue h-auto rounded-tl-lg rounded-bl-lg shadow-lg py-5">
              <h2 className="text-darkblue text-2xl pl-14 font-bold">Cursos Complementarios</h2>
              <div className="flex flex-col">
                <span className="text-darkblue text-lg pl-14">Curso teórico práctico de redes informáticas</span>
                <span className="text-darkblue text-lg pl-14">Curso teórico práctico de desarrollo móvil con flutter</span>
                <span className="text-darkblue text-lg pl-14">Curso de desarrollo web y APIs con FastAPI</span>
                <span className="text-darkblue text-lg pl-14">Curso de desarrollo web y APIs con Django</span>
                <span className="text-darkblue text-lg pl-14">Curso de desarrollo web moderno con Angular</span>
                <span className="text-darkblue text-lg pl-14">Curso de desarrollo web moderno con React</span>
                <span className="text-darkblue text-lg pl-14">Curso de fundamentos de AI y ML para la web</span>
                <span className="text-darkblue text-lg pl-14">Curso de fundamentos de diseño de interfaces UI/UX</span>
                <span className="text-darkblue text-lg pl-14">Curso de pensamiento lógico, diagramas y algoritmos</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMeScreen;
