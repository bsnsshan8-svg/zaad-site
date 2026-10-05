import React, { useState } from 'react';

const modules = [
  { id: 'acquire', label: '01 / ACQUIRE', title: 'Bring the right patients in.', body: 'Paid ads, local search, landing pages and offers work together to create a steady stream of qualified enquiries.', flow: ['Ad / Search', 'New lead', 'Qualified enquiry', 'Appointment'] },
  { id: 'book', label: '02 / NURTURE + BOOK', title: 'Every lead gets a next step.', body: 'ZAAD responds while intent is high, qualifies the patient, follows up and moves the right conversations onto the calendar.', flow: ['New lead', 'AI response', 'Follow-up', 'Booked'] },
  { id: 'recover', label: '03 / RECOVER', title: 'Missed calls become recoverable.', body: 'If the clinic cannot answer, automated outreach starts the conversation and helps confirm the appointment instead of losing the patient.', flow: ['Missed call', 'Auto message', 'Conversation', 'Confirmed'] },
  { id: 'trust', label: '04 / REPUTATION', title: 'Turn great care into visible trust.', body: 'After the appointment, the reputation funnel asks for feedback and guides happy patients toward a review.', flow: ['Appointment', 'Feedback', 'Happy patient', '5-star review'] },
  { id: 'reactivate', label: '05 / REACTIVATE', title: 'Turn your old database back into demand.', body: 'We segment past patients and send relevant offers through messaging to bring the right people back into the clinic.', flow: ['Old database', 'Targeted offer', 'Reply', 'Reactivated'] },
];

