import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useMemo, useState } from 'react';
import ZaadNewSections from '../components/ZaadNewSections';
import ZaadInteractiveSections from '../components/ZaadInteractiveSections';
import ZaadExtendedSections from '../components/ZaadExtendedSections';

const OPTIONS = [
  { id: 'problem', name: 'Patient Flow Problem', group: 'Strategy', description: 'Dark editorial problem section that explains why clinics lose patients after the lead arrives.', color: 'dark' },
  { id: 'engine', name: 'Patient Acquisition Engine', group: 'System', description: 'Visual journey from ad and search through lead, AI follow-up, booking and review.', color: 'blue' },
  { id: 'capabilities', name: 'Interactive Capabilities', group: 'System', description: 'Tabbed experience for Acquisition, Nurture + Booking, Missed Calls, Reputation and Reactivation.', color: 'light' },
  { id: 'recovery', name: 'Missed Call Recovery', group: 'Recovery', description: 'Conversation-style recovery flow showing the automated response after a missed call.', color: 'dark' },
  { id: 'growth', name: 'Reputation + Reactivation', group: 'Growth', description: 'Combines the 5-star reputation funnel with database reactivation in one growth section.', color: 'light' },
  { id: 'platform', name: 'Doctor Command Center', group: 'Product', description: 'Mobile-app presentation for leads, appointments, campaigns and UniBox.', color: 'dark' },
  { id: 'unibox', name: 'UniBox', group: 'Product', description: 'Unified conversation interface for website chat, missed calls and reactivation.', color: 'light' },
  { id: 'final', name: 'Final CTA', group: 'Conversion', description: 'Short closing statement that brings the whole ZAAD patient-growth story together.', color: 'dark' },
];

const legacyOptions = [
  { id: 'interactive', name: 'Interactive Sections — earlier version', component: ZaadInteractiveSections },
  { id: 'extended', name: 'Extended Sections — earlier version', component: ZaadExtendedSections },
];

function Preview({ id }: { id: string }) {
  if (id === 'legacy-interactive') return <div className="section-preview-frame"><ZaadInteractiveSections /></div>;
  if (id === 'legacy-extended') return <div className="section-preview-frame"><ZaadExtendedSections /></div>;
  const content = {
    problem: <div className="mock dark"><span>THE GAP BETWEEN MARKETING AND THE APPOINTMENT</span><h3>Getting a lead is not the finish line.</h3><div className="mock-grid"><b>01<br/><small>Lead comes in</small></b><b>02<br/><small>Patient calls</small></b><b>03<br/><small>Patient arrives</small></b><b>04<br/><small>Database ages</small></b></div></div>,
    engine: <div className="mock blue"><span>THE PATIENT ACQUISITION ENGINE</span><h3>From first click to <em>booked patient.</em></h3><div className="flow">AD <i>→</i> LEAD <i>→</i> AI FOLLOW-UP <i>→</i> BOOKED <i>→</i> REVIEW</div></div>,
    capabilities: <div className="mock light"><span>ONE SYSTEM. EVERY PATIENT TOUCHPOINT.</span><h3>What ZAAD does <em>after the lead.</em></h3><div className="pills">ACQUIRE · NURTURE + BOOK · RECOVER · REPUTATION · REACTIVATE</div></div>,
    recovery: <div className="mock dark"><span>MISSED CALL RECOVERY</span><h3>They called. <em>You missed it.</em></h3><div className="chat"><b>11:42 Incoming call — Missed</b><b>11:43 Automated message sent</b><b>Appointment confirmed</b></div></div>,
    growth: <div className="mock light"><span>GROW THE VALUE OF EVERY PATIENT</span><h3>Reputation + <em>reactivation.</em></h3><div className="stats"><b>4.9 ★<small>Review momentum</small></b><b>38<small>Recovered appointments</small></b></div></div>,
    platform: <div className="mock dark"><span>ONE PLACE TO RUN THE SYSTEM</span><h3>The doctor's <em>command center.</em></h3><div className="phone">ZAAD · 24 active leads · UniBox · Appointments</div></div>,
    unibox: <div className="mock light"><span>UNIBOX</span><h3>Every patient conversation. <em>One place.</em></h3><div className="inbox">All 24 · Website Chat 8 · Missed Calls 5 · Reactivation 11</div></div>,
    final: <div className="mock dark"><span>THE POINT OF THE SYSTEM</span><h3>More patients in. <em>Less leakage between.</em></h3><button>BOOK A STRATEGY CALL →</button></div>,
  } as Record<string, React.ReactNode>;
  return <div className="section-preview-frame">{content[id]}</div>;
}

function SectionLibrary() {
  const [selected, setSelected] = useState<string[]>(['problem', 'engine', 'capabilities', 'recovery', 'growth', 'platform', 'unibox', 'final']);
  const [active, setActive] = useState('problem');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('zaad-section-selection');
      if (raw) setSelected(JSON.parse(raw));
    } catch {}
  }, []);

  const activeIndex = useMemo(() => Math.max(0, OPTIONS.findIndex((x) => x.id === active)), [active]);

  const toggle = (id: string) => {
    setSaved(false);
    setSelected((current) => current.includes(id) ? current.filter((x) => x !== id) : [...current, id]);
  };

  const save = () => {
    localStorage.setItem('zaad-section-selection', JSON.stringify(selected));
    setSaved(true);
  };

  const reset = () => {
    setSelected(OPTIONS.map((x) => x.id));
    setSaved(false);
  };

  return <main className="section-library">
    <header className="library-header">
      <div><div className="library-kicker">ZAAD SECTION LIBRARY</div><h1>Build the page you actually want.</h1><p>Pick the sections you like. Nothing gets deleted while you're deciding. Your selection is saved in this browser.</p></div>
      <div className="library-actions"><b>{selected.length} selected</b><button onClick={reset}>Reset</button><button className="primary" onClick={save}>{saved ? 'Saved ✓' : 'Save Selection'}</button></div>
    </header>

    <div className="library-layout">
      <aside className="library-sidebar">
        <div className="sidebar-title">SECTIONS</div>
        {OPTIONS.map((option, index) => <button key={option.id} className={`section-option ${active === option.id ? 'active' : ''}`} onClick={() => setActive(option.id)}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{option.name}</strong><small>{option.group}</small></div><i>{selected.includes(option.id) ? '✓' : '+'}</i></button>)}
        <div className="sidebar-title legacy-title">EARLIER VERSIONS</div>
        {legacyOptions.map((option) => <button key={option.id} className="section-option legacy" onClick={() => setActive(`legacy-${option.id}`)}><span>↳</span><div><strong>{option.name}</strong><small>Preview only</small></div></button>)}
      </aside>

      <section className="library-main">
        {active.startsWith('legacy-') ? <Preview id={active} /> : <>
          <div className="preview-meta"><div><span>PREVIEW</span><h2>{OPTIONS[activeIndex]?.name}</h2><p>{OPTIONS[activeIndex]?.description}</p></div><button className={selected.includes(active) ? 'remove' : 'add'} onClick={() => toggle(active)}>{selected.includes(active) ? '✓ Included' : '+ Add Section'}</button></div>
          <Preview id={active} />
        </>}
        <div className="library-note"><strong>Important:</strong> Hero and The ZAAD System stay locked at the top. This library only controls what comes after them.</div>
      </section>
    </div>
  </main>;
}

export const Route = createFileRoute('/sections')({ component: SectionLibrary });
