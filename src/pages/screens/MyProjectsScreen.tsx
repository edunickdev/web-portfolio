import { useEffect, useState } from "react";
import { useProjects } from "../../stores/stores";
import { motion } from "framer-motion";
import ImageComponents from "../components/projects/imagesComponent";
import { useInView } from "react-intersection-observer";
import { Button } from "@nextui-org/react";

const MyProjectsScreen = ({
  refs,
}: {
  refs: Record<string, React.RefObject<HTMLDivElement>>;
}) => {
  const projects = useProjects((state) => state.projects);
  const setProject = useProjects((state) => state.selectProject);
  const fetchProjects = useProjects((state) => state.fetchProjects);

  const [isOpened, setIsOpened] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    fetchProjects();
  }, [projects]); // Llamamos a fetchProjects solo una vez al montar el componente

  return (
    <section
      className="flex flex-col md:grid md:grid-cols-12 h-auto md:h-[90vh] bg-darkblue gap-x-20"
      ref={ref}
    >
      <h2
        className="col-span-12 text-center text-2xl md:text-4xl text-lightblue mt-8"
        ref={refs.projects}
      >
        Proyectos
      </h2>
      {inView && (
        <>
          {/* Botón de menú para dispositivos móviles */}
          <div className="relative md:hidden col-span-12 flex justify-center mt-4">
            <Button
              onPress={toggleMenu}
              className="text-lightblue text-xl font-semibold bg-transparent border border-lightblue px-4 py-2 rounded-md"
              aria-label={isOpened ? "Cerrar proyectos" : "Mostrar proyectos"}
            >
              ☰
            </Button>

            {/* Menú de proyectos para móviles */}
            {isOpened && (
              <section
                className={`absolute top-12 left-0 right-0 bg-darkblue text-lightblue rounded-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden mx-4 z-20`}
                style={{ transformOrigin: "top center" }}
              >
                {projects.map((project, index) => (
                  <Button
                    key={project.id_project}
                    onPress={() => {
                      setProject(index);
                      setIsOpened(false); // Cerramos el menú después de seleccionar
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-midblue transition-all duration-250 cursor-pointer bg-transparent border-none text-lightblue"
                  >
                    {project.name}
                  </Button>
                ))}
              </section>
            )}
          </div>

          {/* Lista de proyectos para pantallas medianas y grandes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:block col-span-4"
          >
            <div className="flex flex-col gap-y-3 overflow-x-visible h-[55vh]">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id_project}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: index * 0.1,
                    delay: 0.3 + index * 0.1,
                  }}
                  className="bg-lightblue h-12 py-2 pl-16 pr-3 hover:pl-[4.5rem] hover:pr-9 w-[16rem] lg:w-[20rem] hover:w-[17rem] lg:hover:w-[20.8rem] transition-all duration-200 hover:bg-midblue hover:text-lightblue flex items-center text-darkblue text-xl font-semibold rounded-tr-md rounded-br-md cursor-pointer"
                  onClick={() => setProject(index)}
                >
                  {project.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Componente de imágenes */}
          <div className="col-span-12 md:col-span-8 flex items-start justify-center md:justify-start mr-0 md:mr-10 lg:mr-14 mt-6 md:mt-0 p-5">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ transformOrigin: "left" }}
              className="flex flex-col justify-start items-center w-full h-[60vh] bg-lightblue rounded-md md:rounded-l-md overflow-hidden p-4"
            >
              <ImageComponents />
            </motion.div>
            {/* Elemento decorativo para escritorio */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "20px", opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden md:block w-5 h-[62vh] bg-midblue rounded-tl-md rounded-bl-md"
            ></motion.div>
          </div>
        </>
      )}
    </section>
  );
};

export default MyProjectsScreen;
