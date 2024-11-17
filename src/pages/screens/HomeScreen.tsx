/* eslint-disable react-hooks/exhaustive-deps */
import HeaderProfileComponent from "../components/home/HeaderProfileComponent";

const HomeScreen = ({ refs }: { refs: Record<string, React.RefObject<HTMLDivElement>> }) => {
  return (
    <div className="col-span-10 flex flex-col justify-around h-[88vh] bg-darkblue">
        <HeaderProfileComponent refs={refs} />
    </div>
  );
};

export default HomeScreen;
