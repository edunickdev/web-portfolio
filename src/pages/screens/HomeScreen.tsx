/* eslint-disable react-hooks/exhaustive-deps */
import BackgroundComponentHome from "../components/home/BackgroudComponent";
import HeaderProfileComponent from "../components/home/HeaderProfileComponent";
import FooterComponent from "../components/home/FooterComponent";
import { useProjects } from "../../stores/stores";
import { useEffect } from "react";

const HomeScreen = () => {
  const fetchProjects = useProjects((state) => state.fetchProjects);

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="col-span-10 flex flex-col justify-around h-screen">
      <BackgroundComponentHome />
      <HeaderProfileComponent />
      <FooterComponent />
    </div>
  );
};

export default HomeScreen;
