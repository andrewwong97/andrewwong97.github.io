import React from 'react';
import { Link } from 'react-router-dom';

const PageFooter = ({ left, prev, next }) => (
  <footer className="page-footer">
    <span>{left || '© A. Wong · 2026'}</span>
    <span>
      {prev && <Link to={prev.to}>← {prev.label}</Link>}
      {next && <Link to={next.to}>{next.label} →</Link>}
    </span>
  </footer>
);

export default PageFooter;
