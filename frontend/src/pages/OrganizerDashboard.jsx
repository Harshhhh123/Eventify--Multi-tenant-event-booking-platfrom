// import { useState } from "react";
// import { createEvent } from "../api/event.api";
// import { getToken } from "../utils/token";

// function OrganizerDashboard() {
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [capacity, setCapacity] = useState("");
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     try {
//       await createEvent(getToken(), {
//         title,
//         date,
//         capacity: Number(capacity)
//       });

//       setSuccess("Event created successfully");
//       setTitle("");
//       setDate("");
//       setCapacity("");
//     } catch (err) {
//       setError(err.message);
//     }
//   }

//   return (
//     <div className="container">
//       <h2>Create Event</h2>

//       <div className="card" style={{ maxWidth: 500 }}>
//         {error && <p className="error">{error}</p>}
//         {success && <p style={{ color: "green" }}>{success}</p>}

//         <form onSubmit={handleSubmit}>
//           <div style={{ marginBottom: 12 }}>
//             <label className="muted">Title</label>
//             <input
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </div>

//           <div style={{ marginBottom: 12 }}>
//             <label className="muted">Date</label>
//             <input
//               type="datetime-local"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               required
//             />
//           </div>

//           <div style={{ marginBottom: 16 }}>
//             <label className="muted">Capacity</label>
//             <input
//               type="number"
//               min="1"
//               value={capacity}
//               onChange={(e) => setCapacity(e.target.value)}
//               required
//             />
//           </div>

//           <button type="submit">Create Event</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default OrganizerDashboard;
import { useState } from "react";
import { createEvent } from "../api/event.api";
import { getToken } from "../utils/token";

function OrganizerDashboard() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      await createEvent(getToken(), {
        title,
        date,
        capacity: Number(capacity)
      });

      setSuccess("Event created successfully!");
      setTitle("");
      setDate("");
      setCapacity("");
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="organizer-page">
      {/* Background */}
      <div className="page-bg">
        <div className="bg-gradient-1"></div>
        <div className="bg-gradient-2"></div>
        <div className="noise-texture"></div>
      </div>

      <div className="organizer-container">
        {/* Page Header */}
        <div className="page-header">
          <div className="header-badge">
            <span className="badge-pulse"></span>
            <span>ORGANIZER PORTAL</span>
          </div>
          <h1 className="page-title">
            Create Your
            <br />
            <span className="title-gradient">Next Event</span>
          </h1>
          <p className="page-subtitle">
            Share your passion with the world. Design memorable experiences.
          </p>
        </div>

        {/* Create Event Form */}
        <div className="form-card">
          <div className="card-glow"></div>
          
          <div className="form-header">
            <div className="form-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
              </svg>
            </div>
            <div>
              <h2 className="form-title">Event Details</h2>
              <p className="form-desc">Fill in the information below to create your event</p>
            </div>
          </div>

          {/* Success Message */}
          {success && (
            <div className="success-alert">
              <div className="alert-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 12l3 3 5-5"/>
                </svg>
              </div>
              <div className="alert-content">
                <div className="alert-title">Success!</div>
                <div className="alert-message">{success}</div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="error-alert">
              <div className="alert-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <div className="alert-content">
                <div className="alert-title">Error</div>
                <div className="alert-message">{error}</div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="event-form">
            {/* Title Field */}
            <div className="form-group">
              <label className="form-label">
                Event Title
                <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  type="text"
                  className="form-input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., AWS re:Invent 2026"
                  required
                />
                <div className="input-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Date Field */}
            <div className="form-group">
              <label className="form-label">
                Event Date & Time
                <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  type="datetime-local"
                  className="form-input"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <div className="input-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
              </div>
              <p className="field-hint">Choose the date and time when your event will take place</p>
            </div>

            {/* Capacity Field */}
            <div className="form-group">
              <label className="form-label">
                Seat Capacity
                <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  type="number"
                  className="form-input"
                  min="1"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  placeholder="e.g., 500"
                  required
                />
                <div className="input-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
              </div>
              <p className="field-hint">Maximum number of attendees for this event</p>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? (
                <>
                  <div className="btn-spinner"></div>
                  <span>Creating Event...</span>
                </>
              ) : (
                <>
                  <span>Create Event</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Info Cards */}
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">📊</div>
              <div className="info-text">
                <div className="info-title">Track Performance</div>
                <div className="info-desc">Monitor seat reservations in real-time</div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div className="info-text">
                <div className="info-title">Auto Notifications</div>
                <div className="info-desc">Confirmations sent via AWS SES</div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🔒</div>
              <div className="info-text">
                <div className="info-title">Safe Reservations</div>
                <div className="info-desc">DynamoDB atomic operations</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .organizer-page {
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
          left: -200px;
        }

        .bg-gradient-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #7c3aed 0%, transparent 70%);
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

        .organizer-container {
          max-width: 800px;
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
          font-size: clamp(2.5rem, 6vw, 4.5rem);
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
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.6);
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        /* Form Card */
        .form-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.8s ease-out 0.6s backwards;
        }

        .card-glow {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.2), rgba(124, 58, 237, 0.2));
          border-radius: 24px;
          opacity: 0;
          filter: blur(16px);
          transition: opacity 0.4s;
          z-index: -1;
        }

        .form-card:hover .card-glow {
          opacity: 1;
        }

        /* Form Header */
        .form-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .form-icon {
          width: 64px;
          height: 64px;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c4b5fd;
          flex-shrink: 0;
        }

        .form-icon svg {
          width: 32px;
          height: 32px;
        }

        .form-title {
          font-size: 1.75rem;
          font-weight: 700;
          font-family: 'Syne', sans-serif;
          margin-bottom: 0.5rem;
        }

        .form-desc {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1rem;
        }

        /* Alerts */
        .success-alert,
        .error-alert {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem;
          border-radius: 12px;
          margin-bottom: 2rem;
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .success-alert {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .error-alert {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .success-alert .alert-icon {
          color: #10b981;
        }

        .error-alert .alert-icon {
          color: #ef4444;
        }

        .alert-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }

        .alert-icon svg {
          width: 100%;
          height: 100%;
        }

        .alert-title {
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 0.25rem;
        }

        .alert-message {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .success-alert .alert-title,
        .success-alert .alert-message {
          color: #6ee7b7;
        }

        .error-alert .alert-title,
        .error-alert .alert-message {
          color: #fca5a5;
        }

        /* Form */
        .event-form {
          margin-bottom: 2.5rem;
        }

        .form-group {
          margin-bottom: 2rem;
        }

        .form-label {
          display: block;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .required {
          color: #ef4444;
          margin-left: 0.25rem;
        }

        .input-wrapper {
          position: relative;
        }

        .form-input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #fff;
          font-size: 1rem;
          font-family: 'Space Grotesk', sans-serif;
          transition: all 0.3s;
        }

        .form-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(124, 58, 237, 0.5);
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
        }

        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          color: #a5b4fc;
          pointer-events: none;
        }

        .input-icon svg {
          width: 100%;
          height: 100%;
        }

        .field-hint {
          margin-top: 0.5rem;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
        }

        /* Submit Button */
        .submit-btn {
          width: 100%;
          padding: 1.25rem;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
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

        .submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .submit-btn:hover:not(:disabled)::before {
          transform: translateX(100%);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .submit-btn svg {
          width: 20px;
          height: 20px;
          transition: transform 0.3s;
        }

        .submit-btn:hover:not(:disabled) svg {
          transform: translateX(4px);
        }

        .btn-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Info Cards */
        .info-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .info-card {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          transition: all 0.3s;
        }

        .info-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(79, 70, 229, 0.3);
        }

        .info-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .info-title {
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .info-desc {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.4;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .organizer-page {
            padding: 5rem 0 3rem;
          }

          .form-card {
            padding: 1.75rem;
          }

          .form-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .info-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default OrganizerDashboard;