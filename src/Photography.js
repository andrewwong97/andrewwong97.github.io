import React from 'react';
import Nav from './Nav';
import PageFooter from './PageFooter';
import ProjectRow from './ProjectRow';

const Photo = ({ children, caption, kit }) => (
  <div className="ph">
    {children}
    <div className="cap"><span>{caption}</span><span>{kit}</span></div>
  </div>
);

const Photography = () => (
  <div>
    <Nav />
    <main className="page" style={{ maxWidth: 1100 }}>
      <div className="masthead">
        <span className="section-name"><b>§ Photography</b></span>
        <span className="date">34 selected · 2023 – 2026</span>
      </div>

      <div className="dek">Digital, mostly after dark</div>
      <h1 className="page-title">Quiet frames, <em>kept plain.</em></h1>
      <p className="lede">One mirrorless body, one or two primes, and as little post as I can get away with. I shoot mostly when the city is quiet — early mornings, late nights, the in-between hours. Hover any frame for the details.</p>

      <section className="sec">
        <div className="sec-head">
          <div className="sec-no"><b>§ 01</b>San Francisco, mornings</div>
          <h2 className="sec-title">Before anyone is awake.</h2>
        </div>
        <div className="photos">
          <Photo caption="Ferry Building, 6am" kit="35mm · ISO 200">
            <svg viewBox="0 0 100 133" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="sf1" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#bcae98" />
                  <stop offset=".6" stopColor="#6d624f" />
                  <stop offset="1" stopColor="#2a241d" />
                </linearGradient>
              </defs>
              <rect width="100" height="133" fill="url(#sf1)" />
              <rect x="22" y="40" width="56" height="60" fill="#1a1713" opacity=".5" />
              <rect x="30" y="50" width="40" height="40" fill="#e8dfc9" opacity=".7" />
            </svg>
          </Photo>
          <Photo caption="Tunnel no. 3" kit="50mm · ISO 800">
            <svg viewBox="0 0 100 133" preserveAspectRatio="xMidYMid slice">
              <rect width="100" height="133" fill="#2c2722" />
              <circle cx="50" cy="55" r="24" fill="#e9d9b4" opacity=".85" />
              <rect x="0" y="90" width="100" height="43" fill="#1a1714" />
            </svg>
          </Photo>
          <Photo caption="Alamo Square" kit="35mm · ISO 400">
            <svg viewBox="0 0 100 133" preserveAspectRatio="xMidYMid slice">
              <rect width="100" height="133" fill="#1e1a16" />
              <rect x="10" y="30" width="20" height="70" fill="#c6b798" />
              <rect x="40" y="20" width="24" height="80" fill="#8b7d66" />
              <rect x="72" y="36" width="18" height="64" fill="#5a4f3d" />
            </svg>
          </Photo>
          <Photo caption="Point Reyes" kit="85mm · ISO 100">
            <svg viewBox="0 0 100 133" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="sf2" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#8a7f66" />
                  <stop offset="1" stopColor="#2a241d" />
                </linearGradient>
              </defs>
              <rect width="100" height="133" fill="url(#sf2)" />
              <rect x="20" y="60" width="60" height="2" fill="#e8dfc9" />
              <rect x="30" y="66" width="40" height="2" fill="#e8dfc9" opacity=".6" />
            </svg>
          </Photo>
          <Photo caption="Kitchen window" kit="35mm · ISO 200">
            <svg viewBox="0 0 100 133" preserveAspectRatio="xMidYMid slice">
              <rect width="100" height="133" fill="#c2b49a" />
              <rect x="15" y="10" width="70" height="100" fill="#4a402f" />
              <rect x="25" y="24" width="50" height="72" fill="#e4d8ba" />
            </svg>
          </Photo>
          <Photo caption="Ocean Beach" kit="50mm · ISO 400">
            <svg viewBox="0 0 150 100" preserveAspectRatio="xMidYMid slice">
              <rect width="150" height="100" fill="#d6ccb5" />
              <rect y="60" width="150" height="40" fill="#6d6250" />
              <circle cx="120" cy="30" r="18" fill="#f5e9ca" />
            </svg>
          </Photo>
          <Photo caption="Oakland, 11pm" kit="35mm · ISO 6400">
            <svg viewBox="0 0 150 100" preserveAspectRatio="xMidYMid slice">
              <rect width="150" height="100" fill="#1a1713" />
              <rect x="0" y="68" width="150" height="32" fill="#6d6250" />
              <rect x="30" y="40" width="60" height="40" fill="#3a342a" />
              <circle cx="60" cy="60" r="3" fill="#f3e7c8" />
            </svg>
          </Photo>
          <Photo caption="Marina, dusk" kit="50mm · ISO 800">
            <svg viewBox="0 0 100 133" preserveAspectRatio="xMidYMid slice">
              <rect width="100" height="133" fill="#3a342a" />
              <circle cx="50" cy="45" r="22" fill="#e9d9b4" opacity=".85" />
              <rect y="85" width="100" height="48" fill="#1a1713" />
            </svg>
          </Photo>
          <Photo caption="Dolores, Saturday" kit="35mm · ISO 200">
            <svg viewBox="0 0 100 133" preserveAspectRatio="xMidYMid slice">
              <rect width="100" height="133" fill="#8a7f66" />
              <rect x="0" y="85" width="100" height="48" fill="#2a241d" />
              <rect x="30" y="50" width="40" height="35" fill="#c6b798" />
            </svg>
          </Photo>
          <Photo caption="Doorway, Mission" kit="50mm · ISO 400">
            <svg viewBox="0 0 100 133" preserveAspectRatio="xMidYMid slice">
              <rect width="100" height="133" fill="#d6ccb5" />
              <rect x="20" y="20" width="60" height="90" fill="#2a241d" />
              <rect x="28" y="28" width="44" height="74" fill="#e4d8ba" />
            </svg>
          </Photo>
        </div>
      </section>

      <section className="sec">
        <div className="sec-head">
          <div className="sec-no"><b>§ 02</b>Folios</div>
          <h2 className="sec-title">Longer work.</h2>
        </div>
        <div>
          <ProjectRow yr="2024" title={<span>Night shift, <em>Ocean Beach</em></span>} subtitle="Twelve frames · three midnight walks"
            detail="High-ISO, wide open, edited toward grain rather than away from it. Printed at 10×10 and kept in a linen folio."
            tag="Series"
          />
          <ProjectRow yr="2023" title={<span>Tokyo, <em>in halves</em></span>} subtitle="A folio of diptychs · two weeks of walking"
            detail="Two prime lenses, one body, no zoom. Edited in Lightroom on the train home. A book is in progress; don't hold your breath."
            tag="Folio"
          />
        </div>
      </section>

      <section className="sec">
        <div className="sec-head">
          <div className="sec-no"><b>§ 03</b>Kit</div>
          <h2 className="sec-title">What I carry.</h2>
        </div>
        <div className="prose">
          <p>One <em>full-frame mirrorless body</em> and a small bag of fast primes — a 35 and a 50 do most of the work, an 85 when I want compression. The whole kit fits in a bag I can forget I'm carrying, which is the only test that matters.</p>
          <p>I edit in <em>Lightroom</em> with a profile I built once and stopped fiddling with. The goal is fewer sliders, not more.</p>
        </div>
      </section>

      <PageFooter left="© A. Wong · 2026 · All frames mine"
        prev={{ to: '/work', label: 'Work' }}
        next={{ to: '/coffee', label: 'Coffee' }}
      />
    </main>
  </div>
);

export default Photography;
