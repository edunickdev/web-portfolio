/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useProjects } from "../../stores/stores";
import ProjectsBGComponent from "../components/projects/projectsBgComponent";
import { Button, Spinner } from "@nextui-org/react";
import DetailProjectComponent from "../components/projects/detailProjectComponent";
import { motion } from "framer-motion";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";

const MyProjectsScreen = () => {
  const projects = useProjects((state) => state.projects);
  const isLoading = useProjects((state) => state.loading);
  const fetchProjects = useProjects((state) => state.fetchProjects);

  useEffect(() => {
    fetchProjects();
  }, []);

  const [visibleProjects, setVisibleProjects] = useState([0, 1, 2]);

  const handleNext = () => {
    setVisibleProjects((prevVisible) => {
      return prevVisible.map((index) => (index + 1) % projects.length);
    });
  };

  const handlePrev = () => {
    setVisibleProjects((prevVisible) => {
      return prevVisible.map((index) =>
        index === 0 ? projects.length - 1 : index - 1
      );
    });
  };

  return (
    <div className="grid grid-cols-12">
      <ProjectsBGComponent />
      <div className="col-span-1 h-screen flex items-center justify-center">
        <Button
          isIconOnly
          size="lg"
          onClick={handlePrev}
          className="bg-darkblue shadow-md text-white"
        >
          <IoMdArrowRoundBack />
        </Button>
      </div>
      <div className="col-span-10 flex justify-around items-start h-screen py-10 px-5 gap-x-4 -mt-4">
        {isLoading && projects.length === 0 ? (
          <Spinner
            label="Preparando los proyectos"
            color="primary"
            className="w-full h-full -z-20 transition-all duration-300"
          />
        ) : (
          visibleProjects.map((index) => (
            <motion.div
              key={projects[index].id_project}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <DetailProjectComponent {...projects[index]} />
            </motion.div>
          ))
        )}
      </div>
      <div className="col-span-1 h-screen flex items-center justify-center">
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
