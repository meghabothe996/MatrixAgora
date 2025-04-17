import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import { posts } from '../data/dummyData';

const Home = () => {
  const [sortBy, setSortBy] = useState('hot'); // 'hot', 'new', 'top'
  
  // Sort posts based on selected sort option
  const getSortedPosts = () => {
    switch (sortBy) {
      case 'new':
        return [...posts].sort((a, b) => new Date(b.created) - new Date(a.created));
      case 'top':
        return [...posts].sort((a, b) => b.upvotes - a.upvotes);
      case 'hot':
      default:
        // Hot is a combination of recency and votes
        return [...posts].sort((a, b) => {
          const aScore = a.upvotes * 0.7 + (1 / (new Date() - new Date(a.created))) * 0.3;
          const bScore = b.upvotes * 0.7 + (1 / (new Date() - new Date(b.created))) * 0.3;
          return bScore - aScore;
        });
    }
  };
  
  const sortedPosts = getSortedPosts();
  
  return (
    <div className="home-page">
      <div className="posts-container">
        {sortedPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home; 