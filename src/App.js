import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import './GlobalStyles.css';
import './App.css';

// Carregamento Otimizado (Lazy Loading) - Divide o peso do site
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Products = lazy(() => import('./components/Products'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Blog = lazy(() => import('./components/Blog'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const ContactForm = lazy(() => import('./components/ContactForm'));

function App() {
  return (
    /* Mantenha o basename="/detalhe" apenas se o site estiver em uma subpasta. Se for o domínio principal, remova-o ou deixe como basename="/".*/
    <Router basename="/detalhe">
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px', color: '#9b1c1c' }}>Carregando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<Products />} />
            {/*Rota dinâmica para os 79 produtos individuais*/}
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<ContactForm />} />
            {/*Redirecionamento de segurança*/}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        <footer className="footer-main">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Móveis de Fibra</h4>
              <ul>
                {/* Dica: Verifique se no seu products.js a categoria/subcategoria está escrita EXATAMENTE como no link abaixo (acentos contam!)*/}
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
        <WhatsAppButton />
      </div>
    </Router>
  );
}
export default App;