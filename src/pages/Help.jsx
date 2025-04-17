import React, { useState } from 'react';

const Help = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  const toggleFaq = (index) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };
  
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button in the top right corner of any page. Follow the instructions to provide your email, username, and password. Once you've verified your email address, you'll be ready to start using MatrixAgora."
    },
    {
      question: "How do I join a community?",
      answer: "You can join a community by visiting the community page and clicking the 'Join' button near the top right. You can find communities through the Explore page, search function, or by browsing the Topics section in the sidebar."
    },
    {
      question: "How do I create a post?",
      answer: "To create a post, navigate to the community where you want to post, then click on the 'Create Post' button. You can choose between different post types (text, image, link, etc.) and add a title and content following the community's rules."
    },
    {
      question: "What are upvotes and downvotes?",
      answer: "Upvotes and downvotes are MatrixAgora's voting system. You can upvote content you find valuable, interesting, or enjoyable, and downvote content that doesn't contribute to the conversation. The total score (upvotes minus downvotes) affects the visibility of posts and comments."
    },
    {
      question: "What is karma?",
      answer: "Karma is a reflection of how much your contributions mean to the community. You gain karma when your posts or comments get upvoted. It's an indicator of your MatrixAgora reputation but has limited practical uses on the platform."
    },
    {
      question: "How do I change my username?",
      answer: "Unfortunately, usernames cannot be changed once created. This is to prevent confusion and maintain accountability in communities. If you must change your username, you would need to create a new account."
    },
    {
      question: "How do I report inappropriate content?",
      answer: "To report content that violates MatrixAgora's rules, click the '...' or 'More Options' button beneath the post or comment, then select 'Report'. Choose the appropriate reason for reporting and submit your report for moderators to review."
    },
    {
      question: "What is MatrixAgora Pro and what benefits does it offer?",
      answer: "MatrixAgora Pro is our premium membership that offers an ad-free experience, exclusive features like custom avatars, access to the MatrixAgora Lounge community, and other perks. You can learn more on our MatrixAgora Pro page."
    }
  ];
  
  return (
    <div className="resource-page">
      <div className="resource-page-header">
        <h1>Help Center</h1>
        <p>Find answers to commonly asked questions and learn how to get the most out of MatrixAgora</p>
      </div>
      
      <div className="resource-page-content">
        <div className="help-categories">
          <div className="help-category">
            <i className="fas fa-question-circle"></i>
            <span>FAQ</span>
          </div>
          <div className="help-category">
            <i className="fas fa-book"></i>
            <span>Guides</span>
          </div>
          <div className="help-category">
            <i className="fas fa-shield-alt"></i>
            <span>Safety</span>
          </div>
          <div className="help-category">
            <i className="fas fa-cog"></i>
            <span>Account</span>
          </div>
          <div className="help-category">
            <i className="fas fa-comment-alt"></i>
            <span>Contact</span>
          </div>
        </div>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for help..."
            className="help-search"
          />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
        
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${expandedFaq === index ? 'expanded' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <i className={`fas ${expandedFaq === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </div>
                {expandedFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        
        <section className="contact-support-section">
          <h2>Need Additional Help?</h2>
          <p>If you couldn't find what you're looking for, you can reach out to our support team directly.</p>
          <div className="support-options">
            <div className="support-option">
              <i className="fas fa-envelope"></i>
              <h3>Email Support</h3>
              <p>support@matrixagora.com</p>
              <p>Response time: 24-48 hours</p>
            </div>
            <div className="support-option">
              <i className="fas fa-comments"></i>
              <h3>Live Chat</h3>
              <p>Available Monday-Friday</p>
              <p>9 AM - 6 PM EST</p>
              <button className="chat-button">Start Chat</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Help; 