import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    department: 'general'
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      department: 'general'
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  const offices = [
    {
      id: 1,
      city: 'San Francisco',
      address: '123 Tech Plaza, Suite 400',
      cityState: 'San Francisco, CA 94107',
      phone: '+1 (555) 123-4567',
      email: 'sf@matrixagora.com'
    },
    {
      id: 2,
      city: 'New York',
      address: '456 Digital Avenue',
      cityState: 'New York, NY 10011',
      phone: '+1 (555) 987-6543',
      email: 'nyc@matrixagora.com'
    },
    {
      id: 3,
      city: 'London',
      address: '78 Innovation Square',
      cityState: 'London, UK EC2A 4PS',
      phone: '+44 20 7123 4567',
      email: 'london@matrixagora.com'
    }
  ];
  
  const departments = [
    { value: 'general', label: 'General Inquiries' },
    { value: 'support', label: 'Technical Support' },
    { value: 'business', label: 'Business Development' },
    { value: 'press', label: 'Press & Media' },
    { value: 'careers', label: 'Careers' }
  ];

  return (
    <div className="resource-page">
      <div className="resource-page-header">
        <h1>Contact MatrixAgora</h1>
        <p>We'd love to hear from you. Reach out to our team with any questions or feedback.</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          {formSubmitted ? (
            <div className="form-success-message">
              <i className="fas fa-check-circle"></i>
              <h3>Thank you for your message!</h3>
              <p>We've received your inquiry and will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="department">Department</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  {departments.map(dept => (
                    <option key={dept.value} value={dept.value}>
                      {dept.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your message about?"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows="6"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          )}
        </div>
        
        <div className="contact-info-section">
          <div className="contact-methods">
            <h2>Other Ways to Connect</h2>
            
            <div className="contact-method">
              <div className="method-icon">
                <i className="fas fa-headset"></i>
              </div>
              <div className="method-details">
                <h3>Customer Support</h3>
                <p>Need help with your account or have technical issues?</p>
                <a href="#" className="method-link">Visit Help Center</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="method-details">
                <h3>Email Us</h3>
                <p>Send us an email and we'll respond within 24 hours.</p>
                <a href="mailto:hello@matrixagora.com" className="method-link">hello@matrixagora.com</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="method-details">
                <h3>Call Us</h3>
                <p>Available Monday-Friday, 9am-5pm PT</p>
                <a href="tel:+15551234567" className="method-link">+1 (555) 123-4567</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">
                <i className="fas fa-comments"></i>
              </div>
              <div className="method-details">
                <h3>Live Chat</h3>
                <p>Chat with our support team in real-time.</p>
                <a href="#" className="method-link">Start Chat</a>
              </div>
            </div>
            
            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="office-locations-section">
        <h2>Our Offices</h2>
        <div className="offices-grid">
          {offices.map(office => (
            <div className="office-card" key={office.id}>
              <h3>{office.city}</h3>
              <address>
                <p>{office.address}</p>
                <p>{office.cityState}</p>
              </address>
              <div className="office-contact">
                <p>
                  <i className="fas fa-phone-alt"></i>
                  <a href={`tel:${office.phone}`}>{office.phone}</a>
                </p>
                <p>
                  <i className="fas fa-envelope"></i>
                  <a href={`mailto:${office.email}`}>{office.email}</a>
                </p>
              </div>
              <a href="#" className="get-directions">
                <i className="fas fa-map-marker-alt"></i> Get Directions
              </a>
            </div>
          ))}
        </div>
      </section>
      
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How quickly will I receive a response?</h3>
            <p>We strive to respond to all inquiries within 24-48 business hours. For urgent matters, please use our live chat option.</p>
          </div>
          <div className="faq-item">
            <h3>How do I report inappropriate content?</h3>
            <p>You can report inappropriate content directly within the platform by clicking the "Report" button, or contact our moderation team at moderation@matrixagora.com.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer partnership opportunities?</h3>
            <p>Yes! We're always open to partnerships. Please select "Business Development" from the department dropdown menu in our contact form.</p>
          </div>
          <div className="faq-item">
            <h3>How can I join the MatrixAgora team?</h3>
            <p>Check out our Careers page for current job openings, or send your resume to careers@matrixagora.com.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 