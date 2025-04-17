import React from 'react';

const Careers = () => {
  const jobListings = [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "San Francisco, CA (Remote Option)",
      type: "Full-time",
      description: "We're looking for a Senior Frontend Engineer to help build the next generation of community experiences on MatrixAgora. You'll be working with React, TypeScript, and modern web technologies to craft intuitive and performant user interfaces.",
      requirements: [
        "5+ years of professional software engineering experience",
        "3+ years of experience with React or similar frameworks",
        "Strong TypeScript/JavaScript skills",
        "Experience with responsive design and cross-browser compatibility",
        "Passion for creating accessible and performant web applications"
      ]
    },
    {
      id: 2,
      title: "Community Operations Manager",
      department: "Community",
      location: "Remote",
      type: "Full-time",
      description: "As a Community Operations Manager, you'll help ensure that MatrixAgora remains a vibrant and healthy ecosystem. You'll work closely with our moderation teams and community leaders to develop and implement policies that foster positive engagement.",
      requirements: [
        "3+ years of experience in community management",
        "Strong communication and interpersonal skills",
        "Experience with content moderation policies and practices",
        "Ability to analyze community health metrics and implement improvements",
        "Passion for online communities"
      ]
    },
    {
      id: 3,
      title: "Product Designer",
      department: "Design",
      location: "New York, NY (Remote Option)",
      type: "Full-time",
      description: "Join our Product Design team to shape the future of how millions of people connect and share online. You'll be involved in all aspects of the design process, from initial concept to final implementation.",
      requirements: [
        "4+ years of product design experience",
        "Strong portfolio demonstrating UX and UI design skills",
        "Experience with design systems and component libraries",
        "Familiarity with Figma and modern design tools",
        "Ability to communicate design decisions effectively"
      ]
    },
    {
      id: 4,
      title: "Data Scientist",
      department: "Data",
      location: "Remote",
      type: "Full-time",
      description: "Help us understand our platform and users through data analysis and machine learning. You'll work with large datasets to derive insights that drive product decisions and enhance user experience.",
      requirements: [
        "3+ years of experience in data science or related field",
        "Strong programming skills in Python and SQL",
        "Experience with data visualization and storytelling",
        "Knowledge of machine learning and statistical analysis",
        "Bachelor's or higher degree in Computer Science, Statistics, or related field"
      ]
    },
    {
      id: 5,
      title: "Content Marketing Manager",
      department: "Marketing",
      location: "San Francisco, CA (Remote Option)",
      type: "Full-time",
      description: "Drive MatrixAgora's content strategy across multiple channels. You'll create compelling content that engages our community and supports our business objectives.",
      requirements: [
        "3+ years of content marketing experience",
        "Excellent writing and editing skills",
        "Experience developing content for social media platforms",
        "Ability to analyze content performance and optimize strategies",
        "Understanding of SEO best practices"
      ]
    }
  ];

  const departments = [
    { name: "Engineering", icon: "fas fa-code" },
    { name: "Design", icon: "fas fa-paint-brush" },
    { name: "Product", icon: "fas fa-lightbulb" },
    { name: "Community", icon: "fas fa-users" },
    { name: "Marketing", icon: "fas fa-bullhorn" },
    { name: "Data", icon: "fas fa-chart-bar" },
    { name: "Operations", icon: "fas fa-cogs" },
    { name: "People", icon: "fas fa-heart" }
  ];

  return (
    <div className="resource-page">
      <div className="resource-page-header">
        <h1>Careers at MatrixAgora</h1>
        <p>Join us in building the future of online communities</p>
      </div>
      
      <div className="resource-page-content">
        <section className="careers-hero">
          <div className="careers-hero-content">
            <h2>Work with Purpose</h2>
            <p>At MatrixAgora, we're building technology that powers communities and connects millions of people around their interests and passions. Our mission is to create spaces where authentic conversation flourishes and people can find belonging.</p>
            <button className="careers-cta-button">See Open Roles</button>
          </div>
          <div className="careers-hero-image">
            <img src="https://picsum.photos/800/500?random=10" alt="MatrixAgora team" />
          </div>
        </section>
        
        <section className="culture-section">
          <h2>Our Culture</h2>
          <div className="values-grid">
            <div className="value-card">
              <i className="fas fa-users"></i>
              <h3>Community First</h3>
              <p>We put our users and communities at the center of everything we do. Their needs drive our decisions.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-lightbulb"></i>
              <h3>Innovation</h3>
              <p>We're never satisfied with the status quo and constantly seek better ways to connect people online.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Trust & Safety</h3>
              <p>We are committed to creating platforms where people can express themselves safely.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-comments"></i>
              <h3>Open Communication</h3>
              <p>We value transparency and honest feedback, both internally and with our communities.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-globe"></i>
              <h3>Diversity & Inclusion</h3>
              <p>We believe different perspectives make our product and company stronger.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-rocket"></i>
              <h3>Impact</h3>
              <p>We focus on work that makes a meaningful difference for our users and business.</p>
            </div>
          </div>
        </section>
        
        <section className="benefits-section">
          <h2>Benefits & Perks</h2>
          <div className="benefits-container">
            <div className="benefit-item">
              <i className="fas fa-medkit"></i>
              <h3>Comprehensive Healthcare</h3>
              <p>Medical, dental, and vision plans for you and your dependents.</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-plane"></i>
              <h3>Flexible Time Off</h3>
              <p>Take time when you need it with our unlimited vacation policy.</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-laptop-house"></i>
              <h3>Remote-First</h3>
              <p>Work from anywhere with flexible remote options.</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-graduation-cap"></i>
              <h3>Learning Budget</h3>
              <p>$1,500 annual stipend for courses, books, and conferences.</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-hand-holding-usd"></i>
              <h3>Competitive Compensation</h3>
              <p>Salary and equity packages that reward your impact.</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-baby"></i>
              <h3>Parental Leave</h3>
              <p>Generous paid leave for all new parents.</p>
            </div>
          </div>
        </section>
        
        <section className="departments-section">
          <h2>Our Teams</h2>
          <div className="departments-grid">
            {departments.map((dept, index) => (
              <div className="department-card" key={index}>
                <i className={dept.icon}></i>
                <h3>{dept.name}</h3>
              </div>
            ))}
          </div>
        </section>
        
        <section className="jobs-section">
          <h2>Open Positions</h2>
          <div className="jobs-filter">
            <select className="department-filter">
              <option value="">All Departments</option>
              {departments.map((dept, index) => (
                <option key={index} value={dept.name}>{dept.name}</option>
              ))}
            </select>
            <select className="location-filter">
              <option value="">All Locations</option>
              <option value="San Francisco, CA">San Francisco, CA</option>
              <option value="New York, NY">New York, NY</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          
          <div className="job-listings">
            {jobListings.map(job => (
              <div className="job-card" key={job.id}>
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <div className="job-tags">
                    <span className="department-tag">{job.department}</span>
                    <span className="location-tag">{job.location}</span>
                    <span className="type-tag">{job.type}</span>
                  </div>
                </div>
                <div className="job-description">
                  <p>{job.description}</p>
                </div>
                <div className="job-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                <button className="apply-button">Apply Now</button>
              </div>
            ))}
          </div>
        </section>
        
        <section className="application-process">
          <h2>Our Application Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Apply</h3>
              <p>Submit your application and resume for review by our recruiting team.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Initial Interview</h3>
              <p>Connect with a recruiter to discuss your background and our opportunity.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Technical Assessment</h3>
              <p>Complete a role-specific assessment to demonstrate your skills.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Team Interviews</h3>
              <p>Meet with potential teammates and stakeholders to discuss the role in depth.</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Offer</h3>
              <p>Receive and review your offer package with our recruiting team.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers; 