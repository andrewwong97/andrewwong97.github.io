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

      <div className="dek">Things I'm building, fixing, or taking apart</div>
      <h1 className="page-title">Small machines, <em>mostly for me.</em></h1>
      <p className="lede">Weekend projects that never quite turn into products. Most involve a soldering iron, a text editor, or both. Click a row to read the long version.</p>

      <section className="sec">
        <div className="sec-head">
          <div className="sec-no"><b>§ 01</b>Active</div>
          <h2 className="sec-title">In progress right now.</h2>
        </div>
        <div>
          <ProjectRow
            yr="2026 · ongoing"
            title="Lever Logger"
            subtitle="Arduino + load cell on a Londinium R24"
            detail={<span>A pressure and weight logger wedged under the group. Writes to a small OLED and a webapp on my local network; the graphs help me chase <em>Gagné-style declining pressure</em> profiles. The lever makes this silly and that's exactly why it's fun.</span>}
            tag="Hardware"
          />
          <ProjectRow
            yr="2026"
            title={<span>awong.io <em>(this site)</em></span>}
            subtitle="the fifth rewrite, the first I like"
            detail="Static-feeling React, hand-written CSS, no UI framework. Paper and near-black. If you're reading this, you're looking at it."
            tag="Software"
          />
        </div>
      </section>

      <section className="sec">
        <div className="sec-head">
          <div className="sec-no"><b>§ 02</b>Shipped</div>
          <h2 className="sec-title">Finished enough to put down.</h2>
        </div>
        <div>
          <ProjectRow yr="2025" title="Paperlight" subtitle="an e-ink dashboard for the kitchen"
            detail="A Raspberry Pi Zero, a 7.5″ e-ink panel, and a wooden frame I routed badly. Shows the day's meetings, the tide, and one film photo from my archive — rotated at 6am so I never see the same one twice."
            tag="Hardware"
          />
          <ProjectRow yr="2025" title="Rangefinder ledger" subtitle="SQLite-backed film log"
            detail={<span>CLI and web UI for logging every frame I shoot on film: stock, developer, notes, scan. Mostly an excuse to learn <em>litestream</em> and to remember what I was thinking in frame 17.</span>}
            tag="Software"
          />
          <ProjectRow yr="2024" title="Grounds" subtitle="a grind-size calibration iOS app"
            detail="Point your phone at a tablespoon of grounds. It measures particle distribution from the image and tells you whether you need a click coarser. Runs on-device with a tiny CoreML model. Not very good. I love it."
            tag="iOS · ML"
          />
          <ProjectRow yr="2023" title="Home-grown RSS" subtitle="self-hosted reader"
            detail="A reader that actually reads like a newspaper. Go, HTMX, no JS framework, no accounts but mine."
            tag="Software"
          />
        </div>
      </section>

      <section className="sec">
        <div className="sec-head">
          <div className="sec-no"><b>§ 03</b>Shelved</div>
          <h2 className="sec-title">Good ideas in a drawer.</h2>
        </div>
        <div>
          <ProjectRow yr="2022" title="Quiet radio" subtitle="a one-button FM tuner for my grandfather"
            detail="ESP32, a rotary encoder, and a single speaker. Worked fine. He preferred the radio he already had."
            tag="Hardware"
          />
          <ProjectRow yr="2021" title="Morning notes" subtitle="a Markdown journal with calendar keys"
            detail="Useful for about six weeks. Then I went back to a pocket notebook."
            tag="Software"
          />
        </div>
      </section>

      <PageFooter prev={{ to: '/', label: 'Home' }} next={{ to: '/work', label: 'Work' }} />
    </main>
  </div>
);

export default Tinkering;
