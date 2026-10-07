import React, { useEffect, useState } from 'react';
import './index.css';
import ZaadHero from './components/ZaadHero';
import ZaadSystemCore from './components/ZaadSystemCore';
import ZaadNewSections from './components/ZaadNewSections';

const sectionOrder = ['problem', 'solutions', 'recovery', 'growth', 'platform', 'unibox', 'final'];

export default function App() {
  const [selection, setSelection] = useState<string[]>(sectionOrder);

  useEffect(() => {
    // Clear the old section-picker preference so previous browser state
    // cannot hide the redesigned sections.
    try {
      localStorage.removeItem('zaad-section-selection');
    } catch {}
  }, []);

  const hidden = sectionOrder.filter((id) => !selection.includes(id));

  return (
    <div id="top" className="app-shell">
      <ZaadHero />
      <ZaadSystemCore />
      <div className={hidden.map((id) => `hide-${id}`).join(' ')}>
        <ZaadNewSections />
      </div>
    </div>
  );
}
