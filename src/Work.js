import React from 'react';
import Nav from './Nav';
import PageFooter from './PageFooter';

const Work = () => (
  <div>
    <Nav />
    <main className="page">
      <div className="masthead">
        <span className="section-name"><b>§ Work</b></span>
        <span className="date">Seventh year in the profession</span>
      </div>

      <h1 className="page-title">An engineer, <em>by trade.</em></h1>
      <div className="prose">
        <p>Product engineer with 7 years of experience building and scaling systems on Confluence Cloud at Atlassian and in full-stack healthcare applications at Corrie Health. I specialize in performance, reliability, and product infrastructure, with a focus on delivering fast, resilient user experiences at scale.</p>
        <p>I've led multi-quarter initiatives, shipped features used by tens of millions of users, and driven high-impact improvements across latency, cost, and system efficiency. I'm most energized working close to the product, solving tangible problems that directly improve the customer experience.</p>
      </div>

      <PageFooter prev={{ to: '/tinkering', label: 'Tinkering' }} next={{ to: '/', label: 'Home' }} />
    </main>
  </div>
);

export default Work;
