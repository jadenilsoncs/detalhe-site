import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
export default App;