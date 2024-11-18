/* eslint-disable react-hooks/exhaustive-deps */
import HeaderProfileComponent from "../components/home/HeaderProfileComponent";
import AboutMeScreen from "./AboutMeScreen";

const HomeScreen = ({ refs }: { refs: Record<string, React.RefObject<HTMLDivElement>> }) => {
  return (
    <>
      <div className="col-span-10 flex flex-col h-auto justify-around">
        <HeaderProfileComponent refs={refs} />
        <AboutMeScreen refs={refs} />
      </div>
    </>
  );
};

export default HomeScreen;
