import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [menuAberto, setMenuAberto] = useState(false);
  const [prodAberto, setProdAberto] = useState(false);
  const [subAberto, setSubAberto] = useState(null);
  const [bloquearHover, setBloquearHover] = useState(false);
  const clicouProdutosRef = useRef(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setProdAberto(false);
      clicouProdutosRef.current = false;
      setBloquearHover(false);
    }
  }, [location.pathname]);

  const fecharTudo = () => {
    setMenuAberto(false);
    setProdAberto(false);
    setSubAberto(null);
    window.scrollTo(0, 0); // Já garante o scroll ao clicar nos links
  };

  const toggleMenu = () => {
    // Se o menu está aberto e vai fechar, rola para o topo
    if (menuAberto) {
      window.scrollTo(0, 0);
    }
    setMenuAberto(!menuAberto);
  };

  const handleDropdownClick = (e) => {
    if (e.target.tagName === 'A' && window.innerWidth > 768) {
      clicouProdutosRef.current = true;
      setBloquearHover(true);
      setProdAberto(false);
    }
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 768 && !clicouProdutosRef.current && !bloquearHover) {
      setProdAberto(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setProdAberto(false);
      setTimeout(() => {
        clicouProdutosRef.current = false;
        setBloquearHover(false);
      }, 300);
    }
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
            src={(process.env.PUBLIC_URL || "") + "/assets/img/brand/logo.png"}
            alt="Logo Detalhe Móveis"
            className="detalhe-logo-img"
          />
        </Link>

        {/* Botão Hamburger que vira X */}
        <div className={`detalhe-menu-hamburger ${menuAberto ? 'aberto' : ''}`} onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </div>

        {/* Fundo escuro (só aparece no mobile quando aberto) */}
        {menuAberto && <div className="detalhe-backdrop" onClick={toggleMenu}></div>}

        <nav className={`detalhe-menu-links ${menuAberto ? 'ativo' : ''}`}>
          <Link to="/" className="detalhe-nav-link" onClick={fecharTudo}>HOME</Link>
          <Link to="/about" className="detalhe-nav-link" onClick={fecharTudo}>EMPRESA</Link>

          <div
            className={`detalhe-dropdown ${prodAberto ? 'expandido' : ''} ${bloquearHover ? 'hover-bloqueado' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleDropdownClick}
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
                  <span className="detalhe-seta" onClick={(e) => expandirSubSeta(e, 'construcao')}>▼</span>
                </div>
                <div className={`detalhe-side-box ${subAberto === 'construcao' ? 'aberto-mobile' : ''}`}>
                  <Link to="/products?sub=Caixas de Correio" onClick={fecharTudo}>Caixas de Correio</Link>
                  <Link to="/products?sub=Cantoneiras" onClick={fecharTudo}>Cantoneiras</Link>
                  <Link to="/products?sub=Lixeiras" onClick={fecharTudo}>Lixeiras</Link>
                  <Link to="/products?sub=Grelhas" onClick={fecharTudo}>Grelhas</Link>
                </div>
              </div>

              {/* LUMINÁRIAS COLONIAIS */}
              <div className="detalhe-drop-item">
                <div className="detalhe-item-flex">
                  <Link to="/products?cat=Luminárias Coloniais" className="detalhe-cat-link" onClick={fecharTudo}>LUMINÁRIAS COLONIAIS</Link>
                  <span className="detalhe-seta" onClick={(e) => expandirSubSeta(e, 'luminarias')}>▼</span>
                </div>
                <div className={`detalhe-side-box ${subAberto === 'luminarias' ? 'aberto-mobile' : ''}`}>
                  <Link to="/products?sub=Luminárias Meia Cara" onClick={fecharTudo}>Luminárias Meia Cara</Link>
                  <Link to="/products?sub=Luminárias para Muro" onClick={fecharTudo}>Luminárias Para Muro</Link>
                  <Link to="/products?sub=Luminárias para Parede" onClick={fecharTudo}>Luminárias Para Parede</Link>
                  <Link to="/products?sub=Luminárias para Poste com Led" onClick={fecharTudo}>Luminárias para Poste com Led</Link>
                  <Link to="/products?sub=Luminárias para Poste" onClick={fecharTudo}>Luminárias para Poste</Link>
                  <Link to="/products?sub=Luminárias para Teto" onClick={fecharTudo}>Luminárias para Teto</Link>
                  <Link to="/products?sub=Lustres Coloniais" onClick={fecharTudo}>Lustres Coloniais</Link>
                </div>
              </div>

              {/* MÓVEIS */}
              <div className="detalhe-drop-item">
                <div className="detalhe-item-flex">
                  <Link to="/products?cat=Móveis" className="detalhe-cat-link" onClick={fecharTudo}>MÓVEIS</Link>
                  <span className="detalhe-seta" onClick={(e) => expandirSubSeta(e, 'moveis')}>▼</span>
                </div>
                <div className={`detalhe-side-box ${subAberto === 'moveis' ? 'aberto-mobile' : ''}`}>
                  <Link to="/products?sub=Balanços" onClick={fecharTudo}>Balanços</Link>
                  <Link to="/products?sub=Bancos" onClick={fecharTudo}>Bancos</Link>
                  <Link to="/products?sub=Banquetas" onClick={fecharTudo}>Banquetas</Link>
                  <Link to="/products?sub=Bistrôs" onClick={fecharTudo}>Bistrôs</Link>
                  <Link to="/products?sub=Cadeiras" onClick={fecharTudo}>Cadeiras</Link>
                  <Link to="/products?sub=Chaises" onClick={fecharTudo}>Chaises</Link>
                  <Link to="/products?sub=Conchas" onClick={fecharTudo}>Conchas</Link>
                  <Link to="/products?sub=Espreguiçadeiras" onClick={fecharTudo}>Espreguiçadeiras</Link>
                  <Link to="/products?sub=Mesas de Centro" onClick={fecharTudo}>Mesas de Centro</Link>
                  <Link to="/products?sub=Mesas de Jantar" onClick={fecharTudo}>Mesas de Jantar</Link>
                  <Link to="/products?sub=Mesas Laterais" onClick={fecharTudo}>Mesas Laterais</Link>
                  <Link to="/products?sub=Poltronas" onClick={fecharTudo}>Poltronas</Link>
                  <Link to="/products?sub=Puffs" onClick={fecharTudo}>Puffs</Link>
                  <Link to="/products?sub=Sofás" onClick={fecharTudo}>Sofás</Link>
                </div>
              </div>

              {/* POSTES COLONIAIS PARA JARDIM */}
              <div className="detalhe-drop-item">
                <div className="detalhe-item-flex">
                  <Link to="/products?cat=Postes Coloniais para Jardim" className="detalhe-cat-link" onClick={fecharTudo}>POSTES COLONIAIS PARA JARDIM</Link>
                  <span className="detalhe-seta" onClick={(e) => expandirSubSeta(e, 'postes')}>▼</span>
                </div>
                <div className={`detalhe-side-box ${subAberto === 'postes' ? 'aberto-mobile' : ''}`}>
                  <Link to="/products?sub=Poste em Alumínio Fundido e Tubo" onClick={fecharTudo}>Postes em Alumínio Fundido e Tubo</Link>
                  <Link to="/products?sub=Postes em Alumínio Tubular com Lâmpada de Led" onClick={fecharTudo}>Postes em Alumínio Tubular com Lâmpada de Led</Link>
                  <Link to="/products?sub=Postes Fundidos" onClick={fecharTudo}>Postes Fundidos</Link>
                  <Link to="/products?sub=Postes com Suporte para Placa" onClick={fecharTudo}>Postes com Suporte para Placa</Link>
                  <Link to="/products?sub=Poste Tubular" onClick={fecharTudo}>Poste Tubular</Link>
                </div>
              </div>

              {/* TAMPAS DE PASSAGEM */}
              <div className="detalhe-drop-item">
                <div className="detalhe-item-flex">
                  <Link to="/products?cat=Tampas de Passagem" className="detalhe-cat-link" onClick={fecharTudo}>TAMPAS DE PASSAGEM</Link>
                  <span className="detalhe-seta" onClick={(e) => expandirSubSeta(e, 'tampas_passagem')}>▼</span>
                </div>
                <div className={`detalhe-side-box ${subAberto === 'tampas_passagem' ? 'aberto-mobile' : ''}`}>
                  <Link to="/products?sub=Tampas de Passagem com Articulação" onClick={fecharTudo}>Tampas de Passagem com Articulação</Link>
                </div>
              </div>

              {/* TAMPAS PARA CASA DE MÁQUINAS */}
              <div className="detalhe-drop-item">
                <div className="detalhe-item-flex">
                  <Link to="/products?cat=Tampas para Casa de Máquinas" className="detalhe-cat-link" onClick={fecharTudo}>TAMPAS PARA CASA DE MÁQUINAS</Link>
                  <span className="detalhe-seta" onClick={(e) => expandirSubSeta(e, 'tampas_maquina')}>▼</span>
                </div>
                <div className={`detalhe-side-box ${subAberto === 'tampas_maquina' ? 'aberto-mobile' : ''}`}>
                  <Link to="/products?sub=Tampas para Casa de Máquinas Colmeia" onClick={fecharTudo}>Tampas para Casa de Máquinas Colmeia</Link>
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