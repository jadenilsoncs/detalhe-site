import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importando os estilos
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css'; // CERTIFIQUE-SE DE QUE ESTE ARQUIVO EXISTE

const Home = () => {
  const bannerPath = (process.env.PUBLIC_URL || "") + "/assets/img/carrossel/";

  return (
    <div className="home-main-container">

      {/* 1. SLIDER PRINCIPAL */}
      <section className="home-slider" style={{ marginTop: '70px' }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          style={{ height: '60vh', minHeight: '350px' }}
        >
          <SwiperSlide>
            <div className="slide-item" style={{ backgroundImage: `url("${bannerPath}carrossel-1.webp")`, height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', color: '#fff', zIndex: 10 }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800' }}>Tampas para Casa de Máquinas</h1>
                    <Link to="/products" style={{ background: '#9b1c1c', padding: '12px 35px', color: '#fff', textDecoration: 'none', fontWeight: '600', display: 'inline-block', marginTop: '20px' }}>Ver Catálogo</Link>
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }}></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* 2. FAIXA */}
      <div style={{ background: '#9b1c1c', color: '#fff', padding: '20px', textAlign: 'center', fontWeight: '800' }}>
        SÓ QUEM FABRICA PODE VENDER A PREÇO BAIXO!!
      </div>

      {/* 3. CATEGORIAS (O CORAÇÃO DO PROBLEMA) */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontWeight: '800', textTransform: 'uppercase' }}>Nossas Linhas</h2>

        <div className="categorias-flex-container">

          {/* Card 1 */}
          <Link to="/products" className="categoria-card">
            <div className="categoria-bg" style={{ backgroundImage: `url("${bannerPath}carrossel-2.webp")` }}>
              <div className="categoria-overlay">
                <h3>Alumínio & Tela</h3>
                <span>Ver Produtos →</span>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/products" className="categoria-card">
            <div className="categoria-bg" style={{ backgroundImage: `url("${bannerPath}carrossel-3.webp")` }}>
              <div className="categoria-overlay">
                <h3>Luminárias e Postes</h3>
                <span>Ver Produtos →</span>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/products" className="categoria-card">
            <div className="categoria-bg" style={{ backgroundImage: `url("${bannerPath}carrossel-4.webp")` }}>
              <div className="categoria-overlay">
                <h3>Linha Premium</h3>
                <span>Ver Produtos →</span>
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* 4. SOBRE A FÁBRICA */}
      <section style={{ background: '#f4f4f4', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
            <img src={`${bannerPath}carrossel-1.webp`} style={{ flex: '1 1 400px', width: '100%', borderRadius: '8px' }} alt="Fabrica" />
            <div style={{ flex: '1 1 400px' }}>
                <h2 style={{ color: '#9b1c1c', fontWeight: '800' }}>DIRETO DA FÁBRICA PARA SUA CASA</h2>
                <p>Móveis com durabilidade e design exclusivo.</p>
                <Link to="/contact" style={{ display: 'inline-block', background: '#333', color: '#fff', padding: '12px 30px', textDecoration: 'none', marginTop: '20px' }}>Falar com Especialista</Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Home;