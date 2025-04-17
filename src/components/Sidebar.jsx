import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { subreddits, topics, resources } from '../data/dummyData';
import './Sidebar.css';

const Sidebar = () => {
  // Sort subreddits by members count (descending)
  const popularSubreddits = [...subreddits].sort((a, b) => b.members - a.members);
  
  // State to track expanded sections and topics
  const [expanded, setExpanded] = useState({
    communities: false,
    topics: false,
    resources: false
  });
  
  const [expandedTopics, setExpandedTopics] = useState({});

  // Toggle section expansion
  const toggleSection = (section) => {
    setExpanded({
      ...expanded,
      [section]: !expanded[section]
    });
  };
  
  // Toggle topic expansion
  const toggleTopic = (topicId, event) => {
    event.stopPropagation();
    setExpandedTopics({
      ...expandedTopics,
      [topicId]: !expandedTopics[topicId]
    });
  };
  
  // Determine if a subreddit exists (for demo purposes)
  const subredditExists = (subredditName) => {
    // These are the only subreddits that will "exist" in our demo
    const existingSubreddits = ['r/programming', 'r/gaming', 'r/space', 'r/technology', 'r/music'];
    return existingSubreddits.includes(subredditName);
  };
  
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <Link to="/">
          <div className="sidebar-subreddit">
            <div className="sidebar-subreddit-icon">
              <i className="fas fa-home"></i>
            </div>
            <div className="sidebar-subreddit-name">
              Home
            </div>
          </div>
        </Link>
        <Link to="/explore">
          <div className="sidebar-subreddit">
            <div className="sidebar-subreddit-icon">
              <i className="fas fa-compass"></i>
            </div>
            <div className="sidebar-subreddit-name">
              Explore
            </div>
          </div>
        </Link>
        <Link to="/popular">
          <div className="sidebar-subreddit">
            <div className="sidebar-subreddit-icon">
              <i className="fas fa-fire"></i>
            </div>
            <div className="sidebar-subreddit-name">
              Popular
            </div>
          </div>
        </Link>
        <Link to="/all">
          <div className="sidebar-subreddit">
            <div className="sidebar-subreddit-icon">
              <i className="fas fa-globe"></i>
            </div>
            <div className="sidebar-subreddit-name">
              All
            </div>
          </div>
        </Link>
      </div>
      
      <div className="sidebar-section">
        <div className="sidebar-section-header" onClick={() => toggleSection('communities')}>
          <h3>Communities</h3>
          <i className={`fas ${expanded.communities ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </div>
        {expanded.communities && (
          <div className="sidebar-section-content">
            {popularSubreddits.map(subreddit => (
              <Link to={`/r/${subreddit.name.substring(2)}`} key={subreddit.id}>
                <div className="sidebar-subreddit">
                  <div className="sidebar-subreddit-icon">
                    {subreddit.icon}
                  </div>
                  <div className="sidebar-subreddit-name">
                    {subreddit.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      
      <div className="sidebar-section">
        <div className="sidebar-section-header" onClick={() => toggleSection('topics')}>
          <h3>Topics</h3>
          <i className={`fas ${expanded.topics ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </div>
        {expanded.topics && (
          <div className="sidebar-section-content">
            {topics.map(topic => (
              <div key={topic.id}>
                <div className="sidebar-topic" onClick={(e) => toggleTopic(topic.id, e)}>
                  <div className="sidebar-subreddit-icon">
                    <i className={topic.icon}></i>
                  </div>
                  <div className="sidebar-subreddit-name">{topic.name}</div>
                  <i className={`fas ${expandedTopics[topic.id] ? 'fa-chevron-up' : 'fa-chevron-down'} topic-dropdown-icon`}></i>
                </div>
                
                {expandedTopics[topic.id] && (
                  <div className="topic-subreddits">
                    {topic.subreddits.map(subtopic => (
                      <div key={subtopic.id}>
                        {subredditExists(subtopic.name) ? (
                          <Link to={`/r/${subtopic.name.substring(2)}`}>
                            <div className="sidebar-subtopic">
                              <div className="sidebar-subreddit-icon subtopic-icon">
                                {subtopic.icon}
                              </div>
                              <div className="sidebar-subreddit-name">
                                {subtopic.name}
                              </div>
                            </div>
                          </Link>
                        ) : (
                          <div className="community-not-found">
                            <div className="not-found-title">
                              <span className="community-name">{subtopic.name}</span>
                            </div>
                            <div className="not-found-message">
                              Sorry, there doesn't seem to be a community called {subtopic.name}
                            </div>
                            <div className="not-found-submessage">
                              The community may have been banned or the community name is incorrect.
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="sidebar-section">
        <div className="sidebar-section-header" onClick={() => toggleSection('resources')}>
          <h3>Resources</h3>
          <i className={`fas ${expanded.resources ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </div>
        {expanded.resources && (
          <div className="sidebar-section-content">
            {resources.map(resource => (
              <Link to={resource.path} key={resource.id}>
                <div className="sidebar-resource">
                  <div className="sidebar-subreddit-icon">
                    <i className={resource.icon}></i>
                  </div>
                  <div className="sidebar-subreddit-name">
                    {resource.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar; 