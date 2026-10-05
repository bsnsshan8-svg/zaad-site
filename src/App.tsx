import React from 'react';
import './index.css';
import ZaadHero from './components/ZaadHero';
import ZaadSystemCore from './components/ZaadSystemCore';
import ZaadNewSections from './components/ZaadNewSections';

export default function App() {
  return (
    <div id="top" className="app-shell">
      <ZaadHero />
      <ZaadSystemCore />
      <ZaadNewSections />
    </div>
  );
}
