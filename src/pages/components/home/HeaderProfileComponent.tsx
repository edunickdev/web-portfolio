import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { statics } from "../../../config/images";
import { TypeAnimation } from 'react-type-animation';

const HeaderProfileComponent = ({
  refs,
}: {
  refs: Record<string, React.RefObject<HTMLDivElement>>;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const icon2Variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1 } },
    hover: { scale: 1.1 },
  };

  const iphoneVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 },
  };

  const cloudVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
  };

  const desktopVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  const webVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
  };

  useEffect(() => {
    if (!hasAnimated) {
      const timerIn = setTimeout(() => {
        setIsHovered(true);
      }, 2000);

      const timerOut = setTimeout(() => {
        setIsHovered(false);
        setHasAnimated(true);
      }, 4000);

      return () => {
        clearTimeout(timerIn);
        clearTimeout(timerOut);
      };
    }
  }, [hasAnimated]);

  return (
    <div
      className="flex md:grid md:grid-cols-12 p-10 text-lightblue h-[88vh] bg-darkblue mt-[9.8vh]"
      ref={refs.about}
    >
      <div className="col-span-1"></div>
      <div className="col-span-6">
        <section className="flex">
          <motion.img
            loading="eager"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            src={statics.fotoPerfil}
            className="w-24 h-32 mt-4 rounded-lg"
          />
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-auto h-32 mt-3 ml-5"
          >
            <TypeAnimation
              wrapper="h2"
              className="font-bold text-lg text-midblue"
              speed={90}
              cursor={false}
              sequence={["INGENIERO DESARROLLADOR DE SOFTWARE FULLSTACK"]}
            />
            <TypeAnimation
              wrapper="h2"
              className="font-bold text-lg text-midblue"
              speed={90}
              cursor={false}
              sequence={["EDUARD NICOLÁS SARMIENTO HERRERA"]}
            />
            <TypeAnimation 
              wrapper="h3"
              speed={90}
              cursor={false}
              className="font-semibold text-lg text-midblue"
              sequence={["Microsoft Azure arquitecto certificado"]}
            />
            <section className="flex flex-col">
              <a href="www.linkedin.com/in/eduard-nicolas-sarmiento-herrera" className="text-lg">Ver mi Github</a>
              <span className="text-lg">Ver mi LinkedIn</span>
            </section>
          </motion.div>
        </section>
        <section className="flex flex-col pr-14 justify-between items-start">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 font-semibold text-2xl">
            Una breve historia sobre mí y cómo llegué al mundo IT
          </motion.h2>
          <motion.span
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-5 pr-10 text-medium md:text-lg"
          >
            Con más de 10 años de experiencia laboral, 2 de ellos en el sector
            IT directamente, la automatización de procesos en mi paso por el
            sector financiero hicieron que quisiera profesionalizarme y
            prepararme para este mundo IT que me fascina y me regala a diario un
            universo de nuevos conocimientos y aprendizajes. la web, lo movil me
            encantan, me gusta retarme y siempre hacer mejor las cosas.
          </motion.span>
        </section>
      </div>
      <section className="col-span-4 flex justify-center items-center">
        <div className="w-64 h-64 relative">
          {/* Imagen de icon2 con eventos de hover */}
          <motion.img
            loading="eager"
            src={statics.icon2}
            className="w-56 h-56 self-center justify-self-center"
            variants={icon2Variants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            transition={{ delay: 1.5 }}
          />

          {/* Animaciones de entrada y salida para las otras imágenes */}
          <AnimatePresence>
            {isHovered && (
              <>
                <motion.img
                  loading="eager"
                  src={statics.cloud}
                  className="absolute -top-5 -left-14"
                  variants={cloudVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ pointerEvents: "none" }}
                />
                <motion.img
                  loading="eager"
                  src={statics.iphone}
                  className="absolute -top-5 -right-14"
                  variants={iphoneVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ pointerEvents: "none" }}
                />
                <motion.img
                  loading="eager"
                  src={statics.web}
                  className="absolute bottom-5 -right-14"
                  variants={webVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ pointerEvents: "none" }}
                />
                <motion.img
                  loading="eager"
                  src={statics.desktop}
                  className="absolute bottom-5 -left-14"
                  variants={desktopVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ pointerEvents: "none" }}
                />
              </>
            )}
          </AnimatePresence>
        </div>
      </section>
      <div className="col-span-1"></div>
    </div>
  );
};

export default HeaderProfileComponent;
