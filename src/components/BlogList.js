import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogList = () => {
  return (
    <div className='container'>
      <div className='blog-hero'>
        <h1 className='blog-subtitle'>blog</h1>
        <p className='blog-description'>
          thoughts, ideas, and learnings about software engineering and general
        </p>
      </div>

      {blogPosts.length === 0 ? (
        <div className='live-soon'>
          <h1>Live Soon</h1>
          <p>
            This page is under construction. Check back soon for my latest
            thoughts and ideas!
          </p>
        </div>
      ) : (
        <div className='blog-list'>
          {blogPosts.map(post => (
            <article key={post.id} className='blog-item'>
              <div className='blog-item-content'>
                <div className='blog-item-header'>
                  <div className='blog-item-date'>{post.date}</div>
                  <h2 className='blog-item-title'>
                    <Link
                      to={`/post/${post.date}/${post.slug}`}
                      className='blog-item-link'
                    >
                      {post.title}
                    </Link>
                  </h2>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
