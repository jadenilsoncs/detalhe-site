import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Estilos Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css';
const Home = () => {
  const bannerPath = (process.env.PUBLIC_URL || "") + "/assets/img/carrossel/";
  const nossasLinhasPath = (process.env.PUBLIC_URL || "") + "/assets/img/nossas-linhas/thumbs/";
  const assetsPath = (process.env.PUBLIC_URL || "") + "/assets/img/";
  // Função para abrir o WhatsApp de forma limpa
  const whatsappUrl = "https://wa.me/5537999571010?text=Olá! Estava navegando no site e gostaria de falar com um especialista.";
  return (
    <div className="home-main-container" style={{ backgroundColor: '#fff', width: '100%', overflowX: 'hidden' }}>
      {/* 1. SLIDER PRINCIPAL */}
      <section className="home-slider" style={{
        height: '55vh',
        minHeight: '380px',
        marginTop: '70px',
        marginBottom: '0'
      }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          style={{ height: '100%' }}
        >
          <SwiperSlide>
            <div className="slide-item" role="img" aria-label="Tampas em alumínio para casa de máquinas de piscina" style={{ backgroundImage: `url("${bannerPath}carrossel-1.webp")`, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div style={{ textAlign: 'center', color: '#fff', zIndex: 10, padding: '0 20px' }}>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: '800', textTransform: 'uppercase', textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>Tampas para Casa de Máquinas</h1>
                    <Link to="/products" style={{ background: '#9b1c1c', padding: '12px 35px', color: '#fff', textDecoration: 'none', fontWeight: '600', display: 'inline-block', marginTop: '15px' }}>Ver Modelos</Link>
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)', zIndex: 1 }}></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-item" role="img" aria-label="Móveis exclusivos em alumínio e corda náutica para área externa" style={{ backgroundImage: `url("${bannerPath}carrossel-2.webp")`, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div style={{ textAlign: 'center', color: '#fff', zIndex: 10, padding: '0 20px' }}>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: '800', textTransform: 'uppercase', textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>Conforto e Exclusividade</h1>
                    <Link to="/products" style={{ background: '#9b1c1c', padding: '12px 35px', color: '#fff', textDecoration: 'none', fontWeight: '600', display: 'inline-block', marginTop: '15px' }}>Conheça Mais</Link>
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)', zIndex: 1 }}></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-item" role="img" aria-label="Postes e luminárias coloniais em alumínio para iluminação de jardim" style={{ backgroundImage: `url("${bannerPath}carrossel-3.webp")`, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div style={{ textAlign: 'center', color: '#fff', zIndex: 10, padding: '0 20px' }}>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: '800', textTransform: 'uppercase', textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>Postes e Luminárias</h1>
                    <Link to="/products" style={{ background: '#9b1c1c', padding: '12px 35px', color: '#fff', textDecoration: 'none', fontWeight: '600', display: 'inline-block', marginTop: '15px' }}>Ver Modelos</Link>
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)', zIndex: 1 }}></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-item" role="img" aria-label="Design exclusivo de móveis para piscina e lazer" style={{ backgroundImage: `url("${bannerPath}carrossel-4.webp")`, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div style={{ textAlign: 'center', color: '#fff', zIndex: 10, padding: '0 20px' }}>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: '800', textTransform: 'uppercase', textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>Design Exclusivo</h1>
                    <Link to="/products" style={{ background: '#9b1c1c', padding: '12px 35px', color: '#fff', textDecoration: 'none', fontWeight: '600', display: 'inline-block', marginTop: '15px' }}>Conheça Mais</Link>
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)', zIndex: 1 }}></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* 2. FAIXA VERMELHA */}
      <div className="factory-banner">
        <span className="factory-banner-text">Só quem fabrica pode vender a preço baixo!!</span>
        <img
          src={`${assetsPath}factory.svg`}
          alt="Ícone Fábrica"
          className="factory-banner-icon"
        />
      </div>
      {/* 3. CATEGORIAS (NOSSAS LINHAS) */}
      <section className="linhas-section">
        <h2 className="nossas-linhas-title">Nossas Linhas</h2>
        <div className="categorias-flex-container">
          {/* LINHA PREMIUM */}
          <Link to="/products/linha-premium" className="categoria-card">
            <div className="categoria-bg" style={{ backgroundImage: `url("${nossasLinhasPath}nossas-linhas-1.webp")` }}>
              <div className="categoria-overlay">
                <h3>Linha Premium</h3>
                <span>Ver Produtos →</span>
              </div>
            </div>
          </Link>
          {/* LUMINÁRIAS E POSTES */}
          <Link to="/products/luminarias-e-postes" className="categoria-card">
            <div className="categoria-bg" style={{ backgroundImage: `url("${nossasLinhasPath}nossas-linhas-2.webp")` }}>
              <div className="categoria-overlay">
                <h3>Luminárias e Postes</h3>
                <span>Ver Produtos →</span>
              </div>
            </div>
          </Link>
          {/* LINHA CONSTRUÇÃO */}
          <Link to="/products/construcao" className="categoria-card">
            <div className="categoria-bg" style={{ backgroundImage: `url("${nossasLinhasPath}nossas-linhas-3.webp")` }}>
              <div className="categoria-overlay">
                <h3>Linha Construção</h3>
                <span>Ver Produtos →</span>
              </div>
            </div>
          </Link>
          {/* LINHA PISCINA
          <Link to="/products/piscina" className="categoria-card">
            <div className="categoria-bg" style={{ backgroundImage: `url("${nossasLinhasPath}nossas-linhas-4.webp")` }}>
              <div className="categoria-overlay">
                <h3>Linha Piscina</h3>
                <span>Ver Produtos →</span>
              </div>
            </div>
          </Link>*/}
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/products" className="btn-visualizar-todos">
            Conheça Nossos Produtos
          </Link>
        </div>
      </section>
      {/* 4. SOBRE A FÁBRICA */}
      <section style={{ background: '#f4f4f4', padding: '60px 20px' }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '25px'
        }}>
            <h2 style={{ color: '#9b1c1c', fontWeight: '800', textTransform: 'uppercase', fontSize: '2.2rem', margin: 0 }}>
                Direto da Fábrica para sua Casa
            </h2>
            <p style={{ color: '#555', lineHeight: '1.6', fontSize: '1.1rem', maxWidth: '650px' }}>
                Há anos no mercado, a Detalhe Móveis e Alumínios se especializou em criar peças que unem durabilidade e design sofisticado para sua área externa.
            </p>
            <div style={{ width: '100%', maxWidth: '600px', margin: '10px 0' }}>
               <img
                 src={`${bannerPath}carrossel-1.webp`}
                 style={{ width: '100%', borderRadius: '8px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)' }}
                 alt="Fábrica Detalhe"
               />
            </div>
            {/* BOTÃO WHATSAPP CORRIGIDO */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#333',
                color: '#fff',
                padding: '15px 45px',
                textDecoration: 'none',
                fontWeight: '700',
                textTransform: 'uppercase',
                borderRadius: '4px',
                letterSpacing: '1px',
                transition: '0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#25D366'}
              onMouseOut={(e) => e.currentTarget.style.background = '#333'}
            >
                Falar com um Especialista
            </a>
        </div>
      </section>
    </div>
  );
};
export default Home;