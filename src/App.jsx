import React, { useMemo, useState } from 'react'
import heroImage from './assets/bg.jpeg'
import mobileImage from './assets/5.jpeg'
import routeImage1 from './assets/1.jpeg'
import routeImage2 from './assets/2.jpeg'
import routeImage3 from './assets/3.jpeg'
import routeImage4 from './assets/4.jpeg'
import journeyImage from './assets/17.jpeg'
import alertImage from './assets/7.jpeg'
import footerImage from './assets/10.jpeg'
import footerBackground from './assets/15.jpeg'
import emergencyImage from './assets/12.jpeg'
import emergencyStep1 from './assets/st1.jpeg'
import emergencyStep2 from './assets/st2.jpeg'
import emergencyStep3 from './assets/st3.jpeg'
import emergencyStep4 from './assets/st4.jpeg'
import featuresImage from './assets/9.jpeg'
import incidentCardImage from './assets/card1.jpeg'
import incidentCard2Image from './assets/card2.jpeg'
import incidentCard3Image from './assets/card3.jpeg'
import communityImage from './assets/16.jpeg'

const routeImages = [routeImage1, routeImage2, routeImage3, routeImage4]
const communityImages = [...routeImages].reverse()
const emergencyImages = [emergencyStep1, emergencyStep2, emergencyStep3, emergencyStep4]

const Icon = ({ name, size = 22 }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  const paths = {
    route: <><path d="M6 19c0-4 3-4 3-8s3-4 3-8"/><path d="m4 17 2 2 2-2"/><path d="m10 5 2-2 2 2"/><circle cx="18" cy="8" r="3"/><path d="M18 11v8"/></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    sos: <><rect x="3" y="3" width="18" height="18" rx="6"/><path d="M7 12h2m2 0h2m2 0h2"/><path d="M8 9v6m8-6v6"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    warning: <><path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></>,
    calendar: <><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
    megaphone: <><path d="m3 11 15-5v12L3 13v-2Z"/><path d="M18 10h2a2 2 0 0 1 0 4h-2M6 14l1.5 6h3L9 15"/></>,
    chat: <><path d="M20 11a7 7 0 0 1-7 7H8l-4 3v-5a7 7 0 1 1 16-5Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></>,
    report: <><path d="M4 4h16v14H8l-4 3V4Z"/><path d="M8 8h8M8 12h5"/></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  }
  return <svg {...common}>{paths[name]}</svg>
}

const Badge = ({ children, tone = 'green' }) => <span className={`badge ${tone}`}>{children}</span>

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    ['Home', '#home'],
    ['Features', '#features'],
    ['How it works', '#journey'],
    ['Real impact', '#impact'],
    ['About', '#about'],
  ]
  return <header className="nav-shell">
    <nav className="nav wrap">
      <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="RaahSafe home">
        <span className="brand-mark">⌁</span><span><strong>RaahSafe</strong><small>DI KHAN</small></span>
      </a>
      <button className="nav-toggle" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation"><Icon name={open ? 'close' : 'menu'} /></button>
      <div className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="btn btn-small btn-dark" href="#journey" onClick={() => setOpen(false)}>Explore demo <Icon name="arrow" size={17}/></a>
      </div>
    </nav>
  </header>
}

function PhoneMockup() {
  return <div className="phone-image-only" aria-label="RaahSafe mobile app">
    <img src={mobileImage} alt="RaahSafe mobile app" />
  </div>
}

