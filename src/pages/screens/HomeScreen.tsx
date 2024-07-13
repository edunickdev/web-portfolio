import BackgroundComponentHome from "../components/home/BackgroudComponent";
import HeaderProfileComponent from "../components/home/HeaderProfileComponent";
import MenuBarComponent from "../components/home/MenuBarComponent";
import FooterComponent from "../components/home/FooterComponent";

const HomeScreen = () => {
  return (
      <div className="grid grid-cols-12 ">
        <BackgroundComponentHome />
        <div className="col-span-1 h-screen"></div>
        <div className="col-span-10 flex flex-col justify-center items-center h-screen">
          <HeaderProfileComponent />
          <MenuBarComponent />
          <FooterComponent />
        </div>
        <div className="col-span-1 h-screen"></div>
      </div>
  );
};

export default HomeScreen;
