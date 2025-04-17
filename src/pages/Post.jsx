import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';
import Comment from '../components/Comment';
import { posts, comments, subreddits } from '../data/dummyData';

const Post = () => {
  const { postId, subredditName } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [postComments, setPostComments] = useState([]);
  const [subreddit, setSubreddit] = useState(null);
  const [commentText, setCommentText] = useState('');
  
  useEffect(() => {
    // Find the post
    const foundPost = posts.find(p => p.id === parseInt(postId));
    setPost(foundPost);
    
    // Find the subreddit
    const foundSubreddit = subreddits.find(sub => sub.name === `r/${subredditName}`);
    setSubreddit(foundSubreddit);
    
    // Validate that the post belongs to the correct subreddit
    if (foundPost && foundSubreddit && foundPost.subredditId !== foundSubreddit.id) {
      // If post exists but in a different subreddit, redirect
      const correctSubreddit = subreddits.find(sub => sub.id === foundPost.subredditId);
      if (correctSubreddit) {
        navigate(`/r/${correctSubreddit.name.substring(2)}/comments/${postId}`, { replace: true });
      }
    }
    
    // Find comments for this post
    if (foundPost) {
      const foundComments = comments.filter(comment => comment.postId === foundPost.id);
      // Sort by upvotes descending
      const sortedComments = [...foundComments].sort((a, b) => b.upvotes - a.upvotes);
      setPostComments(sortedComments);
    }
  }, [postId, subredditName, navigate]);
  
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    
    if (commentText.trim().length === 0) return;
    
    // In a real app, this would send data to a server
    alert('Comment functionality would save your comment: ' + commentText);
    setCommentText('');
  };
  
  // If post not found
  if (!post || !subreddit) {
    return (
      <div className="post-not-found" style={{ textAlign: 'center', padding: '40px 0' }}>
        <h2>Post not found</h2>
        <p>The post may have been removed or the URL is incorrect.</p>
        <Link to="/" style={{ 
          display: 'inline-block', 
          marginTop: '20px',
          padding: '8px 16px',
          backgroundColor: 'var(--reddit-orange)',
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
    <div className="post-page">
      <PostCard post={post} />
      
      <div className="comment-form-container" style={{ 
        backgroundColor: 'white',
        borderRadius: '4px',
        padding: '16px',
        marginBottom: '16px'
      }}>
        <h3 style={{ marginBottom: '12px' }}>Leave a comment</h3>
        <form onSubmit={handleCommentSubmit}>
          <textarea 
            placeholder="What are your thoughts?"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            style={{
              width: '100%',
              minHeight: '100px',
              padding: '12px',
              borderRadius: '4px',
              border: '1px solid var(--reddit-border)',
              marginBottom: '12px',
              resize: 'vertical'
            }}
          />
          <button 
            type="submit" 
            className="button-primary"
            style={{
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '500',
              backgroundColor: 'var(--reddit-blue)',
              color: 'white',
              border: 'none'
            }}
            disabled={commentText.trim().length === 0}
          >
            Comment
          </button>
        </form>
      </div>
      
      <div className="comments-section">
        <h3 style={{ marginBottom: '16px' }}>
          {postComments.length} {postComments.length === 1 ? 'Comment' : 'Comments'}
        </h3>
        
        {postComments.length > 0 ? (
          postComments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))
        ) : (
          <div className="no-comments" style={{ textAlign: 'center', padding: '20px 0' }}>
            <p>No comments yet. Be the first to share what you think!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post; 