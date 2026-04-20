import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const LINKS = [
  { to: '/tinkering', label: 'Tinkering' },
  { to: '/work', label: 'Work' },
  { href: 'https://awong.photo', label: 'Photography', external: true },
];

const Nav = ({ location }) => (
  <header className="nav">
    <Link to="/" className="sig">awong.io</Link>
    <span className="links">
      {LINKS.map(l => (
        l.external ? (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
        ) : (
          <Link
            key={l.to}
            to={l.to}
            aria-current={location.pathname === l.to ? 'page' : undefined}
          >{l.label}</Link>
        )
      ))}
    </span>
  </header>
);

export default withRouter(Nav);
