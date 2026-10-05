import { useMemo, useState } from 'react';
import { ArrowRight, Bot, CalendarCheck, Check, MessageSquare, PhoneCall, RefreshCw, ShieldCheck, Smartphone, Star, Target, Users, Inbox, Megaphone } from 'lucide-react';
import './zaad-interactive.css';

type SystemKey = 'acquisition' | 'nurture' | 'missed' | 'reputation' | 'reactivation' | 'app';

const systems: Record<SystemKey, { number: string; title: string; short: string; body: string; icon: typeof Target; accent: string }> = {
  acquisition: { number: '01', title: 'Patient Acquisition', short: 'Bring the right patients in.', body: 'Paid ads, local SEO, landing pages, and offers work together to create a predictable stream of new inquiries.', icon: Target, accent: 'ATTRACT' },
  nurture: { number: '02', title: 'AI Nurture + Booking', short: 'Respond while intent is high.', body: 'Your patient gets an immediate response, qualification, follow-up, scheduling, reminders, and confirmation without your team chasing every lead.', icon: Bot, accent: 'CONVERT' },
  missed: { number: '03', title: 'Missed Call Recovery', short: 'Turn missed calls into conversations.', body: 'When a call is missed, the system reaches out automatically, starts the conversation, and helps the patient complete the booking journey.', icon: PhoneCall, accent: 'RECOVER' },
  reputation: { number: '04', title: '5-Star Reputation', short: 'Turn great experiences into trust.', body: 'A dedicated reputation funnel requests feedback at the right moment and helps happy patients become a stronger public signal for your practice.', icon: Star, accent: 'TRUST' },
  reactivation: { number: '05', title: 'Database Reactivation', short: 'Unlock patients you already paid to acquire.', body: 'We segment old patient and lead data, build timely offers, and send targeted messaging campaigns designed to restart conversations and appointments.', icon: RefreshCw, accent: 'REACTIVATE' },
  app: { number: '06', title: 'Doctor App + UniBox', short: 'See everything. Manage everything.', body: 'One mobile command center for leads, conversations, appointments, progress, and a unified inbox that brings your different patient routes together.', icon: Smartphone, accent: 'CONTROL' },
};

const modes = {
  acquisition: { label: 'New Patient Demand', icon: Target, question: 'How many new patient inquiries could your budget support?', min: 500, max: 10000, step: 250, initial: 3000, unit: '$', result: (v: number) => Math.round(v / 100), resultLabel: 'estimated inquiries' },
  missed: { label: 'Missed Call Recovery', icon: PhoneCall, question: 'How many missed calls could you recover?', min: 10, max: 150, step: 5, initial: 40, unit: '', result: (v: number) => Math.round(v * .25), resultLabel: 'potential recovered bookings' },
  reactivation: { label: 'Database Reactivation', icon: RefreshCw, question: 'How much of your old database could become active again?', min: 250, max: 10000, step: 250, initial: 3000, unit: '', result: (v: number) => Math.round(v * .04), resultLabel: 'potential appointment opportunities' },
  reputation: { label: 'Reputation Funnel', icon: Star, question: 'How many review requests could your practice generate?', min: 20, max: 500, step: 10, initial: 100, unit: '', result: (v: number) => Math.round(v * .7), resultLabel: 'review requests' },
} as const;

type ModeKey = keyof typeof modes;

