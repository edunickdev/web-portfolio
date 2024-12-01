import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from '../../pages/screens/HomeScreen';
import MenuBarComponent from '../../pages/shared/MenuBarComponent';
import React, { useRef } from 'react';


const MyRoutes = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const studiesRef = useRef<HTMLDivElement>(null);
  const techsRef = useRef<HTMLDivElement>(null);

  const handleScroll = (section: string) => {
    const refMap: Record<string, React.RefObject<HTMLDivElement>> = {
      about: aboutRef,
      projects: projectsRef,
      studies: studiesRef,
      technologies: techsRef,
    };
  
    const element = refMap[section]?.current;
  
    if (element) {
      // Hacer scroll hacia la sección
      element.scrollIntoView({ behavior: "smooth" });
  
      // Ajustar el desplazamiento para corregir el posicionamiento
      const offset = -100; // Ajusta este valor según el tamaño de tu navbar
      setTimeout(() => {
        window.scrollBy({ top: offset, behavior: "smooth" });
      }, 700); // Ajusta el tiempo si es necesario
    }
  };
  

  return (
    <Router>
      <MenuBarComponent onScroll={handleScroll} />
        <Routes>
          <Route path="/" element={<HomeScreen refs={{
            about: aboutRef,
            projects: projectsRef,
            studies: studiesRef,
            technologies: techsRef,
          }} />} />
        </Routes>
    </Router>
  );
}

export default MyRoutes;

