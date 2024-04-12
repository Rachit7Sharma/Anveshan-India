import React, { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState('');
  
  const showLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); 
  }

  return (
    <div>
      <header>
        <div className="container">
          <h1 className="website-style">Anveshan India</h1>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#explore">Explore</a></li>
              <li><a href="#community">Community</a></li>
              <li><a href="#join">Join Us</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#faqs">FAQs</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home">
      </section>

      <section id="explore">
        <div className="explore-container">
          <div className="search-bar">
            <input type="text" placeholder="Start your Anveshan Now" />
            <button onClick={showLoading}>Search</button>
          </div>
          <img src="map-of-india.jpg" alt="Map of India" />
        </div>
      </section>

      <section id="community">
        <div className="container">
          <div className="comment-section">
            <h2>Community Comments</h2>
            <div className="comment"></div>
            <div className="comment"></div>
            <div className="comment"></div>
          </div>
        </div>
        <div className="container">
          <div className="comment-box">
            <textarea placeholder="Feel free to drop your user experience!" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            <button className="attach">Attach</button>
            <button>Post publicly</button>
          </div>
        </div>
      </section>

      <section id="join">
      </section>

      <section id="about">
      </section>

      <section id="faqs">
      </section>

      <footer>
        <div className="container">
          <p>&copy; Join us in Exploring Incredible India!!</p>
        </div>
      </footer>

      {loading && (
        <div className="loading-dots" id="loadingDots">
          <span className="loading-dot"></span>
          <span className="loading-dot"></span>
          <span className="loading-dot"></span>
          <span className="loading-dot"></span>
        </div>
      )}
    </div>
  );
}

export default App;
