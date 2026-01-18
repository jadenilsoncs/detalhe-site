import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Products from './Products';

const Home = () => {
  // Caminho dinâmico para garantir compatibilidade com a Locaweb
  const bannerPath = (process.env.PUBLIC_URL || "") + "/assets/img/carrossel/";

  return (
    <div className="home-main-container">
      {/* Slider com altura ajustada para não ocupar a tela toda de forma agressiva */}
      <section className="home-slider" style={{ height: '500px', marginTop: '70px' }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          style={{ height: '100%' }}
        >
          {/* SLIDE 1 */}
          <SwiperSlide>
            <div
              className="slide-item"
              style={{
                backgroundImage: `url("${bannerPath}bg-masthead.jpg")`,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}
            >
              <div className="slide-content" style={{ textAlign: 'center', color: '#fff', zIndex: 10, maxWidth: '800px', padding: '0 20px' }}>
                <h1 style={{
                  textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
                  fontSize: '2.8rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '15px',
                  lineHeight: '1.2'
                }}>
                  Móveis em Alumínio e Fibra Sintética
                </h1>
                <p style={{
                  fontSize: '1.2rem',
                  marginBottom: '30px',
                  textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
                  fontWeight: '400'
                }}>
                  Conforto e durabilidade para sua área de lazer.
                </p>
                <Link to="/products" className="btn-main" style={{
                  background: '#9b1c1c',
                  padding: '12px 35px',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '2px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  transition: '0.3s all',
                  border: '1px solid transparent',
                  display: 'inline-block'
                }}>
                  Ver Catálogo
                </Link>
              </div>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.25)', zIndex: 1 }}></div>
            </div>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
            <div
              className="slide-item"
              style={{
                backgroundImage: `url("${bannerPath}produto1.jpg")`,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="slide-content" style={{ textAlign: 'center', color: '#fff', zIndex: 10, maxWidth: '800px', padding: '0 20px' }}>
                <h1 style={{
                  textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
                  fontSize: '2.8rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '15px'
                }}>
                  Design Exclusivo
                </h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '30px', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                  Peças sob medida para o seu ambiente.
                </p>
                <Link to="/products" className="btn-main" style={{
                  background: '#9b1c1c',
                  padding: '12px 35px',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '2px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  display: 'inline-block'
                }}>
                  Conheça Mais
                </Link>
              </div>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.25)', zIndex: 1 }}></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Faixa Vermelha - CORRIGIDA para buscar o ícone factory.svg no local correto */}
      <div className="factory-banner" style={{
        background: '#9b1c1c',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        <span style={{ fontWeight: '800', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Só quem fabrica pode vender a preço baixo!!
        </span>
        <img
          src={(process.env.PUBLIC_URL || "") + "/assets/img/factory.svg"}
          alt="Ícone Fábrica"
          style={{ height: '35px', filter: 'brightness(0) invert(1)' }}
        />
      </div>

      <Products />
    </div>
  );
};

export default Home;