import React, { useState, useEffect } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import { todosOsProdutos } from '../data/products';
import './Products.css';

const Products = () => {
  const location = useLocation();
  const { category } = useParams();
  const [produtosFiltrados, setProdutosFiltrados] = useState(todosOsProdutos);
  const publicUrl = process.env.PUBLIC_URL || "";
  const imgPath = publicUrl + "/assets/img/produtos/";

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const catQuery = params.get('cat');
    const subQuery = params.get('sub');

    let result = todosOsProdutos;

    // 1. Filtro vindo dos cards da Home (Links Amigáveis)
    if (category) {
      if (category === 'construcao') {
        result = todosOsProdutos.filter(p => p.cat === "Construção");
      } else if (category === 'luminarias-e-postes') {
        // Puxa tanto luminárias quanto postes
        result = todosOsProdutos.filter(p => p.cat === "Luminárias Coloniais" || p.cat === "Postes Coloniais para Jardim");
      } else if (category === 'linha-premium') {
        result = todosOsProdutos.filter(p => p.cat === "Móveis");
      }
    }
    // 2. Filtro vindo do Footer (?cat= ou ?sub=)
    else if (catQuery) {
      result = todosOsProdutos.filter(p => p.cat === catQuery);
    }
    else if (subQuery) {
      result = todosOsProdutos.filter(p => p.sub === subQuery);
    }

    setProdutosFiltrados(result);
    window.scrollTo(0, 0);
  }, [location.search, category]);

  const getTitle = () => {
    if (category === 'construcao') return "LINHA CONSTRUÇÃO";
    if (category === 'luminarias-e-postes') return "LUMINÁRIAS E POSTES";
    if (category === 'linha-premium') return "LINHA PREMIUM";

    return new URLSearchParams(location.search).get('sub') ||
           new URLSearchParams(location.search).get('cat') ||
           "TODOS OS PRODUTOS";
  };

  const handleWhatsAppListClick = (prod) => {
    const baseUrl = window.location.origin + "/detalhe";
    const productPageUrl = `${baseUrl}/product/${prod.id}`;
    const text = `Olá! Gostaria de um orçamento para o produto: *${prod.nome}*\n\nLink do produto: ${productPageUrl}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5537999571010?text=${encodedText}`, '_blank');
  };

  return (
    <div className="products-page-container">
      <div className="products-content-wrapper">
        <h2 className="products-title">{getTitle()}</h2>
        <div className="divider-red"></div>
        <div className="products-grid">
          {produtosFiltrados.length > 0 ? (
            produtosFiltrados.map(prod => (
              <div key={prod.id} className="product-card">
                <Link to={`/product/${prod.id}`} className="product-main-link">
                  <div className="product-image-box">
                    <img
                      src={imgPath + prod.img}
                      alt={prod.nome}
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/250x250?text=Sem+Foto'; }}
                    />
                  </div>
                  <div className="product-info-text"><h3>{prod.nome}</h3></div>
                </Link>
                <div className="product-info-actions">
                  <div className="product-actions">
                    <Link to={`/product/${prod.id}`} className="btn-saiba-mais">SAIBA MAIS</Link>
                    <button className="btn-whatsapp" onClick={() => handleWhatsAppListClick(prod)}>WHATSAPP</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', width: '100%', padding: '50px' }}>Nenhum produto encontrado.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;