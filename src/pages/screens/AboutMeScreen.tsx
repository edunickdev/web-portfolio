import { Image, Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { formalStudies } from "../../config/helpers/constants";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const AboutMeScreen = ({ refs }: { refs: Record<string, React.RefObject<HTMLDivElement>> }) => {
  const [listStudies, setListStudies] = useState(formalStudies);
  const [selectedFilter, setSelectedFilter] = useState("Formal");

  console.log("listStudies", listStudies);
  

  const handleStudies = (type: string) => {
    setSelectedFilter(type);
    setListStudies(formalStudies.filter((study) => study.type === type));
  }

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    handleStudies("Formal");
  }, []);

  return (
    <div className="grid grid-cols-12 h-auto py-10 justify-center items-start" ref={ref} >
      <div className="col-span-12 flex flex-col justify-center items-center md:grid md:grid-cols-12">
        <h2 className="col-span-12 text-2xl md:text-4xl text-center text-darkblue font-bold pt-8 pb-5" ref={refs.studies}>
          Estudios y Certificaciones
        </h2>
        {inView && <section className="col-span-12 flex flex-col md:grid md:grid-cols-12 pt-1 pr-2">
          <motion.nav 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full h-10 md:w-auto md:col-span-6 md:h-[10vh] bg-darkblue rounded-r-xl flex items-center justify-end gap-x-5 md:gap-x-10 pr-3 md:pr-10">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              onClick={() => handleStudies("Formal")}
              className="bg-transparent text-lightblue hover:text-midblue text-small md:text-xl duration-300 transition-all"
            >
              Formales
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              onClick={() => handleStudies("Microsoft")}
              className="bg-transparent text-lightblue hover:text-midblue text-small md:text-xl duration-300 transition-all"
            >
              Microsoft Azure
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              onClick={() => handleStudies("Complementarios")}
              className="bg-transparent text-lightblue hover:text-midblue text-small md:text-xl duration-300 transition-all"
            >
              Complementarios
            </motion.button>
          </motion.nav>
          <div className="col-span-6"></div>
          <div className="col-span-1"></div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="col-span-10 h-auto md:h-[58vh] flex flex-col md:grid md:grid-cols-10 transition-all duration-300">
            {selectedFilter === "Microsoft" ? <h2 className="col-span-10 text-center mt-5 md:mt-0 md:text-end text-darkblue text-sm md:text-medium font-semibold">Haz click en los escudos para ver los certificados</h2> : null}
            <div className="col-span-10 flex flex-wrap items-start justify-center gap-5 p-10">
              {selectedFilter === "Complementarios"
                ? listStudies.map((study, index) => (
                  <Tooltip content={study.title} offset={-1} showArrow className="text-darkblue text-medium">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex flex-col w-36 h-[8.2rem] justify-center items-center p-2 bg-lightblue rounded-md overflow-hidden shadow-2xl shadow-midblue"
                    >
                      <h2 className="text-center text-darkblue font-bold text-small overflow-clip line-clamp-3">
                        {study.title}
                      </h2>
                      <div className="flex flex-col py-2 justify-center items-center">
                        <Image loading="eager" src={study.image} className={`self-center ${study.institution === "Platzi" ? "w-20" : "w-[3.5rem]"}`} alt="" radius="none" />
                        <p className="text-center self-start text-darkblue font-semibold text-medium">
                          {study.description}
                        </p>
                      </div>
                    </motion.div>
                  </Tooltip>
                  ))
                : listStudies.map((study, index) => (
                    <motion.a
                      key={study.title}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex flex-col md:w-44 lg:w-52 justify-center items-start gap-y-2 md:gap-y-3"
                      href={study.url && study.url}
                      target="_blank"
                    >
                      <h2 className="text-center text-darkblue font-semibold text-medium md:text-xl">
                        {study.title}
                      </h2>
                      <p className="w-full text-center text-darkblue font-semibold text-medium md:text-lg">
                        {study.description}
                      </p>
                        <motion.img
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                          loading="eager"
                          src={study.image} 
                          className="w-32 md:w-44 rounded-xl self-center" 
                          alt="" 
                        />
                    </motion.a>
                  ))}
            </div>
          </motion.div>
          <div className="col-span-1"></div>
        </section>}
      </div>
    </div>
  );
};

export default AboutMeScreen;
