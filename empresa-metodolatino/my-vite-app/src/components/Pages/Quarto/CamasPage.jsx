import React from "react";
import { Link } from "react-router-dom";

// Using /src/ makes sure Vite starts looking from the root folder
const images = Object.values(
  import.meta.glob("/src/assets/camas/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", {
    eager: true,
    import: "default",
  })
);

export default function CamasPage() {
  // Debugging: Open your browser console (F12) to see if this list is still empty
  console.log("Found images:", images);

  return (
    <div className="product-page">
      <div className="product-content">
        <h1 id="IT">Camas</h1>

        <Link to="/product" id="Buttonback">
          Voltar
        </Link>

        <div className="scroll-container">
          {images.length > 0 ? (
            images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Cama ${index + 1}`}
                className="scroll-image"
              />
            ))
          ) : (
            <p>Nenhuma imagem encontrada em /src/assets/camas/</p>
          )}
        </div>
      </div>
    </div>
  );
}
