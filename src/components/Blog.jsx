import React from 'react';
import './Blog.css';

const Blog = () => {
  // Caminho base para as imagens funcionarem na Locaweb
  const publicUrl = process.env.PUBLIC_URL || "";

  const posts = [
    {
      id: 1,
      title: "Dicas de Decoração 2026",
      excerpt: "Saiba como escolher o melhor jogo de mesa para sua varanda gourmet.",
      date: "12 Jan, 2026",
      image: "/assets/img/blog1.jpg" // Certifique-se que esta imagem existe na pasta assets/img
    }
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="title-dark">Nosso Blog</h2>
        <div className="detail-divider" style={{ margin: '0 auto 40px' }}></div>

        <div className="blog-grid">
          {posts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image-wrapper">
                {/* CORREÇÃO AQUI: Adicionado o publicUrl antes do caminho da imagem */}
                <img
                  src={publicUrl + post.image}
                  alt={post.title}
                  onError={(e) => e.target.src = 'https://via.placeholder.com/400x250?text=Imagem+Blog'}
                />
              </div>
              <div className="blog-content">
                <span className="blog-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <button className="btn-saiba-mais">Leia Mais</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;