import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5537999571010?text=Olá! Estava navegando no site e gostaria de falar com um especialista."
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Converse conosco no WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;