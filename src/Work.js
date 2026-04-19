import React from 'react';
import Nav from './Nav';
import PageFooter from './PageFooter';
import ProjectRow from './ProjectRow';

const Work = () => (
  <div>
    <Nav />
    <main className="page">
      <div className="masthead">
        <span className="section-name"><b>§ Work</b></span>
        <span className="date">Eighth year in the profession</span>
      </div>

      <div className="dek">Where my hours actually go</div>
      <h1 className="page-title">An engineer, <em>by trade.</em></h1>
      <p className="lede">I've spent most of my career on the parts of software nobody talks about at the all-hands — the plumbing that has to keep working while everything around it changes.</p>

      <section className="sec">
        <div className="sec-head">
          <div className="sec-no"><b>§ 01</b>Now</div>
          <h2 className="sec-title">Present tense.</h2>
        </div>
        <div className="prose">
          <p>I'm a product engineer at Atlassian, working on the systems that quietly hold the product up. I spend a lot of my week reading incident reports, sketching sequence diagrams, and deleting more code than I add.</p>
          <p>The things I care about most: <em>systems that fail gracefully</em>, documentation my future self will thank me for, and taking junior engineers seriously as the adults they are.</p>
        </div>
      </section>

      <section className="sec">
        <div className="sec-head">
          <div className="sec-no"><b>§ 02</b>Previously</div>
          <h2 className="sec-title">Before this.</h2>
        </div>
        <div>
          <ProjectRow yr="2019 – 2023" title="Staff Engineer, Climate-tech startup" subtitle="Firmware & backends · 47 engineers at exit"
            detail="Four years writing firmware for grid-edge hardware, then backends for the control plane. I learned how to make things that fail gracefully, because the things we made were going to fail."
            tag="Full-time"
          />
          <ProjectRow yr="2017 – 2019" title="Software Engineer, Name-brand consumer company" subtitle="My first real job"
            detail={`A good place to learn what "good" means, and to write a lot of code I wouldn't put my name on today.`}
            tag="Full-time"
          />
          <ProjectRow yr="2016" title="B.S. Computer Engineering" subtitle="Johns Hopkins University"
            detail="An undergrad project on classroom tools that nobody used. I learned more from the maker-space than the lectures."
            tag="Education"
          />
        </div>
      </section>

      <section className="sec">
        <div className="sec-head">
          <div className="sec-no"><b>§ 03</b>Writing</div>
          <h2 className="sec-title">Things I've written down.</h2>
        </div>
        <div>
          <ProjectRow yr="2024" title={<span>On the pleasure of <em>deleting code</em></span>} subtitle="An essay, mostly for myself · 8 min"
            detail="Why the best commits are the ones with a minus sign in front of them."
            tag="Essay"
          />
          <ProjectRow yr="2023" title={<span>Reliability for the <em>impatient</em></span>} subtitle="A primer I wrote for a new hire · 4 min"
            detail="Five rules for keeping systems upright without spending your whole week on it."
            tag="Note"
          />
        </div>
      </section>

      <p className="prose" style={{ marginTop: 64, color: 'var(--ink-3)', fontSize: 14 }}>
        A longer CV is available on request — <a href="mailto:hi@awong.io">hi@awong.io</a>.
      </p>

      <PageFooter prev={{ to: '/tinkering', label: 'Tinkering' }} next={{ to: '/photography', label: 'Photography' }} />
    </main>
  </div>
);

export default Work;