export default function ZaadNewSections() {
  const [active, setActive] = useState('acquire');
  const [inbox, setInbox] = useState('All');
  const item = modules.find((m) => m.id === active)!;

  return (
    <main className="zaad-new">
      <section className="zaad-problem">
        <div className="zaad-wrap">
          <div className="zaad-kicker">THE GAP BETWEEN MARKETING AND THE APPOINTMENT</div>
          <div className="zaad-problem-head">
            <h2>Getting a lead is not the finish line.</h2>
            <p>ZAAD is built around everything that happens next — response, follow-up, booking, recovery, reputation and reactivation.</p>
          </div>
          <div className="zaad-leak-grid">
            {[
              ['01', 'Lead comes in', 'Slow response means intent disappears.'],
              ['02', 'Patient calls', 'A missed call can become a lost appointment.'],
              ['03', 'Patient arrives', 'Great care deserves a stronger review engine.'],
              ['04', 'Database ages', 'Past patients can become future appointments.'],
            ].map(([n, title, copy]) => (
              <div className="zaad-leak" key={n}><b>{n}</b><h3>{title}</h3><p>{copy}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="zaad-engine">
        <div className="zaad-wrap zaad-engine-grid">
          <div>
            <div className="zaad-kicker">THE PATIENT ACQUISITION ENGINE</div>
            <h2>From first click to <span>booked patient.</span></h2>
            <p>One connected journey replaces disconnected marketing, follow-up and booking processes.</p>
            <div className="zaad-steps">
              {['Attract', 'Capture', 'Nurture', 'Book', 'Grow'].map((step, i) => <div key={step}><b>0{i + 1}</b><span>{step}</span></div>)}
            </div>
          </div>
          <div className="zaad-engine-map">
            <div className="engine-core"><strong>ZAAD</strong><small>PATIENT FLOW</small></div>
            {['AD', 'LEAD', 'AI FOLLOW-UP', 'BOOKED', 'REVIEW'].map((x, i) => <div className={`engine-node e${i + 1}`} key={x}>{x}</div>)}
          </div>
        </div>
      </section>

      <section className="zaad-solutions" id="solutions">
        <div className="zaad-wrap">
          <div className="zaad-section-head"><div><div className="zaad-kicker">ONE SYSTEM. EVERY PATIENT TOUCHPOINT.</div><h2>What ZAAD does <span>after the lead.</span></h2></div><p>Click through the system. Each piece has one job: move more patients toward the clinic.</p></div>
          <div className="zaad-tabs">{modules.map((m) => <button className={active === m.id ? 'active' : ''} onClick={() => setActive(m.id)} key={m.id}>{m.label}</button>)}</div>
          <div className="zaad-module">
            <div className="zaad-module-copy"><small>{item.label}</small><h3>{item.title}</h3><p>{item.body}</p><a href="#book">Build this into your system →</a></div>
            <div className="zaad-module-flow"><div className="module-status"><span>ZAAD SYSTEM</span><b>CONNECTED</b></div>{item.flow.map((step, i) => <React.Fragment key={step}><div className={`module-node ${i === item.flow.length - 1 ? 'done' : ''}`}><small>0{i + 1}</small><strong>{step}</strong></div>{i < item.flow.length - 1 && <div className="module-arrow">→</div>}</React.Fragment>)}</div>
          </div>
        </div>
      </section>

      <section className="zaad-recovery">
        <div className="zaad-wrap recovery-grid">
          <div><div className="zaad-kicker">MISSED CALL RECOVERY</div><h2>They called.<br /><span>You missed it.</span><br />ZAAD keeps the conversation alive.</h2><p>The system reaches out automatically, starts the conversation and helps move the patient back toward a confirmed appointment.</p></div>
          <div className="recovery-card"><div className="recovery-top"><span>CALL RECOVERY</span><b>LIVE</b></div><div className="recovery-event"><small>11:42 AM</small><strong>Incoming call</strong><em>Missed</em></div><div className="recovery-arrow">↓</div><div className="recovery-event message"><small>11:43 AM · AUTOMATED</small><strong>“Sorry we missed you. How can we help?”</strong><em>Message sent</em></div><div className="recovery-arrow">↓</div><div className="recovery-event confirmed"><small>RECOVERED</small><strong>Appointment confirmed</strong><em>Calendar updated</em></div></div>
        </div>
      </section>

      <section className="zaad-growth">
        <div className="zaad-wrap growth-grid">
          <div><div className="zaad-kicker">GROW THE VALUE OF EVERY PATIENT</div><h2>Reputation + reactivation.</h2><p>Two systems keep working after the original acquisition: turn great experiences into reviews, and turn old patient data into new conversations.</p><div className="growth-flow"><span>Patient</span><i>→</i><span>Feedback</span><i>→</i><span>5★ Review</span></div><div className="growth-flow"><span>Old database</span><i>→</i><span>Offer</span><i>→</i><span>New appointment</span></div></div>
          <div className="growth-dashboard"><div className="dashboard-title"><span>GROWTH ACTIVITY</span><b>THIS MONTH</b></div><div className="dashboard-card"><small>REPUTATION</small><strong>4.9 ★</strong><span>Review momentum</span><div className="meter"><i style={{ width: '92%' }} /></div></div><div className="dashboard-card"><small>REACTIVATION</small><strong>38</strong><span>appointments recovered from past patients</span><div className="reactivation-bars"><i/><i/><i/><i/><i/></div></div></div>
        </div>
      </section>

      <section className="zaad-platform" id="platform">
        <div className="zaad-wrap platform-grid">
          <div><div className="zaad-kicker">ONE PLACE TO RUN THE SYSTEM</div><h2>The doctor's command center.</h2><p>See leads, conversations, appointments and campaign activity from the mobile app — while UniBox brings every route into one inbox.</p><div className="platform-points"><span>✓ Live leads</span><span>✓ Appointments</span><span>✓ Campaigns</span><span>✓ UniBox</span></div></div>
          <div className="phone-shell"><div className="phone-head"><b>ZAAD</b><span>●</span></div><h3>Today <small>Monday</small></h3><div className="phone-number"><strong>24</strong><span>active leads</span><em>+18%</em></div><div className="phone-bars"><i/><i/><i/><i/><i/><i/></div><div className="phone-inbox"><small>UNIBOX</small>{['Website Chat', 'Missed Call', 'Reactivation'].map((x) => <button key={x} onClick={() => setInbox(x)} className={inbox === x ? 'selected' : ''}><span>{x}</span><b>{x === inbox ? 'Open' : 'View'}</b></button>)}</div></div>
        </div>
      </section>

      <section className="zaad-unibox">
        <div className="zaad-wrap"><div className="zaad-kicker">UNIBOX</div><h2>Every patient conversation.<br /><span>One place.</span></h2><p>Website chat, calls and reactivation replies stop living in separate tabs.</p><div className="unibox-ui"><aside>{['All', 'Website Chat', 'Missed Calls', 'Reactivation'].map((x) => <button className={inbox === x ? 'selected' : ''} onClick={() => setInbox(x)} key={x}>{x}<b>{x === 'All' ? 24 : x === 'Website Chat' ? 8 : x === 'Missed Calls' ? 5 : 11}</b></button>)}</aside><div className="conversation"><div className="conversation-head"><strong>{inbox === 'All' ? 'All conversations' : inbox}</strong><span>QUALIFIED</span></div><div className="msg patient">Hi, I’d like to book an appointment.</div><div className="msg agent">Absolutely — I can help with that. What day works best?</div><div className="msg patient">Tomorrow afternoon.</div><div className="conversation-status">● Agent + automation working together</div></div></div></div>
      </section>

      <section className="zaad-final" id="book"><div className="zaad-wrap"><div className="zaad-kicker">THE POINT OF THE SYSTEM</div><h2>More patients in.<br /><span>Less leakage between.</span></h2><p>ZAAD connects acquisition, nurture, booking, missed-call recovery, reputation, reactivation and visibility into one patient growth system.</p><a href="/book">Book a Strategy Call <b>→</b></a></div></section>
    </main>
  );
}
