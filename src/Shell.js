import React, { Component } from 'react';

const FONTS_HREF = 'https://fonts.googleapis.com/css2?family=Gloock&family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap';

const STORAGE_KEY = 'awong_mode';

function prefersDark() {
  try {
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  } catch (e) {
    return false;
  }
}

function loadMode() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch (e) {}
  return prefersDark() ? 'dark' : 'light';
}

const SunIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
       strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
       strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

class Shell extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: loadMode() };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    if (!document.querySelector('link[data-design-fonts]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = FONTS_HREF;
      link.setAttribute('data-design-fonts', 'true');
      document.head.appendChild(link);
    }
    document.documentElement.setAttribute('data-mode', this.state.mode);
  }

  toggle() {
    const next = this.state.mode === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
    document.documentElement.setAttribute('data-mode', next);
    this.setState({ mode: next });
  }

  render() {
    const isDark = this.state.mode === 'dark';
    return (
      <button
        type="button"
        className="mode-toggle"
        onClick={this.toggle}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Light mode' : 'Dark mode'}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    );
  }
}

export default Shell;
