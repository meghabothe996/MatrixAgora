import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import RightSidebar from './components/RightSidebar'
import Home from './pages/Home'
import Subreddit from './pages/Subreddit'
import Post from './pages/Post'
import Profile from './pages/Profile'
import Explore from './pages/Explore'
import Popular from './pages/Popular'
import All from './pages/All'
import About from './pages/About'
import Help from './pages/Help'
import MatrixPro from './pages/MatrixPro'
import Blog from './pages/Blog'
import Advertise from './pages/Advertise'
import Careers from './pages/Careers'
import Press from './pages/Press'
import Policy from './pages/Policy'
import Privacy from './pages/Privacy'
import ThemeProvider from './contexts/ThemeContext'

// Wrap the app content to get access to the useLocation hook
const AppContent = () => {
  const location = useLocation();
  const [isProfilePage, setIsProfilePage] = useState(false);
  
  useEffect(() => {
    const profilePattern = /^\/user\/|^\/profile$/;
    setIsProfilePage(profilePattern.test(location.pathname));
  }, [location]);
  
  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Sidebar />
        <div className={isProfilePage ? "app-content profile-container" : "app-content"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/all" element={<All />} />
            <Route path="/r/:subredditName" element={<Subreddit />} />
            <Route path="/r/:subredditName/comments/:postId" element={<Post />} />
            <Route path="/user/:username" element={<Profile />} />
            <Route path="/profile" element={<Navigate to={`/user/john_doe`} replace />} />
            
            {/* Resource routes */}
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/matrix-pro" element={<MatrixPro />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press" element={<Press />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}

export default App
