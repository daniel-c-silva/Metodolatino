import React from "react";
import { Link } from "react-router-dom";

// Try this: I've added a recursive check (**) just in case the images are 
// tucked inside another subfolder by mistake.
const images = Object.values(
  import.meta.glob("/src/assets/carpintaria/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", {
    eager: true,
    import: "default",
  })
);


export default function CarpintariaPage() {
  // OPEN YOUR BROWSER CONSOLE (F12)
  // If this says "[]", the folder path is definitely the issue.
  console.log("Carpintaria Debug:", images);

  return (
    <div className="product-page">
      <div className="product-content">
        <h1 id="IT">Carpintaria</h1>

<Link to="/" id="Buttonback">
  Voltar
</Link>

        <div className="scroll-container">
          {images.length > 0 ? (
            images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`carpintaria ${index + 1}`}
                className="scroll-image"
              />
            ))
          ) : (
            <div style={{ color: "white", textAlign: "center", marginTop: "20px" }}>
              <p>Nenhuma imagem encontrada.</p>
              <p><small>Verifique se a pasta em <b>src/assets/carpintaria</b> existe exatamente com esse nome.</small></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}