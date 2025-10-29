import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import BlogShare from './BlogShare';

const BlogPost = () => {
  const { date, slug } = useParams();
  const location = useLocation();
  const post = blogPosts.find(p => p.date === date && p.slug === slug);

  if (!post) {
    return (
      <div className='container'>
        <div className='blog-post-not-found'>
          <h1 className='blog-post-not-found-title'>Post Not Found</h1>
          <p className='blog-post-not-found-text'>
            The blog post you're looking for doesn't exist.
          </p>
          <Link to='/' className='btn'>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='container'>
      <article className='blog-post'>
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className='blog-post-image'
            loading='lazy'
            decoding='async'
            width='1000'
            height='300'
          />
        )}
        <div className='blog-post-content'>
          <h1 className='blog-post-title'>{post.title}</h1>
          <div className='blog-post-date'>{post.date}</div>
          <div
            className='blog-post-body'
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className='blog-post-back'>
            <BlogShare url={`${window.location.origin}${location.pathname}`} />
            <Link to='/' className='blog-post-back-link'>
              ← back
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