export default function ZaadInteractiveSections() {
  const [activeSystem, setActiveSystem] = useState<SystemKey>('acquisition');
  const [mode, setMode] = useState<ModeKey>('acquisition');
  const [value, setValue] = useState(modes.acquisition.initial);
  const [chatStep, setChatStep] = useState(0);
  const [inboxTab, setInboxTab] = useState('All');
  const current = systems[activeSystem];
  const CurrentIcon = current.icon;
  const calc = modes[mode];
  const CalcIcon = calc.icon;
  const result = useMemo(() => calc.result(value), [calc, value]);
  const display = calc.unit === '$' ? `$${value.toLocaleString()}` : value.toLocaleString();

  const chooseMode = (key: ModeKey) => { setMode(key); setValue(modes[key].initial); };

  return <div className="zi-wrap">
    <section className="zi-journey" id="how-it-works">
      <div className="zi-container">
        <div className="zi-heading">
          <div><span className="zi-kicker">THE ZAAD PATIENT GROWTH SYSTEM</span><h2>One system. <em>Every patient touchpoint.</em></h2><p>ZAAD connects the parts that are usually scattered across agencies, CRMs, phone systems, review tools, and spreadsheets.</p></div>
          <div className="zi-live"><i/> CONNECTED SYSTEM <span>Always on</span></div>
        </div>
        <div className="zi-machine">
          <div className="zi-steps">{(Object.keys(systems) as SystemKey[]).map(key => { const item = systems[key]; const Icon = item.icon; return <button key={key} className={activeSystem === key ? 'active' : ''} onClick={() => setActiveSystem(key)}><span className="zi-step-num">{item.number}</span><Icon size={17}/><b>{item.title}</b><ArrowRight size={14}/></button>; })}</div>
          <div className="zi-stage">
            <div className="zi-stage-glow"/><div className="zi-stage-core"><CurrentIcon size={30}/><span>{current.accent}</span></div><div className="zi-pulse p1"/><div className="zi-pulse p2"/>
            <div className="zi-stage-copy"><span>{current.number} / ZAAD SYSTEM</span><h3>{current.title}</h3><p>{current.body}</p><div className="zi-tags"><span><Check size={11}/> Connected</span><span><Check size={11}/> Automated</span><span><Check size={11}/> Measurable</span></div></div>
          </div>
        </div>
      </div>
    </section>

    <section className="zi-outcomes" id="system">
      <div className="zi-container"><div className="zi-section-head"><span className="zi-kicker">WHAT THE SYSTEM DOES</span><h2>Built around <em>outcomes.</em></h2><p>Not six separate services. One connected patient-growth engine.</p></div>
        <div className="zi-outcome-grid">
          <article><Megaphone/><span>01</span><h3>Generate demand</h3><p>Ads, SEO, offers, and landing pages create new patient opportunities.</p></article>
          <article><MessageSquare/><span>02</span><h3>Nurture instantly</h3><p>Every inquiry gets a fast response and a clear next step.</p></article>
          <article><CalendarCheck/><span>03</span><h3>Book the appointment</h3><p>Qualification, scheduling, reminders, and confirmation move patients to the calendar.</p></article>
          <article><ShieldCheck/><span>04</span><h3>Protect the revenue</h3><p>Missed-call recovery, reputation, and reactivation keep more opportunities alive.</p></article>
        </div>
      </div>
    </section>

    <section className="zi-cockpit" id="results">
      <div className="zi-container">
        <div className="zi-short-calc">
          <div className="zi-calc-intro"><div><span className="zi-kicker">INTERACTIVE PLANNING TOOL</span><h2>See where <em>your growth</em> could come from.</h2><p>Choose one lever and answer one simple question. The estimate is illustrative — use it to understand the system, not as a guarantee.</p></div><div className="zi-calc-answer"><span>{calc.resultLabel}</span><strong>{result.toLocaleString()}</strong><small>potential opportunity</small></div></div>
          <div className="zi-calc-tabs">{(Object.keys(modes) as ModeKey[]).map(key => { const item = modes[key]; const Icon = item.icon; return <button key={key} className={mode === key ? 'active' : ''} onClick={() => chooseMode(key)}><Icon size={15}/>{item.label}</button>; })}</div>
          <div className="zi-calc-control"><div className="zi-calc-question"><b>{calc.question}</b><strong>{display}</strong></div><input type="range" min={calc.min} max={calc.max} step={calc.step} value={value} onChange={e => setValue(Number(e.target.value))}/><div className="zi-calc-range"><span>{calc.unit === '$' ? `$${calc.min.toLocaleString()}` : calc.min.toLocaleString()}</span><span>{calc.unit === '$' ? `$${calc.max.toLocaleString()}` : calc.max.toLocaleString()}</span></div></div>
          <div className="zi-calc-foot"><div><CalcIcon size={18}/><span>Your planning signal<b>{result.toLocaleString()} {calc.resultLabel}</b></span></div><span>Adjust the slider to explore</span></div>
        </div>
      </div>
    </section>

    <section className="zi-product" id="app">
      <div className="zi-container zi-product-grid">
        <div className="zi-product-copy"><span className="zi-kicker">THE COMMAND CENTER</span><h2>Your practice, <em>in one place.</em></h2><p>The doctor app gives you visibility without making you live inside a CRM. See leads, appointments, conversations, follow-up, and performance from your phone.</p><div className="zi-product-points"><span><Check/> Lead progress</span><span><Check/> Appointment pipeline</span><span><Check/> Campaign visibility</span><span><Check/> Unified conversations</span></div><a href="/book" className="zi-product-cta">See How The App Works <ArrowRight size={15}/></a></div>
        <div className="zi-phone-wrap"><div className="zi-phone"><div className="zi-phone-notch"/><div className="zi-phone-top"><span>ZAAD</span><i>LIVE</i></div><h3>Good morning, Doctor</h3><div className="zi-phone-stat"><small>NEW PATIENTS</small><strong>24</strong><b>this month</b></div><div className="zi-phone-stat"><small>APPOINTMENTS</small><strong>18</strong><b>booked by system</b></div><div className="zi-phone-unibox"><div><b>UniBox</b><small>4 active conversations</small></div><span><i/> New patient</span><span><i/> Missed call recovered</span><span><i/> Reactivation reply</span></div></div></div>
      </div>
    </section>

    <section className="zi-unibox"><div className="zi-container"><div className="zi-unibox-head"><div><span className="zi-kicker">UNIBOX</span><h2>Every route. <em>One inbox.</em></h2><p>Website chat, calls, campaigns, reactivation, and follow-up stop living in different places.</p></div><div className="zi-inbox-tabs">{['All','New','Follow-up','Booked'].map(t => <button key={t} className={inboxTab === t ? 'active' : ''} onClick={() => setInboxTab(t)}>{t}</button>)}</div></div><div className="zi-inbox"><div className="zi-inbox-list"><div className="zi-inbox-row active"><span className="zi-channel">WEB</span><div><b>New patient inquiry</b><small>I'd like to book a consultation...</small></div><strong>2m</strong></div><div className="zi-inbox-row"><span className="zi-channel call">CALL</span><div><b>Missed call recovery</b><small>Automated follow-up sent</small></div><strong>8m</strong></div><div className="zi-inbox-row"><span className="zi-channel re">REACT</span><div><b>Old patient replied</b><small>Interested in this month's offer</small></div><strong>12m</strong></div></div><div className="zi-inbox-detail"><span className="zi-detail-label">{inboxTab.toUpperCase()} / PATIENT CONVERSATION</span><h3>One conversation. <em>Clear next step.</em></h3><div className="zi-demo-chat"><p>Hi, I saw your offer and I'd like to know what's available.</p><p className="bot">Absolutely — I can help. Would you like me to show the next available appointment?</p></div><div className="zi-detail-status"><span><i/> Follow-up active</span><span><CalendarCheck size={12}/> Booking ready</span></div></div></div></div></section>

    <section className="zi-special" id="industries"><div className="zi-container"><div className="zi-section-head"><span className="zi-kicker">THE PARTS THAT KEEP COMPOUNDING</span><h2>Don't leave <em>easy revenue</em> behind.</h2></div><div className="zi-special-grid"><article><PhoneCall/><b>Missed calls</b><h3>Every missed call gets a second chance.</h3><p>Automated outreach starts the conversation and helps recover the appointment instead of letting the opportunity disappear.</p></article><article><Star/><b>Reputation</b><h3>Make your best patient experiences visible.</h3><p>A structured review funnel creates a repeatable way to ask for feedback and strengthen your public reputation.</p></article><article><RefreshCw/><b>Reactivation</b><h3>Your old database is not dead.</h3><p>Segment old data, launch timely offers, and restart conversations through targeted messaging campaigns.</p></article></div></div></section>

    <section className="zi-final"><div className="zi-final-glow"/><div className="zi-container zi-final-inner"><span className="zi-kicker">THE POINT OF ZAAD</span><h2>Stop buying tools.<br/><em>Build the system.</em></h2><p>Bring patients in. Nurture them. Book them. Recover the ones you miss. Reactivate the ones you forgot. Manage it all from one place.</p><a href="/book">Build Your Patient Growth System <ArrowRight size={16}/></a></div></section>
  </div>;
}
