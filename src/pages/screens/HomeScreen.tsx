import HeaderProfileComponent from "../components/home/HeaderProfileComponent";
import FooterComponent from "../shared/FooterComponent";
import AboutMeScreen from "./AboutMeScreen";
import KnowledgesScreen from "./KnowledgesScreen";
import MyProjectsScreen from "./MyProjectsScreen";
import RecruiterMatchModal from "../components/shared/RecruiterMatchModal";

const HomeScreen = ({
  refs,
}: {
  refs: Record<string, React.RefObject<HTMLDivElement>>;
}) => {
  return (
    <main className="font-inter">
      <HeaderProfileComponent refs={refs} />
      <AboutMeScreen refs={refs} />
      <MyProjectsScreen refs={refs} />
      <KnowledgesScreen refs={refs} />
      <FooterComponent />
      <RecruiterMatchModal />
    </main>
  );
};

export default HomeScreen;
