// function UserDashboard() {
//   return (
//     <>
//     <div className="container">
//   <h2>User Dashboard</h2>
//   <div className="card">
//     <p className="muted">Your reservations will appear here.</p>
//   </div>
// </div>
// </>
//   );
// }

// export default UserDashboard;
function UserDashboard() {
  return (
    <div className="dashboard-page">
      {/* Background */}
      <div className="page-bg">
        <div className="bg-gradient-1"></div>
        <div className="bg-gradient-2"></div>
        <div className="noise-texture"></div>
      </div>

      <div className="dashboard-container">
        {/* Page Header */}
        <div className="page-header">
          <div className="header-badge">
            <span className="badge-pulse"></span>
            <span>YOUR DASHBOARD</span>
          </div>
          <h1 className="page-title">
            My
            <br />
            <span className="title-gradient">Reservations</span>
          </h1>
          <p className="page-subtitle">
            Track and manage all your event reservations in one place
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="content-card">
          <div className="card-glow"></div>
          
          <div className="coming-soon-content">
            <div className="soon-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>

            <h2 className="soon-title">Coming Soon</h2>
            <p className="soon-desc">
              Your reservation history and upcoming events will appear here.
              <br />
              We're building something amazing for you!
            </p>

            {/* Features Preview */}
            <div className="features-preview">
              <div className="preview-item">
                <div className="preview-icon">📅</div>
                <div className="preview-text">
                  <div className="preview-title">Upcoming Events</div>
                  <div className="preview-desc">View all your booked events</div>
                </div>
              </div>

              <div className="preview-item">
                <div className="preview-icon">🎟️</div>
                <div className="preview-text">
                  <div className="preview-title">Digital Tickets</div>
                  <div className="preview-desc">Access your event passes</div>
                </div>
              </div>

              <div className="preview-item">
                <div className="preview-icon">📊</div>
                <div className="preview-text">
                  <div className="preview-title">History & Stats</div>
                  <div className="preview-desc">Track your event journey</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="soon-cta">
              <a href="/home" className="cta-btn">
                <span>Browse Events</span>
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .dashboard-page {
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
          background: radial-gradient(circle, #06b6d4 0%, transparent 70%);
          top: -200px;
          right: -200px;
        }

        .bg-gradient-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #4f46e5 0%, transparent 70%);
          bottom: -150px;
          left: -150px;
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

        .dashboard-container {
          max-width: 1000px;
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
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: #67e8f9;
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
          background: #06b6d4;
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
          background: linear-gradient(135deg, #06b6d4 0%, #4f46e5 50%, #7c3aed 100%);
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
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(79, 70, 229, 0.2));
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
          max-width: 700px;
          margin: 0 auto;
        }

        .soon-icon {
          width: 96px;
          height: 96px;
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          color: #67e8f9;
          animation: iconFloat 3s ease-in-out infinite;
        }

        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
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

        /* Features Preview */
        .features-preview {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .preview-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: left;
          transition: all 0.3s;
        }

        .preview-item:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(6, 182, 212, 0.3);
          transform: translateY(-4px);
        }

        .preview-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .preview-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .preview-desc {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
        }

        /* CTA */
        .soon-cta {
          display: flex;
          justify-content: center;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.25rem 2.5rem;
          background: linear-gradient(135deg, #06b6d4, #4f46e5);
          color: #fff;
          text-decoration: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .cta-btn:hover::before {
          transform: translateX(100%);
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(6, 182, 212, 0.5);
        }

        .cta-btn svg {
          width: 18px;
          height: 18px;
          transition: transform 0.3s;
        }

        .cta-btn:hover svg {
          transform: translateX(4px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .dashboard-page {
            padding: 5rem 0 3rem;
          }

          .content-card {
            padding: 3rem 2rem;
          }

          .features-preview {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default UserDashboard;