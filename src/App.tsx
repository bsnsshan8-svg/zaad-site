import React from 'react';
import './index.css';
import ZaadHomeFixed from './components/ZaadHomeFixed';
import ZaadSystemPage from './components/ZaadSystemPage';
import ZaadNewSections from './components/ZaadNewSections';

export default function App() {
  return (
    <div id="top" className="app-shell">
      <ZaadHomeFixed />
      <ZaadSystemPage />
      <ZaadNewSections />
    </div>
  );
}
