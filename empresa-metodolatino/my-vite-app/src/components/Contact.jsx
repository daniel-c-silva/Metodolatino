import React from "react"; // Import React

export default function Contact() {
  return (
    <section id="contact" className="section"> {/* Contact section */}
      <h1>Contactos</h1> {/* Section title */}
      <p>Rua Monte Alto, Armazém 118A, 4585-460 Rebordosa, Portugal</p> {/* Address */}
      <p> <a href="mailto:camg.metodolatino@gmail.com">camg.metodolatino@gmail.com</a></p> {/* Email */}
      <p> <a href="tel:+351933391754">+(351) 933 391 754</a> | <a href="tel:+351929192463">+(351) 929 192 463</a></p> {/* Phone number */}
    </section>
  );
}
