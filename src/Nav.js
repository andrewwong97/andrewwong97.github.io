import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const IG_URL = 'https://www.instagram.com/awong.photo/';
const GH_URL = 'https://github.com/andrewwong97';
const LI_URL = 'https://www.linkedin.com/in/andrewwong97';

const iconBase = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const InstagramIcon = ({ size = 13 }) => (
  <svg
    {...iconBase} width={size} height={size}
    style={{ verticalAlign: '-2px', marginLeft: 4 }}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const GithubIcon = ({ size = 14 }) => (
  <svg {...iconBase} width={size} height={size}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedInIcon = ({ size = 14 }) => (
  <svg {...iconBase} width={size} height={size}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const LABELS = {
  '/tinkering': 'Tinkering',
  '/work': 'Work',
  '/coffee': 'Coffee',
  '/photography': 'Photography',
  '/now': 'Now',
  '/contact': 'Contact',
};

const Nav = ({ location }) => {
  const label = LABELS[location.pathname];
  return (
    <header className="nav">
      <Link to="/" className="home">Home</Link>
      {label && (
        <span className="crumb-wrap">
          <span className="sep" aria-hidden="true">/</span>
          <span className="crumb">{label}</span>
        </span>
      )}
    </header>
  );
};

export { InstagramIcon, IG_URL, GithubIcon, GH_URL, LinkedInIcon, LI_URL };
export default withRouter(Nav);
