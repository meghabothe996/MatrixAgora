import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [showAdvertisePopup, setShowAdvertisePopup] = useState(false);
  const [showCreatePostPopup, setShowCreatePostPopup] = useState(false);
  const [showNotificationsPopup, setShowNotificationsPopup] = useState(false);

  // Dummy data for notifications
  const notifications = [
    { id: 1, type: 'upvote', content: 'Your post "How to learn React in 30 days" received 25 upvotes', time: '2 hours ago', read: false },
    { id: 2, type: 'comment', content: 'user_123 commented on your post "AI developments in 2023"', time: '5 hours ago', read: false },
    { id: 3, type: 'award', content: 'You received a Silver Award on your comment', time: '1 day ago', read: true },
    { id: 4, type: 'reply', content: 'tech_guru replied to your comment', time: '2 days ago', read: true },
    { id: 5, type: 'mention', content: 'You were mentioned in a post in r/programming', time: '3 days ago', read: true },
  ];

  // Dummy data for ad packages
  const adPackages = [
    { id: 1, name: 'Starter', price: '$99/month', impressions: '10,000', targeting: 'Basic', analytics: 'Standard' },
    { id: 2, name: 'Professional', price: '$299/month', impressions: '50,000', targeting: 'Advanced', analytics: 'Detailed' },
    { id: 3, name: 'Enterprise', price: '$999/month', impressions: '200,000', targeting: 'Premium', analytics: 'Real-time' },
  ];

  // Post types for create post
  const postTypes = [
    { id: 'text', icon: 'fa-font', label: 'Text Post' },
    { id: 'image', icon: 'fa-image', label: 'Image/Video' },
    { id: 'link', icon: 'fa-link', label: 'Link' },
    { id: 'poll', icon: 'fa-poll', label: 'Poll' },
  ];

  // Close all popups when clicking outside
  const closeAllPopups = () => {
    setShowAdvertisePopup(false);
    setShowCreatePostPopup(false);
    setShowNotificationsPopup(false);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <span style={{ color: 'var(--matrixagora-orange)', fontSize: '24px', fontWeight: 'bold' }}>MatrixAgora</span>
        </Link>
      </div>
      
      <div className="header-search">
        <input type="text" placeholder="Search MatrixAgora" />
      </div>
      
      <div className="header-actions">
        <div className="header-icon-group">
          <div className="header-icon-wrapper" onClick={(e) => {
            e.stopPropagation();
            setShowAdvertisePopup(!showAdvertisePopup);
            setShowCreatePostPopup(false);
            setShowNotificationsPopup(false);
          }}>
            <i className="fas fa-ad header-icon"></i>
            <span className="header-icon-tooltip">Advertise on MatrixAgora</span>
            
            {showAdvertisePopup && (
              <div className="popup-menu advertise-popup" onClick={(e) => e.stopPropagation()} style={{
                position: 'absolute',
                top: '40px',
                right: '0',
                width: '350px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-md)',
                zIndex: 1000,
                padding: '16px',
                transition: 'background-color 0.3s ease, border-color 0.3s ease',
              }}>
                <h3 style={{ 
                  borderBottom: '1px solid var(--border-color)', 
                  paddingBottom: '10px',
                  marginBottom: '15px',
                  color: 'var(--text-primary)',
                  transition: 'color 0.3s ease, border-color 0.3s ease',
                }}>
                  Advertise on MatrixAgora
                </h3>
                
                <div style={{ marginBottom: '15px', color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}>
                  Choose an advertising package to reach your target audience
                </div>
                
                {adPackages.map(pkg => (
                  <div key={pkg.id} style={{
                    padding: '12px',
                    marginBottom: '10px',
                    backgroundColor: 'var(--bg-hover)',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      marginBottom: '5px',
                    }}>
                      <div style={{ 
                        fontWeight: 'bold', 
                        color: 'var(--text-primary)',
                        transition: 'color 0.3s ease',
                      }}>{pkg.name}</div>
                      <div style={{ 
                        color: 'var(--matrixagora-blue)',
                        transition: 'color 0.3s ease',
                      }}>{pkg.price}</div>
                    </div>
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: 'auto 1fr',
                      gap: '5px 10px',
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      transition: 'color 0.3s ease',
                    }}>
                      <div>Impressions:</div>
                      <div>{pkg.impressions}</div>
                      <div>Targeting:</div>
                      <div>{pkg.targeting}</div>
                      <div>Analytics:</div>
                      <div>{pkg.analytics}</div>
                    </div>
                  </div>
                ))}
                
                <button style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: 'var(--matrixagora-blue)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  marginTop: '10px',
                }}>
                  Get Started
                </button>
              </div>
            )}
          </div>
          
          <div className="header-icon-wrapper" onClick={(e) => {
            e.stopPropagation();
            setShowCreatePostPopup(!showCreatePostPopup);
            setShowAdvertisePopup(false);
            setShowNotificationsPopup(false);
          }}>
            <i className="fas fa-plus header-icon"></i>
            <span className="header-icon-tooltip">Create Post</span>
            
            {showCreatePostPopup && (
              <div className="popup-menu create-post-popup" onClick={(e) => e.stopPropagation()} style={{
                position: 'absolute',
                top: '40px',
                right: '0',
                width: '320px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-md)',
                zIndex: 1000,
                padding: '16px',
                transition: 'background-color 0.3s ease, border-color 0.3s ease',
              }}>
                <h3 style={{ 
                  borderBottom: '1px solid var(--border-color)', 
                  paddingBottom: '10px',
                  marginBottom: '15px',
                  color: 'var(--text-primary)',
                  transition: 'color 0.3s ease, border-color 0.3s ease',
                }}>
                  Create a Post
                </h3>
                
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '8px',
                    color: 'var(--text-primary)',
                    transition: 'color 0.3s ease',
                  }}>
                    Choose a community
                  </label>
                  <select style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '4px',
                    backgroundColor: 'var(--bg-input)',
                    color: 'var(--text-primary)',
                    transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
                  }}>
                    <option value="">Select a community</option>
                    <option value="programming">r/programming</option>
                    <option value="javascript">r/javascript</option>
                    <option value="reactjs">r/reactjs</option>
                    <option value="webdev">r/webdev</option>
                    <option value="gaming">r/gaming</option>
                  </select>
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ 
                    marginBottom: '8px',
                    color: 'var(--text-primary)',
                    transition: 'color 0.3s ease',
                  }}>
                    Post type
                  </div>
                  
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {postTypes.map(type => (
                      <div key={type.id} style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '10px 5px',
                        backgroundColor: 'var(--bg-hover)',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                      }}>
                        <i className={`fas ${type.icon}`} style={{ 
                          fontSize: '18px', 
                          marginBottom: '5px',
                          color: 'var(--matrixagora-blue)',
                        }}></i>
                        <div style={{ 
                          fontSize: '12px',
                          color: 'var(--text-primary)',
                          transition: 'color 0.3s ease',
                        }}>{type.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: 'var(--matrixagora-blue)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}>
                  Create Post
                </button>
              </div>
            )}
          </div>
          
          <div className="header-icon-wrapper" onClick={(e) => {
            e.stopPropagation();
            setShowNotificationsPopup(!showNotificationsPopup);
            setShowAdvertisePopup(false);
            setShowCreatePostPopup(false);
          }}>
            <i className="fas fa-bell header-icon"></i>
            <span className="header-icon-tooltip">Notifications</span>
            
            {showNotificationsPopup && (
              <div className="popup-menu notifications-popup" onClick={(e) => e.stopPropagation()} style={{
                position: 'absolute',
                top: '40px',
                right: '0',
                width: '380px',
                maxHeight: '500px',
                overflowY: 'auto',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-md)',
                zIndex: 1000,
                padding: '0',
                transition: 'background-color 0.3s ease, border-color 0.3s ease',
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '15px',
                  borderBottom: '1px solid var(--border-color)',
                  transition: 'border-color 0.3s ease',
                }}>
                  <h3 style={{ 
                    margin: 0,
                    color: 'var(--text-primary)',
                    transition: 'color 0.3s ease',
                  }}>Notifications</h3>
                  <div style={{ 
                    color: 'var(--matrixagora-blue)', 
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 500,
                  }}>
                    Mark all as read
                  </div>
                </div>
                
                {notifications.map(notification => (
                  <div key={notification.id} style={{
                    padding: '12px 15px',
                    borderBottom: '1px solid var(--border-color)',
                    backgroundColor: notification.read ? 'var(--bg-card)' : 'var(--bg-hover)',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease, border-color 0.3s ease',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--matrixagora-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexShrink: 0,
                      }}>
                        <i className={`fas fa-${
                          notification.type === 'upvote' ? 'arrow-up' : 
                          notification.type === 'comment' ? 'comment' : 
                          notification.type === 'award' ? 'award' :
                          notification.type === 'reply' ? 'reply' : 'at'
                        }`}></i>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ 
                          fontSize: '14px',
                          marginBottom: '4px',
                          color: 'var(--text-primary)',
                          transition: 'color 0.3s ease',
                        }}>
                          {notification.content}
                        </div>
                        <div style={{ 
                          fontSize: '12px',
                          color: 'var(--text-secondary)',
                          transition: 'color 0.3s ease',
                        }}>
                          {notification.time}
                        </div>
                      </div>
                      {!notification.read && (
                        <div style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--matrixagora-blue)',
                          flexShrink: 0,
                        }}></div>
                      )}
                    </div>
                  </div>
                ))}
                
                <div style={{
                  padding: '12px',
                  textAlign: 'center',
                  color: 'var(--matrixagora-blue)',
                  cursor: 'pointer',
                  fontWeight: 500,
                }}>
                  See all notifications
                </div>
              </div>
            )}
          </div>
          
          <Link to="/profile" className="header-icon-wrapper">
            <i className="fas fa-user-circle header-icon"></i>
            <span className="header-icon-tooltip">User Profile</span>
          </Link>
          
          <ThemeToggle />
        </div>
      </div>
      
      {/* Overlay to close popups when clicking elsewhere */}
      {(showAdvertisePopup || showCreatePostPopup || showNotificationsPopup) && (
        <div 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            zIndex: 999 
          }} 
          onClick={closeAllPopups}
        />
      )}
    </header>
  );
};

export default Header; 