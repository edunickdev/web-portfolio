import { statics } from "../../../config/images";
import { Image } from "@nextui-org/react";

const HeaderProfileComponent = ({ refs }: { refs: Record<string, React.RefObject<HTMLDivElement>> }) => {

  return (
    <div className="flex md:grid md:grid-cols-12 h-full p-10 text-lightblue">
      <div className="col-span-1"></div>
      <div className="col-span-6">
        <section className="flex" ref={refs.about}>
          <Image src={statics.fotoPerfil} className="w-24 h-32 mt-4" />
          <div className="w-auto h-32 mt-3 ml-5">
            <h2 className="font-bold text-lg text-midblue">
              INGENIERO DESARROLLADOR DE SOFTWARE
            </h2>
            <h2 className="font-bold text-lg text-midblue">
              EDUARD NICOLÁS SARMIENTO HERRERA
            </h2>
            <h3 className="font-semibold text-lg text-midblue">
              Microsoft Azure arquitecto certificado
            </h3>
            <section className="flex flex-col">
              <span className="text-lg">Ver mi Github</span>
              <span className="text-lg">Ver mi LinkedIn</span>
            </section>
          </div>
        </section>
        <section className="flex flex-col pr-14 justify-between items-start">
          <h2 className="mt-10 md:mt-20 lg:mt-32 font-semibold text-3xl">
            Una breve historia sobre mí y como llegué al mundo IT
          </h2>
          <span className="mt-10 pr-10 text-lg">
            Con mas de 10 años de experiencia laboral, 2 de ellos en el sector IT
            directamente, la automatización de procesos en mi paso por el sector
            financiero hicieron que quisiera profesionalizarme y prepararme para
            este mundo IT que me fascina y me regala a diario un universo de
            nuevos conocimientos y aprendizajes.
          </span>
        </section>
      </div>
      <section className="col-span-4 flex justify-center items-center -mt-32">
        <div className="w-64 h-64">
          <Image src={statics.iphone} className="relative top-[4.1rem] -right-52" />
          <Image src={statics.desktop} className="relative top-5 -left-14" />
          <Image src={statics.icon2} className="w-52 h-52 self-center justify-self-center" />
          <Image src={statics.cloud} className="bottom-5 -left-14" />
          <Image src={statics.web} className="bottom-[4.2rem] -right-[13.1rem]" />
        </div>
      </section>
      <div className="col-span-1"></div>
    </div>
  );
};

export default HeaderProfileComponent;
