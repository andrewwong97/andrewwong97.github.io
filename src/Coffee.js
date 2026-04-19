import React from 'react';
import Nav from './Nav';
import PageFooter from './PageFooter';
import ProjectRow from './ProjectRow';

const Brew = ({ d, bean, origin, method, score }) => (
  <div className="brew">
    <span className="d">{d}</span>
    <span className="bean"><b>{bean}</b><small>{origin}</small></span>
    <span className="method">{method}</span>
    <span className="score">{score}<small>/10</small></span>
  </div>
);

const Coffee = () => (
  <div>
    <Nav />
    <main className="page">
      <div className="masthead">
        <span className="section-name"><b>§ Coffee</b></span>
        <span className="date">38 brews this quarter</span>
      </div>

      <div className="dek">A running brew log</div>
      <h1 className="page-title">Small cups, <em>kept honestly.</em></h1>
      <p className="lede">I grade with the unforgiving <em>Tim Wendelboe scale</em> — where 8 means "I would pay for this again" and 9 means "I've stopped talking." Updated roughly weekly, more often if I'm avoiding something.</p>

      <section className="sec">
        <div className="sec-head">
          <div className="sec-no"><b>§ 01</b>Recent</div>
          <h2 className="sec-title">Last five cups.</h2>
        </div>
        <div>
          <Brew d="14 Apr 2026" bean="Sey · Kirakurwa" origin="Rwanda · washed" method="Lever · 1:2.3 · 28s" score="8.6" />
          <Brew d="09 Apr 2026" bean="Onyx · Monarch" origin="blend · omni" method="V60 · 15:250 · 3:10" score="8.1" />
          <Brew d="02 Apr 2026" bean="Wendelboe · Gesha Village" origin="Ethiopia · natural" method="Kalita · 18:300 · 3:40" score="9.2" />
          <Brew d="28 Mar 2026" bean="Passenger · Las Flores" origin="Colombia · washed" method="Lever · 1:2.1 · 31s" score="8.4" />
          <Brew d="22 Mar 2026" bean="George Howell · Mamuto" origin="Kenya · washed" method="V60 · 18:300 · 3:20" score="7.9" />
        </div>
      </section>

      <section className="sec">
        <div className="sec-head">
          <div className="sec-no"><b>§ 02</b>Kit</div>
          <h2 className="sec-title">What I brew on.</h2>
        </div>
        <div className="prose">
          <p><em>Londinium R24</em> lever, because I like silly machines that outlive me. <em>Niche Zero</em> for espresso, <em>Comandante C40</em> for filter. A Hario V60, a Kalita Wave, and a Fellow Stagg EKG that still works after five years of abuse.</p>
          <p>Water is <em>Third Wave Water</em> in distilled — not because I think it matters that much, but because I can't bring myself to stop.</p>
        </div>
      </section>

      <section className="sec">
        <div className="sec-head">
          <div className="sec-no"><b>§ 03</b>Favourites</div>
          <h2 className="sec-title">Roasters I keep going back to.</h2>
        </div>
        <div>
          <ProjectRow yr="Oslo" title="Tim Wendelboe" subtitle={`"The Platonic ideal of a Kenyan"`}
            detail="Clean, precise, occasionally austere. The only roaster whose lightest filter I actually enjoy."
            tag="Filter"
          />
          <ProjectRow yr="Fullerton, CA" title="Sey" subtitle="Consistently my best cups of the year"
            detail="The Kirakurwa above is their washed Rwanda — equal parts stonefruit and black tea, and roasted to get out of the way."
            tag="Filter + espresso"
          />
          <ProjectRow yr="Spring, TX" title="Onyx" subtitle="For when I want to be impressed"
            detail="Their Monarch is the blend I hand to anyone who thinks espresso is supposed to taste burnt."
            tag="Espresso"
          />
        </div>
      </section>

      <PageFooter left="© A. Wong · 2026 · Brewed honestly"
        prev={{ to: '/photography', label: 'Photography' }}
        next={{ to: '/now', label: 'Now' }}
      />
    </main>
  </div>
);

export default Coffee;
