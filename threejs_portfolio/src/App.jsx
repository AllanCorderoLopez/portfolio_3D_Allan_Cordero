// src/App.jsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home, About, Projects, Contact, Portfolio } from './pages';
import NavBar from './components/NavBar';
import FloatingNav from '../src/components/FloatingNav'; // Importa el componente FloatingNav

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Projects', link: '/portfolio#projects'},
  { name: 'Contact', link: '/portfolio#contact' },
  { name: 'About', link: '/portfolio#about' },
];

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
       
        <FloatingNav navItems={navItems} /> 
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/portfolio' element={<Portfolio />} />
        </Routes>

      </Router>
    </main>
  );
};

export default App;
