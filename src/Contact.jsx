import React from 'react';
import Nav from './Nav';
import PageFooter from './PageFooter';

const Contact = () => (
  <div>
    <Nav />
    <main className="page">
      <div className="dek">Say hello</div>
      <h1 className="page-title">The quickest path <em>is email.</em></h1>
      <p className="lede">I'm slower to reply than I'd like, but I read everything. The best subject lines tell me what you want; the best emails are shorter than you think they need to be.</p>

      <section className="sec">
        <ul className="contact-list">
          <li><b>Email</b><a href="mailto:hi@awong.io">hi@awong.io</a><span className="handle">preferred</span></li>
          <li><b>GitHub</b><a href="https://github.com/andrewwong97">github.com/andrewwong97</a><span className="handle">@andrewwong97</span></li>
          <li><b>LinkedIn</b><a href="https://linkedin.com/in/andrewwong97">linkedin.com/in/andrewwong97</a><span className="handle">@andrewwong97</span></li>
        </ul>
      </section>

      <PageFooter prev={{ to: '/work', label: 'Work' }} next={{ to: '/', label: 'Home' }} />
    </main>
  </div>
);

export default Contact;
