import { Button } from "@nextui-org/react";
import { useProjects } from "../../stores/stores";
import { useEffect, useState } from "react";

const MenuBarComponent = ({ onScroll }: { onScroll: (section: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const fetchProjects = useProjects((state) => state.fetchProjects);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <nav className="flex justify-between items-center h-[10vh] md:grid md:grid-cols-12 bg-darkblue z-20 fixed w-full shadow-lg">
      {/* Espaciado para diseño */}
      <div className="md:col-span-1"></div>

      {/* Título */}
      <span className="md:col-span-4 lg:col-span-3 text-lightblue md:text-2xl lg:text-3xl font-medium">
        EL CÓDIGO RECUERDA
      </span>

      {/* Botón de menú (solo visible en móviles) */}
      <div className="relative md:hidden">
        <Button
          className="block text-lightblue border-none bg-transparent"
          variant="bordered"
          onPress={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          ☰
        </Button>

        {/* Menú de navegación para móviles */}
        <section
          className={`absolute top-12 left-0 bg-darkblue text-lightblue w-[6.5rem] rounded-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
          style={{ transformOrigin: "top center" }}
        >
          <Button variant="bordered" onPress={() => onScroll("about")} className="block px-4 py-2 hover:bg-midblue transition-all duration-250 cursor-pointer bg-transparent border-none w-24 text-lightblue">
            Sobre mí
          </Button>
          <Button variant="bordered" onPress={() => onScroll("projects")} className="block px-4 py-2 hover:bg-midblue transition-all duration-250 cursor-pointer bg-transparent border-none w-24 text-lightblue">
            Proyectos
          </Button>
          <Button variant="bordered" onPress={() => onScroll("studies")} className="block px-4 py-2 hover:bg-midblue transition-all duration-250 cursor-pointer bg-transparent border-none w-24 text-lightblue">
            Estudios
          </Button>
          <Button variant="bordered" onPress={() => onScroll("about")} className="block px-4 py-2 hover:bg-midblue transition-all duration-250 cursor-pointer bg-transparent border-none w-24 text-lightblue">
            Servicios
          </Button>
        </section>
      </div>

      {/* Menú de navegación para pantallas grandes */}
      <section className="hidden md:flex md:col-span-6 lg:col-span-7 gap-x-4 justify-self-end">
        <Button variant="bordered" onPress={() => onScroll("about")} className="text-lightblue text-xl lg:text-2xl hover:text-midblue transition-all duration-250 cursor-pointer z-10 bg-transparent border-none">
          Sobre mí
        </Button>
        <Button variant="bordered" onPress={() => onScroll("projects")} className="text-lightblue text-xl lg:text-2xl hover:text-midblue transition-all duration-250 cursor-pointer z-10 bg-transparent border-none">
          Proyectos
        </Button>
        <Button variant="bordered" onPress={() => onScroll("studies")} className="text-lightblue text-xl lg:text-2xl hover:text-midblue transition-all duration-250 cursor-pointer z-10 bg-transparent border-none">
          Estudios
        </Button>
        <Button variant="bordered" onPress={() => onScroll("about")} className="text-lightblue text-xl lg:text-2xl hover:text-midblue transition-all duration-250 cursor-pointer z-10 bg-transparent border-none">
          Servicios
        </Button>
      </section>

      {/* Espaciado para diseño */}
      <div className="md:col-span-1"></div>
    </nav>
  );
};

export default MenuBarComponent;
