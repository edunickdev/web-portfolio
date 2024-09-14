/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useProjects } from "../../stores/stores";
import ProjectsBGComponent from "../components/projects/projectsBgComponent";
import { Spinner } from "@nextui-org/react";
import DetailProjectComponent from "../components/projects/detailProjectComponent";

const MyProjectsScreen = () => {
  const projects = useProjects((state) => state.projects);
  const isLoading = useProjects((state) => state.loading);
  const fetchProjects = useProjects((state) => state.fetchProjects);
  const getApiKey = useProjects((state) => state.fetchAPIKey);

  useEffect(() => {
    getApiKey();
    fetchProjects();
  }, [getApiKey]);

  return (
    <div className="grid grid-cols-12">
      <ProjectsBGComponent />
      <div className="col-span-1 h-screen"></div>
      <div className="col-span-10 flex justify-around items-start h-screen py-10 px-5 gap-x-3 -mt-5">
        {!isLoading ? (
          <Spinner
            label="Preparando los proyectos"
            color="primary"
            className="w-full h-full -z-20"
          />
        ) : (
          projects.map((project) => (
            <DetailProjectComponent key={project.id_project} {...project} />
          ))
        )}
      </div>
      <div className="col-span-1 h-screen"></div>
    </div>
  );
};

export default MyProjectsScreen;
