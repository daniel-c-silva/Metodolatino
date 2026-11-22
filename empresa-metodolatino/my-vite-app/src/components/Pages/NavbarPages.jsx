import React from "react";
import { Link } from "react-router-dom"; // ONLY import this one
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'


export default function NavbarPages() {
  return (
    <nav className="navbar">

      <FontAwesomeIcon icon={faHouse} className="Home" />
      {/* These must be regular router Links to go back to the main page */}
      <Link to="/">Voltar à Página Principal</Link>
      
      {/* Note: These won't auto-scroll yet because we are changing pages. 
          For now, let's make them point to the Home page.
      */}

    </nav>
  );
}