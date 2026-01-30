import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { todosOsProdutos } from '../data/products'; // IMPORTANTE: Pega do arquivo novo
import './Products.css';

const Products = () => {
  const location = useLocation();
  const [produtosFiltrados, setProdutosFiltrados] = useState(todosOsProdutos);
  const publicUrl = process.env.PUBLIC_URL || "";
  const imgPath = publicUrl + "/assets/img/produtos/";

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('cat');
    const sub = params.get('sub');

    let result = todosOsProdutos;
    if (cat) result = todosOsProdutos.filter(p => p.cat === cat);
    if (sub) result = todosOsProdutos.filter(p => p.sub === sub);

    setProdutosFiltrados(result);
    window.scrollTo(0, 0);
  }, [location.search]);

  const handleWhatsAppListClick = (prod) => {
    const baseUrl = window.location.origin + publicUrl;
    const productPageUrl = `${baseUrl}/product/${prod.id}`;
    const text = `Olá! Gostaria de um orçamento para o produto: *${prod.nome}*\n\nLink do produto: ${productPageUrl}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5537999571010?text=${encodedText}`, '_blank');
  };
  return (
    <div className="products-page-container">
      <div className="products-content-wrapper">
        <h2 className="products-title">
          {new URLSearchParams(location.search).get('sub') ||
           new URLSearchParams(location.search).get('cat') ||
           "TODOS OS PRODUTOS"}
        </h2>
        <div className="divider-red"></div>
        <div className="products-grid">
          {produtosFiltrados.map(prod => (
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
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;