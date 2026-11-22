import React from "react"; // Import React

export default function About() {
  return (
    <section id="about" className="section"> {/* About section */}
      <h2>Ofício em madeira, 2023</h2> {/* Section title */}
      <br />
      
      {/* Description split into two paragraphs sharing the same class */}
      <p className="brabt">
        Cada projeto e cada detalhe, transcritos pelo valor do design e da tradição.
      </p> 
      <p className="brabt">
        Uma combinação de qualidade, dedicação e rigor, refletida em peças que perduram no tempo, 
      </p> 
      <p className="brabt">
        pensadas e adaptadas às necessidades e preferências de cada cliente.
      </p> 
    </section>
  );
}
