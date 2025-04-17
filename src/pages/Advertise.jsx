import React from 'react';

const Advertise = () => {
  return (
    <div className="resource-page">
      <div className="resource-page-header">
        <h1>Advertise on MatrixAgora</h1>
        <p>Reach millions of engaged users across thousands of communities</p>
      </div>
      
      <div className="resource-page-content">
        <section className="advertise-hero">
          <div className="advertise-hero-content">
            <h2>Connect with Your Target Audience</h2>
            <p>MatrixAgora offers a unique advertising platform that connects brands with highly engaged communities organized around specific interests and topics.</p>
            <button className="advertise-cta-button">Get Started</button>
          </div>
        </section>
        
        <section className="stats-section">
          <div className="stat-card">
            <div className="stat-number">50M+</div>
            <div className="stat-label">Monthly Active Users</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15K+</div>
            <div className="stat-label">Active Communities</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">30min</div>
            <div className="stat-label">Avg. Daily Time Spent</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">90%</div>
            <div className="stat-label">User Engagement Rate</div>
          </div>
        </section>
        
        <section className="ad-formats-section">
          <h2>Ad Formats</h2>
          <div className="ad-formats-grid">
            <div className="ad-format-card">
              <img src="https://picsum.photos/300/200?random=1" alt="Promoted Post" />
              <h3>Promoted Posts</h3>
              <p>Native-looking posts that appear in users' feeds, community pages, and popular sections.</p>
              <ul className="ad-features">
                <li>High engagement rates</li>
                <li>Seamless user experience</li>
                <li>Community-specific targeting</li>
              </ul>
            </div>
            
            <div className="ad-format-card">
              <img src="https://picsum.photos/300/200?random=2" alt="Display Ads" />
              <h3>Display Ads</h3>
              <p>Traditional banner ads that appear in the sidebar and between posts.</p>
              <ul className="ad-features">
                <li>High visibility</li>
                <li>Various sizes available</li>
                <li>Supports rich media</li>
              </ul>
            </div>
            
            <div className="ad-format-card">
              <img src="https://picsum.photos/300/200?random=3" alt="Video Ads" />
              <h3>Video Ads</h3>
              <p>Engaging video content that plays within the feed or as pre-roll.</p>
              <ul className="ad-features">
                <li>Autoplay in feed (muted)</li>
                <li>Click-to-play audio</li>
                <li>Performance tracking</li>
              </ul>
            </div>
            
            <div className="ad-format-card">
              <img src="https://picsum.photos/300/200?random=4" alt="Sponsored AMAs" />
              <h3>Sponsored AMAs</h3>
              <p>"Ask Me Anything" sessions where brands can directly engage with community members.</p>
              <ul className="ad-features">
                <li>Direct user interaction</li>
                <li>Build brand authenticity</li>
                <li>High engagement opportunity</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="pricing-section">
          <h2>Advertising Packages</h2>
          <div className="pricing-table">
            <div className="pricing-column header">
              <div className="pricing-cell header-cell">Package</div>
              <div className="pricing-cell">Impressions</div>
              <div className="pricing-cell">Targeting Options</div>
              <div className="pricing-cell">Ad Formats</div>
              <div className="pricing-cell">Analytics</div>
              <div className="pricing-cell">Price</div>
              <div className="pricing-cell action"></div>
            </div>
            
            <div className="pricing-column">
              <div className="pricing-cell header-cell">Starter</div>
              <div className="pricing-cell">50,000</div>
              <div className="pricing-cell">Basic</div>
              <div className="pricing-cell">Promoted Posts</div>
              <div className="pricing-cell">Standard</div>
              <div className="pricing-cell price">$500</div>
              <div className="pricing-cell action">
                <button className="pricing-button">Select</button>
              </div>
            </div>
            
            <div className="pricing-column popular">
              <div className="popular-badge">Most Popular</div>
              <div className="pricing-cell header-cell">Growth</div>
              <div className="pricing-cell">200,000</div>
              <div className="pricing-cell">Advanced</div>
              <div className="pricing-cell">Promoted Posts, Display Ads</div>
              <div className="pricing-cell">Advanced</div>
              <div className="pricing-cell price">$1,500</div>
              <div className="pricing-cell action">
                <button className="pricing-button">Select</button>
              </div>
            </div>
            
            <div className="pricing-column">
              <div className="pricing-cell header-cell">Premium</div>
              <div className="pricing-cell">500,000+</div>
              <div className="pricing-cell">Premium</div>
              <div className="pricing-cell">All Formats</div>
              <div className="pricing-cell">Real-time</div>
              <div className="pricing-cell price">$3,000+</div>
              <div className="pricing-cell action">
                <button className="pricing-button">Contact Us</button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="contact-section">
          <h2>Ready to Get Started?</h2>
          <p>Our advertising team is ready to help you create the perfect campaign for your brand.</p>
          <div className="contact-options">
            <div className="contact-option">
              <i className="fas fa-envelope"></i>
              <h3>Email Us</h3>
              <p>ads@matrixagora.com</p>
            </div>
            <div className="contact-option">
              <i className="fas fa-phone"></i>
              <h3>Call Us</h3>
              <p>(555) 123-4567</p>
            </div>
            <div className="contact-option">
              <i className="fas fa-calendar-alt"></i>
              <h3>Schedule a Demo</h3>
              <button className="demo-button">Book Now</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Advertise; 