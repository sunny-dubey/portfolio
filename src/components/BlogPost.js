import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="container">
        <div className="blog-post-not-found">
          <h1 className="blog-post-not-found-title">
            Post Not Found
          </h1>
          <p style={{ marginBottom: '30px', color: '#718096' }}>
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <article className="blog-post">
        <img 
          src={post.image} 
          alt={post.title}
          className="blog-post-image"
        />
        <div className="blog-post-content">
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            <span>{post.date}</span>
            <span>{post.readTime} min read</span>
          </div>
          <div 
            className="blog-post-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="blog-post-back">
            <Link to="/" className="btn btn-secondary">
              ← Back to All Posts
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
