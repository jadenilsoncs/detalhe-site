import React from 'react';
import { useParams } from 'react-router-dom';
import { todosOsProdutos } from '../data/products'; // IMPORTANTE: Pega do arquivo novo
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const produto = todosOsProdutos.find(p => p.id === parseInt(id));
  const publicUrl = process.env.PUBLIC_URL || "";
  if (!produto) {
    return (
      <div className="product-not-found">
        <h2>Produto não encontrado</h2>
      </div>
    );
  }
  const handleWhatsAppClick = () => {
    const productPageUrl = window.location.href;
    const text = `Olá! Gostaria de um orçamento para o produto: *${produto.nome}*\n\nLink do produto: ${productPageUrl}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5537999571010?text=${encodedText}`, '_blank');
  };
  return (
    <div className="detail-container">
      <div className="detail-wrapper">
        <div className="detail-image-col">
          <img
            src={`${publicUrl}/assets/img/produtos/${produto.img}`}
            alt={produto.nome}
            onError={(e) => { e.target.src = 'https://via.placeholder.com/500x500?text=Imagem+Indisponível'; }}
          />
        </div>
        <div className="detail-info-col">
          <h1 className="detail-title">{produto.nome}</h1>
          <div className="detail-divider-left"></div>

          <p className="detail-category">
            <strong>Categoria:</strong> {produto.cat} {produto.sub ? `> ${produto.sub}` : ''}
          </p>
          <p className="detail-description">
            Fabricado com estrutura de alumínio de alta resistência e acabamento artesanal.
            Ideal para áreas externas e internas, unindo conforto e durabilidade.
            Entre em contato para solicitar um orçamento personalizado para este item.
          </p>
          <button className="btn-orcamento-grande" onClick={handleWhatsAppClick}>
            SOLICITAR ORÇAMENTO NO WHATSAPP
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;