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
      content: 'After weeks of rain, finally got this amazing view. No filters used! The sky was a gradient of deep oranges and purples, with clouds that looked like they were on fire. My apartment faces west over the city skyline, and for about 15 minutes everything was bathed in this golden light. I sat there with a cup of tea just taking it all in. It\'s moments like these that make me appreciate living where I do, despite the high rent! Has anyone else caught an amazing sunset recently?',
      image: '',
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
      content: 'Researchers at MIT have developed a new method of harvesting energy from ambient temperature fluctuations that could provide clean, constant power with minimal environmental impact. The system uses specialized nanomaterials that can capture energy from the natural temperature changes that occur throughout the day and night. In lab tests, a prototype the size of a smartphone was able to generate enough electricity to power small devices continuously. The researchers estimate that larger installations could potentially power homes or even contribute to the grid. The technology is still in early stages but shows promise for scaling up within the next decade. The full research paper was published today in Nature Energy.',
      image: '',
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
      content: 'Took about 3 months to complete. Specs: RTX 3080, i9-11900K, 64GB RAM. The hardest part was fitting the cooling system. I had to completely gut the original internals and create a custom mounting system for the motherboard. The power supply had to be external because there was no way it would fit inside. For cooling, I installed three small Noctua fans and a low-profile CPU cooler. I also added a custom acrylic window on the side so you can see the components, with RGB lighting that maintains the classic beige/brown color scheme. The original power button now works with the new system, and I even managed to incorporate the original floppy drive slot as a secret drawer for USB drives. It runs modern games at 4K without breaking a sweat!',
      image: '',
      upvotes: 31056,
      userId: 1,
      subredditId: 13, // DIY
      comments: 947,
      created: '2023-06-16T14:20:00Z',
      isPopular: true
    },
    {
      id: 104,
      title: 'This AI generated artwork won first place in an art competition',
      content: 'Digital artists are debating whether AI-generated artwork should be allowed in traditional art competitions. Thoughts? The winning piece was a surreal landscape that combined elements of classical painting with modern abstract styles. The artist (if we can call them that) used Midjourney with custom parameters and extensive prompt engineering, followed by manual retouching in Photoshop. The competition judges didn\'t know it was AI-generated until after selecting it as the winner. Many traditional artists are arguing that AI art requires minimal skill and shouldn\'t be judged alongside hand-created work, while others say that prompt engineering and selection is itself a new form of artistic expression. What do you think - should AI art have its own separate category?',
      image: '',
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
      content: 'The secret was fermenting the dough for 72 hours and using a pizza steel preheated for an hour at max oven temperature. I use a simple recipe of 00 flour, water, salt, and just a tiny bit of yeast to allow for the long fermentation. The dough develops so much flavor during those three days in the fridge. For the sauce, I use only San Marzano tomatoes crushed by hand with a little salt. The cheese is fresh mozzarella that I pat dry before putting on the pizza (prevents soggy centers). I stretch the dough by hand to about 12 inches, keeping the outer edge thicker for a nice puffy cornicione. Total bake time is only about 4-5 minutes at 550°F (as hot as my home oven will go). The bottom gets beautifully leoparded thanks to the pizza steel, and the edge puffs up with those characteristic air pockets. Topped simply with fresh basil added after baking.',
      image: '',
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