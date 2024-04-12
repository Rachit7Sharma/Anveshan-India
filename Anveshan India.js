import React from 'react';
import '.css/Anveshan.css';

function Header() {
  return (
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
  );
}

function Home() {
  return (
    <section id="home">
      {}
    </section>
  );
}

function Explore() {
  return (
    <section id="explore">
      {}
    </section>
  );
}

function Community() {
  return (
    <section id="community">
      {}
    </section>
  );
}

function Join() {
  return (
    <section id="join">
      {}
    </section>
  );
}

function About() {
  return (
    <section id="about">
      {}
    </section>
  );
}

function FAQ() {
  return (
    <section id="faqs">
      {}
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; Join hands with us to Empower Incredible India.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Explore />
      <Community />
      <Join/>
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