function Hero() {
  return <section id="home" className="hero section-pad" style={{ '--hero-image': `url(${heroImage})` }}>
    <div className="hero-map-lines" aria-hidden="true" />
    <div className="wrap hero-grid">
      <div className="hero-copy reveal">
        <p className="eyebrow">A SAFER, MORE CONNECTED DERA ISMAIL KHAN</p>
        <h1>Navigate DI Khan with <em>Greater Awareness</em></h1>
        <p className="lede">Community reports, official alerts, risk-aware routing and emergency communication — brought together in one concept platform.</p>
        <div className="hero-actions"><a className="btn btn-dark" href="#journey">Explore how it works <Icon name="arrow" size={18}/></a><a className="btn btn-ghost" href="#features">View features</a></div>
        <div className="hero-pills">
          {[['pin','Risk-aware routes'],['bell','Official alerts'],['report','Community reports'],['sos','Emergency help']].map(([i,t]) => <span key={t}><Icon name={i} size={24}/>{t}</span>)}
        </div>
      </div>
    </div>
  </section>
}

function RoutePlanner() {
  const [mode, setMode] = useState('recommended')
  return <div className="route-demo">
    <div className="route-map">
      <div className="grid-lines"/>
      <span className="area restricted">Restricted area<br/><small>Official advisory</small></span>
      <span className="place place-a">A<br/><small>Cantt</small></span><span className="place place-b">B<br/><small>Bus Stand</small></span>
      <div className={`route-line safe ${mode === 'recommended' ? 'active' : ''}`}/>
      <div className={`route-line direct ${mode === 'direct' ? 'active' : ''}`}/>
      <div className="route-legend"><span><i className="line safe-line"/>Recommended</span><span><i className="line risk-line"/>Direct / affected</span></div>
    </div>
    <div className="route-controls">
      <div><span>From</span><strong>DI Khan Cantt</strong></div><div><span>To</span><strong>Bus Stand</strong></div>
      <div className="segmented"><button className={mode === 'recommended' ? 'on' : ''} onClick={() => setMode('recommended')}>Recommended</button><button className={mode === 'direct' ? 'on' : ''} onClick={() => setMode('direct')}>Direct</button></div>
      <div className={`route-result ${mode === 'recommended' ? 'good' : 'warn'}`}><Icon name={mode === 'recommended' ? 'check' : 'warning'} size={19}/><div><strong>{mode === 'recommended' ? 'Safer route selected' : 'Affected corridor ahead'}</strong><span>{mode === 'recommended' ? 'Avoids the official restricted zone.' : 'Prototype warns rather than silently rerouting.'}</span></div></div>
    </div>
  </div>
}

const comicStories = {
  route: [
    ['Plan the trip','A commuter enters source and destination.'],
    ['Context appears','The app detects an official restriction affecting the direct corridor.'],
    ['Compare choices','The user sees why a route is suggested, not just a line on a map.'],
    ['Travel informed','The user chooses the route with full context.'],
  ],
  alert: [
    ['Alert issued','A verified city advisory is published.'],
    ['Notification arrives','The app surfaces the alert without mixing it with community posts.'],
    ['Affected area shown','A map highlights where the restriction applies.'],
    ['Plans adjust','The user changes travel plans with authoritative information.'],
  ],
  report: [
    ['Notice something','A resident sees unusual or potentially unsafe activity.'],
    ['Create report','They open Community and tap “Create report”.'],
    ['Add context','They add location, a short description and optional media.'],
    ['Community sees it','The post appears in the local awareness feed.'],
  ],
  emergency: [
    ['Need help','The user opens Emergency Mode.'],
    ['Confirm sharing','A deliberate hold action reduces accidental triggers.'],
    ['Location shared','Trusted contacts receive a live-location session.'],
    ['Contacts respond','Recipients can see where the user is and coordinate help.'],
  ],
}

