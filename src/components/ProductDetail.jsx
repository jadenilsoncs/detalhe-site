import React from 'react';
import { useParams } from 'react-router-dom';
import { todosOsProdutos } from './Products'; // Importamos a lista que está no outro arquivo

const ProductDetail = () => {
  const { id } = useParams();
  // Procuramos o produto na lista oficial
  const produto = todosOsProdutos.find(p => p.id === parseInt(id));

  if (!produto) {
    return (
      <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Produto não encontrado</h2>
      </div>
    );
  }

  return (
    <div className="detail-container" style={{ paddingTop: '150px', paddingBottom: '50px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
        <img
          src={`/detalhe/assets/img/produtos/${produto.img}`}
          alt={produto.nome}
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
        />
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h1 style={{ marginBottom: '20px', color: '#333' }}>{produto.nome}</h1>
          <p><strong>Categoria:</strong> {produto.cat}</p>
          <p style={{ marginTop: '20px', color: '#666' }}>Entre em contato para solicitar um orçamento personalizado para este item.</p>
          <button
            className="btn-whatsapp"
            style={{ marginTop: '30px', padding: '15px 30px' }}
            onClick={() => {
              const msg = encodeURIComponent(`Olá! Quero um orçamento para: ${produto.nome}`);
              window.open(`https://wa.me/5537999571010?text=${msg}`, '_blank');
            }}
          >
            SOLICITAR ORÇAMENTO NO WHATSAPP
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;