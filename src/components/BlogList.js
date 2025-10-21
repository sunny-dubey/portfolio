import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogList = () => {
  return (
    <div className="container">
      <div className="blog-hero">
        <h1 className="blog-subtitle">Thoughts & Ideas</h1>
        <p className="blog-description">
          Writing about technology, product development, and the decisions that shape our lives.
        </p>
      </div>
      
      <div className="blog-list">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-item">
            <div className="blog-item-content">
              <h2 className="blog-item-title">
                <Link to={`/post/${post.id}`} className="blog-item-link">
                  {post.title}
                </Link>
              </h2>
              <p className="blog-item-excerpt">{post.excerpt}</p>
              <div className="blog-item-meta">
                <span className="blog-item-date">{post.date}</span>
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
