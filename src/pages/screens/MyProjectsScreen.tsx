import { useEffect } from "react";
import { useProjects } from "../../stores/stores";
import { motion } from "framer-motion";

import ImageComponents from "../components/projects/imagesComponent";


const MyProjectsScreen = ({ refs }: { refs: Record<string, React.RefObject<HTMLDivElement>> }) => {
  const projects = useProjects((state) => state.projects);
  const setProject = useProjects((state) => state.selectProject);
  const fetchProjects = useProjects((state) => state.fetchProjects);

  useEffect(() => {
      fetchProjects();
  }, [projects]);
  
  return (
    <section className="grid grid-cols-12 h-[90vh] bg-darkblue gap-x-20" ref={refs.projects}>
      <h2 className="col-span-12 text-center text-3xl md:text-4xl text-lightblue mt-8">Proyectos</h2>
      <div className="col-span-4 grid grid-cols-4">
        <div className="flex flex-col gap-y-3 col-span-4 overflow-x-visible h-[55vh]">
          {
            projects.map((project, index) => (
              <motion.div
                key={project.id_project}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: index * 0.1 }}
                className="bg-lightblue h-12 py-2 pl-20 pr-3 hover:pl-[5.4rem] hover:pr-9 w-[16rem] lg:w-[20rem] hover:w-[17rem] lg:hover:w-[20.8rem] transition-all duration-200 hover:bg-midblue hover:text-lightblue flex items-center text-darkblue text-xl font-semibold rounded-tr-md rounded-br-md cursor-pointer"
                onClick={() => setProject(index)}
              >
                {project.name}
              </motion.div>
            ))
          }
        </div>
      </div>
      <div className="col-span-8 flex items-start justify-start mr-10 lg:mr-14">
        <div className="flex flex-col justify-start items-center w-full h-[60vh] bg-lightblue -mt-5 rounded-l-md overflow-hidden p-4">
          <ImageComponents />
        </div>
        <div className="w-5 h-[62vh] bg-midblue -mt-7 rounded-tl-md rounded-bl-md"></div>
      </div>
    </section>
  );
};

export default MyProjectsScreen;
