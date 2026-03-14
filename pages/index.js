import Head from 'next/head'

const CALENDLY_URL = 'https://calendly.com/claude-aurumpms'
const APP_URL = 'https://app.aurumpms.com'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aurum PMS — Hotel Management Software for Ghana</title>
        <meta name="description" content="Modern hotel management software built for independent hotels in Ghana." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Josefin+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <div className="site">
        <nav className="nav">
          <div className="nav-inner">
            <div className="logo"><span className="logo-diamond">◆</span><span className="logo-text">Aurum</span></div>
            <a href={APP_URL} className="nav-login">Login →</a>
          </div>
        </nav>
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Hotel Management Software</p>
            <h1 className="hero-title">Aurum PMS</h1>
            <p className="hero-sub">Bookings, rooms, payments, and daily reports<br />from one clean dashboard.</p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Walkthrough</a>
          </div>
        </section>
        <section className="preview">
          <div className="container">
            <h2 className="section-title">See it in action</h2>
            <div className="screenshots">
              <div className="screenshot-card">
                <div className="screenshot-img">
                  <div className="mock-ui">
                    <div className="mock-header"><span className="mock-dot"></span><span className="mock-label">NEW BOOKING</span></div>
                    <div className="mock-row"><span>Check-in</span><span className="mock-val">06/03/2026</span></div>
                    <div className="mock-row"><span>Check-out</span><span className="mock-val">08/03/2026</span></div>
                    <div className="mock-row"><span>Room</span><span className="mock-val accent">8 available</span></div>
                    <div className="mock-btn">CREATE BOOKING</div>
                  </div>
                </div>
                <p className="screenshot-label">Guest Booking</p>
              </div>
              <div className="screenshot-card featured">
                <div className="screenshot-img">
                  <div className="mock-ui">
                    <div className="mock-header"><span className="mock-dot"></span><span className="mock-label">DASHBOARD</span></div>
                    <div className="mock-stats">
                      <div className="mock-stat"><div className="stat-val">5/12</div><div className="stat-label">Rooms Occupied</div></div>
                      <div className="mock-stat"><div className="stat-val">3</div><div className="stat-label">In-house</div></div>
                      <div className="mock-stat"><div className="stat-val accent-gold">GHS 710</div><div className="stat-label">Collected Today</div></div>
                    </div>
                    <div className="mock-actions">
                      <div className="mock-action">Check In</div>
                      <div className="mock-action">Check Out</div>
                      <div className="mock-action">New Booking</div>
                      <div className="mock-action">Daily Report</div>
                    </div>
                  </div>
                </div>
                <p className="screenshot-label">Owner Dashboard</p>
              </div>
              <div className="screenshot-card">
                <div className="screenshot-img">
                  <div className="mock-ui">
                    <div className="mock-header"><span className="mock-dot"></span><span className="mock-label">ROOMS</span></div>
                    <div className="mock-room-row"><span className="room-num">Room 101</span><span className="room-status occupied">Occupied</span></div>
                    <div className="mock-room-row"><span className="room-num">Room 102</span><span className="room-status available">Available</span></div>
                    <div className="mock-room-row"><span className="room-num">Room 103</span><span className="room-status cleaning">Cleaning</span></div>
                    <div className="mock-room-row"><span className="room-num">Room 201</span><span className="room-status occupied">Occupied</span></div>
                  </div>
                </div>
                <p className="screenshot-label">Room Board</p>
              </div>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <h2 className="section-title">Everything your front desk needs</h2>
            <div className="features-grid">
              <div className="feature"><div className="feature-icon">🏨</div><h3>Room Management</h3><p>Track availability, housekeeping status, and room assignments in real time.</p></div>
              <div className="feature"><div className="feature-icon">📋</div><h3>Guest Bookings</h3><p>Create, modify, and manage reservations with check-in and check-out built in.</p></div>
              <div className="feature"><div className="feature-icon">👥</div><h3>Staff Permissions</h3><p>Admin and staff roles with separate access levels for secure operations.</p></div>
              <div className="feature"><div className="feature-icon">📊</div><h3>Daily Revenue Reporting</h3><p>End-of-day reports showing collections, occupancy, and outstanding balances in GHS.</p></div>
            </div>
          </div>
        </section>
        <section className="cta">
          <div className="container">
            <h2>Ready to see it in your hotel?</h2>
            <p>We'll walk you through everything in 20 minutes.</p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Walkthrough</a>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="footer-inner">
              <div className="logo"><span className="logo-diamond">◆</span><span className="logo-text">Aurum</span></div>
              <div className="footer-links">
                <a href={APP_URL}>Login to your hotel</a>
                <a href="mailto:evans@aurumpms.com">Contact</a>
              </div>
            </div>
            <p className="footer-copy">© 2026 Aurum PMS. Built for independent hotels in Ghana.</p>
          </div>
        </footer>
      </div>
      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0e0c0a; color: #e8dcc8; font-family: 'Josefin Sans', sans-serif; -webkit-font-smoothing: antialiased; }
        a { color: inherit; text-decoration: none; }
      `}</style>
      <style jsx>{`
        .site { min-height: 100vh; }
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(14,12,10,0.92); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(201,169,110,0.15); }
        .nav-inner { max-width: 1100px; margin: 0 auto; padding: 0 2rem; height: 64px; display: flex; align-items: center; justify-content: space-between; }
        .logo { display: flex; align-items: center; gap: 0.5rem; }
        .logo-diamond { color: #c9a96e; font-size: 1rem; }
        .logo-text { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 500; letter-spacing: 0.1em; color: #e8dcc8; }
        .nav-login { font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; color: #c9a96e; border: 1px solid rgba(201,169,110,0.4); padding: 0.45rem 1rem; border-radius: 2px; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }
        .hero { padding: 180px 0 120px; text-align: center; background: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,169,110,0.07) 0%, transparent 70%); }
        .eyebrow { font-size: 0.7rem; letter-spacing: 0.25em; text-transform: uppercase; color: #c9a96e; margin-bottom: 1.5rem; }
        .hero-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(3.5rem, 8vw, 6rem); font-weight: 300; color: #e8dcc8; line-height: 1.1; margin-bottom: 1.5rem; }
        .hero-sub { font-size: 1rem; line-height: 1.8; font-weight: 300; color: rgba(232,220,200,0.65); max-width: 480px; margin: 0 auto 3rem; }
        .btn-primary { display: inline-block; background: #c9a96e; color: #0e0c0a; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; padding: 1rem 2.5rem; border-radius: 2px; }
        .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,4vw,2.5rem); font-weight: 400; color: #e8dcc8; text-align: center; margin-bottom: 3.5rem; }
        .preview { padding: 100px 0; border-top: 1px solid rgba(201,169,110,0.1); }
        .screenshots { display: grid; grid-template-columns: 1fr 1.2fr 1fr; gap: 1.5rem; align-items: center; }
        @media (max-width: 768px) { .screenshots { grid-template-columns: 1fr; } }
        .screenshot-card { display: flex; flex-direction: column; gap: 1rem; }
        .screenshot-card.featured .screenshot-img { border-color: rgba(201,169,110,0.4); }
        .screenshot-img { background: #141210; border: 1px solid rgba(201,169,110,0.2); border-radius: 4px; padding: 1.5rem; min-height: 260px; display: flex; align-items: center; justify-content: center; }
        .screenshot-label { font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(201,169,110,0.6); text-align: center; }
        .mock-ui { width: 100%; }
        .mock-header { display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid rgba(201,169,110,0.15); padding-bottom: 0.75rem; margin-bottom: 0.75rem; }
        .mock-dot { width: 6px; height: 6px; background: #c9a96e; border-radius: 50%; }
        .mock-label { font-size: 0.6rem; letter-spacing: 0.2em; color: rgba(232,220,200,0.5); }
        .mock-row { display: flex; justify-content: space-between; padding: 0.4rem 0; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 0.7rem; color: rgba(232,220,200,0.5); }
        .mock-val { color: rgba(232,220,200,0.85); }
        .mock-val.accent { color: #c9a96e; }
        .mock-btn { margin-top: 1rem; background: #c9a96e; color: #0e0c0a; text-align: center; padding: 0.5rem; border-radius: 2px; font-size: 0.6rem; letter-spacing: 0.15em; font-weight: 600; }
        .mock-stats { display: flex; gap: 0.5rem; margin-bottom: 0.75rem; }
        .mock-stat { flex: 1; text-align: center; padding: 0.5rem; background: rgba(255,255,255,0.03); border-radius: 2px; }
        .stat-val { font-size: 0.9rem; color: #e8dcc8; font-weight: 500; }
        .stat-val.accent-gold { color: #c9a96e; }
        .stat-label { font-size: 0.5rem; color: rgba(232,220,200,0.4); letter-spacing: 0.1em; margin-top: 0.2rem; }
        .mock-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; }
        .mock-action { background: rgba(255,255,255,0.04); border: 1px solid rgba(201,169,110,0.1); padding: 0.4rem; text-align: center; font-size: 0.55rem; color: rgba(232,220,200,0.5); border-radius: 2px; }
        .mock-room-row { display: flex; justify-content: space-between; align-items: center; padding: 0.4rem 0; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 0.65rem; }
        .room-num { color: rgba(232,220,200,0.6); }
        .room-status { font-size: 0.55rem; padding: 0.2rem 0.5rem; border-radius: 2px; }
        .room-status.occupied { background: rgba(201,169,110,0.15); color: #c9a96e; }
        .room-status.available { background: rgba(100,200,100,0.1); color: #7dc87d; }
        .room-status.cleaning { background: rgba(100,150,255,0.1); color: #7aa8d8; }
        .features { padding: 100px 0; border-top: 1px solid rgba(201,169,110,0.1); }
        .features-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 2rem; }
        @media (max-width: 900px) { .features-grid { grid-template-columns: repeat(2,1fr); } }
        .feature { padding: 2rem 1.5rem; border: 1px solid rgba(201,169,110,0.12); border-radius: 4px; }
        .feature-icon { font-size: 1.8rem; margin-bottom: 1rem; }
        .feature h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-weight: 500; color: #e8dcc8; margin-bottom: 0.75rem; }
        .feature p { font-size: 0.8rem; line-height: 1.7; color: rgba(232,220,200,0.55); }
        .cta { padding: 120px 0; text-align: center; border-top: 1px solid rgba(201,169,110,0.1); }
        .cta h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem,5vw,3.5rem); font-weight: 300; color: #e8dcc8; margin-bottom: 1rem; }
        .cta p { color: rgba(232,220,200,0.5); margin-bottom: 2.5rem; font-size: 0.9rem; }
        .footer { padding: 3rem 0; border-top: 1px solid rgba(201,169,110,0.1); }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
        .footer-links { display: flex; gap: 2rem; }
        .footer-links a { font-size: 0.75rem; color: rgba(232,220,200,0.45); }
        .footer-copy { font-size: 0.7rem; color: rgba(232,220,200,0.25); }
      `}</style>
    </>
  )
}
