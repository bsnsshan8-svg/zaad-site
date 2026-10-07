import React, { useEffect, useState } from 'react';
import './index.css';
import ZaadHero from './components/ZaadHero';
import ZaadSystemCore from './components/ZaadSystemCore';
import ZaadNewSections from './components/ZaadNewSections';

const sectionOrder = ['problem', 'recovery', 'growth', 'platform', 'unibox', 'final'];

export default function App() {
  const [selection, setSelection] = useState<string[]>(sectionOrder);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('zaad-section-selection');
      if (raw) setSelection(JSON.parse(raw));
    } catch {}
  }, []);

  const hidden = sectionOrder.filter((id) => !selection.includes(id));

  return (
    <div id="top" className="app-shell">
      <ZaadHero />
      <ZaadSystemCore />
      <div className={`compact-home ${hidden.map((id) => `hide-${id}`).join(' ')}`}>
        <ZaadNewSections />
      </div>
    </div>
  );
}
