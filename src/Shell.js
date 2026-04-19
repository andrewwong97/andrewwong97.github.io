import React, { Component } from 'react';

const FONTS_HREF = 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap';

const STORAGE_KEY = 'awong_tweaks';
const DEFAULTS = { accent: 'ember', mode: 'light', typePairing: 'serif-sans' };

const ACCENTS = [
  { val: 'ember', color: '#b0432a', label: 'Ember' },
  { val: 'ink', color: '#1d3557', label: 'Ink' },
  { val: 'espresso', color: '#5b3a22', label: 'Espresso' },
  { val: 'mono', color: '#17140f', label: 'Mono' },
];

const TYPE_PAIRINGS = [
  { val: 'serif-sans', label: 'Serif + Sans' },
  { val: 'all-serif', label: 'All serif' },
  { val: 'all-sans', label: 'All sans' },
];

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return Object.assign({}, DEFAULTS, stored);
  } catch (e) {
    return Object.assign({}, DEFAULTS);
  }
}

class Shell extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({ open: false }, loadState());
    this.handleKey = this.handleKey.bind(this);
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
    this.applyTokens();
    window.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKey);
  }

  componentDidUpdate() {
    this.applyTokens();
  }

  applyTokens() {
    const root = document.documentElement;
    root.setAttribute('data-accent', this.state.accent);
    root.setAttribute('data-mode', this.state.mode);
    root.setAttribute('data-type', this.state.typePairing);
    if (this.state.typePairing === 'all-serif') {
      document.body.style.fontFamily = 'var(--f-display)';
    } else {
      document.body.style.fontFamily = 'var(--f-body)';
    }
  }

  handleKey(e) {
    if (e.key !== 't' || e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    this.setState({ open: !this.state.open });
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  set(key, val) {
    const next = Object.assign({}, this.state, { [key]: val });
    this.setState(next);
    try {
      const persisted = { accent: next.accent, mode: next.mode, typePairing: next.typePairing };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
    } catch (e) {}
  }

  render() {
    const { accent, mode, typePairing, open } = this.state;
    return (
      <div>
        {!open && (
          <button id="tw-toggle" type="button" onClick={this.toggle}>⚙ tweaks</button>
        )}
        <div id="tweaks" className={open ? 'open' : ''} role="dialog" aria-label="Tweaks">
          <h3>Tweaks</h3>
          <div className="group">
            <label>Accent</label>
            <div className="swatches">
              {ACCENTS.map(a => (
                <button
                  key={a.val}
                  style={{ background: a.color }}
                  title={a.label}
                  aria-pressed={accent === a.val}
                  onClick={() => this.set('accent', a.val)}
                />
              ))}
            </div>
          </div>
          <div className="group">
            <label>Mode</label>
            <div className="seg">
              <button aria-pressed={mode === 'light'} onClick={() => this.set('mode', 'light')}>Light</button>
              <button aria-pressed={mode === 'dark'} onClick={() => this.set('mode', 'dark')}>Dark</button>
            </div>
          </div>
          <div className="group">
            <label>Type pairing</label>
            <div className="seg" style={{ flexWrap: 'wrap' }}>
              {TYPE_PAIRINGS.map(t => (
                <button
                  key={t.val}
                  aria-pressed={typePairing === t.val}
                  onClick={() => this.set('typePairing', t.val)}
                >{t.label}</button>
              ))}
            </div>
          </div>
          <div style={{
            marginTop: 8, paddingTop: 10, borderTop: '1px solid var(--rule)',
            fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '.08em',
            color: 'var(--ink-4)', textTransform: 'uppercase'
          }}>
            Press <b style={{ color: 'var(--ink-2)' }}>T</b> to toggle
          </div>
        </div>
      </div>
    );
  }
}

export default Shell;
