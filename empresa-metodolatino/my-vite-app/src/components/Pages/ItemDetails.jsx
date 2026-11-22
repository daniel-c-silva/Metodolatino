import React from "react";
import roupeiroImg from "../../assets/roupeiros/IMG_9187.JPG";
import comodasImg from "../../assets/espacosala/IMG_9005.JPG";
import camaImg from "../../assets/camas/IMG_8983.JPG";


import { Link } from "react-router-dom";


export default function ProductPage() {
  // Gallery items data
  const galleryItems = [
  { img: roupeiroImg, alt: "Vista 1", label: "Roupeiros", link: "/roupeiros" },
  { img: comodasImg, alt: "Vista 2", label: "Comodas", link: "/comodas" },
  { img: camaImg, alt: "Vista 3", label: "Camas", link: "/camas" },

];


  return (
    <div className="product-page">
      <div className="product-content">

        <Link to="/" id="Buttonback">
          Voltar
        </Link>
        
        <h1 id="IT">Quarto</h1>
      

        {/* 2x2 GRID CONTAINER */}
        <div className="product-grid-2x2">
          {galleryItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="gallery-button"
            >
              <div className="gallery-item">
                <img src={item.img} alt={item.alt} />
                <div className="overlay">{item.label}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

