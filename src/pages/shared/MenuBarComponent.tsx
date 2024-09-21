import { Link, useLocation } from "react-router-dom";

const MenuBarComponent = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <div
      className={`h-auto md:h-[3.5rem] bg-darkblue md:w-[44rem] rounded-3xl flex flex-col md:flex-row items-center justify-around  my-4 md:my-8 shadow-lg shadow-gray-400 transition-all duration-700 ${
        isHome ? "transform -translate-y-1/2" : "bottom-0"
      }`}
    >
      {location.pathname === "/" ? (
        <>
          <Link
            to="/about"
            className="text-white px-8 py-2 md:py-4 text-medium md:text-2xl"
          >
            Sobre mí
          </Link>
          <Link
            to="/experience"
            className="text-white px-8 py-2 md:py-4 text-medium md:text-2xl"
          >
            Experiencia
          </Link>
          <Link
            to="/projects"
            className="text-white px-8 py-2 md:py-4 text-medium md:text-2xl"
          >
            Proyectos
          </Link>
        </>
      ) : location.pathname === "/about" ? (
        <>
          <Link
            to="/"
            className="text-white px-8 py-2 md:py-0 text-medium md:text-2xl"
          >
            Inicio
          </Link>
          <Link
            to="/experience"
            className="text-white px-8 py-2 md:py-6 text-medium md:text-2xl"
          >
            Experiencia
          </Link>
          <Link
            to="/projects"
            className="text-white px-8 py-2 md:py-6 text-medium md:text-2xl"
          >
            Proyectos
          </Link>
        </>
      ) : location.pathname === "/projects" ? (
        <>
          <Link
            to="/"
            className="text-white px-8 py-2 md:py-6 text-medium md:text-2xl "
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="text-white px-8 py-2 md:py-6 text-medium md:text-2xl"
          >
            Sobre mí
          </Link>
          <Link
            to="/experience"
            className="text-white px-8 py-2 md:py-6 text-medium md:text-2xl"
          >
            Experiencia
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/"
            className="text-white px-8 py-2 md:py-6 text-medium md:text-2xl"
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="text-white px-8 py-2 md:py-6 text-medium md:text-2xl"
          >
            Sobre mí
          </Link>
          <Link
            to="/projects"
            className="text-white px-8 py-2 md:py-6 text-medium md:text-2xl"
          >
            Proyectos
          </Link>
        </>
      )}
    </div>
  );
};

export default MenuBarComponent;
