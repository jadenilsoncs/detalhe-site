// src/components/Blog.jsx
import React, { useEffect, useMemo, useState } from "react";
import { postsBlog as fallbackPosts } from "../data/blog";
import { sanity, urlFor } from "../sanityClient";
import "./Blog.css";

const Blog = () => {
  const publicUrl = process.env.PUBLIC_URL || "";

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const finalPosts = useMemo(() => {
    if (posts && posts.length > 0) return posts;
    return fallbackPosts;
  }, [posts]);

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        setLoading(true);

        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          publishedAt,
          "author": author->name,
          mainImage
        }`;

        const data = await sanity.fetch(query);

        if (!alive) return;

        const mapped = (data || []).map((p) => {
          const imgUrl = p?.mainImage
            ? urlFor(p.mainImage)
                .width(850)         // mantém padrão “grande”
                .height(850)
                .fit("max")         // não força crop quadrado
                .auto("format")
                .url()
            : "";

          return {
            id: p._id,
            title: p.title || "",
            excerpt: "", // seu schema não tem excerpt ainda
            date: p.publishedAt
              ? new Date(p.publishedAt).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              : "",
            image: imgUrl,
            author: p.author || "Detalhe Móveis",
          };
        });

        setPosts(mapped);
      } catch (e) {
        console.error(
          "Falha ao carregar posts do Sanity. Usando fallback local.",
          e
        );
      } finally {
        if (alive) setLoading(false);
      }
    }

    load();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="title-dark">Nosso Blog</h2>
        <div className="detail-divider" style={{ margin: "0 auto 40px" }}></div>

        {loading && (
          <div style={{ marginBottom: 20, color: "#666" }}>
            Carregando posts...
          </div>
        )}

        <div className="blog-grid">
          {finalPosts.map((post) => {
            const imgSrc = post.image?.startsWith("http")
              ? post.image
              : publicUrl + post.image;

            return (
              <article key={post.id} className="blog-card">
                <div className="blog-image-wrapper">
                  <img
                    src={imgSrc}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.src = `${publicUrl}/assets/img/placeholder-250.webp`;
                    }}
                  />
                </div>

                <div className="blog-content">
                  <span className="blog-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  {post.excerpt ? <p>{post.excerpt}</p> : null}
                  <button className="btn-saiba-mais">SAIBA MAIS</button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
