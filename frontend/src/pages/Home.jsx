// import { useEffect, useState } from "react";
// import { getEvents } from "../api/event.api";
// import { requestOrganizer } from "../api/auth.api";
// import { useAuth } from "../context/AuthContext";
// import { getToken, removeToken } from "../utils/token";
// import { useNavigate } from "react-router-dom";
// import { reserveSeat } from "../api/event.api";

// function Home() {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [orgError, setOrgError] = useState(null);
//   const [orgLoading, setOrgLoading] = useState(false);

//   useEffect(() => {
//     async function load() {
//       try {
//         const data = await getEvents();
//         setEvents(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     load();
//   }, []);

//   async function handleRequestOrganizer() {
//     setOrgError(null);
//     setOrgLoading(true);

//     try {
//       const token = getToken();
//       await requestOrganizer(token);

//       // Backend upgraded role immediately.
//       // JWT is now stale → force re-login.
//       removeToken();
//       navigate("/login", { replace: true });
//       window.location.reload();
//     } catch (err) {
//       setOrgError(err.message);
//     } finally {
//       setOrgLoading(false);
//     }
//   }

//   return (
//    <div className="container">
//   <h2>Available Events</h2>

//   {user?.role === "USER" && (
//     <div className="card">
//       <p className="muted">
//         Want to host events?
//       </p>
//       <button onClick={handleRequestOrganizer}>
//         Request Organizer Access
//       </button>
//       {orgError && <p className="error">{orgError}</p>}
//     </div>
//   )}

//   {loading && <p className="muted">Loading events...</p>}

//  {events.map((e) => (
//   <div className="card" key={e.eventId}>
//     <h3>{e.title}</h3>
//     <p className="muted">{e.date}</p>
//     <p>Seats left: {e.availableSeats}</p>

//     {user?.role === "USER" && e.availableSeats > 0 && (
//       <button
//         onClick={async () => {
//           try {
//             await reserveSeat(getToken(), e.eventId);
//             alert("Seat reserved. Confirmation email will be sent shortly!!.");
//             window.location.reload();
//           } catch (err) {
//             alert(err.message);
//           }
//         }}
//       >
//         Reserve Seat
//       </button>
//     )}
//   </div>
// ))}

// </div>

//   );
// }

// // export default Home;
// import { useEffect, useState } from "react";
// import { getEvents, reserveSeat } from "../api/event.api";
// import { requestOrganizer } from "../api/auth.api";
// import { useAuth } from "../context/AuthContext";
// import { getToken, removeToken } from "../utils/token";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [orgError, setOrgError] = useState(null);
//   const [orgLoading, setOrgLoading] = useState(false);

//   useEffect(() => {
//     async function load() {
//       try {
//         const data = await getEvents();
//         setEvents(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     load();
//   }, []);

//   async function handleRequestOrganizer() {
//     setOrgError(null);
//     setOrgLoading(true);

//     try {
//       const token = getToken();
//       await requestOrganizer(token);

//       // Role updated in DB, JWT is stale → force re-login
//       removeToken();
//       navigate("/login", { replace: true });
//       window.location.reload();
//     } catch (err) {
//       setOrgError(err.message);
//     } finally {
//       setOrgLoading(false);
//     }
//   }

//   return (
//     <div className="container">
//       <h1>Discover Events</h1>
//       <p className="muted">Browse and reserve seats for upcoming events</p>

//       {/* Organizer Request */}
//       {user?.role === "USER" && (
//         <div className="card" style={{ marginBottom: 32 }}>
//           <h3>Become an Organizer</h3>
//           <p className="muted">
//             Create and manage your own events.
//           </p>

//           <button onClick={handleRequestOrganizer} disabled={orgLoading}>
//             {orgLoading ? "Processing…" : "Request Organizer Access"}
//           </button>

//           {orgError && <p className="error">{orgError}</p>}
//         </div>
//       )}

//       {loading && <p className="muted">Loading events…</p>}
//       {error && <p className="error">{error}</p>}

//       {/* Events Grid */}
//       <div className="events-grid">
//         {events.map((e) => (
//           <div className="card event-card" key={e.eventId}>
//             <div className="event-header">
//               <div>
//                 <div className="event-title">{e.title}</div>
//                 <div className="event-date">
//                   {new Date(e.date).toLocaleString()}
//                 </div>
//               </div>

//               <span
//                 className={`badge ${
//                   e.availableSeats > 0 ? "available" : "sold"
//                 }`}
//               >
//                 {e.availableSeats > 0 ? "Open" : "Sold Out"}
//               </span>
//             </div>

//             <p className="muted">
//               Seats left: <strong>{e.availableSeats}</strong>
//             </p>

