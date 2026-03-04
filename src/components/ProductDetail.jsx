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

  // Função para renderizar as especificações - divide em duas tabelas se >4 colunas
  const renderEspecificacoes = () => {
    if (!produto.especificacoes) return null;

    const { titulo, colunas, dados } = produto.especificacoes;
    //const breakpoint = 3; // Divide após 4 colunas.
    const breakpoint = window.innerWidth > 850 ? 20 : 3; // Divide dinamicamente.

    if (colunas.length <= breakpoint) {
      // Tabela única (com scroll se necessário, como era antes)
      return (
        <div className="specs-container">
          <h3 className="specs-title">{titulo}</h3>
          <div className="table-responsive">
            <table className="specs-table">
              <thead>
                <tr>
                  {colunas.map((col, index) => (
                    <th key={index}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dados.map((linha, rowIndex) => (
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
      );
    }

    // Divide em duas tabelas
    const primeiraParteColunas = colunas.slice(0, breakpoint);
    const segundaParteColunas = colunas.slice(breakpoint);

    const primeiraParteDados = dados.map(linha => linha.slice(0, breakpoint));
    const segundaParteDados = dados.map(linha => linha.slice(breakpoint));

    return (
      <div className="specs-container">
        <h3 className="specs-title">{titulo}</h3>

        {/* Primeira tabela */}
        <div className="table-responsive">
          <table className="specs-table">
            <thead>
              <tr>
                {primeiraParteColunas.map((col, index) => (
                  <th key={index}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {primeiraParteDados.map((linha, rowIndex) => (
                <tr key={rowIndex}>
                  {linha.map((celula, cellIndex) => (
                    <td key={cellIndex}>{celula}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Divisor vermelho no meio */}
        <div style={{
          width: '50px',
          height: '4px',
          backgroundColor: '#9b1c1c',
          margin: '25px auto',
          borderRadius: '2px'
        }} />

        {/* Segunda tabela */}
        <div className="table-responsive">
          <table className="specs-table">
            <thead>
              <tr>
                {segundaParteColunas.map((col, index) => (
                  <th key={index}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {segundaParteDados.map((linha, rowIndex) => (
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
    );
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

          {renderEspecificacoes()}

          <button className="btn-orcamento-grande" onClick={handleWhatsAppClick}>SOLICITAR ORÇAMENTO NO WHATSAPP</button>
          
          <div className="pc-links-container">
            <Link to="/products" className="btn-voltar-discreto pc-only-link">&lt;- Voltar</Link>
            <Link to="/products" className="btn-voltar-discreto">Todos os Produtos →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;