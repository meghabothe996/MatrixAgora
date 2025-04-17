import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { subreddits } from '../data/dummyData';

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedGroups, setExpandedGroups] = useState({});
  const categoriesContainerRef = useRef(null);
  
  // Categories for filtering communities
  const categories = [
    { id: 'all', name: 'All', icon: 'fas fa-th-large' },
    { id: 'internet-culture', name: 'Internet Culture', icon: 'fas fa-hashtag' },
    { id: 'games', name: 'Games', icon: 'fas fa-gamepad' },
    { id: 'qas', name: 'Q&As & Stories', icon: 'fas fa-question-circle' },
    { id: 'movies', name: 'Movies & TV', icon: 'fas fa-film' },
    { id: 'technology', name: 'Technology', icon: 'fas fa-microchip' },
    { id: 'places', name: 'Places & Travel', icon: 'fas fa-plane' },
    { id: 'business', name: 'Business & Finance', icon: 'fas fa-briefcase' },
    { id: 'pop-culture', name: 'Pop Culture', icon: 'fas fa-tv' }
  ];
  
  // Additional communities for when "Show more" is clicked
  const additionalCommunities = {
    'recommended': [
      {
        id: 13,
        name: 'r/worldnews',
        description: 'A place for major news from around the world.',
        members: 43500,
        icon: '🌎',
      },
      {
        id: 14,
        name: 'r/todayilearned',
        description: 'Learn something new every day.',
        members: 38700,
        icon: '📚',
      }
    ],
    'popular': [
      {
        id: 15,
        name: 'r/datascience',
        description: 'A place for data science practitioners to discuss and share.',
        members: 29300,
        icon: '📊',
      },
      {
        id: 16,
        name: 'r/PowerBI',
        description: 'Everything about Power BI - resources, tips, and best practices.',
        members: 19200,
        icon: '📈',
      }
    ],
    'math': [
      {
        id: 17,
        name: 'r/python',
        description: 'News about the programming language Python.',
        members: 52100,
        icon: '🐍',
      },
      {
        id: 18,
        name: 'r/statistics',
        description: 'For statisticians and statistically literate people to discuss statistics.',
        members: 25800,
        icon: '📉',
      }
    ]
  };
  
  // Group communities for recommended section
  const communityGroups = [
    {
      id: 'recommended',
      title: 'Recommended for you',
      communities: subreddits.slice(0, 3)
    },
    {
      id: 'popular',
      title: 'More like analytics',
      communities: [
        {
          id: 7,
          name: 'r/BusinessIntelligence',
          description: 'Join a community of data-driven leaders and Business Intelligence experts.',
          members: 15100,
          icon: '📊',
        },
        {
          id: 8,
          name: 'r/projectmanagement',
          description: 'Seek guidance and share experiences with fellow project managers navigating challenges.',
          members: 18500,
          icon: '📋',
        },
        {
          id: 9,
          name: 'r/IBM',
          description: 'A community dedicated to all things IBM: news, innovations, history, and discussions.',
          members: 27100,
          icon: '💼',
        }
      ]
    },
    {
      id: 'math',
      title: 'More like math',
      communities: [
        {
          id: 10,
          name: 'r/learnmath',
          description: 'A community for learning mathematics at any level.',
          members: 28700,
          icon: '🧮',
        },
        {
          id: 11,
          name: 'r/CProgramming',
          description: 'Community for C Programming language enthusiasts.',
          members: 32400,
          icon: '💻',
        },
        {
          id: 12,
          name: 'r/LaTeX',
          description: 'Community for LaTeX document preparation system.',
          members: 16800,
          icon: '📝',
        }
      ]
    }
  ];

  // Handle scroll for categories
  const handleScroll = (direction) => {
    if (categoriesContainerRef.current) {
      const container = categoriesContainerRef.current;
      const scrollAmount = 200; // Adjust as needed
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };
  
  // Handle show more button click
  const handleShowMore = (groupId) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupId]: true
    }));
  };

  return (
    <div className="explore-page">
      <div className="explore-header">
        <h1>Explore Communities</h1>
      </div>
      
      {/* Category tabs with scroll arrows */}
      <div className="explore-categories">
        <button 
          className="scroll-arrow scroll-left" 
          onClick={() => handleScroll('left')}
          aria-label="Scroll left"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <div className="categories-container" ref={categoriesContainerRef}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <i className={category.icon}></i>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
        
        <button 
          className="scroll-arrow scroll-right" 
          onClick={() => handleScroll('right')}
          aria-label="Scroll right"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      
      {/* Community groups */}
      <div className="explore-communities">
        {communityGroups.map(group => (
          <div key={group.id} className="community-group">
            <h2>{group.title}</h2>
            <div className="communities-grid">
              {group.communities.map(community => (
                <div key={community.id} className="community-card">
                  <div className="community-card-header">
                    <div className="community-icon">
                      {community.icon}
                    </div>
                    <div className="community-info">
                      <h3>{community.name}</h3>
                      <span>{community.members.toLocaleString()} members</span>
                    </div>
                    <button className="join-button">Join</button>
                  </div>
                  <p className="community-description">
                    {community.description || `A community for discussions related to ${community.name.substring(2)}`}
                  </p>
                </div>
              ))}
              
              {/* Show additional communities if expanded */}
              {expandedGroups[group.id] && additionalCommunities[group.id]?.map(community => (
                <div key={community.id} className="community-card">
                  <div className="community-card-header">
                    <div className="community-icon">
                      {community.icon}
                    </div>
                    <div className="community-info">
                      <h3>{community.name}</h3>
                      <span>{community.members.toLocaleString()} members</span>
                    </div>
                    <button className="join-button">Join</button>
                  </div>
                  <p className="community-description">
                    {community.description || `A community for discussions related to ${community.name.substring(2)}`}
                  </p>
                </div>
              ))}
            </div>
            <div className="show-more-container">
              {!expandedGroups[group.id] ? (
                <button 
                  className="show-more-button"
                  onClick={() => handleShowMore(group.id)}
                >
                  Show more
                </button>
              ) : (
                <button 
                  className="show-more-button"
                  onClick={() => setExpandedGroups(prev => ({...prev, [group.id]: false}))}
                >
                  Show less
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore; 