import React from 'react';

const MatrixPro = () => {
  return (
    <div className="resource-page">
      <div className="resource-page-header">
        <h1>MatrixAgora Pro</h1>
        <p>Enhance your MatrixAgora experience with premium features</p>
      </div>
      
      <div className="resource-page-content">
        <section className="pro-hero">
          <div className="pro-hero-content">
            <h2>Get the Best of MatrixAgora</h2>
            <p>Join MatrixAgora Pro and enjoy an ad-free experience with exclusive features and benefits.</p>
            <button className="pro-cta-button">Subscribe Now</button>
          </div>
          <div className="pro-hero-image">
            <i className="fas fa-star pro-star"></i>
          </div>
        </section>
        
        <section className="pro-features">
          <h2>Premium Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-ad"></i>
              <h3>Ad-Free Browsing</h3>
              <p>Enjoy MatrixAgora without advertisements for a cleaner, more focused experience.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-palette"></i>
              <h3>Custom Avatars</h3>
              <p>Express yourself with exclusive Pro-only avatar customization options.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-user-tag"></i>
              <h3>Pro Badge</h3>
              <p>Stand out with a special Pro badge next to your username in comments and posts.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-lock"></i>
              <h3>Exclusive Communities</h3>
              <p>Access to the MatrixAgora Lounge and other Pro-only communities.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-gift"></i>
              <h3>Awards</h3>
              <p>Monthly credits to give premium awards to posts and comments you appreciate.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-history"></i>
              <h3>Comment History</h3>
              <p>Access your full comment history beyond the standard 1,000 comment limit.</p>
            </div>
          </div>
        </section>
        
        <section className="pricing-section">
          <h2>Choose Your Plan</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Monthly</h3>
                <div className="price">$5.99<span>/month</span></div>
              </div>
              <ul className="pricing-features">
                <li><i className="fas fa-check"></i> Ad-free experience</li>
                <li><i className="fas fa-check"></i> Custom avatars</li>
                <li><i className="fas fa-check"></i> Pro badge</li>
                <li><i className="fas fa-check"></i> Exclusive communities</li>
                <li><i className="fas fa-check"></i> 500 award credits monthly</li>
              </ul>
              <button className="pricing-button">Subscribe</button>
            </div>
            
            <div className="pricing-card popular">
              <div className="popular-badge">Best Value</div>
              <div className="pricing-header">
                <h3>Annual</h3>
                <div className="price">$59.99<span>/year</span></div>
                <div className="savings">Save $11.89</div>
              </div>
              <ul className="pricing-features">
                <li><i className="fas fa-check"></i> Ad-free experience</li>
                <li><i className="fas fa-check"></i> Custom avatars</li>
                <li><i className="fas fa-check"></i> Pro badge</li>
                <li><i className="fas fa-check"></i> Exclusive communities</li>
                <li><i className="fas fa-check"></i> 700 award credits monthly</li>
                <li><i className="fas fa-check"></i> Priority support</li>
              </ul>
              <button className="pricing-button">Subscribe</button>
            </div>
          </div>
        </section>
        
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>Can I cancel my subscription at any time?</h3>
            <p>Yes, you can cancel your MatrixAgora Pro subscription at any time. Your benefits will remain active until the end of your current billing period.</p>
          </div>
          <div className="faq-item">
            <h3>How do I use my award credits?</h3>
            <p>Award credits can be used to give special awards to posts and comments. Simply click on the "Award" button beneath any post or comment and select from the available awards.</p>
          </div>
          <div className="faq-item">
            <h3>Will my subscription renew automatically?</h3>
            <p>Yes, your subscription will renew automatically at the end of each billing period. You can manage your subscription settings in your account preferences.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MatrixPro; 