import React from 'react';

const About = () => {
  return (
    <div className="resource-page">
      <div className="resource-page-header">
        <h1>About MatrixAgora</h1>
      </div>
      <div className="resource-page-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            MatrixAgora is a platform for community building and connection. Our mission is to bring people together around their interests, hobbies, and passions. 
            Whether you're into the latest tech, music, art, or just looking for advice, MatrixAgora helps you connect with like-minded individuals.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2023, MatrixAgora began as a small project among friends who wanted to create a space for open discussions without the noise and distractions of traditional social media. 
            The name "MatrixAgora" combines "Matrix" (representing interconnectedness) and "Agora" (the ancient Greek gathering place for conversation and commerce).
          </p>
          <p>
            Today, MatrixAgora hosts thousands of communities covering nearly every topic imaginable, with millions of active users engaging in conversations daily.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Authenticity</strong> - We believe in real conversations between real people</li>
            <li><strong>Community</strong> - We value the power of people coming together around shared interests</li>
            <li><strong>Respect</strong> - We foster environments where diverse opinions can be expressed respectfully</li>
            <li><strong>Privacy</strong> - We are committed to protecting user data and providing transparent privacy practices</li>
            <li><strong>Innovation</strong> - We continuously improve our platform to better connect people and communities</li>
          </ul>
        </section>
        
        <section className="about-section">
          <h2>The MatrixAgora Team</h2>
          <p>
            Our team consists of passionate individuals from around the world, working together to build and maintain the platform. From engineers and designers to community managers and support specialists, 
            we're united by our commitment to creating the best place for communities to thrive online.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            Have questions or feedback? We'd love to hear from you!
          </p>
          <ul className="contact-list">
            <li><i className="fas fa-envelope"></i> contact@matrixagora.com</li>
            <li><i className="fas fa-map-marker-alt"></i> 123 Community Avenue, San Francisco, CA 94105</li>
            <li><i className="fas fa-phone"></i> (555) 123-4567</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About; 