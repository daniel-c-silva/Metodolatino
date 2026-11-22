import React from "react";
import { Link } from "react-router-dom";

// Fixed: specifically looking for .JPG and .jpg
const images = Object.values(
  import.meta.glob("/src/assets/espacosala/*.{JPG,jpg,jpeg,JPEG,png,PNG,webp}", {
    eager: true,
    import: "default",
  })
);

export default function EspacosalaPage() {
  // Check your browser console (F12) to see the list of paths found
  console.log("Images found in espacosala:", images);

  return (
    <div className="product-page">
      <div className="product-content">
        <h1 id="IT">Espaço Sala</h1>

<Link to="/" id="Buttonback">
  Voltar
</Link>

        <div className="scroll-container">
          {images.length > 0 ? (
            images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Espaço Sala ${index + 1}`}
                className="scroll-image"
              />
            ))
          ) : (
            <div style={{ color: "white", textAlign: "center", marginTop: "20px" }}>
              <p>Nenhuma imagem .JPG encontrada em /src/assets/espacosala/</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}