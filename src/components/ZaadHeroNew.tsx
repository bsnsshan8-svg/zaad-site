import { ArrowRight, Check, Play } from 'lucide-react';
import { BrandHome } from './BrandLogo';
import ZaadHome from './ZaadHome2';
import './zaad-hero-new.css';

export default function ZaadHeroNew() {
  return (
    <div className="zh-new">
      <header className="zh-nav">
        <BrandHome className="zh-brand" />
        <nav>
          <a href="#system">Solutions</a><a href="#industries">Who We Help</a><a href="#how-it-works">How It Works</a><a href="#results">Results</a><a href="/pricing">Pricing</a>
        </nav>
        <a href="/book" className="zh-nav-cta">Book a Strategy Call <ArrowRight size={14}/></a>
      </header>

      <section className="zh-hero">
        <div className="zh-stars" />
        <div className="zh-light zh-light-a" /><div className="zh-light zh-light-b" />
        <div className="zh-wrap">
          <div className="zh-copy">
            <div className="zh-kicker"><i /> A DIFFERENT KIND OF HEALTHCARE GROWTH ENGINE</div>
            <h1>APPLE KEEPS<br/><span>THE DOCTOR</span><br/>AWAY.</h1>
            <div className="zh-divider"><span>SO WHAT DOES ZAAD DO?</span><b /></div>
            <h2><strong>ZAAD</strong> BRINGS<br/><em>PATIENTS IN.</em></h2>
            <p>Turn attention into conversations, conversations into appointments, and empty slots into a practice that keeps growing.</p>
            <div className="zh-actions"><a href="/book" className="zh-primary">Book a Strategy Call <ArrowRight size={16}/></a><a href="#how-it-works" className="zh-secondary"><Play size={13} fill="currentColor"/> See How It Works</a></div>
            <div className="zh-proof"><span><Check size={12}/> Attract the right patients</span><span><Check size={12}/> Follow up automatically</span><span><Check size={12}/> Fill more appointments</span></div>
          </div>

          <div className="zh-scene" aria-label="Apple keeps the doctor away. ZAAD brings patients in.">
            <div className="zh-floor" />
            <div className="zh-portal">
              <div className="zh-portal-ring ring1"/><div className="zh-portal-ring ring2"/><div className="zh-portal-core"><span>ZAAD</span><small>PATIENT MAGNET</small></div>
            </div>
            <div className="zh-apple-card">
              <div className="zh-apple">🍎</div><div className="zh-card-kicker">THE OLD SAYING</div><strong>DOCTOR<br/>AWAY</strong><small>Apple → keeps the doctor away</small>
            </div>
            <div className="zh-arrow"><span>→</span><small>THE OPPOSITE<br/>IS THE POINT</small></div>
            <div className="zh-zaad-card">
              <div className="zh-z-top"><span>ZAAD</span><i>LIVE</i></div><strong>BRINGS<br/><b>PATIENTS IN.</b></strong>
              <div className="zh-patient-stream"><span>NEW PATIENT</span><i/><span>NEW PATIENT</span><i/><span>BOOKED</span></div>
            </div>
            <div className="zh-float zh-float-a"><b>+18</b><span>NEW INQUIRIES</span></div>
            <div className="zh-float zh-float-b"><b>07</b><span>APPOINTMENTS BOOKED</span></div>
            <div className="zh-orbit orbit1"/><div className="zh-orbit orbit2"/>
          </div>
        </div>
        <div className="zh-scroll">SCROLL TO SEE THE MACHINE <span>↓</span></div>
      </section>
      <div className="zh-rest"><ZaadHome /></div>
    </div>
  );
}
