import { useEffect, useState } from 'react';
import { ArrowRight, Bot, CalendarCheck, Check, Calculator, MessageSquare, MousePointer2, PhoneCall, RefreshCw, Sparkles, Star, Target, Users, Zap } from 'lucide-react';
import './zaad-interactive.css';

const journey = [
  { label: 'ATTRACT', title: 'Put the right practice in front of the right patients.', text: 'Campaigns and landing pages are built around the services and patients your practice actually wants.', icon: Target },
  { label: 'CAPTURE', title: 'Turn every click, call, and form into a real opportunity.', text: 'New inquiries appear instantly instead of disappearing into separate inboxes and spreadsheets.', icon: MousePointer2 },
  { label: 'FOLLOW UP', title: 'Respond while patient intent is still high.', text: 'Automated SMS, email, and conversational follow-up keeps the patient moving without making your team chase.', icon: MessageSquare },
  { label: 'BOOK', title: 'Convert conversations into appointments.', text: 'Qualification, scheduling, reminders, and confirmations work together to make booking the natural next step.', icon: CalendarCheck },
  { label: 'GROW', title: 'Turn booked demand into a repeatable growth engine.', text: 'See which channels create qualified opportunities and keep improving the parts that produce appointments.', icon: Zap },
];

const replies = [
  ['Patient', 'Hi, I saw your ad and I’m interested in an appointment.'],
  ['ZAAD', 'Absolutely. I can help with that. Are you looking for an initial consultation or a follow-up?'],
  ['Patient', 'An initial consultation. Do you have anything this week?'],
  ['ZAAD', 'Yes — I can show the available times and help you choose one that works.'],
];

type CalcMode = 'acquisition' | 'missed' | 'reactivation' | 'reputation';

const calculatorModes = {
  acquisition: { label: 'Patient Acquisition', icon: Target, input: 'Monthly ad budget', min: 500, max: 15000, step: 250, defaultValue: 3000, unit: '$', helper: 'See how many new inquiries your acquisition engine could create.', resultLabel: 'EST. NEW INQUIRIES', calculate: (v: number) => v / 80 },
  missed: { label: 'Missed Call Recovery', icon: PhoneCall, input: 'Missed calls per month', min: 5, max: 200, step: 5, defaultValue: 40, unit: '', helper: 'See how many missed-call opportunities your automated follow-up could recover.', resultLabel: 'EST. RECOVERED APPOINTMENTS', calculate: (v: number) => v * 0.3 },
  reactivation: { label: 'Database Reactivation', icon: RefreshCw, input: 'Patients in your old database', min: 250, max: 20000, step: 250, defaultValue: 3000, unit: '', helper: 'See the potential appointment pool sitting inside your existing database.', resultLabel: 'EST. REACTIVATION OPPORTUNITIES', calculate: (v: number) => v * 0.04 },
  reputation: { label: '5-Star Reputation', icon: Star, input: 'Completed patients per month', min: 20, max: 500, step: 10, defaultValue: 100, unit: '', helper: 'See how many review requests your reputation funnel could generate.', resultLabel: 'EST. REVIEW REQUESTS', calculate: (v: number) => v * 0.7 },
} as const;

