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
      <h1>I'm <em>Andrew Wong</em>, an engineer who tinkers, brews, and shoots film.</h1>
      <p className="intro">
        This is a quiet corner of the internet where I keep my <em>projects</em>,{' '}
        <em>photographs</em>, and a running <em>coffee log</em>. Pick a door.
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
        <Link to="/photography">
          <span className="n">03</span>
          <span className="title"><em>Photography</em></span>
          <span className="desc">Mostly film, mostly after dark</span>
          <span className="arr">→</span>
        </Link>
        <Link to="/coffee">
          <span className="n">04</span>
          <span className="title">Coffee</span>
          <span className="desc">A running brew log</span>
          <span className="arr">→</span>
        </Link>
      </nav>
    </div>

    <div className="bottom">
      <span>
        <Link to="/now">Now</Link>
        <Link to="/contact">Contact</Link>
      </span>
      <span>Updated 14 · 04 · 2026</span>
    </div>
  </main>
);

export default Landing;
