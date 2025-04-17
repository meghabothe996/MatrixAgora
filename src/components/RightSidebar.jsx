import React from 'react';
import { Link } from 'react-router-dom';

const RightSidebar = () => {
  // Sample recent posts data
  const recentPosts = [
    {
      id: 1,
      title: "5 months on 1 project.",
      author: "r/outlier_ai",
      upvotes: 184,
      comments: 88,
      image: "https://picsum.photos/60/60?random=1"
    },
    {
      id: 2,
      title: "Payment",
      author: "r/alignerr",
      upvotes: 2,
      comments: 6,
      image: null
    },
    {
      id: 3,
      title: "$10k Milestone!",
      author: "r/alignerr",
      upvotes: 72,
      comments: 55,
      image: "https://picsum.photos/60/60?random=3"
    }
  ];

  const clearRecentPosts = (e) => {
    e.preventDefault();
    // In a real application, this would clear the recent posts from state or storage
    alert('Recent posts cleared!');
  };

  return (
    <div className="right-sidebar">
      <div className="right-sidebar-card">
        <div className="right-sidebar-header">
          <h2>RECENT POSTS</h2>
          <a href="#" onClick={clearRecentPosts} className="clear-link">Clear</a>
        </div>
        
        <div className="recent-posts-list">
          {recentPosts.map(post => (
            <div key={post.id} className="recent-post-item">
              <div className="recent-post-content">
                <Link to="#" className="recent-post-author">{post.author}</Link>
                <Link to="#" className="recent-post-title">{post.title}</Link>
                <div className="recent-post-stats">
                  <span>{post.upvotes} upvotes</span>
                  <span className="dot-separator">•</span>
                  <span>{post.comments} comments</span>
                </div>
              </div>
              {post.image && (
                <div className="recent-post-image">
                  <img src={post.image} alt="Post thumbnail" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="right-sidebar-footer">
        <div className="footer-links">
          <Link to="/policy">Content Policy</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="copyright">
          MatrixAgora, Inc © 2023. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default RightSidebar; 