function ComicBook({ story = 'report' }) {
  const pages = comicStories[story]
  const [page, setPage] = useState(0)
  const art = ['city-street','phone-panel','map-panel','feed-panel','person-panel']
  return <div className="comic-book">
    <div className={`comic-page art-${art[page % art.length]}`} key={`${story}-${page}`}>
      {story !== 'emergency' && <div className="page-number">{String(page+1).padStart(2,'0')}</div>}
      {story === 'report' ? <img className="story-image" src={communityImages[page % communityImages.length]} alt={pages[page][0]} /> : story === 'emergency' && emergencyImages[page] ? <img className="story-image emergency-story-image" src={emergencyImages[page]} alt={pages[page][0]} /> : <div className="comic-art"><span className="comic-sun"/><span className="comic-building b1"/><span className="comic-building b2"/><span className="comic-person">●</span><span className="comic-phone">▣</span></div>}
      <div className={`comic-caption ${story === 'report' && page === 0 ? 'notice-caption' : ''}`}><small>STEP {page+1} OF {pages.length}</small><h4>{pages[page][0]}</h4><p>{pages[page][1]}</p></div>
      <span className="page-fold"/>
    </div>
    <div className="comic-nav"><button onClick={() => setPage(p => Math.max(0,p-1))} disabled={page===0}>← Previous</button><div>{pages.map((_,i)=><button key={i} className={`dot ${i===page?'on':''}`} onClick={()=>setPage(i)} aria-label={`Go to panel ${i+1}`}/>)}</div><button onClick={() => setPage(p => Math.min(pages.length-1,p+1))} disabled={page===pages.length-1}>Next →</button></div>
  </div>
}

function RoutingSection() {
  return <section id="journey" className="section section-pad soft-grid journey-section" style={{ '--journey-image': `url(${journeyImage})` }}><div className="wrap">
    <div className="section-head split-head"><div><p className="eyebrow">PLAN YOUR JOURNEY</p><h2>Smarter routes with clear context.</h2></div></div>
  </div></section>
}

function AlertsSection() {
  return <section className="section section-pad alert-section"><div className="wrap">
    <div className="section-head"><p className="eyebrow">STAY INFORMED</p><h2>Official alerts from trusted sources.</h2><p>Verified advisories are visually separated from community information so users can understand the source and weight of each message.</p></div>
    <div className="alert-pair">
      <div className="alert-reference"><img src={alertImage} alt="Official alerts preview" /></div>
      <article className="official-alert-card">
        <div className="official-alert-banner"><strong><Icon name="warning" size={24}/>Official alert</strong><span><Icon name="check" size={20}/>Verified</span></div>
        <div className="official-alert-content">
          <h3>Section 144 Imposed</h3>
          <div className="official-alert-meta"><span><Icon name="calendar" size={20}/>Oct 12, 2024</span><i aria-hidden="true">•</i><span>District Administration</span></div>
          <p>Section 144 has been imposed in selected areas of DI Khan due to the current security situation. Public gatherings are prohibited until further notice.</p>
          <button className="official-alert-action" type="button">View affected areas on map <Icon name="arrow" size={20}/></button>
        </div>
      </article>
      </div>
  </div></section>
}

function CommunitySection() {
  const [reports, setReports] = useState([
    { id: 1, title: 'Road partially blocked near market', place: 'Circular Road', time: '8 min ago', body: 'Traffic is slow; use caution and verify before changing plans.', helpful: 11 },
    { id: 2, title: 'Crowd gathering near intersection', place: 'Town Hall vicinity', time: '15 min ago', body: 'Community report only — no official restriction posted.', helpful: 7 },
  ])
  const [form, setForm] = useState({title:'',place:'',body:''})
  const submit = e => { e.preventDefault(); if (!form.title.trim()) return; setReports([{id:Date.now(), title:form.title, place:form.place || 'DI Khan', time:'Just now', body:form.body || 'Community-submitted awareness report.', helpful:0}, ...reports]); setForm({title:'',place:'',body:''}) }
  return <section className="section section-pad community-section" style={{ '--community-image': `url(${communityImage})` }}><div className="wrap">
    <div className="section-head split-head"><div><p className="eyebrow">COMMUNITY POWER</p><h2>From what you see to a more aware community.</h2></div></div>
    <div className="community-grid">
      <div><ComicBook story="report"/></div>
      <div className="community-ui">
        <form className="report-form" onSubmit={submit}><h3>Create a demo report</h3><input placeholder="Short title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/><input placeholder="Location" value={form.place} onChange={e=>setForm({...form,place:e.target.value})}/><textarea placeholder="What did you notice?" value={form.body} onChange={e=>setForm({...form,body:e.target.value})}/><button className="btn btn-dark" type="submit">Publish to demo feed</button></form>
        <div className="feed"><div className="feed-title"><strong>Community feed</strong><Badge tone="amber">Unverified</Badge></div>{reports.slice(0,3).map(r=><article className="report-card" key={r.id}><div><strong>{r.title}</strong><span>{r.place} • {r.time}</span></div><p>{r.body}</p><button onClick={()=>setReports(prev=>prev.map(x=>x.id===r.id?{...x,helpful:x.helpful+1}:x))}>Helpful · {r.helpful}</button></article>)}</div>
      </div>
    </div>
  </div></section>
}

