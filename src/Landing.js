import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, IG_URL } from './Nav';

const Landing = () => (
  <main className="landing">
    <div className="middle">
      <div className="hello">Hello —</div>
      <h1>I'm <em>Andrew Wong.</em></h1>
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
        <a href={IG_URL} target="_blank" rel="noopener noreferrer">
          <span className="n">03</span>
          <span className="title"><em>Photography</em><InstagramIcon size={16} /></span>
          <span className="desc">@awong.photo on Instagram</span>
          <span className="arr">↗</span>
        </a>
        <div className="coming" aria-disabled="true">
          <span className="n">04</span>
          <span className="title">Coffee</span>
          <span className="desc">What I'm up to</span>
          <span className="arr">WIP</span>
        </div>
      </nav>
    </div>
  </main>
);

export default Landing;
