import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="landing-container">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="video-background">
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-mesh-network-connection-23215-large.mp4" type="video/mp4" />
      </video>
      <div className="overlay"></div>

      {/* Header Logo */}
      <header className="header">
        <h1 className="logo-text">KERNEL X</h1>
      </header>

      {/* Auth Card */}
      <div className="auth-card">
        <div className="auth-header">
          <h2>{isLogin ? 'Sign In' : 'Create Account'}</h2>
          <p>{isLogin ? 'Access the power of Kernel X' : 'Join the gaming elite'}</p>
        </div>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <i className="ri-user-line"></i>
            <input type="text" placeholder="Username" required />
          </div>

          <div className="input-group">
            <i className="ri-lock-line"></i>
            <input type="password" placeholder="Password" required />
          </div>

          {!isLogin && (
            <div className="input-group">
              <i className="ri-lock-password-line"></i>
              <input type="password" placeholder="Confirm Password" required />
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? 'LOGIN' : 'REGISTER'}
          </button>
        </form>

        <div className="auth-footer">
          <p onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
          </p>
        </div>
      </div>

      <footer className="footer-info">
        <div className="social-icons">
          <i className="ri-discord-fill"></i>
          <i className="ri-github-fill"></i>
          <i className="ri-twitter-x-line"></i>
        </div>
      </footer>
    </div>
  );
};

export default App;
