import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { subreddits, users } from '../data/dummyData';
import './PostCard.css';

const PostCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);
  
  // Find the subreddit and user information
  const subreddit = subreddits.find(s => s.id === post.subredditId);
  const user = users.find(u => u.id === post.userId);
  
  // Format the date
  const formatDate = (dateString) => {
    const postDate = new Date(dateString);
    const now = new Date();
    const diffMs = now - postDate;
    const diffHrs = diffMs / (1000 * 60 * 60);
    
    if (diffHrs < 1) {
      return `${Math.round(diffHrs * 60)} minutes ago`;
    } else if (diffHrs < 24) {
      return `${Math.round(diffHrs)} hours ago`;
    } else {
      return `${Math.round(diffHrs / 24)} days ago`;
    }
  };
  
  // Format large numbers
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}m`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    } else {
      return num.toString();
    }
  };
  
  // Truncate content for preview
  const truncateContent = (content) => {
    const words = content.split(' ');
    if (words.length > 50 && !expanded) {
      return words.slice(0, 50).join(' ') + '...';
    }
    return content;
  };

  return (
    <div className="post-card">
      <div className="post-votes">
        <button className="vote-button upvote">
          <i className="fas fa-arrow-up"></i>
        </button>
        <span className="vote-count">{formatNumber(post.upvotes)}</span>
        <button className="vote-button downvote">
          <i className="fas fa-arrow-down"></i>
        </button>
      </div>
      
      <div className="post-content">
        <div className="post-header">
          {subreddit && (
            <Link to={`/r/${subreddit.name.substring(2)}`} className="subreddit-link">
              <span className="subreddit-icon">{subreddit.icon}</span>
              <span>r/{subreddit.name.substring(2)}</span>
            </Link>
          )}
          
          <span className="post-info">
            Posted by{' '}
            <Link to={`/user/${user?.username}`} className="user-link">
              u/{user?.username}
            </Link>{' '}
            {formatDate(post.created)}
          </span>
        </div>
        
        <h3 className="post-title">
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h3>
        
        <div className="post-body">
          <p className="post-text">{truncateContent(post.content)}</p>
          
          {post.content.length > 150 && (
            <button 
              className="expand-button" 
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>
        
        <div className="post-footer">
          <div className="post-actions">
            <button className="action-button">
              <i className="fas fa-comment-alt"></i>
              <span>{formatNumber(post.comments)} Comments</span>
            </button>
            
            <button className="action-button">
              <i className="fas fa-share"></i>
              <span>Share</span>
            </button>
            
            <button className="action-button">
              <i className="fas fa-bookmark"></i>
              <span>Save</span>
            </button>
            
            <button className="action-button">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard; 