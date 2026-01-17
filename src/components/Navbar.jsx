import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [prodAberto, setProdAberto] = useState(false);
  const [subAberto, setSubAberto] = useState(null);

  const fecharTudo = () => {
    setMenuAberto(false);
    setProdAberto(false);
    setSubAberto(null);
    window.scrollTo(0, 0);
  };

  const toggleMenu = () => setMenuAberto(!menuAberto);

  // Lógica híbrida: Funciona com Hover no PC e Clique no Mobile
  const handleMouseEnter = () => {
    if (window.innerWidth > 768) setProdAberto(true);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) setProdAberto(false);
  };

  const expandirProdutosSeta = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setProdAberto(!prodAberto);
  };

  const expandirSubSeta = (e, categoria) => {
    e.preventDefault();
    e.stopPropagation();
    setSubAberto(subAberto === categoria ? null : categoria);
  };

  return (
    <header className="detalhe-header">
      <div className="detalhe-nav-container">
        <Link to="/" className="detalhe-logo-link" onClick={fecharTudo}>
          <img
            src={process.env.PUBLIC_URL + "/assets/img/brand/logo.png"}
            alt="Logo Detalhe Móveis"
            className="detalhe-logo-img"
          />
        </Link>

        <div className={`detalhe-menu-hamburger ${menuAberto ? 'aberto' : ''}`} onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </div>

        <nav className={`detalhe-menu-links ${menuAberto ? 'ativo' : ''}`}>
          <Link to="/" className="detalhe-nav-link" onClick={fecharTudo}>HOME</Link>
          <Link to="/about" className="detalhe-nav-link" onClick={fecharTudo}>EMPRESA</Link>

          {/* DROPDOWN PRODUTOS */}
          <div
            className={`detalhe-dropdown ${prodAberto ? 'expandido' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="detalhe-item-flex">
              <Link to="/products" className="detalhe-nav-link link-texto" onClick={fecharTudo}>PRODUTOS</Link>
              <span className="detalhe-seta" onClick={expandirProdutosSeta}>▼</span>
            </div>

            <div className="detalhe-drop-box">
              {/* CONSTRUÇÃO */}
              <div className="detalhe-drop-item">
                <div className="detalhe-item-flex">
                  <Link to="/products?cat=Construção" className="detalhe-cat-link" onClick={fecharTudo}>CONSTRUÇÃO</Link>
                  <span className="detalhe-seta" onClick={(e) => expandirSubSeta(e, 'cons')}>▼</span>
                </div>
                <div className={`detalhe-side-box ${subAberto === 'cons' ? 'aberto-mobile' : ''}`}>
                  <Link to="/products?sub=Caixas de Correio" onClick={fecharTudo}>Caixas de Correio</Link>
                  <Link to="/products?sub=Cantoneiras" onClick={fecharTudo}>Cantoneiras</Link>
                  <Link to="/products?sub=Lixeiras" onClick={fecharTudo}>Lixeiras</Link>
                  <Link to="/products?sub=Grelhas" onClick={fecharTudo}>Grelhas</Link>
                </div>
              </div>

              {/* LUMINÁRIAS */}
              <div className="detalhe-drop-item">
                <div className="detalhe-item-flex">
                  <Link to="/products?cat=Luminárias" className="detalhe-cat-link" onClick={fecharTudo}>LUMINÁRIAS</Link>
                  <span className="detalhe-seta" onClick={(e) => expandirSubSeta(e, 'lum')}>▼</span>
                </div>
                <div className={`detalhe-side-box ${subAberto === 'lum' ? 'aberto-mobile' : ''}`}>
                  <Link to="/products?sub=Luminárias Meia Cara" onClick={fecharTudo}>Meia Cara</Link>
                  <Link to="/products?sub=Luminárias Para Muro" onClick={fecharTudo}>Para Muro</Link>
                  <Link to="/products?sub=Lustres Coloniais" onClick={fecharTudo}>Lustres</Link>
                </div>
              </div>

              {/* MÓVEIS */}
              <div className="detalhe-drop-item">
                <div className="detalhe-item-flex">
                  <Link to="/products?cat=Móveis" className="detalhe-cat-link" onClick={fecharTudo}>MÓVEIS</Link>
                  <span className="detalhe-seta" onClick={(e) => expandirSubSeta(e, 'mov')}>▼</span>
                </div>
                <div className={`detalhe-side-box ${subAberto === 'mov' ? 'aberto-mobile' : ''}`}>
                  <Link to="/products?sub=Balanços" onClick={fecharTudo}>Balanços</Link>
                  <Link to="/products?sub=Bancos" onClick={fecharTudo}>Bancos</Link>
                  <Link to="/products?sub=Mesas De Jantar" onClick={fecharTudo}>Mesas</Link>
                </div>
              </div>
            </div>
          </div>

          <Link to="/blog" className="detalhe-nav-link" onClick={fecharTudo}>BLOG</Link>
          <Link to="/contact" className="detalhe-nav-link" onClick={fecharTudo}>CONTATO</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;