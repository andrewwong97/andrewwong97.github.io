import React from 'react';
import Nav from './Nav';
import PageFooter from './PageFooter';

const Now = () => (
  <div>
    <Nav />
    <main className="page">
      <div className="masthead">
        <span className="section-name"><b>§ Now</b></span>
        <span className="date">Updated 14 · 04 · 2026</span>
      </div>

      <div className="dek">What I'm up to this month</div>
      <h1 className="page-title">A page of <em>present tense.</em></h1>
      <p className="lede">
        In the{' '}
        <a href="https://nownownow.com" style={{ color: 'var(--ink)', borderBottom: '1px solid var(--accent)', textDecoration: 'none' }}>
          tradition of /now pages
        </a>
        {' '}— an honest snapshot of what's on my mind, updated whenever it drifts out of date.
      </p>

      <section className="sec">
        <ul className="now-list">
          <li><b>Reading</b><span>Peter Watts, <em>Blindsight.</em> Second time through. Underlining less than I did at 25.</span></li>
          <li><b>Building</b><span>A pressure profiler for the lever. The soldering iron has been warm at my elbow for three weekends.</span></li>
          <li><b>Shooting</b><span>Delta 3200, <em>after dark.</em> Cold nights make the grain sit right.</span></li>
          <li><b>Listening</b><span>Nils Frahm, <em>All Melody.</em> On repeat. I owe my cat an apology.</span></li>
          <li><b>Learning</b><span>Enough Rust to embarrass my C++. The borrow checker is a patient teacher.</span></li>
          <li><b>Avoiding</b><span>Touching a thing at work that I know I'll have to rewrite.</span></li>
          <li><b>Cooking</b><span>A spring pasta with <em>fava beans</em> and too much lemon zest.</span></li>
          <li><b>Travel</b><span>A week in Kyoto in May, if the tickets are kind.</span></li>
        </ul>
      </section>

      <p className="prose" style={{ marginTop: 48, color: 'var(--ink-3)', fontSize: 14 }}>
        If you'd like a reply to something on this page, the fastest way is email — <a href="mailto:hi@awong.io">hi@awong.io</a>.
      </p>

      <PageFooter prev={{ to: '/coffee', label: 'Coffee' }} next={{ to: '/contact', label: 'Contact' }} />
    </main>
  </div>
);

export default Now;
