import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Products.css';
// Banco de Dados Permanente
export const todosOsProdutos = [
  { id: 1, nome: "Balanço Ametista em Corda", cat: "Móveis", sub: "Balanços", img: "balanco-ametista-em-corda.webp" },
  { id: 2, nome: "Balanço Ametista Tricot Náutico", cat: "Móveis", sub: "Balanços", img: "balanco-ametista-em-tricot-nautico.webp" },
  { id: 3, nome: "Balanço Miklos", cat: "Móveis", sub: "Balanços", img: "balanco-miklos.webp" },
  { id: 4, nome: "Balanço Petala", cat: "Móveis", sub: "Balanços", img: "balanco-petala.webp" },
  { id: 5, nome: "Banco Atlas em Madeira", cat: "Móveis", sub: "Bancos", img: "banco-atlas-em-madeira.webp" },
  { id: 6, nome: "Banco Individual Toronto", cat: "Móveis", sub: "Bancos", img: "banco-individual-toronto.webp" },
  { id: 7, nome: "Banco Toronto", cat: "Móveis", sub: "Bancos", img: "banco-toronto.webp" },
  { id: 8, nome: "Banqueta Ametista Em Tricot Nautico", cat: "Móveis", sub: "Banquetas", img: "banqueta-ametista-em-tricot-nautico.webp" },
  { id: 9, nome: "Banqueta Angra em Corda Náutica", cat: "Móveis", sub: "Banquetas", img: "banqueta-angra-em-corda-nautica.webp" },
  { id: 10, nome: "Banqueta Diamante", cat: "Móveis", sub: "Banquetas", img: "banqueta-diamante.webp" },
  { id: 11, nome: "Banqueta Diamante Sem Braços", cat: "Móveis", sub: "Banquetas", img: "banqueta-diamante-sem-bracos.webp" },
  { id: 12, nome: "Banqueta Quality", cat: "Móveis", sub: "Banquetas", img: "banqueta-quality.webp" },
  { id: 13, nome: "Banqueta Wood", cat: "Móveis", sub: "Banquetas", img: "banqueta-wood.webp" },
  { id: 14, nome: "Bistrô Diamante com Tampo em Madeira", cat: "Móveis", sub: "Bistrôs", img: "bistro-diamante-com-tampo-em-madeira.webp" },
  { id: 15, nome: "Bistrô Laurence com Champanheira", cat: "Móveis", sub: "Bistrôs", img: "bistro-laurence-com-champanheira.webp" },
  { id: 16, nome: "Cadeira Ametista", cat: "Móveis", sub: "Cadeiras", img: "cadeira-ametista.webp" },
  { id: 17, nome: "Cadeira Curves", cat: "Móveis", sub: "Cadeiras", img: "cadeira-curves.webp" },
  { id: 18, nome: "Cadeira Diamante", cat: "Móveis", sub: "Cadeiras", img: "cadeira-diamante.webp" },
  { id: 19, nome: "Caixa de Correio Americana com Pé", cat: "Construção", sub: "Caixas de Correio", img: "caixa-de-correio-americana-com-pe.webp" },
  { id: 20, nome: "Caixa de Correio Bicicleta com Pé", cat: "Construção", sub: "Caixas de Correio", img: "caixa-de-correio-bicicleta-com-pe.webp" },
  { id: 21, nome: "Caixa de Correio Casinha", cat: "Construção", sub: "Caixas de Correio", img: "caixa-de-correio-casinha.webp" },
  { id: 22, nome: "Caixa de Correio Nude com Pé", cat: "Construção", sub: "Caixas de Correio", img: "caixa-de-correio-nude-com-pe.webp" },
  { id: 23, nome: "Caixa de Correio Pombinho", cat: "Construção", sub: "Caixas de Correio", img: "caixa-de-correio-pombinho.webp" },
  { id: 24, nome: "Caixa de Correio Pombo", cat: "Construção", sub: "Caixas de Correio", img: "caixa-de-correio-pombo.webp" },
  { id: 25, nome: "Caixa de Correio para Revista e Jornal", cat: "Construção", sub: "Caixas de Correio", img: "caixa-de-correio-para-revista-e-jornal.webp" },
  { id: 26, nome: "Caixa de Correio Turquesa", cat: "Construção", sub: "Caixas de Correio", img: "caixa-de-correio-turquesa.webp" },
  { id: 27, nome: "Cantoneira 01", cat: "Construção", sub: "Cantoneiras", img: "cantoneira-01.webp" },
  { id: 28, nome: "Cantoneira 02", cat: "Construção", sub: "Cantoneiras", img: "cantoneira-02.webp" },
  { id: 29, nome: "Cantoneira 03", cat: "Construção", sub: "Cantoneiras", img: "cantoneira-03.webp" },
  { id: 30, nome: "Cantoneira 04", cat: "Construção", sub: "Cantoneiras", img: "cantoneira-04.webp" },
  { id: 31, nome: "Cantoneira 05", cat: "Construção", sub: "Cantoneiras", img: "cantoneira-05.webp" },
  { id: 32, nome: "Grelha com Caixilho", cat: "Construção", sub: "Grelhas", img: "grelha-com-caixilho.webp" },
  { id: 33, nome: "Lixeira Flor de Luz", cat: "Construção", sub: "Lixeiras", img: "lixeira-flor-de-luz.webp" },
  { id: 34, nome: "Luminária com Braço Atlanta", cat: "Luminárias Coloniais", sub: "Luminárias para Parede", img: "luminaria-com-braco-atlanta.webp" },
  { id: 35, nome: "Luminária com Braço Belize", cat: "Luminárias Coloniais", sub: "Luminárias para Parede", img: "luminaria-com-braco-belize.webp" },
  { id: 36, nome: "Luminária com Braço Dinamarca", cat: "Luminárias Coloniais", sub: "Luminárias para Parede", img: "luminaria-com-braco-dinamarca.webp" },
  { id: 37, nome: "Luminária com Braço e Globo Grande", cat: "Luminárias Coloniais", sub: "Luminárias para Parede", img: "luminaria-com-braco-e-globo-grande.webp" },
  { id: 38, nome: "Luminária com Braço e Globo Pequeno 01", cat: "Luminárias Coloniais", sub: "Luminárias para Parede", img: "luminaria-com-braco-e-globo-pequeno-01.webp" },
  { id: 39, nome: "Luminária com Braço e Globo Pequeno 02", cat: "Luminárias Coloniais", sub: "Luminárias para Parede", img: "luminaria-com-braco-e-globo-pequeno-02.webp" },
  { id: 40, nome: "Luminária com Braço e Globo Pequeno 03", cat: "Luminárias Coloniais", sub: "Luminárias para Parede", img: "luminaria-com-braco-e-globo-pequeno-03.webp" },
  { id: 41, nome: "Luminária com Braço Florença", cat: "Luminárias Coloniais", sub: "Luminárias para Parede", img: "luminaria-com-braco-florenca.webp" },
  { id: 42, nome: "Luminária com Braço Francesa", cat: "Luminárias Coloniais", sub: "Luminárias para Parede", img: "luminaria-com-braco-francesa.webp" },
  { id: 43, nome: "Luminária com Braço Holandesa", cat: "Luminárias Coloniais", sub: "Luminárias para Parede", img: "luminaria-com-braco-holandesa.webp" },
  { id: 44, nome: "Luminária com Braço Ipanema", cat: "Luminárias Coloniais", sub: "Luminárias para Parede", img: "luminaria-com-braco-ipanema.webp" },
  { id: 45, nome: "Luminária com Braço Italiana Grande", cat: "Luminárias Coloniais", sub: "Luminárias para Parede", img: "luminaria-com-braco-italiana-grande.webp" },
  { id: 46, nome: "Luminária com Braço Londres", cat: "Luminárias Coloniais", sub: "Luminárias para Parede", img: "luminaria-com-braco-londres.webp" },
  { id: 47, nome: "Luminária com Braço Madri", cat: "Luminárias Coloniais", sub: "Luminárias para Parede", img: "luminaria-com-braco-madri.webp" },
  { id: 48, nome: "Luminária com Braço Madri Menor", cat: "Luminárias Coloniais", sub: "Luminárias para Parede", img: "luminaria-com-braco-madri-menor.webp" },
  { id: 49, nome: "Luminária com Braço Portugal", cat: "Luminárias Coloniais", sub: "Luminárias para Parede", img: "luminaria-com-braco-portugal.webp" },
  { id: 50, nome: "Luminária com Braço Canadá", cat: "Luminárias Coloniais", sub: "Luminárias para Parede", img: "luminarias-com-braco-canada.webp" },
  { id: 51, nome: "Luminária com Braço Canadá Menor", cat: "Luminárias Coloniais", sub: "Luminárias para Parede", img: "luminarias-com-braco-canada-menor.webp" },
  { id: 52, nome: "Poste Alasca PT 273", cat: "Postes Coloniais para Jardim", sub: "Poste em Alumínio Fundido e Tubo", img: "poste-alasca-pt-273.webp" },
  { id: 53, nome: "Poste Amazonas com 01 Luminária PT 144", cat: "Postes Coloniais para Jardim", sub: "Poste em Alumínio Fundido e Tubo", img: "poste-amazonas-com-01-luminaria-pt-144.webp" },
  { id: 54, nome: "Poste Amazonas com 01 Globo PT 145 G", cat: "Postes Coloniais para Jardim", sub: "Poste em Alumínio Fundido e Tubo", img: "poste-amazonas-com-01-globo-pt-145-g.webp" },
  { id: 55, nome: "Poste Americano com 01 Globo PT 134 1 G", cat: "Postes Coloniais para Jardim", sub: "Poste em Alumínio Fundido e Tubo", img: "poste-americano-com-01-globo-pt-134-1-g.webp" },
  { id: 56, nome: "Poste Americano com 02 Globos PT 134 2 G", cat: "Postes Coloniais para Jardim", sub: "Poste em Alumínio Fundido e Tubo", img: "poste-americano-com-02-globos-pt-134-2-g.webp" },
  { id: 57, nome: "Poste Amsterda com 02 Globos", cat: "Postes Coloniais para Jardim", sub: "Poste em Alumínio Fundido e Tubo", img: "poste-amsterda-com-02-globos.webp" },
  { id: 58, nome: "Poste Argo com 02 Globos", cat: "Postes Coloniais para Jardim", sub: "Poste em Alumínio Fundido e Tubo", img: "poste-argo-com-02-globos.webp" },
];
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
              {/*ÁREA CLICÁVEL: Imagem + Título*/}
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
              {/*AÇÕES: Botões Independentes*/}
              <div className="product-info-actions">
                <div className="product-actions">
                  <Link to={`/product/${prod.id}`} className="btn-saiba-mais">SAIBA MAIS</Link>
                  <button
                    className="btn-whatsapp"
                    onClick={() => handleWhatsAppListClick(prod)}
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