import HeaderProfileComponent from "../components/home/HeaderProfileComponent";
import AboutMeScreen from "./AboutMeScreen";
import KnowledgesScreen from "./KnowledgesScreen";
import MyProjectsScreen from "./MyProjectsScreen";

const HomeScreen = ({ refs }: { refs: Record<string, React.RefObject<HTMLDivElement>> }) => {
  return (
    <>
      <div className="col-span-10 flex flex-col h-auto justify-around">
        <HeaderProfileComponent refs={refs} />
        <AboutMeScreen refs={refs} />
        <MyProjectsScreen refs={refs} />
        <KnowledgesScreen refs={refs} />
      </div>
    </>
  );
};

export default HomeScreen;
