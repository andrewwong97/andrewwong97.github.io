import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const IG_URL = 'https://www.instagram.com/awong.photo/';

const InstagramIcon = ({ size = 13 }) => (
  <svg
    viewBox="0 0 24 24" width={size} height={size}
    fill="none" stroke="currentColor" strokeWidth="1.6"
    strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true" style={{ verticalAlign: '-2px', marginLeft: 4 }}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LINKS = [
  { to: '/tinkering', label: 'Tinkering' },
  { to: '/work', label: 'Work' },
  { href: IG_URL, label: 'Photography', external: true, icon: InstagramIcon },
];

const Nav = ({ location }) => (
  <header className="nav">
    <Link to="/" className="sig">awong.io</Link>
    <span className="links">
      {LINKS.map(l => {
        const Icon = l.icon;
        return l.external ? (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
            {l.label}{Icon && <Icon />}
          </a>
        ) : (
          <Link
            key={l.to}
            to={l.to}
            aria-current={location.pathname === l.to ? 'page' : undefined}
          >{l.label}</Link>
        );
      })}
    </span>
  </header>
);

export { InstagramIcon, IG_URL };
export default withRouter(Nav);
