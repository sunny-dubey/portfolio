import React, { useState } from 'react';

const BlogShare = ({ url }) => {
  const [copied, setCopied] = useState(false);

  const currentUrl =
    url || `${window.location.origin}${window.location.pathname}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Silently fail if clipboard access is denied
    }
  };

  return (
    <button
      onClick={handleCopy}
      className='blog-share-button'
      title='Copy link'
    >
      {copied ? (
        <>
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path d='M20 6L9 17l-5-5' />
          </svg>
          <span>copied</span>
        </>
      ) : (
        <>
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <rect x='9' y='9' width='13' height='13' rx='2' ry='2' />
            <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' />
          </svg>
          <span>copy link</span>
        </>
      )}
    </button>
  );
};

export default BlogShare;
