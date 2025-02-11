import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
import { getPortfolioData } from '../config/firebaseService';

const Home = () => {
  const [portfolio, setPortfolio] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPortfolioData();
      setPortfolio(data);
    };

    fetchData();
  }, []);

  if (!portfolio) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <section className="hero">
        <h1>Hi, I'm {portfolio.name}</h1>
        <h2>{portfolio.title}</h2>
        <p>{portfolio.bio}</p>

        <h3>Years of Experience:</h3>
        <ul>
          <li><strong>Mobile:</strong> {portfolio.yoe.mobile}</li>
          <li><strong>Web:</strong> {portfolio.yoe.web}</li>
          <li><strong>Backend:</strong> {portfolio.yoe.other}</li>
        </ul>

        <h3>Hobbies:</h3>
        <ul>
          <li><strong>Sports:</strong> {portfolio.hobby.sport}</li>
          <li><strong>Coding:</strong> {portfolio.hobby.code}</li>
          <li><strong>Games:</strong> {portfolio.hobby.games}</li>
        </ul>

        {/* <a href="#projects" className="cta-btn">Check Out My Work</a> */}
      </section>
      <Timeline></Timeline>
      <Footer />
    </div>
  );
};

export default Home;