function CompareSection() {
  return <section className="section compact compare-section" style={{ '--compare-image': `url(${footerImage})` }}><div className="wrap">
    <div className="compare-head"><p className="eyebrow">UNDERSTANDING THE DIFFERENCE</p><h2>Verified Alerts vs Community Reports</h2></div>
    <div className="compare-grid">
    <div className="compare-card verified"><div className="compare-icon"><Icon name="shield"/></div><div className="compare-content"><div className="compare-title"><h3>Verified Alerts</h3><Badge>From Official Sources</Badge></div><p>Issued by district administration and trusted authorities. These are verified, authoritative, and may impact routing.</p><ul><li>Verified by authorities</li><li>May affect suggested routes</li><li>Includes major restrictions, closures, emergencies</li></ul></div><div className="compare-art"><Icon name="megaphone" size={46}/></div></div>
    <div className="compare-card community"><div className="compare-icon"><Icon name="users"/></div><div className="compare-content"><div className="compare-title"><h3>Community Reports</h3><Badge tone="amber">From Citizens</Badge></div><p>Shared by people in DI Khan to increase awareness. These are informational and do not automatically change routes.</p><ul><li>Shared by community members</li><li>Help you understand on-ground situation</li><li>Do not automatically change suggested routes</li><li>You can view, react and add your own reports</li></ul></div><div className="compare-art"><Icon name="chat" size={46}/></div></div>
    </div>
  </div></section>
}

function EmergencySection() {
  const [phase, setPhase] = useState(0)
  const labels = ['Idle','Location sharing','Contacts alerted','Session active']
  return <section className="section section-pad emergency-section" style={{ '--emergency-image': `url(${emergencyImage})` }}><div className="wrap">
    <div className="section-head"><p className="eyebrow">WHEN IT MATTERS MOST</p><h2>Emergency help, just a deliberate action away.</h2><p>In this prototype, emergency mode demonstrates how a user could share a live-location session with trusted contacts.</p></div>
    <div className="emergency-grid">
      <div className="sos-console"><button className={`sos-button phase-${phase}`} onClick={()=>setPhase(p=>Math.min(3,p+1))}><span>SOS</span><small>{phase===0?'Tap to simulate':'Continue'}</small></button><strong>{labels[phase]}</strong><p>{phase===0?'Nothing is shared until the user triggers emergency mode.':phase===1?'Preparing a secure location-sharing session…':phase===2?'Father, Sister and Close Friend received the alert.':'Live-location sharing is active in this demo.'}</p><button className="text-btn" onClick={()=>setPhase(0)}>Reset demo</button></div>
      <div className="emergency-steps">{[['sos','Trigger emergency mode'],['pin','Share current location'],['users','Notify trusted contacts'],['check','Keep sharing until safe']].map(([i,t],idx)=><div key={t} className={idx<=phase?'done':''}><span><Icon name={i}/></span><div><small>STEP {idx+1}</small><strong>{t}</strong></div></div>)}</div>
      <ComicBook story="emergency"/>
    </div>
  </div></section>
}

