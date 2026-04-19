import React from 'react';
import Nav from './Nav';
import PageFooter from './PageFooter';

const Contact = () => (
  <div>
    <Nav />
    <main className="page">
      <div className="masthead">
        <span className="section-name"><b>§ Contact</b></span>
        <span className="date">Roughly once a day</span>
      </div>

      <div className="dek">Say hello</div>
      <h1 className="page-title">The quickest path <em>is email.</em></h1>
      <p className="lede">I'm slower to reply than I'd like, but I read everything. The best subject lines tell me what you want; the best emails are shorter than you think they need to be.</p>

      <section className="sec">
        <ul className="contact-list">
          <li><b>Email</b><a href="mailto:hi@awong.io">hi@awong.io</a><span className="handle">preferred</span></li>
          <li><b>GitHub</b><a href="https://github.com/andrewwong97">github.com/andrewwong97</a><span className="handle">@andrewwong97</span></li>
          <li><b>LinkedIn</b><a href="https://linkedin.com/in/andrewwong97">linkedin.com/in/andrewwong97</a><span className="handle">@andrewwong97</span></li>
          <li><b>Mastodon</b><a href="https://hachyderm.io">@awong@hachyderm.io</a><span className="handle">occasional</span></li>
          <li><b>RSS</b><a href="/feed.xml">awong.io/feed.xml</a><span className="handle">all updates</span></li>
        </ul>
      </section>

      <section className="sec">
        <div className="sec-head">
          <div className="sec-no"><b>§ 01</b>Office hours</div>
          <h2 className="sec-title">For when you need a person.</h2>
        </div>
        <div className="prose">
          <p>Most Friday afternoons I keep an hour open for anyone who wants to talk <em>payments infrastructure</em>, <em>maker-style side projects</em>, or <em>film photography</em>. It's genuinely free; I just like meeting people.</p>
          <p>Email with a sentence or two about what you'd want to talk about and I'll send a link.</p>
        </div>
      </section>

      <PageFooter prev={{ to: '/now', label: 'Now' }} next={{ to: '/', label: 'Home' }} />
    </main>
  </div>
);

export default Contact;
