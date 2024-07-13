import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from '../../pages/screens/HomeScreen';
import AboutMeScreen from '../../pages/screens/AboutMeScreen';
import MyProjectsScreen from '../../pages/screens/MyProjectsScreen';
import ExperienceScreen from '../../pages/screens/ExperienceScreen';
import NotFoundScreen from '../../pages/screens/404screen';


const MyRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutMeScreen />} />
          <Route path="/projects" element={<MyProjectsScreen />} />
          <Route path="/experience" element={<ExperienceScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </Router>
    );
    }

export default MyRoutes;

