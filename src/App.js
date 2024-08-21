import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Visit from './components/Visit';
import CONTACT from './components/CONTACT';
import Footer from './components/Footer';
import FullHome from './components/FullHome';
import MasterBedroom from './components/masterbedroom';
import Kitchen from './components/kitchen';
import Homepage from './components/Homepage';
import Wardrobes from './components/Wardrobes';
import About from './components/ABOUT';
import FormComponent from './components/form';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration in milliseconds
    });
  }, []);

  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          {/* Default route for Homepage */}
          <Route path="/" element={<Homepage />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/wardrobes" element={<Wardrobes />} />
          <Route path="/masterbedroom" element={<MasterBedroom />} />
          <Route path="/fullhome" element={<FullHome />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<FormComponent />} />
        </Routes>
        
        <CONTACT />
        <Footer />
      </>
    </Router>
  );
}

export default App;
