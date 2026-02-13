// function EventDetails() {
//   return <h2>Event Details</h2>;
// }

// export default EventDetails;
function EventDetails() {
  return (
    <div className="event-details-page">
      {/* Background */}
      <div className="page-bg">
        <div className="bg-gradient-1"></div>
        <div className="bg-gradient-2"></div>
        <div className="noise-texture"></div>
      </div>

      <div className="details-container">
        {/* Page Header */}
        <div className="page-header">
          <div className="header-badge">
            <span className="badge-pulse"></span>
            <span>EVENT DETAILS</span>
          </div>
          <h1 className="page-title">
            Event
            <br />
            <span className="title-gradient">Information</span>
          </h1>
          <p className="page-subtitle">
            Detailed view of event information and booking details
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="content-card">
          <div className="card-glow"></div>
          
          <div className="coming-soon-content">
            <div className="soon-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>

            <h2 className="soon-title">Detailed View</h2>
            <p className="soon-desc">
              This page will show comprehensive event information including
              <br />
              location, schedule, speakers, and booking management.
            </p>

            {/* Features Preview */}
            <div className="features-grid">
              <div className="feature-box">
                <div className="feature-icon">📍</div>
                <h3 className="feature-title">Location</h3>
                <p className="feature-desc">Venue and directions</p>
              </div>

              <div className="feature-box">
                <div className="feature-icon">🎤</div>
                <h3 className="feature-title">Speakers</h3>
                <p className="feature-desc">Event hosts & guests</p>
              </div>

              <div className="feature-box">
                <div className="feature-icon">⏰</div>
                <h3 className="feature-title">Schedule</h3>
                <p className="feature-desc">Detailed timeline</p>
              </div>

              <div className="feature-box">
                <div className="feature-icon">🎟️</div>
                <h3 className="feature-title">Tickets</h3>
                <p className="feature-desc">Pricing & availability</p>
              </div>
            </div>

            {/* CTA */}
            <div className="soon-actions">
              <a href="/home" className="primary-btn">
                <span>Browse All Events</span>
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
              <button className="secondary-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .event-details-page {
          min-height: 100vh;
          background: #0a0a0f;
          color: #fff;
          font-family: 'Space Grotesk', system-ui, sans-serif;
          position: relative;
          padding: 6rem 0 4rem;
        }

        /* Background */
        .page-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .bg-gradient-1,
        .bg-gradient-2 {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          animation: floatBg 20s ease-in-out infinite;
        }

        .bg-gradient-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #7c3aed 0%, transparent 70%);
          top: -200px;
          left: -200px;
        }

        .bg-gradient-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #ec4899 0%, transparent 70%);
          bottom: -150px;
          right: -150px;
          animation-delay: -10s;
        }

        @keyframes floatBg {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, -50px) scale(1.1); }
        }

        .noise-texture {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.03;
        }

        .details-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        /* Page Header */
        .page-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.25rem;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: #c4b5fd;
          margin-bottom: 2rem;
          animation: fadeInDown 0.8s ease-out;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .badge-pulse {
          width: 6px;
          height: 6px;
          background: #7c3aed;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .page-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .title-gradient {
          background: linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #f59e0b 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: gradientFlow 4s ease infinite;
        }

        @keyframes gradientFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .page-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.6);
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        /* Content Card */
        .content-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 4rem 3rem;
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.8s ease-out 0.6s backwards;
        }

        .card-glow {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(236, 72, 153, 0.2));
          border-radius: 24px;
          opacity: 0.5;
          filter: blur(16px);
          z-index: -1;
          animation: glowPulse 3s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        /* Coming Soon */
        .coming-soon-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .soon-icon {
          width: 96px;
          height: 96px;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          color: #c4b5fd;
          animation: iconFloat 3s ease-in-out infinite;
        }

        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }

        .soon-icon svg {
          width: 48px;
          height: 48px;
        }

        .soon-title {
          font-family: 'Syne', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .soon-desc {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          margin-bottom: 3rem;
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .feature-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 2rem 1.5rem;
          transition: all 0.3s;
        }

        .feature-box:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateY(-4px);
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .feature-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-family: 'Syne', sans-serif;
        }

        .feature-desc {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
        }

        /* Actions */
        .soon-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .primary-btn,
        .secondary-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.25rem 2.5rem;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
          font-family: 'Space Grotesk', sans-serif;
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }

        .primary-btn {
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          color: #fff;
        }

        .primary-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .primary-btn:hover::before {
          transform: translateX(100%);
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(124, 58, 237, 0.5);
        }

        .secondary-btn {
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.1);
          color: #fff;
        }

        .secondary-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .primary-btn svg,
        .secondary-btn svg {
          width: 18px;
          height: 18px;
          transition: transform 0.3s;
        }

        .primary-btn:hover svg {
          transform: translateX(4px);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .event-details-page {
            padding: 5rem 0 3rem;
          }

          .content-card {
            padding: 3rem 2rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .soon-actions {
            flex-direction: column;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}

export default EventDetails;