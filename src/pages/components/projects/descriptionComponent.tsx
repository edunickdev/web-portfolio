import { Project } from "../../../stores/store_types";

const DescriptionComponent = (project: Project) => {
  return (
    <div className="h-40 md:h-[28rem] p-14 flex flex-col justify-around items-start">
      <div className="flex">
        <h3 className="text-xl font-bold text-blue-800">Tecnologías usadas</h3>
        <a
          href={project.link_repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-darkblue text-2xl font-semibold hover:underline"
        >
          Ver repositorio de GitHub
        </a>
      </div>
      <div className="flex gap-2 flex-wrap items-center">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-darkblue rounded-xl text-lightgray px-2 py-1 text-sm font-semibold"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-xl">{project.description}</p>
    </div>
  );
};

export default DescriptionComponent;
