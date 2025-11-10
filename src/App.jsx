import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'; 
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Articles from './Components/Articles/Articles';
import Revista from './Pages/Revista'
import Title from './Components/Title/Title'; 
import './App.css'; 


function App() {
  return (
    <BrowserRouter>
      <div className='app-content'>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/revista" element={<Revista />} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App; 