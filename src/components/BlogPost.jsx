import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [postData, setPostData] = useState(null);
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const publicUrl = process.env.PUBLIC_URL || "";

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        setError(null);

        // 1. Carrega o posts.json para pegar metadados
        const jsonResponse = await fetch(`${publicUrl}/blog-data/posts.json`);
        if (!jsonResponse.ok) {
          throw new Error('Erro ao carregar lista de posts');
        }
        const posts = await jsonResponse.json();
        const post = posts.find(p => p.slug === slug);

        if (!post) {
          throw new Error('Post não encontrado');
        }
        setPostData(post);

        // 2. Carrega o arquivo .md correspondente
        const mdResponse = await fetch(`${publicUrl}/blog-data/posts/${slug}.md`);
        if (!mdResponse.ok) {
          throw new Error('Erro ao carregar conteúdo do post');
        }
        const mdText = await mdResponse.text();
        setMarkdownContent(mdText);

        setLoading(false);
      } catch (err) {
        console.error('Erro ao carregar post:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    loadPost();
  }, [slug, publicUrl]);

  if (loading) {
    return (
      <div className="blog-post-loading">
        <p>Carregando post...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-post-error">
        <h2>Ops! Algo deu errado</h2>
        <p>{error}</p>
        <button onClick={() => navigate('/blog')} className="btn-voltar">
          Voltar para o Blog
        </button>
      </div>
    );
  }

  return (
    <article className="blog-post-container">
      <div className="blog-post-header">
        <button onClick={() => navigate('/blog')} className="btn-voltar">
          ← Voltar para o Blog
        </button>

        {postData?.image && (
          <div className="blog-post-image">
            <img
              src={publicUrl + postData.image}
              alt={postData.title}
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
        )}

        <div className="blog-post-meta">
          <span className="blog-post-date">{postData?.date}</span>
          {postData?.author && (
            <span className="blog-post-author">Por {postData.author}</span>
          )}
        </div>
      </div>

      <div className="blog-post-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({node, ...props}) => <h1 className="md-h1" {...props} />,
            h2: ({node, ...props}) => <h2 className="md-h2" {...props} />,
            h3: ({node, ...props}) => <h3 className="md-h3" {...props} />,
            p: ({node, ...props}) => <p className="md-p" {...props} />,
            ul: ({node, ...props}) => <ul className="md-ul" {...props} />,
            ol: ({node, ...props}) => <ol className="md-ol" {...props} />,
            li: ({node, ...props}) => <li className="md-li" {...props} />,
            strong: ({node, ...props}) => <strong className="md-strong" {...props} />,
            a: ({node, ...props}) => <a className="md-link" target="_blank" rel="noopener noreferrer" {...props} />,
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>

      <div className="blog-post-footer">
        <button onClick={() => navigate('/blog')} className="btn-voltar">
          ← Voltar para o Blog
        </button>
      </div>
    </article>
  );
};

export default BlogPost;