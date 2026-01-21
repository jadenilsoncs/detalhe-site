import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import About from './components/About';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsAppButton';
import './GlobalStyles.css';
import './App.css';

// Carregamento Otimizado (Lazy Loading) - Ajuda no Core Web Vitals
const Home = lazy(() => import('./components/Home'));

function App() {
  return (
    <Router basename="/detalhe">
      <ScrollToTop />
      <div className="App">
        <Navbar />

        {/* Envolvemos as rotas com Suspense para o Lazy Loading funcionar */}
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px', color: '#9b1c1c' }}>Carregando...</div>}>
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
        </Suspense>

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
                <li><Link to="/products?cat=Postes Coloniais Para Jardim">Postes</Link></li>
                <li><Link to="/products?cat=Construção">Linha Construção</Link></li>
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