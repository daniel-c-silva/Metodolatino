import React from "react"; // Import React
import { Link } from "react-scroll"; // Import Link from react-scroll for smooth scrolling


export default function Navbar () {
    return(
  <nav 
   className="navbar"> {/* Fixed navigation bar */}
   <Link to="hero" smooth={true} duration={500}>Página Principal</Link> {/* Scroll to Hero */}   
   <Link to="about" smooth={true} duration={500}>Sobre Nós</Link> {/* Scroll to About */}
   <Link to="services" smooth={true} duration={500}>Serviços</Link> {/* Scroll to Services */}
   <Link to="gallery" smooth={true} duration={500}>Galerias</Link> {/* Scroll to Gallery */}
   <Link to="contact" smooth={true} duration={500}>Contactos</Link> {/* Scroll to Contact */}
  </nav>
    );
}