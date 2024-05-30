// src/App.jsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home, About, Projects, Contact } from './pages';
import NavBar from './components/NavBar';
import FloatingNav from '../src/components/FloatingNav'; // Importa el componente FloatingNav

// Define tus íconos aquí o impórtalos
const HomeIcon = () => <span>🏠</span>;
const AboutIcon = () => <span>ℹ️</span>;
const ProjectsIcon = () => <span>📁</span>;
const ContactIcon = () => <span>✉️</span>;

const navItems = [
  { name: 'Home', link: '/', icon: <HomeIcon /> },
  { name: 'Projects', link: '/projects', icon: <ProjectsIcon /> },
  { name: 'Contact', link: '/contact', icon: <ContactIcon /> },
];

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
       
        <FloatingNav navItems={navItems} /> 
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>

      </Router>
    </main>
  );
};

export default App;
