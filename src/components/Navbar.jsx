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

  // Fecha o dropdown quando a rota mudar (navegação ocorreu)
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
    window.scrollTo(0, 0);
  };

  const toggleMenu = () => setMenuAberto(!menuAberto);

  // Handler para fechar dropdown ao clicar em qualquer lugar dentro dele
  const handleDropdownClick = (e) => {
    // Se o clique foi em um link, fecha o dropdown e bloqueia hover
    if (e.target.tagName === 'A' && window.innerWidth > 768) {
      clicouProdutosRef.current = true;
      setBloquearHover(true);
      setProdAberto(false);
    }
  };

  // Lógica híbrida: Funciona com Hover no PC e Clique no Mobile
  const handleMouseEnter = () => {
    if (window.innerWidth > 768 && !clicouProdutosRef.current && !bloquearHover) {
      setProdAberto(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setProdAberto(false);
      // Reseta as flags após um pequeno delay
      setTimeout(() => {
        clicouProdutosRef.current = false;
        setBloquearHover(false);
      }, 300);
    }
  };

  // Adicionar esta função após handleMouseLeave
const handleProdutosClick = (e) => {
  if (window.innerWidth > 768) {
    // No PC, fecha o dropdown ao clicar no link imediatamente
    clicouProdutosRef.current = true; // Marca imediatamente (síncrono)
    setProdAberto(false); // Fecha o dropdown
    // O useEffect vai garantir que permaneça fechado após navegação
  }
  // No mobile, o fecharTudo já cuida disso
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
            onError={(e) => {
              console.error("Erro ao carregar logo:", e.target.src);
            }}
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
            className={`detalhe-dropdown ${prodAberto ? 'expandido' : ''} ${bloquearHover ? 'hover-bloqueado' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleDropdownClick}
          >
            <div className="detalhe-item-flex">
              <Link 
                to="/products" 
                className="detalhe-nav-link link-texto" 
                onClick={(e) => {
                  if (window.innerWidth > 768) {
                    clicouProdutosRef.current = true;
                    setBloquearHover(true);
                    setProdAberto(false);
                  }
                  fecharTudo();
                }}
              >
                PRODUTOS
              </Link>
              <span className="detalhe-seta" onClick={expandirProdutosSeta}>▼</span>
            </div>

            <div className="detalhe-drop-box">
              {/* CONSTRUÇÃO */}
              <div className="detalhe-drop-item">
                <div className="detalhe-item-flex">
                  <Link 
                    to="/products?cat=Construção" 
                    className="detalhe-cat-link" 
                    onMouseDown={(e) => {
                      if (window.innerWidth > 768) {
                        setProdAberto(false);
                        clicouProdutosRef.current = true;
                      }
                    }}
                    onClick={(e) => {
                      if (window.innerWidth > 768) {
                        setProdAberto(false);
                        clicouProdutosRef.current = true;
                      }
                      fecharTudo();
                    }}
                  >
                    CONSTRUÇÃO
                  </Link>
                  <span className="detalhe-seta" onClick={(e) => expandirSubSeta(e, 'cons')}>▼</span>
                </div>
                <div className={`detalhe-side-box ${subAberto === 'cons' ? 'aberto-mobile' : ''}`}>
                  <Link 
                    to="/products?sub=Caixas de Correio" 
                    onClick={(e) => {
                      if (window.innerWidth > 768) {
                        setProdAberto(false);
                        clicouProdutosRef.current = true;
                      }
                      fecharTudo();
                    }}
                  >
                    Caixas de Correio
                  </Link>
                  <Link 
                    to="/products?sub=Cantoneiras" 
                    onClick={(e) => {
                      if (window.innerWidth > 768) {
                        setProdAberto(false);
                        clicouProdutosRef.current = true;
                      }
                      fecharTudo();
                    }}
                  >
                    Cantoneiras
                  </Link>
                  <Link 
                    to="/products?sub=Lixeiras" 
                    onClick={(e) => {
                      if (window.innerWidth > 768) {
                        setProdAberto(false);
                        clicouProdutosRef.current = true;
                      }
                      fecharTudo();
                    }}
                  >
                    Lixeiras
                  </Link>
                  <Link 
                    to="/products?sub=Grelhas" 
                    onClick={(e) => {
                      if (window.innerWidth > 768) {
                        setProdAberto(false);
                        clicouProdutosRef.current = true;
                      }
                      fecharTudo();
                    }}
                  >
                    Grelhas
                  </Link>
                </div>
              </div>

              {/* LUMINÁRIAS */}
              <div className="detalhe-drop-item">
                <div className="detalhe-item-flex">
                  <Link 
                    to="/products?cat=Luminárias" 
                    className="detalhe-cat-link" 
                    onMouseDown={(e) => {
                      if (window.innerWidth > 768) {
                        setProdAberto(false);
                        clicouProdutosRef.current = true;
                      }
                    }}
                    onClick={(e) => {
                      if (window.innerWidth > 768) {
                        setProdAberto(false);
                        clicouProdutosRef.current = true;
                      }
                      fecharTudo();
                    }}
                  >
                    LUMINÁRIAS
                  </Link>
                  <span className="detalhe-seta" onClick={(e) => expandirSubSeta(e, 'lum')}>▼</span>
                </div>
                <div className={`detalhe-side-box ${subAberto === 'lum' ? 'aberto-mobile' : ''}`}>
                  <Link 
                    to="/products?sub=Luminárias Meia Cara" 
                    onClick={(e) => {
                      if (window.innerWidth > 768) {
                        setProdAberto(false);
                        clicouProdutosRef.current = true;
                      }
                      fecharTudo();
                    }}
                  >
                    Meia Cara
                  </Link>
                  <Link 
                    to="/products?sub=Luminárias Para Muro" 
                    onClick={(e) => {
                      if (window.innerWidth > 768) {
                        setProdAberto(false);
                        clicouProdutosRef.current = true;
                      }
                      fecharTudo();
                    }}
                  >
                    Para Muro
                  </Link>
                  <Link 
                    to="/products?sub=Lustres Coloniais" 
                    onClick={(e) => {
                      if (window.innerWidth > 768) {
                        setProdAberto(false);
                        clicouProdutosRef.current = true;
                      }
                      fecharTudo();
                    }}
                  >
                    Lustres
                  </Link>
                </div>
              </div>

              {/* MÓVEIS */}
              <div className="detalhe-drop-item">
                <div className="detalhe-item-flex">
                  <Link 
                    to="/products?cat=Móveis" 
                    className="detalhe-cat-link" 
                    onMouseDown={(e) => {
                      if (window.innerWidth > 768) {
                        setProdAberto(false);
                        clicouProdutosRef.current = true;
                      }
                    }}
                    onClick={(e) => {
                      if (window.innerWidth > 768) {
                        setProdAberto(false);
                        clicouProdutosRef.current = true;
                      }
                      fecharTudo();
                    }}
                  >
                    MÓVEIS
                  </Link>
                  <span className="detalhe-seta" onClick={(e) => expandirSubSeta(e, 'mov')}>▼</span>
                </div>
                <div className={`detalhe-side-box ${subAberto === 'mov' ? 'aberto-mobile' : ''}`}>
                  <Link 
                    to="/products?sub=Balanços" 
                    onClick={(e) => {
                      if (window.innerWidth > 768) {
                        setProdAberto(false);
                        clicouProdutosRef.current = true;
                      }
                      fecharTudo();
                    }}
                  >
                    Balanços
                  </Link>
                  <Link 
                    to="/products?sub=Bancos" 
                    onClick={(e) => {
                      if (window.innerWidth > 768) {
                        setProdAberto(false);
                        clicouProdutosRef.current = true;
                      }
                      fecharTudo();
                    }}
                  >
                    Bancos
                  </Link>
                  <Link 
                    to="/products?sub=Mesas De Jantar" 
                    onClick={(e) => {
                      if (window.innerWidth > 768) {
                        setProdAberto(false);
                        clicouProdutosRef.current = true;
                      }
                      fecharTudo();
                    }}
                  >
                    Mesas
                  </Link>
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