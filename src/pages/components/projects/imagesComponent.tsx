import { Button, Image, Tab, Tabs, Tooltip } from "@nextui-org/react";
import { statics } from "../../../config/images";
import { useState, useEffect } from "react";
import { useProjects } from "../../../stores/stores";
import { motion, AnimatePresence } from "framer-motion";

const ImageComponents = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const project = useProjects((state) => state.projects[state.selected_project]);

  const images = project && [project.main_image, ...project.other_images];

  const goToNextImage = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const goToPreviousImage = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  useEffect(() => {
    if (!hasAnimated) {
      setTimeout(() => {
        setShowInfo(true);
      }, 1200);
        
      const timer = setTimeout(() => {
        setShowInfo(false);
        setHasAnimated(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [hasAnimated, project]);

  return (
    <div className="flex flex-col md:flex-row h-full w-full justify-between items-center gap-x-2">
      <div className="flex md:flex-col justify-start items-center h-full p-1 md:p-2 gap-x-5 md:gap-x-0">
        <section className="flex justify-center items-center gap-x-1">
          <Button
            isIconOnly
            radius="full"
            className="bg-darkblue text-lightblue cursor-pointer animate-appearance-in transition-all duration-300 shadow-md shadow-midblue"
            onClick={goToPreviousImage}
          >
            <Image src={statics.flechaAtras} className="w-9 p-2" />
          </Button>
          <Button
            isIconOnly
            radius="full"
            className="bg-darkblue text-lightblue cursor-pointer animate-appearance-in transition-all duration-300 shadow-md shadow-midblue"
            onClick={goToNextImage}
          >
            <Image src={statics.flechaSiguiente} className="w-9 p-2" />
          </Button>
        </section>
        <section className="flex md:flex-col justify-start items-center mt-0 md:pt-3 gap-y-2">
          {project?.technologies.map((technology, index) => {
            const route = `${statics[technology]}`;
            return (
              <Tooltip
                key={index}
                content={technology}
                placement="left"
                className="bg-midblue text-darkblue font-semibold"
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  src={route}
                  className="text-sm w-8 md:w-9"
                />
              </Tooltip>
            );
          })}
        </section>
      </div>

      <div
        className="relative w-full"
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        <Image
          src={images && images[currentImage]}
          alt=""
          className="object-cover h-[49vh] md:h-[58vh] w-full border-2 border-midblue"
        />
        <AnimatePresence>
          {showInfo && (
            <motion.div
              className="absolute inset-0 flex flex-col bg-midblue/80 justify-center items-center text-lightblue z-10 rounded-xl p-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.h3
                className="text-lg md:text-xl font-bold p-2 bg-darkblue rounded-xl"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {project?.title}
              </motion.h3>
              <motion.div
                className="text-xs md:text-sm mt-1 text-left py-2 px-4 bg-lightblue rounded-xl h-full w-full m-1"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Tabs
                  aria-label="Options"
                  className="text-darkblue w-52 md:w-auto"
                  variant="underlined"
                >
                  <Tab key="descripcion" title="Descripción">
                    <div className="bg-lightblue text-darkblue">
                        <span className="text-xs md:text-sm">{project?.description}</span>
                    </div>
                  </Tab>
                  <Tab key="fortalezas" title="Fortalezas">
                    <div className="bg-lightblue">
                        <span className="text-xs md:text-sm text-darkblue">{project?.strength}</span>
                    </div>
                  </Tab>
                  <Tab key="conocimientos" title="Nuevos Conocimientos">
                    <div className="bg-lightblue text-darkblue">
                        <span className="text-xs md:text-sm">{project?.learned}</span>
                    </div>
                  </Tab>
                </Tabs>
              </motion.div>
              {project.deploy ? (
                <motion.div
                  className="text-xs md:text-sm p-2 flex justify-around gap-10 rounded-xl bottom-0 left-0"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  about="_blank"
                >
                  {project.deploy.includes("https") ? (<a
                    href={project.deploy && project.deploy}
                    target="_blank"
                    className="bg-darkblue py-1 px-2 rounded-lg"
                  >
                    Visitar
                  </a>) : ""}
                  <span className="bg-darkblue py-1 px-2 rounded-lg">
                    <strong>Novedades:</strong> {project.status}
                  </span>
                </motion.div>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageComponents;
