import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Products.css'; // Garante que o CSS específico seja carregado
//import { factoryProducts } from '../data/products.js';

// Mantenha sua lista de produtos EXATAMENTE como estava
export const todosOsProdutos = [
  { id: 1, nome: "Balanço Ametista em Corda", cat: "Móveis", sub: "Balanços", img: "balanco-ametista-em-corda.webp" },
  { id: 2, nome: "Balanço Ametista Tricot Náutico", cat: "Móveis", sub: "Balanços", img: "balanco-ametista-em-tricot-nautico.webp" },
  { id: 3, nome: "Balanço Miklos", cat: "Móveis", sub: "Balanços", img: "balanco-miklos.webp" },
  { id: 4, nome: "Balanço Petala", cat: "Móveis", sub: "Balanços", img: "balanco-petala.webp" },
  { id: 5, nome: "Banco Atlas em Madeira", cat: "Móveis", sub: "Bancos", img: "banco-atlas-em-madeira.webp" },
  { id: 6, nome: "Banco Individual Toronto", cat: "Móveis", sub: "Bancos", img: "banco-individual-toronto.webp" },
  { id: 7, nome: "Cadeira Ametista", cat: "Móveis", sub: "Cadeiras", img: "cadeira-ametista.jpg" },
  { id: 8, nome: "Cadeira Curves", cat: "Móveis", sub: "Cadeiras", img: "cadeira-curves.jpg" },
  { id: 9, nome: "Banqueta Diamante Sem Braços", cat: "Móveis", sub: "Banquetas", img: "banqueta-diamante-sem-bracos.jpg" },
  { id: 10, nome: "Banqueta Quality", cat: "Móveis", sub: "Banquetas", img: "banqueta-quality.jpg" },
  { id: 11, nome: "Bistrô Diamante Madeira", cat: "Móveis", sub: "Bistrôs", img: "bistro-diamante-com-tampo-em-madeira.jpg" },
  { id: 12, nome: "Caixa Correio Bicicleta", cat: "Construção", sub: "Caixas de Correio", img: "caixa-correio-bicicleta-com-pe.jpg" },
  { id: 13, nome: "Cantoneira 01", cat: "Construção", sub: "Cantoneiras", img: "cantoneira-01.jpg" },
  { id: 14, nome: "Lixeira Flor de Luz", cat: "Construção", sub: "Lixeiras", img: "lixeira-flor-de-luz.jpg" },
  { id: 15, nome: "Grelha com Caixilho", cat: "Construção", sub: "Grelhas", img: "grelha-com-caixilho.jpg" },
  { id: 16, nome: "Luminária Atlanta", cat: "Luminárias Coloniais", sub: "Luminárias Para Parede", img: "luminaria-com-braco-atlanta.jpg" },
  { id: 17, nome: "Luminária Florença", cat: "Luminárias Coloniais", sub: "Luminárias Para Parede", img: "luminaria-com-braco-florenca.jpg" },
  { id: 18, nome: "Luminária Globo Grande", cat: "Luminárias Coloniais", sub: "Luminárias Para Parede", img: "luminaria-com-braco-globo-grande.jpg" },
  { id: 19, nome: "Poste Alasca", cat: "Postes Coloniais Para Jardim", sub: "Postes Alumínio Fundido E Tubos", img: "poste-alasca-pt-273.jpg" },
  { id: 20, nome: "Poste Amazonas 01 Globo", cat: "Postes Coloniais Para Jardim", sub: "Postes Alumínio Fundido E Tubos", img: "poste-amazonas-com-01-luminaria-pt-144.jpg" },
  { id: 21, nome: "Poste Amsterda com 02 Globos", cat: "Postes Coloniais Para Jardim", sub: "Postes Alumínio Fundido E Tubos", img: "poste-amsterda-com-02-globos.webp" },
  { id: 22, nome: "Tampa para Casa de Máquinas Colmeia com Rebaixo e Grelha Aparente", cat: "Tampas Para Casa De Máquinas", sub: "", img: "tampa-para-casa-de-maquinas-colmeia-com-rebaixo-e-grelha-aparente.jpg" },
  { id: 23, nome: "Tampa de Passagem com Articulação", cat: "Tampas De Passagem", sub: "", img: "tampa-de-passagem-com-articulacao.jpg" },
  { id: 24, nome: "Banco Toronto", cat: "Móveis", sub: "Bancos", img: "banco-toronto.webp" },
  { id: 25, nome: "Banqueta Angra em Corda Náutica", cat: "Móveis", sub: "Banquetas", img: "banqueta-angra-em-corda-nautica.webp" },
  { id: 26, nome: "Banqueta Wood", cat: "Móveis", sub: "Banquetas", img: "banqueta-wood.jpg" },
  { id: 27, nome: "Banqueta Ametista Em Tricot Nautico", cat: "Móveis", sub: "Banquetas", img: "banqueta-ametista-em-tricot-nautico.webp" },
  { id: 28, nome: "Banqueta Diamante", cat: "Móveis", sub: "Banquetas", img: "banqueta-diamante.webp" },
];

const Products = () => {
  const location = useLocation();
  const [produtosFiltrados, setProdutosFiltrados] = useState(todosOsProdutos);
  // Garante caminho correto na Locaweb e local
  const imgPath = (process.env.PUBLIC_URL || "") + "/assets/img/produtos/";

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
        {/* Adiciona a divisória vermelha para consistência */}
        <div className="divider-red"></div>

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
                  <Link to={`/product/${prod.id}`} className="btn-saiba-mais">
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