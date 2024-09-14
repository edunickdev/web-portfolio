import { Link, useLocation } from "react-router-dom";

const MenuBarComponent = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <div
      className={`h-[3.5rem] bg-darkblue w-[44rem] rounded-3xl flex items-center justify-around my-8 shadow-lg shadow-gray-400 transition-all duration-700  ${
        isHome ? "transform -translate-y-1/2" : "bottom-0"
      }`}
    >
      {location.pathname === "/" ? (
        <>
          <Link to="/about" className="text-white px-8 py-4 text-2xl">
            About me
          </Link>
          <Link to="/experience" className="text-white px-8 py-4 text-2xl">
            Experience
          </Link>
          <Link to="/projects" className="text-white px-8 py-4 text-2xl">
            Projects
          </Link>
        </>
      ) : location.pathname === "/about" ? (
        <>
          <Link to="/" className="text-white text-2xl">
            Home
          </Link>
          <Link to="/experience" className="text-white px-8 py-6 text-2xl">
            Experience
          </Link>
          <Link to="/projects" className="text-white px-8 py-6 text-2xl">
            Projects
          </Link>
        </>
      ) : location.pathname === "/projects" ? (
        <>
          <Link to="/" className="text-white px-8 py-6 text-2xl">
            Home
          </Link>
          <Link to="/about" className="text-white px-8 py-6 text-2xl">
            About me
          </Link>
          <Link to="/experience" className="text-white px-8 py-6 text-2xl">
            Experience
          </Link>
        </>
      ) : (
        <>
          <Link to="/" className="text-white px-8 py-6 text-2xl">
            Home
          </Link>
          <Link to="/about" className="text-white px-8 py-6 text-2xl">
            About me
          </Link>
          <Link to="/projects" className="text-white px-8 py-6 text-2xl">
            Projects
          </Link>
        </>
      )}
    </div>
  );
};

export default MenuBarComponent;
