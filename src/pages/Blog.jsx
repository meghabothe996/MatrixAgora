import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Introducing New Community Features",
      excerpt: "We're excited to announce a set of new features designed to enhance community engagement and moderation.",
      author: "MatrixAgora Team",
      date: "May 15, 2023",
      category: "Product Updates",
      image: "https://picsum.photos/800/400?random=1"
    },
    {
      id: 2,
      title: "MatrixAgora Community Spotlight: r/programming",
      excerpt: "This month, we're highlighting the r/programming community and their incredible contributions to the developer ecosystem.",
      author: "Sarah Johnson",
      date: "May 10, 2023",
      category: "Community Spotlight",
      image: "https://picsum.photos/800/400?random=2"
    },
    {
      id: 3,
      title: "Improving Content Discovery: New Recommendation Algorithm",
      excerpt: "Learn about our updated recommendation system that helps you discover more relevant content based on your interests.",
      author: "David Chen",
      date: "May 5, 2023",
      category: "Product Updates",
      image: "https://picsum.photos/800/400?random=3"
    },
    {
      id: 4,
      title: "MatrixAgora's 2023 Transparency Report",
      excerpt: "Our annual transparency report covering how we're handling content moderation, user privacy, and legal requests.",
      author: "Elena Rodriguez",
      date: "April 28, 2023",
      category: "Company News",
      image: "https://picsum.photos/800/400?random=4"
    },
    {
      id: 5,
      title: "Meet the Moderators: An Interview Series",
      excerpt: "Get to know the dedicated volunteers who help keep MatrixAgora's communities healthy and thriving.",
      author: "James Wilson",
      date: "April 20, 2023",
      category: "Community Spotlight",
      image: "https://picsum.photos/800/400?random=5"
    }
  ];

  const categories = [
    "Product Updates",
    "Community Spotlight",
    "Company News",
    "Engineering",
    "Moderation",
    "Events",
    "Tutorials"
  ];

  return (
    <div className="resource-page">
      <div className="resource-page-header">
        <h1>MatrixAgora Blog</h1>
        <p>News, updates, and insights from the MatrixAgora team</p>
      </div>
      
      <div className="blog-container">
        <div className="blog-main">
          <div className="featured-post">
            <div className="featured-image">
              <img src={blogPosts[0].image} alt={blogPosts[0].title} />
              <div className="featured-category">{blogPosts[0].category}</div>
            </div>
            <div className="featured-content">
              <h2>{blogPosts[0].title}</h2>
              <div className="post-meta">
                <span className="post-author">{blogPosts[0].author}</span>
                <span className="post-date">{blogPosts[0].date}</span>
              </div>
              <p>{blogPosts[0].excerpt}</p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
          
          <div className="recent-posts">
            <h2>Recent Posts</h2>
            <div className="posts-grid">
              {blogPosts.slice(1).map(post => (
                <div className="post-card" key={post.id}>
                  <div className="post-image">
                    <img src={post.image} alt={post.title} />
                    <div className="post-category">{post.category}</div>
                  </div>
                  <div className="post-content">
                    <h3>{post.title}</h3>
                    <div className="post-meta">
                      <span className="post-author">{post.author}</span>
                      <span className="post-date">{post.date}</span>
                    </div>
                    <p>{post.excerpt}</p>
                    <button className="read-more-link">Read More →</button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pagination">
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn">2</button>
              <button className="pagination-btn">3</button>
              <button className="pagination-btn">Next →</button>
            </div>
          </div>
        </div>
        
        <div className="blog-sidebar">
          <div className="sidebar-section">
            <h3>Categories</h3>
            <ul className="category-list">
              {categories.map((category, index) => (
                <li key={index} className="category-item">
                  <a href="#">{category}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="sidebar-section">
            <h3>Subscribe to Updates</h3>
            <p>Stay up to date with the latest news and announcements.</p>
            <div className="subscription-form">
              <input type="email" placeholder="Your email address" />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
          
          <div className="sidebar-section">
            <h3>Popular Tags</h3>
            <div className="tags-cloud">
              <a href="#" className="tag">MatrixAgora</a>
              <a href="#" className="tag">Community</a>
              <a href="#" className="tag">Updates</a>
              <a href="#" className="tag">Features</a>
              <a href="#" className="tag">Moderation</a>
              <a href="#" className="tag">Design</a>
              <a href="#" className="tag">Development</a>
              <a href="#" className="tag">API</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 