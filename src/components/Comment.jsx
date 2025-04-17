import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { users } from '../data/dummyData';

const Comment = ({ comment }) => {
  const [voteStatus, setVoteStatus] = useState(0);
  const [voteCount, setVoteCount] = useState(comment.upvotes);
  
  // Find the comment author
  const author = users.find(user => user.id === comment.userId);
  
  // Format date
  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const commentDate = new Date(timestamp);
    const diffInSeconds = Math.floor((now - commentDate) / 1000);
    
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
    if (newStatus === voteStatus) {
      setVoteCount(voteCount + (voteStatus * -1));
      setVoteStatus(0);
    } else {
      setVoteCount(voteCount + newStatus - voteStatus);
      setVoteStatus(newStatus);
    }
  };
  
  if (!author) return null;
  
  return (
    <div className="comment">
      <div className="comment-header">
        <Link to={`/user/${author.username}`} className="comment-author">
          u/{author.username}
        </Link>
        <span className="comment-date">{getTimeAgo(comment.created)}</span>
      </div>
      
      <div className="comment-body">{comment.content}</div>
      
      <div className="comment-actions">
        <div className="post-action">
          <button 
            className={`vote-button ${voteStatus === 1 ? 'upvoted' : ''}`}
            onClick={() => handleVote(1)}
            style={{ fontSize: '14px' }}
          >
            ▲
          </button>
          <span>{voteCount}</span>
          <button 
            className={`vote-button ${voteStatus === -1 ? 'downvoted' : ''}`}
            onClick={() => handleVote(-1)}
            style={{ fontSize: '14px' }}
          >
            ▼
          </button>
        </div>
        
        <div className="post-action">
          <span>Reply</span>
        </div>
        
        <div className="post-action">
          <span>Share</span>
        </div>
        
        <div className="post-action">
          <span>Report</span>
        </div>
        
        <div className="post-action">
          <span>Save</span>
        </div>
      </div>
    </div>
  );
};

export default Comment; 