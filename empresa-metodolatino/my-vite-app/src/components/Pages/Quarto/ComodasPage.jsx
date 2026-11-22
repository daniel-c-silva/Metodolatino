import React from "react";
import NavbarPages from "../NavbarPages.jsx"; // Added .jsx for Vite safety
import { Link } from "react-router-dom";

// Fixed: Using root-relative path and added uppercase extensions for safety
const images = Object.values(
  import.meta.glob("/src/assets/comodas/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", {
    eager: true,
    import: "default",
  })
);

export default function ComodasPage() {
  // Helpful log to see if Vite is finding your files
  console.log("Comodas images found:", images);

  return (
    <>
      <NavbarPages />

      <div className="product-page">
        <div className="product-content">
          <h1 id="IT">Comodas</h1>

          <Link to="/product" id="Buttonback">
            Voltar
          </Link>

          <div className="scroll-container">
            {images.length > 0 ? (
              images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Comoda ${index + 1}`}
                  className="scroll-image"
                />
              ))
            ) : (
              <p style={{ color: "white", textAlign: "center" }}>
                Nenhuma imagem encontrada em src/assets/comodas/
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
