import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <main className="landing">
    <div className="top">
      <span className="sig">awong.io</span>
      <span>San Francisco · Est. 2018</span>
    </div>

    <div className="middle">
      <div className="hello">Hello —</div>
      <h1>I'm <em>Andrew Wong</em>, an engineer who tinkers and takes photographs.</h1>
      <p className="intro">
        This is a quiet corner of the internet where I keep my <em>projects</em> and <em>photographs</em>. Pick a door.
      </p>

      <nav className="primary">
        <Link to="/tinkering">
          <span className="n">01</span>
          <span className="title"><em>Tinkering</em></span>
          <span className="desc">Side projects &amp; hardware</span>
          <span className="arr">→</span>
        </Link>
        <Link to="/work">
          <span className="n">02</span>
          <span className="title">Work</span>
          <span className="desc">Engineering, day-to-day</span>
          <span className="arr">→</span>
        </Link>
        <a href="https://awong.photo" target="_blank" rel="noopener noreferrer">
          <span className="n">03</span>
          <span className="title"><em>Photography</em></span>
          <span className="desc">awong.photo · external</span>
          <span className="arr">↗</span>
        </a>
      </nav>
    </div>

    <div className="bottom">
      <span />
      <span>Updated 14 · 04 · 2026</span>
    </div>
  </main>
);

export default Landing;
