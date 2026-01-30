import React from 'react';
import { postsBlog } from '../data/blog';
import './Blog.css';

const Blog = () => {
  const publicUrl = process.env.PUBLIC_URL || "";

  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="title-dark">Nosso Blog</h2>
        <div className="detail-divider" style={{ margin: '0 auto 40px' }}></div>
        <div className="blog-grid">
          {postsBlog.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image-wrapper">
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