import React from 'react';

const Press = () => {
  const pressReleases = [
    {
      id: 1,
      title: "MatrixAgora Reaches 50 Million Monthly Active Users",
      date: "June 10, 2023",
      excerpt: "MatrixAgora today announced that it has surpassed 50 million monthly active users, marking a significant milestone in the platform's growth journey.",
      link: "#"
    },
    {
      id: 2,
      title: "MatrixAgora Launches Enhanced Content Moderation System",
      date: "May 22, 2023",
      excerpt: "MatrixAgora introduces a new AI-powered moderation system to help maintain healthy conversations across its communities.",
      link: "#"
    },
    {
      id: 3,
      title: "MatrixAgora Announces $50 Million Series C Funding",
      date: "April 15, 2023",
      excerpt: "The community platform secures new funding to accelerate growth and develop innovative features for users and moderators.",
      link: "#"
    },
    {
      id: 4,
      title: "MatrixAgora Partners with Digital Literacy Initiative",
      date: "March 8, 2023",
      excerpt: "New partnership aims to promote responsible digital citizenship and combat misinformation online.",
      link: "#"
    },
    {
      id: 5,
      title: "MatrixAgora Opens New Headquarters in San Francisco",
      date: "February 2, 2023",
      excerpt: "The company establishes its new global headquarters while maintaining its commitment to remote-first work culture.",
      link: "#"
    }
  ];
  
  const mediaReferences = [
    {
      id: 1,
      title: "How MatrixAgora is Reinventing Online Community Building",
      publication: "Tech Insights",
      date: "May 30, 2023",
      link: "#"
    },
    {
      id: 2,
      title: "The Rise of MatrixAgora: Creating Spaces for Authentic Conversation",
      publication: "Digital Trends",
      date: "April 28, 2023",
      link: "#"
    },
    {
      id: 3,
      title: "MatrixAgora CEO on the Future of Online Communities",
      publication: "Future Web",
      date: "March 15, 2023",
      link: "#"
    },
    {
      id: 4,
      title: "How MatrixAgora's Moderation Approach is Setting New Standards",
      publication: "Community Builder",
      date: "February 22, 2023",
      link: "#"
    }
  ];

  return (
    <div className="resource-page">
      <div className="resource-page-header">
        <h1>MatrixAgora Press Room</h1>
        <p>Latest news, press releases, and media resources</p>
      </div>
      
      <div className="press-container">
        <div className="press-main">
          <section className="press-releases-section">
            <h2>Press Releases</h2>
            <div className="press-releases">
              {pressReleases.map(release => (
                <div className="press-release-card" key={release.id}>
                  <div className="press-release-date">{release.date}</div>
                  <h3>{release.title}</h3>
                  <p>{release.excerpt}</p>
                  <a href={release.link} className="read-press-link">Read Full Release</a>
                </div>
              ))}
            </div>
          </section>
          
          <section className="in-the-news-section">
            <h2>MatrixAgora in the News</h2>
            <div className="news-references">
              {mediaReferences.map(reference => (
                <div className="news-reference-item" key={reference.id}>
                  <h3>
                    <a href={reference.link}>{reference.title}</a>
                  </h3>
                  <div className="reference-meta">
                    <span className="reference-publication">{reference.publication}</span>
                    <span className="reference-date">{reference.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        
        <div className="press-sidebar">
          <div className="press-contact-section">
            <h3>Press Contact</h3>
            <p>For media inquiries, please contact:</p>
            <div className="contact-info">
              <p className="contact-name">Sarah Wilson</p>
              <p className="contact-title">Head of Communications</p>
              <p className="contact-email">press@matrixagora.com</p>
              <p className="contact-phone">(555) 123-4567</p>
            </div>
          </div>
          
          <div className="media-resources-section">
            <h3>Media Resources</h3>
            <ul className="resources-list">
              <li>
                <i className="fas fa-images"></i>
                <a href="#">Logo & Brand Assets</a>
              </li>
              <li>
                <i className="fas fa-newspaper"></i>
                <a href="#">Fact Sheet</a>
              </li>
              <li>
                <i className="fas fa-user-tie"></i>
                <a href="#">Executive Bios</a>
              </li>
              <li>
                <i className="fas fa-photo-video"></i>
                <a href="#">Product Images</a>
              </li>
              <li>
                <i className="fas fa-chart-line"></i>
                <a href="#">Growth Statistics</a>
              </li>
            </ul>
          </div>
          
          <div className="press-kit-section">
            <h3>Press Kit</h3>
            <p>Download our comprehensive press kit with all the information you need about MatrixAgora.</p>
            <button className="download-press-kit">
              <i className="fas fa-download"></i> Download Press Kit
            </button>
          </div>
        </div>
      </div>
      
      <section className="featured-stories-section">
        <h2>Featured Stories</h2>
        <div className="featured-stories-grid">
          <div className="featured-story">
            <img src="https://picsum.photos/600/400?random=1" alt="Feature story" />
            <div className="featured-story-content">
              <span className="story-category">Company</span>
              <h3>The Story Behind MatrixAgora's Mission to Connect Communities</h3>
              <p>Learn about our journey from startup to one of the web's largest community platforms.</p>
              <a href="#" className="read-story-link">Read the Full Story</a>
            </div>
          </div>
          <div className="featured-story">
            <img src="https://picsum.photos/600/400?random=2" alt="Feature story" />
            <div className="featured-story-content">
              <span className="story-category">Product</span>
              <h3>How MatrixAgora's Design Philosophy Puts Communities First</h3>
              <p>Our approach to building features that enhance community engagement and moderation.</p>
              <a href="#" className="read-story-link">Read the Full Story</a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="events-section">
        <h2>Upcoming Events</h2>
        <div className="events-timeline">
          <div className="event-item">
            <div className="event-date">
              <span className="month">JUL</span>
              <span className="day">15</span>
            </div>
            <div className="event-details">
              <h3>Community Builder Conference 2023</h3>
              <p className="event-location">San Francisco, CA</p>
              <p className="event-description">MatrixAgora's CEO will deliver a keynote on the evolution of online communities.</p>
            </div>
          </div>
          <div className="event-item">
            <div className="event-date">
              <span className="month">AUG</span>
              <span className="day">22</span>
            </div>
            <div className="event-details">
              <h3>Digital Trust Summit</h3>
              <p className="event-location">New York, NY</p>
              <p className="event-description">Panel discussion on content moderation and community safety.</p>
            </div>
          </div>
          <div className="event-item">
            <div className="event-date">
              <span className="month">SEP</span>
              <span className="day">10</span>
            </div>
            <div className="event-details">
              <h3>MatrixAgora Developer Conference</h3>
              <p className="event-location">Virtual Event</p>
              <p className="event-description">Learn about our API, integrations, and developer tools.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press; 