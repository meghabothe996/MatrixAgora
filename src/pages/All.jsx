import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import { posts, subreddits } from '../data/dummyData';

const All = () => {
  const [sortBy, setSortBy] = useState('new'); // 'new', 'top', 'rising'
  const [timeFilter, setTimeFilter] = useState('all'); // 'today', 'week', 'month', 'year', 'all'

  // Extended dummy popular posts - combining existing posts with some new ones
  const allPosts = [
    ...posts,
    {
      id: 201,
      title: 'What\'s your most controversial food opinion?',
      content: 'I\'ll start: Pineapple absolutely belongs on pizza, and I\'m tired of pretending it doesn\'t. The sweetness of the pineapple perfectly complements the saltiness of the ham and cheese. Plus, the acidity cuts through the richness of the cheese, creating a more balanced flavor profile. I\'ve been a chef for 10 years, and I stand by this combination 100%. What food opinion do you hold that others find controversial? Let\'s keep it civil in the comments!',
      image: '',
      upvotes: 842,
      userId: 3,
      subredditId: 11, // food
      comments: 763,
      created: '2023-06-16T22:15:00Z'
    },
    {
      id: 202,
      title: 'I found a 30-year-old sealed bottle of soda in my grandparents\' basement',
      content: 'It\'s a limited edition flavor from 1993 that was only sold for a few months. The label is still in perfect condition, though the liquid inside has turned a strange amber color. My grandfather says he bought a case when they announced it was being discontinued. Apparently, he forgot about this last bottle! The flavor was "Tropical Sunset," a mix of passionfruit, mango, and a hint of coconut according to the label. The bottle itself is glass with the original metal cap still secured. There\'s no way I\'m opening it, but it\'s a fascinating piece of beverage history. Has anyone else ever tried this flavor back in the day?',
      image: '',
      upvotes: 5731,
      userId: 2,
      subredditId: 5, // mildlyinteresting
      comments: 341,
      created: '2023-06-17T14:20:00Z'
    },
    {
      id: 203,
      title: 'TIL that Nintendo was founded in 1889 and originally sold playing cards',
      content: 'Before video games were even a concept, Nintendo was making handmade playing cards in Kyoto, Japan. They actually started as "Nintendo Koppai," a company that produced handmade hanafuda cards (traditional Japanese playing cards with flower designs). The company was founded by Fusajiro Yamauchi on September 23, 1889. They didn\'t enter the toy market until the 1960s, and their first video game console wasn\'t released until 1977. It\'s incredible to think that a company that\'s now synonymous with video gaming has been around for over 130 years, surviving through two world wars and countless technological revolutions. The company\'s name is thought to roughly translate to "leave luck to heaven" or "the temple of free hanafuda."',
      image: '',
      upvotes: 12453,
      userId: 1,
      subredditId: 15, // todayilearned
      comments: 526,
      created: '2023-06-15T08:45:00Z'
    },
    {
      id: 204,
      title: 'After 5 years of struggling with depression, I finally cleaned my apartment',
      content: 'It might not seem like much to most people, but today I finally managed to clean my entire apartment for the first time in years. Depression had me living in a cluttered, disorganized space that only made my mental state worse. I started small - just taking out the trash. Then I moved to doing the dishes. Before I knew it, I had momentum. I vacuumed every room, organized my closet, scrubbed the bathroom, and even changed my bedsheets. The whole process took almost 8 hours, but now my living space is clean, organized, and peaceful. I feel like I can finally breathe again. If you\'re struggling with something similar, just try to do one small thing. Sometimes that\'s all it takes to start moving forward.',
      image: '',
      upvotes: 32578,
      userId: 5,
      subredditId: 22, // congratslikeimfive
      comments: 2431,
      created: '2023-06-18T19:30:00Z'
    },
    {
      id: 205,
      title: 'Study finds that people who talk to their pets tend to be more empathetic and score higher on emotional intelligence tests',
      content: 'Researchers at the University of California conducted a study with 450 participants who own pets, measuring their EQ (emotional quotient) and empathy levels. They found that people who regularly talk to their pets as if they were human (known as anthropomorphizing) scored an average of 28% higher on emotional intelligence assessments than those who don\'t. The research suggests this might be because talking to pets serves as a form of emotional practice, helping pet owners become more attuned to non-verbal cues and emotional needs. Additionally, those who reported talking to their pets daily showed higher levels of oxytocin (the "love hormone") when interacting with both animals and humans in controlled experiments. The study controlled for factors such as age, gender, education level, and type of pet owned. The findings were consistent across dog, cat, and even bird owners.',
      image: '',
      upvotes: 9764,
      userId: 3,
      subredditId: 18, // science
      comments: 842,
      created: '2023-06-16T11:05:00Z'
    }
  ];

  // Sort posts based on selected sort option
  const getSortedPosts = () => {
    let sorted = [...allPosts];
    
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
      default:
        return sorted.sort((a, b) => new Date(b.created) - new Date(a.created));
    }
  };
  
  const sortedPosts = getSortedPosts();

  // Get Subreddit name by ID
  const getSubredditName = (id) => {
    const subreddit = subreddits.find(s => s.id === id);
    return subreddit ? subreddit.name : 'Unknown';
  };

  return (
    <div className="all-posts-page">
      <div className="page-header">
        <h1>All Posts</h1>
        <p>Recent posts from across the Matrix</p>
      </div>
      
      <div className="filter-bar">
        <div className="sorting-tabs">
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

export default All; 