import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Menu, X } from 'lucide-react';
import { BrandLogo, BrandHome } from './BrandLogo';

function Button({ children, href = '/book', secondary = false }: { children: React.ReactNode; href?: string; secondary?: boolean }) {
  return <a href={href} className={`zaad-btn${secondary ? ' zaad-btn-secondary' : ''}`}>{children}<ArrowRight size={16} /></a>;
}

function FlowVisual() {
  const nodes = [['AD', 'Demand'], ['LEAD', 'Captured'], ['AI', 'Follow-up'], ['BOOKED', 'Appointment'], ['REVIEW', 'Trust']];
  return <div className="flow-visual"><div className="flow-grid" /><div className="flow-orbit orbit-a" /><div className="flow-orbit orbit-b" /><div className="apple-core"><BrandLogo compact /></div>{nodes.map(([title, text], i) => <div className={`flow-node node-${String.fromCharCode(97 + i)}`} key={title}><b>{title}</b><small>{text}</small></div>)}<div className="flow-line line-1" /><div className="flow-line line-2" /><div className="flow-line line-3" /><div className="flow-line line-4" /><div className="flow-badge">● Patient acquisition active</div></div>;
}

export default function ZaadHero() {
  const [open, setOpen] = useState(false);
  return <>
    <header className="zaad-nav"><div className="container nav-inner"><BrandHome /><nav><a href="#system">The System</a><a href="#solutions">Solutions</a><a href="#platform">Platform</a><a href="#book">Book a Call</a></nav><div className="nav-actions"><a className="nav-secondary" href="#solutions">See How ZAAD Works</a><Button>Book a Strategy Call</Button></div><button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Open menu">{open ? <X /> : <Menu />}</button></div>{open && <div className="mobile-drawer"><a href="#system">The System</a><a href="#solutions">Solutions</a><a href="#platform">Platform</a><a href="#book">Book a Strategy Call</a></div>}</header>
    <section className="hero reference-hero"><div className="hero-glow glow-one" /><div className="hero-glow glow-two" /><div className="container hero-grid"><div className="hero-copy"><div className="eyebrow"><i /> PATIENT ACQUISITION FOR HEALTHCARE PRACTICES</div><h1>An Apple a Day Keeps the Doctor Away.</h1><h2>ZAAD Does the Opposite — <span>It Brings Patients In.</span></h2><p>We build the system behind patient growth — bringing in qualified enquiries, nurturing them, booking appointments and keeping the patient relationship moving.</p><div className="hero-actions"><Button>Book a Strategy Call</Button><Button secondary href="#system">See The ZAAD System</Button></div><div className="hero-checks">{['Attract the right patients', 'Respond instantly', 'Book automatically', 'Grow from every patient'].map(item => <span key={item}><Check size={14} />{item}</span>)}</div></div><FlowVisual /></div></section>
  </>;
}
