import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-page-section">
      <div className="container">
        {/* Título e Linha igual ao Blog */}
        <h2 className="title-dark">A Empresa</h2>
        <div className="detail-divider"></div>

        <h3 className="about-subtitle">Excelência em móveis de fibra e alumínio</h3>

        <div className="about-text-content">
          <p>
            A <strong>Detalhe Móveis</strong> é especialista na fabricação de móveis em fibra sintética e alumínio,
            unindo a tradição do trabalho artesanal com as melhores tecnologias de durabilidade do mercado.
          </p>
          <p>
            Nossa missão é transformar ambientes externos e internos em espaços de conforto e elegância.
            Cada peça é produzida com rigoroso controle de qualidade, garantindo resistência às variações climáticas.
          </p>
          <p>
            Localizados em Cláudio - MG, entregamos para todo o Brasil, levando o requinte dos móveis mineiros
            para os lares mais exigentes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;