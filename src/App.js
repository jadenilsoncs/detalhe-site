import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsAppButton';
import './GlobalStyles.css';
import './App.css';

function App() {
  return (
    <Router basename="/detalhe">
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <footer className="footer-main">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Móveis de Fibra</h4>
              <ul>
                <li>Jogos de Mesas</li>
                <li>Banquetas</li>
                <li>Cadeiras e Poltronas</li>
                <li>Espreguiçadeiras</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Luminárias e Postes</h4>
              <ul>
                <li>Postes Coloniais</li>
                <li>Luminárias Coloniais</li>
                <li>Lustres e Pendentes</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Fale Conosco</h4>
              <p className="footer-item">contato@detalhemoveis.com.br</p>
              <p className="footer-item">(37) 9 9957-1010</p>
              <p className="footer-item">Cláudio, MG</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy;2026 Detalhe Móveis. Desenvolvido por Informática Express.</p>
          </div>
        </footer>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;