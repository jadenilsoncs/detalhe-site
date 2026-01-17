import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

// Mantenha sua lista aqui como você prefere
export const todosOsProdutos = [
  // --- BALANÇOS ---
      { id: 1, nome: "Balanço Ametista em Corda", cat: "Móveis", sub: "Balanços", img: "balanco-ametista-em-corda.webp" },
      { id: 2, nome: "Balanço Ametista Tricot Náutico", cat: "Móveis", sub: "Balanços", img: "balanco-ametista-em-tricot-nautico.webp" },
      { id: 3, nome: "Balanço Miklos", cat: "Móveis", sub: "Balanços", img: "balanco-miklos.webp" },
      { id: 4, nome: "Balanço Petala", cat: "Móveis", sub: "Balanços", img: "balanco-petala.webp" },

      // --- BANCOS E CADEIRAS ---
      { id: 5, nome: "Banco Atlas em Madeira", cat: "Móveis", sub: "Bancos", img: "banco-atlas-em-madeira.webp" },
      { id: 6, nome: "Banco Toronto", cat: "Móveis", sub: "Bancos", img: "banco-toronto.jpg" },
      { id: 7, nome: "Cadeira Ametista", cat: "Móveis", sub: "Cadeiras", img: "cadeira-ametista.jpg" },
      { id: 8, nome: "Cadeira Curves", cat: "Móveis", sub: "Cadeiras", img: "cadeira-curves.jpg" },

      // --- BANQUETAS E BISTRÔS ---
      { id: 9, nome: "Banqueta Diamante", cat: "Móveis", sub: "Banquetas", img: "banqueta-diamante.jpg" },
      { id: 10, nome: "Banqueta Quality", cat: "Móveis", sub: "Banquetas", img: "banqueta-quality.jpg" },
      { id: 11, nome: "Bistrô Diamante Madeira", cat: "Móveis", sub: "Bistrôs", img: "bistro-diamante-com-tampo-em-madeira.jpg" },

      // --- CONSTRUÇÃO (CAIXAS, CANTONEIRAS, LIXEIRAS) ---
      { id: 12, nome: "Caixa Correio Bicicleta", cat: "Construção", sub: "Caixas de Correio", img: "caixa-correio-bicicleta-com-pe.jpg" },
      { id: 13, nome: "Cantoneira 01", cat: "Construção", sub: "Cantoneiras", img: "cantoneira-01.jpg" },
      { id: 14, nome: "Lixeira Flor de Luz", cat: "Construção", sub: "Lixeiras", img: "lixeira-flor-de-luz.jpg" },
      { id: 15, nome: "Grelha com Caixilho", cat: "Construção", sub: "Grelhas", img: "grelha-com-caixilho.jpg" },

      // --- LUMINÁRIAS ---
      { id: 16, nome: "Luminária Atlanta", cat: "Luminárias Coloniais", sub: "Luminárias Para Parede", img: "luminaria-com-braco-atlanta.jpg" },
      { id: 17, nome: "Luminária Florença", cat: "Luminárias Coloniais", sub: "Luminárias Para Parede", img: "luminaria-com-braco-florenca.jpg" },
      { id: 18, nome: "Luminária Globo Grande", cat: "Luminárias Coloniais", sub: "Luminárias Para Parede", img: "luminaria-com-braco-globo-grande.jpg" },

      // --- POSTES ---
      { id: 19, nome: "Poste Alasca", cat: "Postes Coloniais Para Jardim", sub: "Postes Alumínio Fundido E Tubos", img: "poste-alasca-pt-273.jpg" },
      { id: 20, nome: "Poste Amazonas 01 Globo", cat: "Postes Coloniais Para Jardim", sub: "Postes Alumínio Fundido E Tubos", img: "poste-amazonas-com-01-luminaria-pt-144.jpg" },
      { id: 21, nome: "Poste Amsterda 02 Globos", cat: "Postes Coloniais Para Jardim", sub: "Postes Alumínio Fundido E Tubos", img: "poste-amsterda-com-02-globos.png" },

      // --- TAMPAS ---
      { id: 22, nome: "Tampa Casa de Máquina Colmeia", cat: "Tampas Para Casa De Máquina", sub: "", img: "tampa-casa-de-maquinas-colmeia-com-rebaixo.jpg" },
      { id: 23, nome: "Tampa de Passagem com Articulação", cat: "Tampas De Passagem", sub: "", img: "tampa-de-passagem-com-articulacao.jpg" },
];

const Products = () => {
  const location = useLocation();
  const [produtosFiltrados, setProdutosFiltrados] = useState(todosOsProdutos);
  const imgPath = "/detalhe/assets/img/produtos/";

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

  return (
    <div className="products-page-container">
      <div className="products-content-wrapper">
        <h2 className="products-title">
          {new URLSearchParams(location.search).get('sub') ||
           new URLSearchParams(location.search).get('cat') ||
           "TODOS OS PRODUTOS"}
        </h2>

        <div className="products-grid">
          {produtosFiltrados.map(prod => (
            <div key={prod.id} className="product-card">
              <div className="product-image-box">
                <img
                  src={imgPath + prod.img}
                  alt={prod.nome}
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/250x250?text=Sem+Foto'; }}
                />
              </div>
              <div className="product-info">
                <h3>{prod.nome}</h3>
                <div className="product-actions">
                  <Link to={`/product/${prod.id}`} className="btn-saiba-mais" style={{ textDecoration: 'none', textAlign: 'center', lineHeight: '30px' }}>
                    SAIBA MAIS
                  </Link>

                  <button
                    className="btn-whatsapp"
                    onClick={() => {
                      const msg = encodeURIComponent(`Olá! Gostaria de informações sobre: ${prod.nome}`);
                      window.open(`https://wa.me/5537999571010?text=${msg}`, '_blank');
                    }}
                  >
                    WHATSAPP
                  </button>
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