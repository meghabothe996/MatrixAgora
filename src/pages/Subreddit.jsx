import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { subreddits, posts } from '../data/dummyData';

const Subreddit = () => {
  const { subredditName } = useParams();
  const [sortBy, setSortBy] = useState('hot');
  const [subreddit, setSubreddit] = useState(null);
  const [subredditPosts, setSubredditPosts] = useState([]);
  
  useEffect(() => {
    // Find the subreddit by name
    const foundSubreddit = subreddits.find(sub => sub.name === `r/${subredditName}`);
    setSubreddit(foundSubreddit);
    
    // Find posts for this subreddit
    if (foundSubreddit) {
      const filteredPosts = posts.filter(post => post.subredditId === foundSubreddit.id);
      setSubredditPosts(filteredPosts);
    }
  }, [subredditName]);
  
  // Sort posts based on selected sort option
  const getSortedPosts = () => {
    switch (sortBy) {
      case 'new':
        return [...subredditPosts].sort((a, b) => new Date(b.created) - new Date(a.created));
      case 'top':
        return [...subredditPosts].sort((a, b) => b.upvotes - a.upvotes);
      case 'hot':
      default:
        return [...subredditPosts].sort((a, b) => {
          const aScore = a.upvotes * 0.7 + (1 / (new Date() - new Date(a.created))) * 0.3;
          const bScore = b.upvotes * 0.7 + (1 / (new Date() - new Date(b.created))) * 0.3;
          return bScore - aScore;
        });
    }
  };
  
  const sortedPosts = getSortedPosts();
  
  // If subreddit not found
  if (!subreddit) {
    return (
      <div className="subreddit-not-found" style={{ textAlign: 'center', padding: '40px 0' }}>
        <h2>Sorry, there doesn't seem to be a community called r/{subredditName}</h2>
        <p>The community may have been banned or the community name is incorrect.</p>
      </div>
    );
  }
  
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'm';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    } else {
      return num;
    }
  };
  
  return (
    <div className="subreddit-page">
      <div className="subreddit-header">
        <h1>
          <div className="subreddit-icon">{subreddit.icon}</div>
          {subreddit.name}
        </h1>
        <p>{subreddit.description}</p>
        <div className="subreddit-stats">
          <div className="subreddit-stat">
            <div className="subreddit-stat-value">{formatNumber(subreddit.members)}</div>
            <div className="subreddit-stat-label">Members</div>
          </div>
          <div className="subreddit-stat">
            <div className="subreddit-stat-value">
              {Math.floor(Math.random() * 1000) + 100}
            </div>
            <div className="subreddit-stat-label">Online</div>
          </div>
          <div className="subreddit-stat">
            <div className="subreddit-stat-value">
              {new Date(subreddit.created).getFullYear()}
            </div>
            <div className="subreddit-stat-label">Created</div>
          </div>
        </div>
      </div>
      
      <div className="sorting-tabs" style={{ 
        display: 'flex', 
        gap: '16px', 
        backgroundColor: 'white', 
        padding: '12px 16px',
        borderRadius: '4px',
        marginBottom: '16px'
      }}>
        <button 
          className={`tab-button ${sortBy === 'hot' ? 'active' : ''}`} 
          onClick={() => setSortBy('hot')}
          style={{ 
            border: 'none', 
            background: 'none', 
            fontWeight: sortBy === 'hot' ? 'bold' : 'normal',
            color: sortBy === 'hot' ? 'var(--reddit-orange)' : 'inherit',
            cursor: 'pointer'
          }}
        >
          🔥 Hot
        </button>
        <button 
          className={`tab-button ${sortBy === 'new' ? 'active' : ''}`} 
          onClick={() => setSortBy('new')}
          style={{ 
            border: 'none', 
            background: 'none', 
            fontWeight: sortBy === 'new' ? 'bold' : 'normal',
            color: sortBy === 'new' ? 'var(--reddit-orange)' : 'inherit',
            cursor: 'pointer'
          }}
        >
          ✨ New
        </button>
        <button 
          className={`tab-button ${sortBy === 'top' ? 'active' : ''}`} 
          onClick={() => setSortBy('top')}
          style={{ 
            border: 'none', 
            background: 'none', 
            fontWeight: sortBy === 'top' ? 'bold' : 'normal',
            color: sortBy === 'top' ? 'var(--reddit-orange)' : 'inherit',
            cursor: 'pointer'
          }}
        >
          🏆 Top
        </button>
      </div>
      
      <div className="posts-container">
        {sortedPosts.length > 0 ? (
          sortedPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <div className="no-posts" style={{ 
            textAlign: 'center', 
            padding: '40px', 
            backgroundColor: 'white',
            borderRadius: '4px' 
          }}>
            <h3>No posts in this subreddit yet</h3>
            <p>Be the first to share content!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subreddit; 