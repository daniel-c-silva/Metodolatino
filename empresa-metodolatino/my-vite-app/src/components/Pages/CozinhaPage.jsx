import React from "react";
import { Link } from "react-router-dom";

// Fixed: Using root-relative path for Vite
// IMPORTANT: Check if your folder is "Kitchen" (Capital K) or "kitchen"
const images = Object.values(
  import.meta.glob("/src/assets/cozinha/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", {
    eager: true,
    import: "default",
  })
);

export default function CozinhaPage() {
  return (
    <div className="product-page">
      <div className="product-content">
        <h1 id="IT">Cozinha</h1>

        {/* Added Back Button for consistency */}

<Link to="/" id="Buttonback">
  Voltar
</Link>
        <div className="scroll-container">
          {images.length > 0 ? (
            images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Cozinha ${index + 1}`}
                className="scroll-image"
              />
            ))
          ) : (
            <p style={{ color: "white", textAlign: "center" }}>
              Nenhuma imagem encontrada em /src/assets/Kitchen/
            </p>
          )}
        </div>
      </div>
    </div>
  );
}