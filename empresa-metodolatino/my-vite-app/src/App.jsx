import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Standard Components
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ProductPage from "./components/Pages/ItemDetails.jsx"; 
import NavbarPages from "./components/Pages/NavbarPages.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// Page Components
import RoupeirosPage from "./components/Pages/Quarto/RoupeirosPage.jsx";
import CozinhaPage from "./components/Pages/CozinhaPage.jsx";
import CasadbanhoPage from "./components/Pages/CasadbanhoPage.jsx";
import CarpintariaPage from "./components/Pages/carpintariaPage.jsx"; 
import ComodasPage from "./components/Pages/Quarto/comodasPage.jsx";
import CamasPage from "./components/Pages/Quarto/camasPage.jsx";
// Added the missing import here:
import EspacosalaPage from "./components/Pages/EspacosalaPage.jsx"; 

function App() {
  return (
    <Router>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Gallery />
            <Contact />
          </>
        } />
        
        {/* Main Product Selection Page */}
        <Route path="/product" element={<><NavbarPages /><ProductPage /></>} />

        {/* Individual Category Pages */}
        <Route path="/roupeiros" element={<><NavbarPages /><RoupeirosPage /></>} />
        <Route path="/cozinha" element={<><NavbarPages /><CozinhaPage /></>} />
        <Route path="/casadbanho" element={<><NavbarPages /><CasadbanhoPage /></>} />
        <Route path="/carpintaria" element={<><NavbarPages /><CarpintariaPage /></>} />
        <Route path="/comodas" element={<><NavbarPages /><ComodasPage /></>} />
        <Route path="/camas" element={<><NavbarPages /><CamasPage /></>} />
        
        {/* Added the Route for Espaço Sala */}
        <Route path="/espacosala" element={<><NavbarPages /><EspacosalaPage /></>} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;