import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { users, posts, comments, subreddits } from '../data/dummyData';

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
      {/* Profile Banner */}
      <div className="profile-banner" style={{ 
        height: '180px', 
        background: 'linear-gradient(135deg, var(--matrixagora-blue), var(--matrixagora-orange))',
        borderRadius: '4px 4px 0 0',
        position: 'relative'
      }}>
        {/* Edit Profile Button (shown only if it's the current user's profile) */}
        <button 
          className="edit-profile-button"
          onClick={() => setIsEditing(!isEditing)}
          style={{ 
            position: 'absolute',
            right: '20px',
            bottom: '20px',
            padding: '8px 16px',
            backgroundColor: 'white',
            color: 'var(--matrixagora-blue)',
            border: 'none',
            borderRadius: '4px',
            fontWeight: '500',
            cursor: 'pointer'
          }}
        >
          {isEditing ? 'Cancel Editing' : 'Edit Profile'}
        </button>
      </div>
      
      <div className="profile-header" style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '0 0 4px 4px',
        display: 'flex',
        alignItems: 'flex-start',
        position: 'relative'
      }}>
        <img 
          src={user.avatar} 
          alt={user.username} 
          className="profile-avatar" 
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: '4px solid white',
            marginTop: '-40px',
            boxShadow: 'var(--shadow-sm)'
          }}
        />
        <div className="profile-info" style={{ marginLeft: '20px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>u/{user.username}</h2>
          <div className="profile-stats" style={{ display: 'flex', gap: '20px' }}>
            <div className="profile-stat">
              <div className="profile-stat-value" style={{ fontWeight: 'bold' }}>{formatKarma(user.karma)}</div>
              <div className="profile-stat-label" style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Karma</div>
            </div>
            <div className="profile-stat">
              <div className="profile-stat-value" style={{ fontWeight: 'bold' }}>{getAccountAge(user.created)}</div>
              <div className="profile-stat-label" style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Account Age</div>
            </div>
            <div className="profile-stat">
              <div className="profile-stat-value" style={{ fontWeight: 'bold' }}>{userPosts.length}</div>
              <div className="profile-stat-label" style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Posts</div>
            </div>
            <div className="profile-stat">
              <div className="profile-stat-value" style={{ fontWeight: 'bold' }}>{userComments.length}</div>
              <div className="profile-stat-label" style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Comments</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="profile-tabs" style={{ 
        display: 'flex', 
        gap: '16px', 
        backgroundColor: 'white', 
        padding: '12px 16px',
        borderRadius: '4px',
        marginTop: '16px',
        marginBottom: '16px'
      }}>
        <button 
          className={`tab-button ${activeTab === 'posts' ? 'active' : ''}`} 
          onClick={() => setActiveTab('posts')}
          style={{ 
            border: 'none', 
            background: 'none', 
            fontWeight: activeTab === 'posts' ? 'bold' : 'normal',
            color: activeTab === 'posts' ? 'var(--matrixagora-blue)' : 'inherit',
            cursor: 'pointer'
          }}
        >
          Posts
        </button>
        <button 
          className={`tab-button ${activeTab === 'comments' ? 'active' : ''}`} 
          onClick={() => setActiveTab('comments')}
          style={{ 
            border: 'none', 
            background: 'none', 
            fontWeight: activeTab === 'comments' ? 'bold' : 'normal',
            color: activeTab === 'comments' ? 'var(--matrixagora-blue)' : 'inherit',
            cursor: 'pointer'
          }}
        >
          Comments
        </button>
        <button 
          className={`tab-button ${activeTab === 'saved' ? 'active' : ''}`} 
          onClick={() => setActiveTab('saved')}
          style={{ 
            border: 'none', 
            background: 'none', 
            fontWeight: activeTab === 'saved' ? 'bold' : 'normal',
            color: activeTab === 'saved' ? 'var(--matrixagora-blue)' : 'inherit',
            cursor: 'pointer'
          }}
        >
          Saved
        </button>
        <button 
          className={`tab-button ${activeTab === 'about' ? 'active' : ''}`} 
          onClick={() => setActiveTab('about')}
          style={{ 
            border: 'none', 
            background: 'none', 
            fontWeight: activeTab === 'about' ? 'bold' : 'normal',
            color: activeTab === 'about' ? 'var(--matrixagora-blue)' : 'inherit',
            cursor: 'pointer'
          }}
        >
          About
        </button>
      </div>
      
      <div className="profile-content">
        {activeTab === 'posts' && (
          <div className="profile-posts">
            {userPosts.length > 0 ? (
              userPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))
            ) : (
              <div className="no-posts" style={{ 
                textAlign: 'center', 
                padding: '40px', 
                backgroundColor: 'white',
                borderRadius: '4px' 
              }}>
                <h3>No posts yet</h3>
                <p>u/{user.username} hasn't posted anything yet</p>
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
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    padding: '16px',
                    marginBottom: '16px'
                  }}>
                    {post && subreddit && (
                      <div className="comment-context" style={{
                        fontSize: '12px',
                        color: 'var(--text-secondary)',
                        marginBottom: '8px'
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
                      borderBottom: '1px solid var(--border-color)'
                    }}>
                      {comment.content}
                    </div>
                    
                    <div className="comment-footer" style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '8px',
                      fontSize: '12px',
                      color: 'var(--text-secondary)'
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
              <div className="no-comments" style={{ 
                textAlign: 'center', 
                padding: '40px', 
                backgroundColor: 'white',
                borderRadius: '4px' 
              }}>
                <h3>No comments yet</h3>
                <p>u/{user.username} hasn't commented on any posts yet</p>
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'saved' && (
          <div className="profile-saved" style={{ 
            textAlign: 'center', 
            padding: '40px', 
            backgroundColor: 'white',
            borderRadius: '4px' 
          }}>
            <h3>Saved Items</h3>
            <p>You haven't saved any posts or comments yet</p>
            <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--text-secondary)' }}>
              To save a post or comment, click the "Save" button below it
            </p>
          </div>
        )}
        
        {activeTab === 'about' && (
          <div className="profile-about" style={{ 
            padding: '20px', 
            backgroundColor: 'white',
            borderRadius: '4px' 
          }}>
            <h3 style={{ marginBottom: '16px' }}>About u/{user.username}</h3>
            
            <div className="profile-bio" style={{ marginBottom: '24px' }}>
              <h4 style={{ marginBottom: '8px', fontSize: '16px' }}>Bio</h4>
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
                    resize: 'vertical'
                  }}
                  placeholder="Write something about yourself..."
                />
              ) : (
                <p>{userBio}</p>
              )}
            </div>
            
            <div className="profile-interests" style={{ marginBottom: '24px' }}>
              <h4 style={{ marginBottom: '8px', fontSize: '16px' }}>Interests</h4>
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
                      marginBottom: '8px'
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
                        gap: '8px'
                      }}>
                        <span>{interest}</span>
                        <button
                          onClick={() => setUserInterests(userInterests.filter((_, i) => i !== index))}
                          style={{
                            border: 'none',
                            background: 'none',
                            cursor: 'pointer',
                            fontSize: '12px',
                            color: 'var(--text-secondary)'
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
                      borderRadius: '16px'
                    }}>
                      {interest}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="profile-details" style={{ marginBottom: '24px' }}>
              <h4 style={{ marginBottom: '8px', fontSize: '16px' }}>Account Details</h4>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'auto 1fr',
                gap: '8px 16px',
                fontSize: '14px'
              }}>
                <div style={{ fontWeight: '500' }}>Account created:</div>
                <div>{new Date(user.created).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</div>
                
                <div style={{ fontWeight: '500' }}>Karma:</div>
                <div>{user.karma}</div>
                
                <div style={{ fontWeight: '500' }}>Posts:</div>
                <div>{userPosts.length}</div>
                
                <div style={{ fontWeight: '500' }}>Comments:</div>
                <div>{userComments.length}</div>
              </div>
            </div>
            
            {isEditing && (
              <button
                onClick={handleSaveProfile}
                style={{
                  backgroundColor: 'var(--matrixagora-blue)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
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