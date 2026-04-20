import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const LINKS = [
  { to: '/tinkering', label: 'Tinkering' },
  { to: '/work', label: 'Work' },
  { to: '/now', label: 'Now' },
  { to: '/contact', label: 'Contact' },
];

const Nav = ({ location }) => (
  <header className="nav">
    <Link to="/" className="sig">awong.io</Link>
    <span className="links">
      {LINKS.map(l => (
        <Link
          key={l.to}
          to={l.to}
          aria-current={location.pathname === l.to ? 'page' : undefined}
        >{l.label}</Link>
      ))}
    </span>
  </header>
);

export default withRouter(Nav);
