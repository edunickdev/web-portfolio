import { statics } from "../../../config/images";

const ProjectsBGComponent = () => {
  return (
    <div className="absolute inset-0 flex justify-between flex-col min-h-screen -z-30 col-span-12 overflow-hidden">
      <img
        src={statics.minibgprojects1}
        alt=""
        className="self-start w-2/6 ml-24 opacity-40"
      />
      <img
        src={statics.minibgprojects2}
        alt=""
        className="self-end opacity-60"
      />
    </div>
  );
};

export default ProjectsBGComponent;
