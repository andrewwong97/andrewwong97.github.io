import React from 'react';
import Nav from './Nav';
import PageFooter from './PageFooter';
import ProjectRow from './ProjectRow';

const Tinkering = () => (
  <div>
    <Nav />
    <main className="page">
      <div className="masthead">
        <span className="section-name"><b>§ Tinkering</b></span>
        <span className="date">Updated 14 · 04 · 2026</span>
      </div>

      <div className="dek">Software projects, small and practical</div>
      <h1 className="page-title">Small tools, <em>mostly for me.</em></h1>
      <p className="lede">Weekend projects that never quite turn into products. A text editor, an afternoon, and an itch to scratch. Click a row to read the long version.</p>

      <section className="sec">
        <div className="sec-head">
          <div className="sec-no"><b>§ 01</b>Shipped</div>
          <h2 className="sec-title">Finished enough to put down.</h2>
        </div>
        <div>
          <ProjectRow
            yr="2025 – 2026"
            title="gwb-routes"
            subtitle="George Washington Bridge operational dashboard"
            detail={<span>Tracks whether to take the <em>upper or lower level</em> of the GWB based on your on/off ramp and real-time traffic. FastAPI + Google Maps Directions API, Redis for caching, Sentry for errors, deployed on Vercel serverless. Live at <a href="https://gwb-routes.vercel.app" target="_blank" rel="noopener noreferrer">gwb-routes.vercel.app</a>; source at <a href="https://github.com/andrewwong97/gwb-routes" target="_blank" rel="noopener noreferrer">github.com/andrewwong97/gwb-routes</a>.</span>}
            tag="Python · FastAPI"
          />
        </div>
      </section>

      <PageFooter prev={{ to: '/', label: 'Home' }} next={{ to: '/work', label: 'Work' }} />
    </main>
  </div>
);

export default Tinkering;
