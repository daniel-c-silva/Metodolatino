import React from "react";
import { Link } from "react-router-dom";

// This pattern checks both 'roupeiro' and 'Roupeiro' 
// and even 'roupeiros' just in case!
const images = Object.values(
  import.meta.glob("/src/assets/{roupeiro,Roupeiro,roupeiros,Roupeiros}/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", {
    eager: true,
    import: "default",
  })
);

export default function RoupeirosPage() {
  console.log("Roupeiro images found:", images);

  return (
    <div className="product-page">
      <div className="product-content">
        <h1 id="IT">Roupeiros</h1>

        <Link to="/product" id="Buttonback">
          Voltar
        </Link>

        <div className="scroll-container">
          {images.length > 0 ? (
            images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Roupeiro ${index + 1}`}
                className="scroll-image"
              />
            ))
          ) : (
            <div style={{ color: "white", textAlign: "center", marginTop: "20px" }}>
              <p>Nenhuma imagem encontrada em /src/assets/roupeiro/</p>
              <p><small>Verifica se a pasta é "roupeiro" ou "Roupeiro".</small></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}