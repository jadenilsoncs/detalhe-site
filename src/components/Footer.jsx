import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>Móveis de Fibra</h4>
          <ul>
            <li><Link to="/products?sub=Balanços">Balanços</Link></li>
            <li><Link to="/products?cat=Móveis&sub=Banquetas">Banquetas</Link></li>
            <li><Link to="/products?sub=Cadeiras">Cadeiras e Poltronas</Link></li>
            <li><Link to="/products?sub=Bancos">Bancos e Sofás</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Luminárias e Postes</h4>
          <ul>
            <li><Link to="/products?cat=Luminárias Coloniais">Luminárias</Link></li>
            <li><Link to="/products?cat=Postes Coloniais para Jardim">Postes</Link></li>
            <li><Link to="/products?cat=Construção">Linha Construção</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Fale Conosco</h4>
          <p className="footer-item">contato@detalhemoveis.com.br</p>
          <p className="footer-item">(37) 9 9957-1010</p>
          <p className="footer-item">Estrada Corumbá, sn°, Km 1,5 - Povoado do Corumbá, Cláudio/MG, 35530-000</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy;2026 Detalhe Móveis. Desenvolvido por Informática Express.</p>
      </div>
    </footer>
  );
};
export default Footer;