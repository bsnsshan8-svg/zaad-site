import { useEffect, useState } from 'react';
import { ArrowRight, Bot, CalendarCheck, Check, MessageSquare, MousePointer2, PhoneCall, Sparkles, Target, Users, Zap } from 'lucide-react';
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

export default function ZaadInteractiveSections() {
  const [active, setActive] = useState(0);
  const [metricMode, setMetricMode] = useState<'flow' | 'speed' | 'bookings'>('flow');
  const [messageIndex, setMessageIndex] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((v) => (v + 1) % journey.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  const stage = journey[active];
  const Icon = stage.icon;
  const metric = metricMode === 'flow' ? ['1,284', 'PATIENT SIGNALS', '+18.6%'] : metricMode === 'speed' ? ['42 sec', 'AVG. RESPONSE', '−31%'] : ['184', 'BOOKING INTENTS', '+24.2%'];

  return (
    <div className="zi-wrap">
      <section className="zi-journey">
        <div className="zi-container">
          <div className="zi-heading">
            <div><span className="zi-kicker"><Sparkles size={13}/> THE PATIENT ACQUISITION MACHINE</span><h2>Watch the <em>journey</em> move.</h2><p>Don't just show features. See what happens when every part of patient acquisition is connected.</p></div>
            <div className="zi-live"><i/> LIVE SYSTEM <span>Auto-playing</span></div>
          </div>
          <div className="zi-machine">
            <div className="zi-steps">
              {journey.map((item, i) => { const StepIcon = item.icon; return <button key={item.label} className={active === i ? 'active' : ''} onClick={() => setActive(i)}><span className="zi-step-num">0{i + 1}</span><StepIcon size={17}/><b>{item.label}</b><ArrowRight size={14}/></button>; })}
            </div>
            <div className="zi-stage">
              <div className="zi-stage-glow" />
              <div className="zi-stage-core"><Icon size={30}/><span>{stage.label}</span></div>
              <div className="zi-pulse p1"/><div className="zi-pulse p2"/>
              <div className="zi-stage-copy"><span>STAGE 0{active + 1}</span><h3>{stage.title}</h3><p>{stage.text}</p><div className="zi-tags"><span><Check size={11}/> Connected</span><span><Check size={11}/> Automated</span><span><Check size={11}/> Measurable</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="zi-cockpit">
        <div className="zi-container">
          <div className="zi-cockpit-grid">
            <div className="zi-panel zi-chart-panel">
              <div className="zi-panel-top"><div><span className="zi-kicker">GROWTH COCKPIT</span><h3>See the system <em>working.</em></h3></div><div className="zi-tabs">{(['flow','speed','bookings'] as const).map((x) => <button key={x} className={metricMode === x ? 'active' : ''} onClick={() => setMetricMode(x)}>{x}</button>)}</div></div>
              <div className="zi-metric"><strong>{metric[0]}</strong><span>{metric[1]}</span><b>{metric[2]}</b></div>
              <div className="zi-bars">{[36,48,42,67,58,78,71,91,83,96,88,100].map((h, i) => <i key={i} style={{ height: `${Math.max(18, h * (metricMode === 'speed' ? .82 : metricMode === 'bookings' ? 1.08 : 1))}%` }} />)}</div>
              <div className="zi-axis"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div>
            </div>
            <div className="zi-panel zi-conversation">
              <div className="zi-panel-top"><div><span className="zi-kicker">FOLLOW-UP SIMULATOR</span><h3>Every inquiry gets a <em>next step.</em></h3></div><span className="zi-online"><i/> AI ACTIVE</span></div>
              <div className="zi-chat">
                {replies.slice(0, messageIndex + 1).map(([who, text], i) => <div className={`zi-message ${who === 'ZAAD' ? 'bot' : ''}`} key={i}><span>{who === 'ZAAD' ? <Bot size={12}/> : <Users size={12}/>}</span><p>{text}</p></div>)}
              </div>
              <button className="zi-next" onClick={() => setMessageIndex((v) => v >= replies.length - 1 ? 1 : v + 1)}><MessageSquare size={14}/> Simulate next message <ArrowRight size={14}/></button>
            </div>
          </div>
        </div>
      </section>

      <section className="zi-proof-band"><div className="zi-container zi-proof-inner"><div><span className="zi-kicker">CONNECTED BY DESIGN</span><h3>One machine. <em>Every patient signal.</em></h3></div><div className="zi-signal-row"><span><MousePointer2 size={14}/> AD</span><span><MessageSquare size={14}/> LEAD</span><span><PhoneCall size={14}/> CALL</span><span><Bot size={14}/> FOLLOW-UP</span><span><CalendarCheck size={14}/> BOOKED</span><ArrowRight size={18}/><strong>ZAAD</strong></div></div></section>
    </div>
  );
}
