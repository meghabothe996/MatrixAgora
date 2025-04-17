import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import { posts, subreddits } from '../data/dummyData';

const Home = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);
  
  useEffect(() => {
    // Get trending posts - in a real app, this would be from an API call
    const featured = [
      {
        id: 301,
        title: 'The art of mindfulness: How 10 minutes a day transformed my mental health',
        content: 'After struggling with anxiety for years, I decided to try mindfulness meditation for 10 minutes every morning. The changes have been profound. When I started, I could barely sit still for 2 minutes without checking my phone or getting distracted by my thoughts. By week two, I noticed I was sleeping better and waking up with more energy. By month three, my colleagues noticed I seemed calmer in stressful meetings. Six months in, I find myself automatically taking deep breaths when faced with challenges instead of spiraling into worry. The science behind mindfulness is fascinating - it actually changes your brain structure, strengthening the prefrontal cortex and weakening the amygdala\'s fear response. For anyone interested in starting, I recommend the Headspace app or the free resources on mindful.org.',
        image: '',
        upvotes: 12453,
        userId: 2,
        subredditId: 17, // wellness
        comments: 642,
        created: '2023-06-13T08:23:00Z'
      },
      {
        id: 302,
        title: 'I built a neural network that generates recipes based on ingredients you have at home',
        content: 'After getting tired of those recipe websites that claim to use what you have but still require a trip to the store, I decided to build my own solution. I trained a GPT-3 model on over 100,000 recipes, with specific fine-tuning to prioritize adaptability and substitutions. The model analyzes what ingredients you input and generates recipes that truly only use what you have, while suggesting possible substitutions for optimal flavor. It even considers spice combinations and cooking methods that work best with your available tools. The most challenging part was teaching it to understand ingredient relationships - that egg can bind ingredients in baking but serves a different purpose in other dishes. The tool is currently in beta testing with about 500 users, and the feedback has been incredibly positive. People especially love the "surprise me" feature that finds unusual but delicious combinations they would never have considered. I\'m working on adding nutritional analysis and dietary restriction filters next.',
        image: '',
        upvotes: 8975,
        userId: 3,
        subredditId: 11, // food
        comments: 324,
        created: '2023-06-15T16:45:00Z'
      },
      {
        id: 303,
        title: 'How I trained for a marathon in just 3 months with no previous running experience',
        content: 'At 42 years old and 30 pounds overweight, I decided to challenge myself by signing up for a marathon. Everyone told me it was impossible with only 3 months to prepare, but I was determined to prove them wrong. I created a structured training plan with progressive distance increases, cross-training with swimming and cycling to reduce impact injuries, and meticulous nutrition tracking. The key was consistency - I never missed a scheduled training day, even when it meant running in thunderstorms or at 4 AM before work. The first month was brutal. I couldn\'t run more than a mile without stopping, and every muscle in my body screamed for days afterward. By month two, I completed my first 10-mile run, which was a huge psychological milestone. In the final weeks, I managed a 20-mile training run, which gave me confidence I could handle the full 26.2. Race day was an emotional journey - hitting the wall at mile 22 but pushing through with mental techniques I\'d practiced. I finished in 4:37:22, not breaking any records but accomplishing what seemed impossible just 12 weeks earlier. The experience taught me that most limitations are mental, not physical.',
        image: '',
        upvotes: 15638,
        userId: 5,
        subredditId: 21, // fitness
        comments: 872,
        created: '2023-06-14T11:15:00Z'
      },
      {
        id: 304,
        title: 'The hidden psychology behind home organization, from a former hoarder',
        content: 'Five years ago, my apartment was so cluttered you couldn\'t see the floor. Today, I\'m a minimalist and professional organizer helping others transform their spaces. The journey taught me that disorganization is rarely about laziness - it\'s about psychology. For me, growing up with financial insecurity created a scarcity mindset where I feared letting go of anything that "might be useful someday." Others hold onto items as memory anchors or from guilt about wasting money. The breakthrough came when I started addressing the psychological roots rather than just the symptoms. I developed a four-step process: 1) Identify your psychological attachment pattern to possessions, 2) Create personalized letting-go rituals that address those specific attachments, 3) Design systems that work with your natural habits rather than against them, and 4) Maintain with scheduled "emotional check-ins" about your space. The most powerful realization was that organizing isn\'t about perfection or Instagram-worthy shelves - it\'s about creating a space that supports your mental health and helps you live the life you want.',
        image: '',
        upvotes: 9432,
        userId: 1,
        subredditId: 7, // lifehacks
        comments: 531,
        created: '2023-06-16T14:30:00Z'
      },
      {
        id: 305,
        title: 'I\'ve tracked every dollar I\'ve spent for the past decade. Here\'s what I learned about money.',
        content: 'Ten years ago, I started tracking every single financial transaction in my life, down to the penny. It began as a simple budgeting exercise, but evolved into a fascinating data project that revealed surprising patterns in my spending behavior. I built a custom tracking system that categorizes spending, identifies trends, and compares against various financial metrics. The most shocking discovery was that 34% of my income went to completely forgettable purchases - things I couldn\'t even remember buying a month later. Small daily expenses like coffee and convenience foods added up to over $47,000 across the decade. Tracking also revealed psychological spending triggers: I spent 40% more on impulse purchases when working on high-stress projects, and 65% more online shopping during winter months. The practice helped me increase my savings rate from 8% to 42% without feeling deprived, simply by redirecting money from unmemorable purchases to meaningful experiences and investments. Most importantly, tracking shifted my relationship with money from a source of anxiety to a tool for achieving what matters most to me.',
        image: '',
        upvotes: 21563,
        userId: 4,
        subredditId: 13, // personalfinance
        comments: 1453,
        created: '2023-06-17T09:20:00Z'
      }
    ];
    
    setTrendingPosts(featured);
  }, []);

  const getForYouPosts = () => {
    // In a real app, these would be algorithmically determined
    // For now, just return some posts from the user's subscribed communities
    return posts.slice(0, 10);
  };
  
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="main-content full-width">
          <h2>Popular Posts</h2>
          <div className="posts-container">
            {getForYouPosts().map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 