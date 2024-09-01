import ProjectsBGComponent from "../components/projects/projectsBgComponent";

const MyProjectsScreen = () => {
  return (
    <div className="grid grid-cols-12">
      <ProjectsBGComponent />
      <div className="col-span-1 h-screen"></div>
      <div className="col-span-10 flex flex-col justify-around items-start h-screen py-10">
        
      </div>
      <div className="col-span-1 h-screen"></div>
    </div>
  );
};

export default MyProjectsScreen;

