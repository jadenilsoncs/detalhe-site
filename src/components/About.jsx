import React from 'react';
import { Link } from 'react-router-dom';
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

          {/* BOTÃO ESTILO HOME (VISUALIZAR TODOS) - INSERIDO CONFORME SOLICITADO */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link
              to="/products"
              className="btn-visualizar-todos"
              style={{
                display: 'inline-block',
                border: '2px solid #9b1c1c',
                color: '#9b1c1c',
                padding: '12px 60px', // Aumentado para ser mais largo como o da Home
                textDecoration: 'none',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                transition: '0.3s',
                minWidth: '250px' // Garante que fique largo independente do texto
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#9b1c1c';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#9b1c1c';
              }}
            >
              Conheça Nossos Produtos
            </Link>
          </div>

          {/* NOVO BLOCO: Localização Oficial */}
          <div className="about-location-info" style={{ marginTop: '50px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              <strong>Nossa Sede:</strong><br />
              Estrada Corumbá, sn°, Km 1,5 - Povoado do Corumbá<br />
              Cláudio - MG | CEP: 35530-000
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;