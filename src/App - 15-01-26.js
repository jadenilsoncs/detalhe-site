import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
    /* O basename="/detalhe" resolve o erro do site abrir vazio ou só com o rodapé */
    <Router basename="/detalhe">
      <div className="App">
        <Navbar />

        <Routes>
          {/* Rota raiz: Se o usuário acessar /detalhe/ ele será levado para a Home */}
          <Route path="/" element={<Home />} />

          {/* Suas rotas normais */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactForm />} />

          {/* Caso o usuário digite algo errado, ele volta para a Home */}
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
              <h4>Siga-nos</h4>

              <div className="social-icons">
                <p>Facebook | Instagram</p>
                {/* Facebook inativo: apenas a imagem com estilo de 'desabilitado' */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                  alt="FB"
                  width="30"
                  style={{ opacity: 0.4, cursor: 'not-allowed', filter: 'grayscale(100%)', margin: '0 8px' }}
                  title="Em breve"
                />
                {/* Instagram ATIVO */}
                <a href="https://www.instagram.com/detalhemoveisoficial/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                    alt="IG"
                    width="30"
                    style={{ margin: '0 8px' }}
                  />
                </a>
              </div>

            </div>

            <div className="footer-col">
              <h4>Fale Conosco</h4>
              <p className="footer-item">
                <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                  <polyline points="3,7 12,13 21,7" />
                </svg>
                contato@detalhemoveis.com.br
              </p>
              <p className="footer-item">
                <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3l2 5-2 2a16 16 0 0 0 6 6l2-2 5 2z" />
                </svg>
                (37) 9 9957-1010
              </p>
              <p className="footer-item">
                <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Cláudio, MG
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Detalhe Móveis. Desenvolvido por Informática Express.</p>
          </div>
        </footer>

        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;