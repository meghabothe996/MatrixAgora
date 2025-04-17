import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import { posts, subreddits } from '../data/dummyData';

const Popular = () => {
  const [sortBy, setSortBy] = useState('hot'); // 'hot', 'new', 'top', 'rising'
  const [timeFilter, setTimeFilter] = useState('today'); // 'today', 'week', 'month', 'year', 'all'

  // Extended dummy popular posts - combining existing posts with some new ones
  const popularPosts = [
    ...posts,
    {
      id: 101,
      title: 'Stunning sunset captured from my balcony last night',
      content: 'After weeks of rain, finally got this amazing view. No filters used!',
      image: 'https://picsum.photos/800/600?random=101',
      upvotes: 12547,
      userId: 2,
      subredditId: 19, // EarthPorn
      comments: 342,
      created: '2023-06-18T20:15:00Z',
      isPopular: true
    },
    {
      id: 102,
      title: 'BREAKING: Scientists discover new renewable energy source that could revolutionize power generation',
      content: 'Researchers at MIT have developed a new method of harvesting energy from ambient temperature fluctuations that could provide clean, constant power with minimal environmental impact.',
      image: 'https://picsum.photos/800/400?random=102',
      upvotes: 24891,
      userId: 3,
      subredditId: 17, // futurology
      comments: 1872,
      created: '2023-06-17T12:30:00Z',
      isPopular: true
    },
    {
      id: 103,
      title: 'I built a full gaming PC inside a vintage 1984 Macintosh case',
      content: 'Took about 3 months to complete. Specs: RTX 3080, i9-11900K, 64GB RAM. The hardest part was fitting the cooling system.',
      image: 'https://picsum.photos/800/800?random=103',
      upvotes: 31056,
      userId: 1,
      subredditId: 13, // DIY
      comments: 947,
      created: '2023-06-16T14:20:00Z',
      isPopular: true
    },
    {
      id: 104,
      title: 'This AI generated image won first place in an art competition',
      content: 'Digital artists are debating whether AI-generated artwork should be allowed in traditional art competitions. Thoughts?',
      image: 'https://picsum.photos/800/500?random=104',
      upvotes: 18734,
      userId: 5,
      subredditId: 26, // art
      comments: 2365,
      created: '2023-06-15T09:45:00Z',
      isPopular: true
    },
    {
      id: 105,
      title: 'My homemade Neapolitan pizza - after years of practice I finally got it perfect',
      content: 'The secret was fermenting the dough for 72 hours and using a pizza steel preheated for an hour at max oven temperature.',
      image: 'https://picsum.photos/800/650?random=105',
      upvotes: 9287,
      userId: 4,
      subredditId: 11, // food
      comments: 531,
      created: '2023-06-18T18:10:00Z',
      isPopular: true
    }
  ];

  // Sort posts based on selected sort option
  const getSortedPosts = () => {
    let sorted = [...popularPosts];
    
    // First apply time filter
    if (timeFilter !== 'all') {
      const now = new Date();
      let cutoffDate = new Date();
      
      switch (timeFilter) {
        case 'today':
          cutoffDate.setDate(now.getDate() - 1);
          break;
        case 'week':
          cutoffDate.setDate(now.getDate() - 7);
          break;
        case 'month':
          cutoffDate.setMonth(now.getMonth() - 1);
          break;
        case 'year':
          cutoffDate.setFullYear(now.getFullYear() - 1);
          break;
        default:
          break;
      }
      
      sorted = sorted.filter(post => new Date(post.created) > cutoffDate);
    }
    
    // Then apply sort
    switch (sortBy) {
      case 'new':
        return sorted.sort((a, b) => new Date(b.created) - new Date(a.created));
      case 'top':
        return sorted.sort((a, b) => b.upvotes - a.upvotes);
      case 'rising':
        return sorted.sort((a, b) => {
          // Rising combines recency with comment-to-upvote ratio
          const aRatio = a.comments / a.upvotes;
          const bRatio = b.comments / b.upvotes;
          return bRatio - aRatio;
        });
      case 'hot':
      default:
        // Hot is a combination of recency and votes
        return sorted.sort((a, b) => {
          const aScore = a.upvotes * 0.7 + (1 / (new Date() - new Date(a.created))) * 0.3;
          const bScore = b.upvotes * 0.7 + (1 / (new Date() - new Date(b.created))) * 0.3;
          return bScore - aScore;
        });
    }
  };
  
  const sortedPosts = getSortedPosts();

  return (
    <div className="popular-page">
      <div className="page-header">
        <h1>Popular Posts</h1>
        <p>Trending posts from all communities</p>
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
            className={`tab-button ${sortBy === 'rising' ? 'active' : ''}`} 
            onClick={() => setSortBy('rising')}
          >
            <i className="fas fa-chart-line"></i> Rising
          </button>
        </div>
        
        <div className="time-filter">
          <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)}>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
            <option value="all">All Time</option>
          </select>
        </div>
      </div>
      
      <div className="posts-container">
        {sortedPosts.length > 0 ? (
          sortedPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <div className="no-posts">
            <h3>No posts match your criteria</h3>
            <p>Try changing your sort or time filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popular; 