export default function ZaadInteractiveSections() {
  const [active, setActive] = useState(0);
  const [messageIndex, setMessageIndex] = useState(1);
  const [calcMode, setCalcMode] = useState<CalcMode>('acquisition');
  const [calcValue, setCalcValue] = useState(calculatorModes.acquisition.defaultValue);

  useEffect(() => { const timer = window.setInterval(() => setActive(v => (v + 1) % journey.length), 5000); return () => window.clearInterval(timer); }, []);

  const stage = journey[active]!;
  const StageIcon = stage.icon;
  const mode = calculatorModes[calcMode];
  const ModeIcon = mode.icon;
  const result = Math.round(mode.calculate(calcValue));
  const displayValue = mode.unit === '$' ? `$${calcValue.toLocaleString()}` : calcValue.toLocaleString();

  const selectMode = (next: CalcMode) => {
    setCalcMode(next);
    setCalcValue(calculatorModes[next].defaultValue);
  };

  return <div className="zi-wrap">
    <section className="zi-journey">
      <div className="zi-container">
        <div className="zi-heading">
          <div>
            <span className="zi-kicker"><Sparkles size={13}/> THE PATIENT ACQUISITION MACHINE</span>
            <h2>Watch the <em>journey</em> move.</h2>
            <p>Don't just show features. See what happens when every part of patient acquisition is connected.</p>
          </div>
          <div className="zi-live"><i/> LIVE SYSTEM <span>Auto-playing</span></div>
        </div>
        <div className="zi-machine">
          <div className="zi-steps">{journey.map((item, i) => { const StepIcon = item.icon; return <button key={item.label} className={active === i ? 'active' : ''} onClick={() => setActive(i)}><span className="zi-step-num">0{i + 1}</span><StepIcon size={17}/><b>{item.label}</b><ArrowRight size={14}/></button>; })}</div>
          <div className="zi-stage">
            <div className="zi-stage-glow"/><div className="zi-stage-core"><StageIcon size={30}/><span>{stage.label}</span></div><div className="zi-pulse p1"/><div className="zi-pulse p2"/>
            <div className="zi-stage-copy"><span>STAGE 0{active + 1}</span><h3>{stage.title}</h3><p>{stage.text}</p><div className="zi-tags"><span><Check size={11}/> Connected</span><span><Check size={11}/> Automated</span><span><Check size={11}/> Measurable</span></div></div>
          </div>
        </div>
      </div>
    </section>

    <section className="zi-cockpit">
      <div className="zi-container">
        <div className="zi-short-calc">
          <div className="zi-short-head">
            <div><span className="zi-kicker"><Calculator size={13}/> PATIENT GROWTH ESTIMATOR</span><h2>What could ZAAD <em>add?</em></h2><p>Pick one growth lever, move the slider, and see the potential opportunity. Illustrative planning only.</p></div>
            <div className="zi-short-result"><span>{mode.resultLabel}</span><strong>{result.toLocaleString()}</strong><small>potential per month</small></div>
          </div>
          <div className="zi-short-options">{(Object.keys(calculatorModes) as CalcMode[]).map(key => { const item = calculatorModes[key]; const Icon = item.icon; return <button key={key} className={calcMode === key ? 'active' : ''} onClick={() => selectMode(key)}><Icon size={16}/><span>{item.label}</span></button>; })}</div>
          <div className="zi-short-control">
            <div className="zi-short-control-top"><b>{mode.input}</b><strong>{displayValue}</strong></div>
            <input aria-label={mode.input} type="range" min={mode.min} max={mode.max} step={mode.step} value={calcValue} onChange={e => setCalcValue(Number(e.target.value))}/>
            <div className="zi-short-range"><span>{mode.unit === '$' ? `$${mode.min.toLocaleString()}` : mode.min.toLocaleString()}</span><span>{mode.unit === '$' ? `$${mode.max.toLocaleString()}` : mode.max.toLocaleString()}</span></div>
            <p>{mode.helper}</p>
          </div>
          <div className="zi-short-bottom"><div className="zi-mini-result"><ModeIcon size={18}/><div><span>{mode.resultLabel}</span><b>{result.toLocaleString()}</b></div></div><div className="zi-mini-flow"><span>INPUT</span><ArrowRight size={14}/><span>ZAAD</span><ArrowRight size={14}/><strong>OPPORTUNITY</strong></div></div>
        </div>

        <div className="zi-cockpit-grid" style={{ marginTop: 18 }}>
          <div className="zi-panel zi-conversation"><div className="zi-panel-top"><div><span className="zi-kicker">FOLLOW-UP SIMULATOR</span><h3>Every inquiry gets a <em>next step.</em></h3></div><span className="zi-online"><i/> AI ACTIVE</span></div><div className="zi-chat">{replies.slice(0, messageIndex + 1).map(([who, text], i) => <div className={`zi-message ${who === 'ZAAD' ? 'bot' : ''}`} key={i}><span>{who === 'ZAAD' ? <Bot size={12}/> : <Users size={12}/>}</span><p>{text}</p></div>)}</div><button className="zi-next" onClick={() => setMessageIndex(v => v >= replies.length - 1 ? 1 : v + 1)}><MessageSquare size={14}/> Simulate next message <ArrowRight size={14}/></button></div>
          <div className="zi-panel zi-model-summary"><span className="zi-kicker">THE ZAAD LOOP</span><h3>From attention to <em>appointment.</em></h3><div className="zi-summary-row"><span><Target size={13}/> Acquire</span><b>Bring them in</b></div><div className="zi-summary-row"><span><Bot size={13}/> Nurture</span><b>Keep them engaged</b></div><div className="zi-summary-row"><span><CalendarCheck size={13}/> Book</span><b>Get them scheduled</b></div><div className="zi-summary-row"><span><Star size={13}/> Grow</span><b>Keep the relationship</b></div><p>One connected system instead of disconnected marketing tools.</p></div>
        </div>
      </div>
    </section>

    <section className="zi-proof-band"><div className="zi-container zi-proof-inner"><div><span className="zi-kicker">CONNECTED BY DESIGN</span><h3>One machine. <em>Every patient signal.</em></h3></div><div className="zi-signal-row"><span><MousePointer2 size={14}/> AD</span><span><MessageSquare size={14}/> LEAD</span><span><PhoneCall size={14}/> CALL</span><span><Bot size={14}/> FOLLOW-UP</span><span><CalendarCheck size={14}/> BOOKED</span><ArrowRight size={18}/><strong>ZAAD</strong></div></div></section>
  </div>;
}
