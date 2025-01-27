import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';

const Home = () => {
  return (
    <div>
      <Header />
      <section className="hero">
        <h1>Hi, I'm [Your Name]</h1>
        <p>I'm a passionate web developer who builds modern web applications.</p>
        <a href="#projects" className="cta-btn">Check Out My Work</a>
      </section>
      <Timeline></Timeline>
      <Footer />
    </div>
  );
};

export default Home;
