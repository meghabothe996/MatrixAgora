import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import { posts, subreddits } from '../data/dummyData';

const All = () => {
  const [sortBy, setSortBy] = useState('hot'); // 'hot', 'new', 'top', 'controversial'
  const [view, setView] = useState('card'); // 'card', 'classic', 'compact'

  // Extended dummy posts for the all page - all posts plus some additional ones
  const allPosts = [
    ...posts,
    {
      id: 201,
      title: "What obscure skill have you mastered that's completely useless in everyday life?",
      content: "I can recite the entire periodic table of elements in under 20 seconds. Hasn't helped me once in real life.",
      image: '',
      upvotes: 8721,
      userId: 3,
      subredditId: 6, // AskMatrixAgora
      comments: 1423,
      created: '2023-06-17T08:15:00Z',
    },
    {
      id: 202,
      title: "The new Tesla Cybertruck spotted in the wild with updated design",
      content: "Saw this on the highway near Fremont. Looks like they've made several changes to the exterior compared to the original reveal.",
      image: 'https://picsum.photos/800/450?random=202',
      upvotes: 15322,
      userId: 2,
      subredditId: 5, // Science
      comments: 892,
      created: '2023-06-16T16:40:00Z',
    },
    {
      id: 203,
      title: "TIL that honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat.",
      content: "The combination of low moisture content and high acidity creates an environment where bacteria cannot survive.",
      image: 'https://picsum.photos/800/500?random=203',
      upvotes: 42156,
      userId: 5,
      subredditId: 24, // todayilearned
      comments: 734,
      created: '2023-06-18T11:30:00Z',
    },
    {
      id: 204,
      title: "I built a real-time satellite tracker that shows all active satellites above your location",
      content: "Made with Three.js and NASA's open API. The tracker shows you which satellites are currently passing over your location and provides details like altitude, speed, and purpose.",
      image: 'https://picsum.photos/800/400?random=204',
      upvotes: 4892,
      userId: 1,
      subredditId: 1, // Programming
      comments: 347,
      created: '2023-06-15T14:25:00Z',
    },
    {
      id: 205,
      title: "The clearest photo of Mars ever taken, released today by NASA",
      content: "This incredible high-resolution image was captured by the Perseverance rover and shows the Martian landscape in unprecedented detail.",
      image: 'https://picsum.photos/800/800?random=205',
      upvotes: 67481,
      userId: 4,
      subredditId: 12, // space
      comments: 1839,
      created: '2023-06-18T07:50:00Z',
    },
    {
      id: 206,
      title: "The most underrated tourist destination in your country?",
      content: "Looking for hidden gems for my next trip. Share the places tourists often miss but locals love!",
      image: '',
      upvotes: 3157,
      userId: 2,
      subredditId: 4, // Travel
      comments: 678,
      created: '2023-06-14T19:20:00Z',
    },
    {
      id: 207,
      title: "New study shows dogs can detect early-stage cancer with 97% accuracy",
      content: "Researchers have trained dogs to detect specific volatile organic compounds that are present in the breath of cancer patients, potentially revolutionizing early detection.",
      image: 'https://picsum.photos/800/500?random=207',
      upvotes: 29876,
      userId: 3,
      subredditId: 5, // Science
      comments: 542,
      created: '2023-06-13T10:15:00Z',
    }
  ];

  // Sort posts based on selected sort option
  const getSortedPosts = () => {
    switch (sortBy) {
      case 'new':
        return [...allPosts].sort((a, b) => new Date(b.created) - new Date(a.created));
      case 'top':
        return [...allPosts].sort((a, b) => b.upvotes - a.upvotes);
      case 'controversial':
        // Controversial posts have high comment counts but mixed upvotes
        return [...allPosts].sort((a, b) => {
          const aRatio = a.comments / a.upvotes;
          const bRatio = b.comments / b.upvotes;
          return bRatio - aRatio;
        });
      case 'hot':
      default:
        // Hot is a combination of recency and votes
        return [...allPosts].sort((a, b) => {
          const aScore = a.upvotes * 0.7 + (1 / (new Date() - new Date(a.created))) * 0.3;
          const bScore = b.upvotes * 0.7 + (1 / (new Date() - new Date(b.created))) * 0.3;
          return bScore - aScore;
        });
    }
  };
  
  const sortedPosts = getSortedPosts();

  // Get Subreddit name by ID
  const getSubredditName = (id) => {
    const subreddit = subreddits.find(s => s.id === id);
    return subreddit ? subreddit.name : 'Unknown';
  };

  return (
    <div className="all-page">
      <div className="page-header">
        <h1>All Posts</h1>
        <p>Posts from all communities across MatrixAgora</p>
      </div>
      
      <div className="filter-bar">
        <div className="sorting-tabs">
          <button 
            className={`tab-button ${sortBy === 'hot' ? 'active' : ''}`} 
            onClick={() => setSortBy('hot')}
          >
            <i className="fas fa-fire"></i> Hot
          </button>
          <button 
            className={`tab-button ${sortBy === 'new' ? 'active' : ''}`} 
            onClick={() => setSortBy('new')}
          >
            <i className="fas fa-certificate"></i> New
          </button>
          <button 
            className={`tab-button ${sortBy === 'top' ? 'active' : ''}`} 
            onClick={() => setSortBy('top')}
          >
            <i className="fas fa-trophy"></i> Top
          </button>
          <button 
            className={`tab-button ${sortBy === 'controversial' ? 'active' : ''}`} 
            onClick={() => setSortBy('controversial')}
          >
            <i className="fas fa-comment-alt"></i> Controversial
          </button>
        </div>
        
        <div className="view-options">
          <button 
            className={`view-button ${view === 'card' ? 'active' : ''}`}
            onClick={() => setView('card')}
            title="Card View"
          >
            <i className="fas fa-th-large"></i>
          </button>
          <button 
            className={`view-button ${view === 'classic' ? 'active' : ''}`}
            onClick={() => setView('classic')}
            title="Classic View"
          >
            <i className="fas fa-list"></i>
          </button>
          <button 
            className={`view-button ${view === 'compact' ? 'active' : ''}`}
            onClick={() => setView('compact')}
            title="Compact View"
          >
            <i className="fas fa-align-justify"></i>
          </button>
        </div>
      </div>
      
      <div className={`posts-container view-${view}`}>
        {sortedPosts.map(post => (
          <div key={post.id} className="all-post-wrapper">
            <div className="community-tag">
              {getSubredditName(post.subredditId)}
            </div>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default All; 