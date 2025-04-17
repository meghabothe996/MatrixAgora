import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { users, subreddits } from '../data/dummyData';

const PostCard = ({ post }) => {
  const [voteStatus, setVoteStatus] = useState(0); // 0: not voted, 1: upvoted, -1: downvoted
  const [voteCount, setVoteCount] = useState(post.upvotes);
  
  // Find the post author and subreddit
  const author = users.find(user => user.id === post.userId);
  const subreddit = subreddits.find(sub => sub.id === post.subredditId);
  
  // Format date (e.g., "2 hours ago", "3 days ago")
  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const postDate = new Date(timestamp);
    const diffInSeconds = Math.floor((now - postDate) / 1000);
    
    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    } else if (diffInSeconds < 86400) {
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    } else {
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
    }
  };
  
  // Handle vote clicks
  const handleVote = (newStatus) => {
    // If clicking the same button that's already active, reset vote
    if (newStatus === voteStatus) {
      setVoteCount(voteCount + (voteStatus * -1));
      setVoteStatus(0);
    } else {
      // If changing vote or voting for first time
      setVoteCount(voteCount + newStatus - voteStatus);
      setVoteStatus(newStatus);
    }
  };
  
  if (!author || !subreddit) return null;
  
  return (
    <div className="post-card">
      <div className="post-wrapper">
        <div className="post-votes">
          <button 
            className={`vote-button ${voteStatus === 1 ? 'upvoted' : ''}`}
            onClick={() => handleVote(1)}
          >
            ▲
          </button>
          <div className="vote-count">{voteCount}</div>
          <button 
            className={`vote-button ${voteStatus === -1 ? 'downvoted' : ''}`}
            onClick={() => handleVote(-1)}
          >
            ▼
          </button>
        </div>
        
        <div className="post-content">
          <div className="post-header">
            <Link to={`/r/${subreddit.name.substring(2)}`} className="post-subreddit">
              {subreddit.name}
            </Link>
            <span className="post-author">
              Posted by <Link to={`/user/${author.username}`}>u/{author.username}</Link>
            </span>
            <span>{getTimeAgo(post.created)}</span>
          </div>
          
          <Link to={`/r/${subreddit.name.substring(2)}/comments/${post.id}`}>
            <h3 className="post-title">{post.title}</h3>
          </Link>
          
          <div className="post-body">{post.content}</div>
          
          {post.image && (
            <img src={post.image} alt={post.title} className="post-image" />
          )}
          
          <div className="post-actions">
            <div className="post-action">
              <span>💬</span>
              <span>{post.comments} Comments</span>
            </div>
            <div className="post-action">
              <span>🔄</span>
              <span>Share</span>
            </div>
            <div className="post-action">
              <span>⭐</span>
              <span>Save</span>
            </div>
            <div className="post-action">
              <span>•••</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard; 