//             {user?.role === "USER" && e.availableSeats > 0 && (
//               <div className="event-footer">
//                 <button
//                   onClick={async () => {
//                     try {
//                       await reserveSeat(getToken(), e.eventId);
//                       alert(
//                         "Seat reserved successfully. Confirmation email sent."
//                       );
//                       window.location.reload();
//                     } catch (err) {
//                       alert(err.message);
//                     }
//                   }}
//                 >
//                   Reserve Seat
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;
import { useEffect, useState } from "react";
import { getEvents, reserveSeat } from "../api/event.api";
import { requestOrganizer } from "../api/auth.api";
import { useAuth } from "../context/AuthContext";
import { getToken, removeToken } from "../utils/token";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orgError, setOrgError] = useState(null);
  const [orgLoading, setOrgLoading] = useState(false);
  const [reservingId, setReservingId] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function handleRequestOrganizer() {
    setOrgError(null);
    setOrgLoading(true);

    try {
      const token = getToken();
      await requestOrganizer(token);
      removeToken();
      navigate("/login", { replace: true });
      window.location.reload();
    } catch (err) {
      setOrgError(err.message);
    } finally {
      setOrgLoading(false);
    }
  }

  async function handleReserve(eventId) {
    setReservingId(eventId);
    try {
      await reserveSeat(getToken(), eventId);
      alert("Seat reserved successfully! Confirmation email sent.");
      window.location.reload();
    } catch (err) {
      alert(err.message);
    } finally {
      setReservingId(null);
    }
  }

  return (
    <div className="home-page">
      {/* Background Elements */}
      <div className="page-bg">
        <div className="bg-gradient-1"></div>
        <div className="bg-gradient-2"></div>
        <div className="noise-texture"></div>
      </div>

      <div className="home-container">
        {/* Page Header */}
        <div className="page-header">
          <div className="header-badge">
            <span className="badge-pulse"></span>
            <span>LIVE EVENTS</span>
          </div>
          <h1 className="page-title">
            Discover
            <br />
            <span className="title-gradient">Amazing Events</span>
          </h1>
          <p className="page-subtitle">
            Browse and reserve seats for the most exciting upcoming events
          </p>
        </div>

        {/* Organizer Request Card */}
        {user?.role === "USER" && (
          <div className="organizer-card">
            <div className="organizer-content">
              <div className="organizer-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="organizer-text">
                <h3 className="organizer-title">Become an Organizer</h3>
                <p className="organizer-desc">
                  Create and manage your own events. Share your passion with the world.
                </p>
              </div>
              <button 
                className="organizer-btn" 
                onClick={handleRequestOrganizer}
                disabled={orgLoading}
              >
                {orgLoading ? (
                  <>
                    <div className="btn-spinner"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Request Access</span>
                    <svg viewBox="0 0 16 16" fill="none">
                      <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </>
                )}
              </button>
            </div>
            {orgError && <div className="error-message">{orgError}</div>}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading events...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="error-state">
            <div className="error-icon">⚠️</div>
            <p>{error}</p>
          </div>
        )}

        {/* Events Grid */}
        {!loading && !error && (
          <div className="events-grid">
            {events.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">📅</div>
                <h3>No events yet</h3>
                <p>Check back soon for exciting events!</p>
              </div>
            ) : (
              events.map((event) => (
                <div className="event-card" key={event.eventId}>
                  <div className="card-glow"></div>
                  
                  {/* Card Header */}
                  <div className="event-card-header">
                    <div className="event-status">
                      <span className={`status-dot ${event.availableSeats > 0 ? 'available' : 'sold-out'}`}></span>
                      <span className="status-text">
                        {event.availableSeats > 0 ? 'Available' : 'Sold Out'}
                      </span>
                    </div>
                    <div className="event-capacity">
                      <span className="capacity-number">{event.availableSeats}</span>
                      <span className="capacity-label">seats left</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="event-card-body">
                    <h3 className="event-title">{event.title}</h3>
                    <div className="event-date">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      <span>{new Date(event.date).toLocaleString('en-US', {
                        weekday: 'short',
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="seats-progress">
                      <div className="progress-track">
                        <div 
                          className="progress-fill"
                          style={{ 
                            width: `${Math.max(5, (event.availableSeats / (event.capacity || 100)) * 100)}%` 
                          }}
                        >
                          <div className="progress-shimmer"></div>
                        </div>
                      </div>
                      <span className="progress-label">
                        {event.availableSeats > 0 
                          ? `${Math.round((event.availableSeats / (event.capacity || 100)) * 100)}% available`
                          : 'Fully booked'
                        }
                      </span>
                    </div>
                  </div>

                  {/* Card Footer */}
                  {user?.role === "USER" && event.availableSeats > 0 && (
                    <div className="event-card-footer">
                      <button 
                        className="reserve-btn"
                        onClick={() => handleReserve(event.eventId)}
                        disabled={reservingId === event.eventId}
                      >
                        {reservingId === event.eventId ? (
                          <>
                            <div className="btn-spinner"></div>
                            <span>Reserving...</span>
                          </>
                        ) : (
                          <>
                            <span>Reserve Seat</span>
                            <svg viewBox="0 0 16 16" fill="none">
                              <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .home-page {
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
          background: radial-gradient(circle, #4f46e5 0%, transparent 70%);
          top: -200px;
          right: -200px;
        }

        .bg-gradient-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #7c3aed 0%, transparent 70%);
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

        .home-container {
          max-width: 1400px;
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
          background: rgba(79, 70, 229, 0.1);
          border: 1px solid rgba(79, 70, 229, 0.3);
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: #a5b4fc;
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
          background: #4f46e5;
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
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #06b6d4 100%);
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
          max-width: 600px;
          margin: 0 auto;
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        /* Organizer Card */
        .organizer-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2rem;
          margin-bottom: 3rem;
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.8s ease-out 0.6s backwards;
        }

        .organizer-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #4f46e5, transparent);
          opacity: 0.5;
        }

        .organizer-content {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 1.5rem;
          align-items: center;
        }

        .organizer-icon {
          width: 64px;
          height: 64px;
          background: rgba(79, 70, 229, 0.1);
          border: 1px solid rgba(79, 70, 229, 0.3);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a5b4fc;
        }

        .organizer-icon svg {
          width: 32px;
          height: 32px;
        }

        .organizer-title {
          font-size: 1.5rem;
          font-weight: 700;
          font-family: 'Syne', sans-serif;
          margin-bottom: 0.5rem;
        }

        .organizer-desc {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1rem;
        }

        .organizer-btn {
          padding: 1rem 2rem;
          background: #fff;
          color: #0a0a0f;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s;
          font-family: 'Space Grotesk', sans-serif;
        }

        .organizer-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(79, 70, 229, 0.4);
        }

        .organizer-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .organizer-btn svg {
          width: 16px;
          height: 16px;
          transition: transform 0.3s;
        }

        .organizer-btn:hover:not(:disabled) svg {
          transform: translateX(4px);
        }

        .error-message {
          margin-top: 1rem;
          padding: 1rem;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 12px;
          color: #fca5a5;
          font-size: 0.95rem;
        }

        /* Loading State */
        .loading-state,
        .error-state,
        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
        }

        .loading-spinner {
          width: 48px;
          height: 48px;
          border: 4px solid rgba(79, 70, 229, 0.1);
          border-top-color: #4f46e5;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 1.5rem;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .loading-state p,
        .error-state p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.1rem;
        }

        .error-icon,
        .empty-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .empty-state h3 {
          font-size: 1.5rem;
          font-family: 'Syne', sans-serif;
          margin-bottom: 0.5rem;
        }

        .empty-state p {
          color: rgba(255, 255, 255, 0.6);
        }

        /* Events Grid */
        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
          animation: fadeInUp 0.8s ease-out 0.8s backwards;
        }

        .event-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 1.75rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .event-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(79, 70, 229, 0.3);
          transform: translateY(-8px);
        }

        .card-glow {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.2), rgba(124, 58, 237, 0.2));
          border-radius: 20px;
          opacity: 0;
          filter: blur(12px);
          transition: opacity 0.4s;
          z-index: -1;
        }

        .event-card:hover .card-glow {
          opacity: 1;
        }

        /* Card Header */
        .event-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .event-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
        }

        .status-dot.available {
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: statusPulse 2s ease-in-out infinite;
        }

        .status-dot.sold-out {
          background: #ef4444;
          box-shadow: 0 0 10px #ef4444;
        }

        @keyframes statusPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .status-text {
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          color: rgba(255, 255, 255, 0.7);
        }

        .event-capacity {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .capacity-number {
          font-size: 1.75rem;
          font-weight: 700;
          font-family: 'Syne', sans-serif;
          color: #a5b4fc;
          line-height: 1;
        }

        .capacity-label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 0.25rem;
        }

        /* Card Body */
        .event-card-body {
          margin-bottom: 1.5rem;
        }

        .event-title {
          font-size: 1.5rem;
          font-weight: 700;
          font-family: 'Syne', sans-serif;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .event-date {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
          margin-bottom: 1.25rem;
        }

        .event-date svg {
          width: 18px;
          height: 18px;
          color: #a5b4fc;
        }

        /* Progress Bar */
        .seats-progress {
          margin-bottom: 0.75rem;
        }

        .progress-track {
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #10b981, #06b6d4);
          border-radius: 3px;
          position: relative;
          transition: width 1s ease-out;
        }

        .progress-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shimmer 2s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .progress-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 500;
        }

        /* Card Footer */
        .event-card-footer {
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .reserve-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          transition: all 0.3s;
          font-family: 'Space Grotesk', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .reserve-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .reserve-btn:hover:not(:disabled)::before {
          transform: translateX(100%);
        }

        .reserve-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(79, 70, 229, 0.5);
        }

        .reserve-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .reserve-btn svg {
          width: 16px;
          height: 16px;
          transition: transform 0.3s;
        }

        .reserve-btn:hover:not(:disabled) svg {
          transform: translateX(4px);
        }

        .btn-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .events-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.5rem;
          }

          .organizer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .organizer-icon {
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .home-page {
            padding: 5rem 0 3rem;
          }

          .page-title {
            font-size: clamp(2.5rem, 10vw, 4rem);
          }

          .events-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;