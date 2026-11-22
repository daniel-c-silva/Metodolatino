import React from "react";

import IMG_8985 from "../assets/camas/IMG_8985.JPG";
import cozinhaImg from "../assets/cozinha/IMG_9203.JPG";
import casadbanhoImg from "../assets/wc/IMG_9181.JPG";
import carpintariaImg from "../assets/carpintaria.png";
import espSalaImg from "../assets/espacosala/IMG_9012.JPG";
import { Link } from "react-router-dom";

export default function Gallery() {
  // 1. Move the array outside of the return statement
  const galleryItems = [
    { img: IMG_8985, alt: "Produto 1", label: "Quarto", link: "/product" },
    { img: cozinhaImg, alt: "Produto 2", label: "Cozinha", link: "/cozinha" },
    { img: carpintariaImg, alt: "Produto 3", label: "Carpintaria", link: "/carpintaria" },
    { img: casadbanhoImg, alt: "Produto 4", label: "Casa de banho", link: "/casadbanho" },
    { img: espSalaImg, alt: "Produto 5", label: "Espaço Sala", link: "/espacosala" },
  ];

  return (
    <section id="gallery" className="section gallery">
      <div className="gallery">
        {/* 2. Map through the array to generate the HTML */}
        {galleryItems.map((item, index) => (
          <Link to={item.link} className="gallery-button" key={index}>
            <div className="gallery-item">
              <img src={item.img} alt={item.alt} />
              <div className="overlay">{item.label}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
