import { useEffect, useState } from "react";
import { useProjects } from "../../stores/stores";
import ProjectsBGComponent from "../components/projects/projectsBgComponent";
import { Button, Spinner } from "@nextui-org/react";
import DetailProjectComponent from "../components/projects/detailProjectComponent";
import { motion } from "framer-motion";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import { MdUpdate } from "react-icons/md";

const useIsMobile = (breakpoint: number = 768) => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    // Verificar que `window` está disponible
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

      // Establecer el estado inicial
      setIsMobile(mediaQuery.matches);

      const handler = (event: MediaQueryListEvent) => {
        setIsMobile(event.matches);
      };

      // Añadir listener
      mediaQuery.addEventListener("change", handler);

      return () => {
        mediaQuery.removeEventListener("change", handler);
      };
    } else {
      // Si `window` no está definido (SSR), asumir que no es móvil
      setIsMobile(false);
    }
  }, [breakpoint]);

  return isMobile;
};

const MyProjectsScreen = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const isMobile = useIsMobile(768);

  const projects = useProjects((state) => state.projects);
  const isLoading = useProjects((state) => state.loading);
  const fetchProjects = useProjects((state) => state.fetchProjects);

  useEffect(() => {
    if (projects.length === 0) {
      fetchProjects();
    }
  }, [projects.length, fetchProjects]);

  // Ajustar la cantidad de proyectos visibles según el dispositivo
  useEffect(() => {
    if (isMobile === undefined || projects.length === 0) return;

    if (isMobile) {
      setVisibleProjects([0]); // Solo un proyecto si es móvil
    } else {
      // Mostrar hasta tres proyectos si hay suficientes
      const indexes = projects.slice(0, 3).map((_, index) => index);
      setVisibleProjects(indexes);
    }
  }, [isMobile, projects]);

  const handleNext = () => {
    setVisibleProjects((prevVisible) => {
      if (isMobile) {
        return [(prevVisible[0] + 1) % projects.length];
      } else {
        return prevVisible.map((index) => (index + 1) % projects.length);
      }
    });
  };

  const handlePrev = () => {
    setVisibleProjects((prevVisible) => {
      if (isMobile) {
        return [
          prevVisible[0] === 0 ? projects.length - 1 : prevVisible[0] - 1,
        ];
      } else {
        return prevVisible.map((index) =>
          index === 0 ? projects.length - 1 : index - 1
        );
      }
    });
  };

  // Esperar a que `isMobile` esté definido antes de renderizar
  if (isMobile === undefined) {
    return null; // O puedes mostrar un indicador de carga
  }

  return (
    <div className="grid grid-cols-12 max-h-screen">
      <ProjectsBGComponent />
      <div className="col-span-12 flex items-center justify-center mt-5">
        <h1 className="text-medium md:text-2xl text-darkblue font-bold text-center">
          Selecciona el proyecto del que quieres conocer más.
        </h1>
      </div>
      <div className="col-span-1 flex items-start md:items-center mt-40 md:mt-0 justify-center">
        <Button
          isIconOnly
          size="lg"
          onClick={handlePrev}
          className="bg-darkblue shadow-md text-white"
        >
          <IoMdArrowRoundBack />
        </Button>
      </div>
      <div className="col-span-10 flex justify-around items-start py-5 md:py-10 md:px-5 gap-x-4 pt-1 md:pt-0 md:-mt-4">
        {isLoading && projects.length === 0 ? (
          <div className="flex flex-col justify-center items-center mt-10">
            <Spinner
              label="Preparando los proyectos, si no se muestran en 2 segundos, presiona el botón"
              color="primary"
              className="w-full h-full -z-20 transition-all duration-300 text-center mb-4"
            />
            <Button isIconOnly onPress={fetchProjects}>
              <MdUpdate />
            </Button>
          </div>
        ) : (
          projects.length > 0 &&
          visibleProjects.map((index) => (
            <motion.div
              key={projects[index].id_project}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <DetailProjectComponent {...projects[index]} />
            </motion.div>
          ))
        )}
      </div>
      <div className="col-span-1 flex items-start md:items-center mt-40 md:mt-0 justify-center">
        <Button
          isIconOnly
          size="lg"
          className="bg-darkblue shadow-md text-white"
          onClick={handleNext}
        >
          <IoMdArrowRoundForward />
        </Button>
      </div>
    </div>
  );
};

export default MyProjectsScreen;
