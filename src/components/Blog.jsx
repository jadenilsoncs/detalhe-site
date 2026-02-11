import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const publicUrl = process.env.PUBLIC_URL || "";

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch(`${publicUrl}/blog-data/posts.json`);
        if (!response.ok) {
          throw new Error('Erro ao carregar posts do blog');
        }
        const data = await response.json();
        // Ordena posts por data (mais novo no topo)
        const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(sortedData);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao carregar posts:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    loadPosts();
  }, [publicUrl]);

  const handlePostClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

  if (loading) {
    return (
      <section className="blog-section">
        <div className="container">
          <p style={{ textAlign: 'center', padding: '50px', color: '#9b1c1c' }}>
            Carregando posts...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="blog-section">
        <div className="container">
          <p style={{ textAlign: 'center', padding: '50px', color: '#9b1c1c' }}>
            Erro ao carregar posts: {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="title-dark">Nosso Blog</h2>
        <div className="detail-divider" style={{ margin: '0 auto 40px' }}></div>
        <div className="blog-grid">
          {posts.map(post => (
            <article key={post.slug} className="blog-card">
              <div className="blog-image-wrapper" onClick={() => handlePostClick(post.slug)} style={{ cursor: 'pointer' }}>
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
                <button
                  className="btn-leia-mais"
                  onClick={() => handlePostClick(post.slug)}
                >
                  Leia Mais
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;