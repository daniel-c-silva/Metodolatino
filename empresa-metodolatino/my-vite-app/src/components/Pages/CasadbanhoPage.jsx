import React from "react";
import { Link } from "react-router-dom";

// Fixed: Using root-relative path for Vite
// DOUBLE CHECK: Is your folder named "bathroom" or "casadebanho"? 
// Match the folder name exactly below.
const images = Object.values(
  import.meta.glob("/src/assets/wc/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", {
    eager: true,
    import: "default",
  })
);

export default function CasadbanhoPage() {
  return (
    <div className="product-page">
      <div className="product-content">
        <h1 id="IT">Casa de Banho</h1>

        {/* Added the "Voltar" link to match your other pages */}
<Link to="/" id="Buttonback">
  Voltar
</Link>

        <div className="scroll-container">
          {images.length > 0 ? (
            images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Casa de Banho ${index + 1}`}
                className="scroll-image"
              />
            ))
          ) : (
            <p style={{ color: "white", textAlign: "center" }}>
              Nenhuma imagem encontrada em /src/assets/bathroom/
            </p>
          )}
        </div>
      </div>
    </div>
  );
}