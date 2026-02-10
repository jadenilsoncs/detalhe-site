import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { todosOsProdutos } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const produto = todosOsProdutos.find(p => p.id === parseInt(id));
  const publicUrl = process.env.PUBLIC_URL || "";

  if (!produto) {
    return (
      <div className="product-not-found"><h2>Produto não encontrado</h2></div>
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
            src={`${publicUrl}/assets/img/produtos/full/${produto.img}`}
            alt={`${produto.nome} - Detalhe Móveis e Alumínios`}
            width="850"
            height="850"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/500x500?text=Imagem+Indisponível'; }}
          />
        </div>
        <div className="detail-info-col">
          <h1 className="detail-title">{produto.nome}</h1>

          {/* Centralizei o divisor para acompanhar os textos */}
          <div className="detail-divider-left" style={{ margin: '10px auto' }}></div>

          {/* Texto de Categoria Centralizado */}
          <p className="detail-category" style={{ textAlign: 'center', width: '100%' }}>
            <strong>Categoria:</strong> {produto.cat} {produto.sub ? `> ${produto.sub}` : ''}
          </p>

          {/* Texto da descPadrao Centralizado */}
          <p className="detail-description" style={{ textAlign: 'center', width: '100%' }}>
            {produto.desc}
          </p>

          {produto.especificacoes && (
            <div className="specs-container">
              <h3 className="specs-title">{produto.especificacoes.titulo}</h3>
              <div className="table-responsive">
                <table className="specs-table">
                  <thead>
                    <tr>
                      {produto.especificacoes.colunas.map((col, index) => (
                        <th key={index}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {produto.especificacoes.dados.map((linha, rowIndex) => (
                      <tr key={rowIndex}>
                        {linha.map((celula, cellIndex) => (
                          <td key={cellIndex}>{celula}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <button className="btn-orcamento-grande" onClick={handleWhatsAppClick}>SOLICITAR ORÇAMENTO NO WHATSAPP</button>
          <Link to="/products" className="btn-voltar-discreto">← Voltar para todos os produtos</Link>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;