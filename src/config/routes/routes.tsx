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
    }
    refMap[section]?.current?.scrollIntoView({  behavior: 'smooth' });
  }

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