const incidents = [
  {title:'Suicide blast targets DI Khan checkpost', date:'Sep 27, 2026', body:'A vehicle-borne explosion struck the Aman Mela police checkpost in Darazinda, killing 12 and injuring 30, with security forces blaming militant elements, as reported by Dawn.', image:incidentCardImage},
  {title:'Police training centre attacked in DI Khan', date:'Oct 11, 2025', body:'Militants stormed a police training school in DI Khan overnight, ramming an explosive-laden vehicle into the gate; six police personnel were martyred and five attackers killed, according to ISPR.', image:incidentCard2Image},
  {title:'Militants attack customs office in DI Khan', date:'Feb 18, 2026', body:'Unidentified militants attacked a Customs office and police along the CPEC route, killing a policeman and a customs official and injuring two others, while also opening fire on passenger buses and torching vehicles, according to news reports.', image:incidentCard3Image},
]

function ImpactSection() {
  return <section id="impact" className="section section-pad impact-section"><div className="wrap">
    <div className="section-head split-head"><div><p className="eyebrow">WHY AWARENESS MATTERS</p><h2>Real incidents, handled respectfully.</h2></div></div>
    <div className="incident-grid">{incidents.map((x,i)=><article className="incident-card" key={x.title}><div className={`incident-image img-${i+1}`} style={x.image ? {'--incident-image': `url(${x.image})`} : undefined}>{!x.image && <span>NEWS COVERAGE PLACEHOLDER</span>}</div><div className="incident-body">{x.source && <small className="incident-source">{x.source}</small>}<small>{x.date || 'DEMO INCIDENT CARD'}</small><h3>{x.title}</h3><p>{x.body}</p><div className="could-help"><strong>How the platform could help</strong><span><Icon name="route" size={15}/> Route awareness</span><span><Icon name="bell" size={15}/> Official alerts</span><span><Icon name="users" size={15}/> Community context</span><span><Icon name="pin" size={15}/> Location sharing</span></div></div></article>)}</div>
  </div></section>
}

function FeaturesSection() {
  const cards=[['route','Smart routing','See route context and verified disruptions.','route-feature'],['bell','Official alerts','Keep authoritative city notices distinct.','alert-feature'],['users','Community reports','Share local awareness with clear source labels.','community-feature'],['sos','Emergency help','Share a live-location session with trusted contacts.','emergency-feature']]
  return <section id="features" className="section compact features-section" style={{ '--features-image': `url(${featuresImage})` }}><div className="wrap"><div className="section-head"><p className="eyebrow">A COMPLETE ECOSYSTEM</p><h2>Four features, one city journey.</h2></div><div className="feature-grid">{cards.map(([i,h,p,tone])=><article className={`feature-card ${tone}`} key={h}><span><Icon name={i}/></span><h3>{h}</h3><p>{p}</p><a href="#journey">Explore <Icon name="arrow" size={15}/></a></article>)}</div></div></section>
}

function Footer() {
  return <footer id="about" className="footer section-pad" style={{ '--footer-image': `url(${footerBackground})` }}><div className="wrap footer-grid"><div><p className="eyebrow light">OUR CITY. AWARE PEOPLE. A SAFER TOMORROW.</p><h2>A city becomes safer when information reaches people before they need it.</h2><p>This is an interactive concept prototype for presentation purposes. The product flows shown above are illustrative, not an operational emergency service.</p><div className="hero-actions"><a className="btn btn-light" href="#home">Back to top</a><a className="btn btn-outline-light" href="#journey">Replay the journey</a></div></div></div><div className="wrap footer-bottom"><span>RaahSafe DI Khan — Concept Prototype</span><span>Built for clarity, city understanding and product storytelling.</span></div></footer>
}

export default function App() {
  return <>
    <Navbar/>
    <main>
      <Hero/>
      <RoutingSection/>
      <AlertsSection/>
      <CommunitySection/>
      <CompareSection/>
      <EmergencySection/>
      <ImpactSection/>
      <FeaturesSection/>
    </main>
    <Footer/>
  </>
}
