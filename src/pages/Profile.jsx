import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { users, posts, comments, subreddits } from '../data/dummyData';
import userProfilePicture from '../assets/userprofilepicture.jpg';

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [userComments, setUserComments] = useState([]);
  const [activeTab, setActiveTab] = useState('posts'); // 'posts', 'comments', 'about', 'saved'
  const [isEditing, setIsEditing] = useState(false);
  const [userBio, setUserBio] = useState('');
  const [userInterests, setUserInterests] = useState([]);
  
  useEffect(() => {
    // Find the user by username
    const foundUser = users.find(u => u.username === username);
    setUser(foundUser);
    
    if (foundUser) {
      // Find posts by this user
      const foundPosts = posts.filter(post => post.userId === foundUser.id);
      // Sort by date (newest first)
      const sortedPosts = [...foundPosts].sort((a, b) => new Date(b.created) - new Date(a.created));
      setUserPosts(sortedPosts);
      
      // Find comments by this user
      const foundComments = comments.filter(comment => comment.userId === foundUser.id);
      const sortedComments = [...foundComments].sort((a, b) => new Date(b.created) - new Date(a.created));
      setUserComments(sortedComments);
      
      // Set default values for bio and interests
      setUserBio(foundUser.bio || 'This user has not added a bio yet.');
      setUserInterests(foundUser.interests || ['Technology', 'Gaming', 'Movies']);
    }
  }, [username]);
  
  // Calculate account age in years and months
  const getAccountAge = (created) => {
    const createdDate = new Date(created);
    const now = new Date();
    
    const yearDiff = now.getFullYear() - createdDate.getFullYear();
    const monthDiff = now.getMonth() - createdDate.getMonth();
    
    if (monthDiff < 0) {
      return `${yearDiff - 1} years, ${monthDiff + 12} months`;
    } else if (yearDiff === 0) {
      return `${monthDiff} months`;
    } else if (yearDiff === 1 && monthDiff === 0) {
      return '1 year';
    } else if (yearDiff > 0 && monthDiff === 0) {
      return `${yearDiff} years`;
    } else {
      return `${yearDiff} years, ${monthDiff} months`;
    }
  };
  
  // Format karma number (e.g., 1.2k, 3.5m)
  const formatKarma = (karma) => {
    if (karma >= 1000000) {
      return (karma / 1000000).toFixed(1) + 'm';
    } else if (karma >= 1000) {
      return (karma / 1000).toFixed(1) + 'k';
    } else {
      return karma;
    }
  };
  
  const handleSaveProfile = () => {
    // In a real app, we would send this to an API
    // For now, we'll just update the local state
    setIsEditing(false);
    // Alert user that profile was saved
    alert('Profile updated successfully!');
  };
  
  // Get the post for a comment
  const getPostForComment = (postId) => {
    return posts.find(post => post.id === postId);
  };
  
  // Get the subreddit for a post
  const getSubredditForPost = (subredditId) => {
    return subreddits.find(sub => sub.id === subredditId);
  };
  
  // If user not found
  if (!user) {
    return (
      <div className="user-not-found" style={{ textAlign: 'center', padding: '40px 0' }}>
        <h2>u/{username} doesn't exist</h2>
        <p>The account you're trying to view may have been deleted or you typed the username incorrectly.</p>
        <Link to="/" style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '8px 16px',
          backgroundColor: 'var(--matrixagora-orange)',
          color: 'white',
          borderRadius: '4px',
          textDecoration: 'none'
        }}>
          Back to Home
        </Link>
      </div>
    );
  }
  
  return (
    <div className="profile-page">
      {/* Profile Banner - New York Skyline */}
      <div className="profile-banner" style={{ 
        height: '240px', 
        background: 'url("https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80") center/cover no-repeat',
        borderRadius: '8px 8px 0 0',
        position: 'relative',
        boxShadow: 'var(--shadow-md)',
        overflow: 'hidden'
      }}>
        {/* Dark overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)',
          zIndex: 1
        }}></div>
        
        {/* Profile Info Overlay */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '180px',
          color: 'white',
          zIndex: 2
        }}>
          <h1 style={{ fontSize: '28px', marginBottom: '4px', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
            {user.username}
          </h1>
          <div style={{ fontSize: '14px', opacity: 0.9, display: 'flex', gap: '15px', alignItems: 'center' }}>
            <span><i className="fas fa-calendar-alt" style={{ marginRight: '5px' }}></i> Joined {new Date(user.created).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            <span><i className="fas fa-chart-line" style={{ marginRight: '5px' }}></i> {formatKarma(user.karma)} karma</span>
          </div>
        </div>
        
        {/* Edit Profile Button with glass effect */}
        <button 
          className="edit-profile-button"
          onClick={() => setIsEditing(!isEditing)}
          style={{ 
            position: 'absolute',
            right: '20px',
            bottom: '20px',
            padding: '8px 16px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '6px',
            fontWeight: '500',
            cursor: 'pointer',
            zIndex: 2,
            transition: 'all 0.2s ease-in-out',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
        >
          <i className="fas fa-edit" style={{ marginRight: '6px' }}></i>
          {isEditing ? 'Cancel Editing' : 'Edit Profile'}
        </button>
      </div>
      
      {/* Profile Header Card */}
      <div className="profile-header-card" style={{
        backgroundColor: 'var(--bg-card)',
        padding: '20px 30px',
        borderRadius: '0 0 8px 8px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        boxShadow: 'var(--shadow-md)',
        transition: 'background-color 0.3s ease'
      }}>
        {/* Avatar */}
        <div className="profile-avatar-wrapper" style={{
          position: 'absolute',
          top: '-70px',
          left: '30px',
          width: '130px',
          height: '130px',
          borderRadius: '50%',
          padding: '5px',
          backgroundColor: 'var(--bg-card)',
          zIndex: 5,
          boxShadow: 'var(--shadow-md)',
          transition: 'background-color 0.3s ease'
        }}>
          <img 
            src={userProfilePicture}
            alt={user.username} 
            className="profile-avatar" 
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid var(--bg-card)',
              transition: 'border-color 0.3s ease'
            }}
          />
        </div>
        
        {/* Stats with modern card design */}
        <div className="profile-stats-container" style={{ 
          marginLeft: '130px', 
          marginTop: '15px',
          marginBottom: '20px'
        }}>
          <div className="profile-stats-cards" style={{ 
            display: 'flex', 
            gap: '15px'
          }}>
            <div className="stat-card" style={{
              backgroundColor: 'var(--bg-hover)',
              borderRadius: '8px',
              padding: '15px',
              minWidth: '110px',
              textAlign: 'center',
              transition: 'background-color 0.3s ease, transform 0.2s ease',
              boxShadow: 'var(--shadow-sm)',
              cursor: 'default'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--matrixagora-blue)' }}>{formatKarma(user.karma)}</div>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Karma</div>
            </div>
            
            <div className="stat-card" style={{
              backgroundColor: 'var(--bg-hover)',
              borderRadius: '8px',
              padding: '15px',
              minWidth: '110px',
              textAlign: 'center',
              transition: 'background-color 0.3s ease, transform 0.2s ease',
              boxShadow: 'var(--shadow-sm)',
              cursor: 'default'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--matrixagora-blue)' }}>{userPosts.length}</div>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Posts</div>
            </div>
            
            <div className="stat-card" style={{
              backgroundColor: 'var(--bg-hover)',
              borderRadius: '8px',
              padding: '15px',
              minWidth: '110px',
              textAlign: 'center',
              transition: 'background-color 0.3s ease, transform 0.2s ease',
              boxShadow: 'var(--shadow-sm)',
              cursor: 'default'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--matrixagora-blue)' }}>{userComments.length}</div>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Comments</div>
            </div>
          </div>
        </div>
        
        {/* Bio section */}
        <div className="bio-section" style={{
          backgroundColor: 'var(--bg-hover)',
          borderRadius: '8px',
          padding: '20px',
          marginTop: '10px',
          transition: 'background-color 0.3s ease'
        }}>
          <h3 style={{ 
            fontSize: '18px', 
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            color: 'var(--text-primary)',
            transition: 'color 0.3s ease'
          }}>
            <i className="fas fa-user" style={{ marginRight: '10px', color: 'var(--matrixagora-blue)' }}></i>
            About
          </h3>
          {isEditing ? (
            <textarea
              value={userBio}
              onChange={(e) => setUserBio(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-primary)',
                height: '100px',
                resize: 'vertical',
                transition: 'all 0.3s ease'
              }}
            />
          ) : (
            <p style={{ 
              lineHeight: '1.6',
              color: 'var(--text-primary)',
              transition: 'color 0.3s ease'
            }}>{userBio}</p>
          )}
        </div>
        
        {/* Interests section */}
        <div className="interests-section" style={{
          backgroundColor: 'var(--bg-hover)',
          borderRadius: '8px',
          padding: '20px',
          marginTop: '15px',
          transition: 'background-color 0.3s ease'
        }}>
          <h3 style={{ 
            fontSize: '18px', 
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            color: 'var(--text-primary)',
            transition: 'color 0.3s ease'
          }}>
            <i className="fas fa-heart" style={{ marginRight: '10px', color: 'var(--matrixagora-orange)' }}></i>
            Interests
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {userInterests.map((interest, index) => (
              <span key={index} style={{
                backgroundColor: 'var(--matrixagora-blue)',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '14px',
                display: 'inline-block'
              }}>
                {interest}
              </span>
            ))}
          </div>
        </div>
        
        {/* Save button (only visible in edit mode) */}
        {isEditing && (
          <button
            onClick={handleSaveProfile}
            style={{
              backgroundColor: 'var(--matrixagora-blue)',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '10px 20px',
              marginTop: '20px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              alignSelf: 'flex-end',
              display: 'flex',
              alignItems: 'center',
              transition: 'background-color 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0069bc'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--matrixagora-blue)'}
          >
            <i className="fas fa-save" style={{ marginRight: '8px' }}></i>
            Save Profile
          </button>
        )}
      </div>
      
      {/* Content Tabs */}
      <div className="profile-tabs" style={{ 
        display: 'flex', 
        gap: '5px', 
        backgroundColor: 'var(--bg-card)', 
        padding: '15px 20px',
        borderRadius: '8px',
        marginTop: '20px',
        marginBottom: '20px',
        boxShadow: 'var(--shadow-sm)',
        transition: 'background-color 0.3s ease'
      }}>
        {['posts', 'comments', 'saved', 'about'].map((tab) => (
        <button 
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`} 
            onClick={() => setActiveTab(tab)}
          style={{ 
            border: 'none', 
              background: activeTab === tab ? 'var(--bg-hover)' : 'transparent', 
              fontWeight: '500',
              color: activeTab === tab ? 'var(--matrixagora-blue)' : 'var(--text-primary)',
              cursor: 'pointer',
              padding: '10px 15px',
              borderRadius: '6px',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px'
            }}
          >
            <i className={`fas fa-${
              tab === 'posts' ? 'file-alt' : 
              tab === 'comments' ? 'comment-alt' : 
              tab === 'saved' ? 'bookmark' : 'user-circle'
            }`} style={{ marginRight: '8px' }}></i>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="profile-content">
        {activeTab === 'posts' && (
          <div className="profile-posts">
            {userPosts.length > 0 ? (
              userPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))
            ) : (
              <div className="no-content" style={{
                backgroundColor: 'var(--bg-card)',
                padding: '30px',
                textAlign: 'center', 
                borderRadius: '8px',
                transition: 'background-color 0.3s ease'
              }}>
                <i className="fas fa-file-alt" style={{ fontSize: '48px', color: 'var(--text-muted)', marginBottom: '20px' }}></i>
                <h3 style={{ marginBottom: '10px', color: 'var(--text-primary)', transition: 'color 0.3s ease' }}>No posts yet</h3>
                <p style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}>This user hasn't made any posts yet.</p>
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'comments' && (
          <div className="profile-comments">
            {userComments.length > 0 ? (
              userComments.map(comment => {
                const post = getPostForComment(comment.postId);
                const subreddit = post ? getSubredditForPost(post.subredditId) : null;
                
                return (
                  <div key={comment.id} className="comment-card" style={{
                    backgroundColor: 'var(--bg-card)',
                    borderRadius: '8px',
                    padding: '16px',
                    marginBottom: '16px',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'background-color 0.3s ease'
                  }}>
                    {post && subreddit && (
                      <div className="comment-context" style={{
                        fontSize: '12px',
                        color: 'var(--text-secondary)',
                        marginBottom: '8px',
                        transition: 'color 0.3s ease'
                      }}>
                        <span>
                          Comment on{' '}
                          <Link to={`/r/${subreddit.name.substring(2)}/comments/${post.id}`} style={{
                            color: 'var(--matrixagora-blue)',
                            fontWeight: '500'
                          }}>
                            {post.title}
                          </Link>
                          {' '}in{' '}
                          <Link to={`/r/${subreddit.name.substring(2)}`} style={{
                            color: 'var(--matrixagora-blue)',
                            fontWeight: '500'
                          }}>
                            {subreddit.name}
                          </Link>
                        </span>
                      </div>
                    )}
                    
                    <div className="comment-content" style={{
                      padding: '8px 0',
                      borderBottom: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      transition: 'color 0.3s ease, border-color 0.3s ease'
                    }}>
                      {comment.content}
                    </div>
                    
                    <div className="comment-footer" style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '8px',
                      fontSize: '12px',
                      color: 'var(--text-secondary)',
                      transition: 'color 0.3s ease'
                    }}>
                      <div className="comment-upvotes" style={{ marginRight: '16px' }}>
                        <span>👍 {comment.upvotes} upvotes</span>
                      </div>
                      <div className="comment-date">
                        <span>{new Date(comment.created).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="no-content" style={{
                backgroundColor: 'var(--bg-card)',
                padding: '30px',
                textAlign: 'center',
                borderRadius: '8px',
                transition: 'background-color 0.3s ease'
              }}>
                <i className="fas fa-comment-alt" style={{ fontSize: '48px', color: 'var(--text-muted)', marginBottom: '20px' }}></i>
                <h3 style={{ marginBottom: '10px', color: 'var(--text-primary)', transition: 'color 0.3s ease' }}>No comments yet</h3>
                <p style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}>This user hasn't commented on any posts yet.</p>
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'saved' && (
          <div className="no-content" style={{
            backgroundColor: 'var(--bg-card)',
            padding: '30px',
            textAlign: 'center', 
            borderRadius: '8px',
            transition: 'background-color 0.3s ease'
          }}>
            <i className="fas fa-bookmark" style={{ fontSize: '48px', color: 'var(--text-muted)', marginBottom: '20px' }}></i>
            <h3 style={{ marginBottom: '10px', color: 'var(--text-primary)', transition: 'color 0.3s ease' }}>Saved Items</h3>
            <p style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}>You haven't saved any posts or comments yet.</p>
            <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}>
              To save a post or comment, click the "Save" button below it.
            </p>
          </div>
        )}
        
        {activeTab === 'about' && (
          <div className="profile-about" style={{ 
            padding: '20px', 
            backgroundColor: 'var(--bg-card)',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-sm)',
            transition: 'background-color 0.3s ease'
          }}>
            <h3 style={{ 
              marginBottom: '16px',
              color: 'var(--text-primary)',
              transition: 'color 0.3s ease'
            }}>About u/{user.username}</h3>
            
            <div className="profile-bio" style={{ marginBottom: '24px' }}>
              <h4 style={{ 
                marginBottom: '8px', 
                fontSize: '16px',
                color: 'var(--text-primary)',
                transition: 'color 0.3s ease'
              }}>Bio</h4>
              {isEditing ? (
                <textarea
                  value={userBio}
                  onChange={(e) => setUserBio(e.target.value)}
                  style={{
                    width: '100%',
                    minHeight: '100px',
                    padding: '12px',
                    borderRadius: '4px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-input)',
                    color: 'var(--text-primary)',
                    resize: 'vertical',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="Write something about yourself..."
                />
              ) : (
                <p style={{ 
                  color: 'var(--text-primary)',
                  transition: 'color 0.3s ease'
                }}>{userBio}</p>
              )}
            </div>
            
            <div className="profile-interests" style={{ marginBottom: '24px' }}>
              <h4 style={{ 
                marginBottom: '8px', 
                fontSize: '16px',
                color: 'var(--text-primary)',
                transition: 'color 0.3s ease'
              }}>Interests</h4>
              {isEditing ? (
                <div style={{ marginBottom: '16px' }}>
                  <input
                    type="text"
                    placeholder="Add an interest (e.g., Photography, Cooking)"
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-input)',
                      color: 'var(--text-primary)',
                      marginBottom: '8px',
                      transition: 'all 0.3s ease'
                    }}
                    onKeyDown={e => {
                      if (e.key === 'Enter' && e.target.value.trim()) {
                        setUserInterests([...userInterests, e.target.value.trim()]);
                        e.target.value = '';
                      }
                    }}
                  />
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {userInterests.map((interest, index) => (
                      <div key={index} style={{
                        backgroundColor: 'var(--bg-hover)',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'var(--text-primary)',
                        transition: 'background-color 0.3s ease, color 0.3s ease'
                      }}>
                        <span>{interest}</span>
                        <button
                          onClick={() => setUserInterests(userInterests.filter((_, i) => i !== index))}
                          style={{
                            border: 'none',
                            background: 'none',
                            cursor: 'pointer',
                            fontSize: '12px',
                            color: 'var(--text-secondary)',
                            transition: 'color 0.3s ease'
                          }}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {userInterests.map((interest, index) => (
                    <div key={index} style={{
                      backgroundColor: 'var(--bg-hover)',
                      padding: '4px 12px',
                      borderRadius: '16px',
                      color: 'var(--text-primary)',
                      transition: 'background-color 0.3s ease, color 0.3s ease'
                    }}>
                      {interest}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="profile-details" style={{ marginBottom: '24px' }}>
              <h4 style={{ 
                marginBottom: '8px', 
                fontSize: '16px',
                color: 'var(--text-primary)',
                transition: 'color 0.3s ease'
              }}>Account Details</h4>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'auto 1fr',
                gap: '8px 16px',
                fontSize: '14px'
              }}>
                <div style={{ 
                  fontWeight: '500',
                  color: 'var(--text-primary)',
                  transition: 'color 0.3s ease'
                }}>Account created:</div>
                <div style={{ 
                  color: 'var(--text-primary)',
                  transition: 'color 0.3s ease'
                }}>{new Date(user.created).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</div>
                
                <div style={{ 
                  fontWeight: '500',
                  color: 'var(--text-primary)',
                  transition: 'color 0.3s ease'
                }}>Karma:</div>
                <div style={{ 
                  color: 'var(--text-primary)',
                  transition: 'color 0.3s ease'
                }}>{user.karma}</div>
                
                <div style={{ 
                  fontWeight: '500',
                  color: 'var(--text-primary)',
                  transition: 'color 0.3s ease'
                }}>Posts:</div>
                <div style={{ 
                  color: 'var(--text-primary)',
                  transition: 'color 0.3s ease'
                }}>{userPosts.length}</div>
                
                <div style={{ 
                  fontWeight: '500',
                  color: 'var(--text-primary)',
                  transition: 'color 0.3s ease'
                }}>Comments:</div>
                <div style={{ 
                  color: 'var(--text-primary)',
                  transition: 'color 0.3s ease'
                }}>{userComments.length}</div>
              </div>
            </div>
            
            {isEditing && (
              <button
                onClick={handleSaveProfile}
                style={{
                  backgroundColor: 'var(--matrixagora-blue)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0069bc'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--matrixagora-blue)'}
              >
                <i className="fas fa-save" style={{ marginRight: '8px' }}></i>
                Save Profile
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile; 