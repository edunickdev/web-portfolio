/* eslint-disable react-hooks/exhaustive-deps */
import BackgroundComponentHome from "../components/home/BackgroudComponent";
import HeaderProfileComponent from "../components/home/HeaderProfileComponent";
import FooterComponent from "../components/home/FooterComponent";

const HomeScreen = () => {
  return (
    <div className="col-span-10 flex flex-col justify-around min-h-screen max-h-screen">
      <BackgroundComponentHome />
      <HeaderProfileComponent />
      <FooterComponent />
    </div>
  );
};

export default HomeScreen;
