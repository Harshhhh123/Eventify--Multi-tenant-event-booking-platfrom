// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { login } from "../api/auth.api";
// import { setToken } from "../utils/token";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       const { token } = await login(email, password);
//       setToken(token);
//       navigate("/", { replace: true });
//       window.location.reload();
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="container">
//       <div
//         className="card"
//         style={{
//           maxWidth: 420,
//           margin: "80px auto",
//           padding: 24
//         }}
//       >
//         <h2 style={{ marginBottom: 4 }}>Welcome back</h2>
//         <p className="muted" style={{ marginBottom: 20 }}>
//           Login to continue using Eventify
//         </p>

//         {error && <p className="error">{error}</p>}

//         <form onSubmit={handleSubmit}>
//           <div style={{ marginBottom: 12 }}>
//             <label className="muted">Email</label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div style={{ marginBottom: 20 }}>
//             <label className="muted">Password</label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             style={{ width: "100%" }}
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <p className="muted" style={{ marginTop: 16, textAlign: "center" }}>
//           Don’t have an account?{" "}
//           <Link to="/register">Create one</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/auth.api";
import { setToken } from "../utils/token";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { token } = await login(email, password);
      setToken(token);
      navigate("/dashboard", { replace: true });
      window.location.reload();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      {/* Background */}
      <div className="auth-bg">
        <div className="bg-gradient-1"></div>
        <div className="bg-gradient-2"></div>
        <div className="noise-texture"></div>
      </div>

      {/* Grid Pattern */}
      <div className="grid-pattern">
        {[...Array(20)].map((_, i) => (
          <div key={`v-${i}`} className="grid-line-v" style={{ left: `${i * 5}%` }} />
        ))}
        {[...Array(20)].map((_, i) => (
          <div key={`h-${i}`} className="grid-line-h" style={{ top: `${i * 5}%` }} />
        ))}
      </div>

      <div className="auth-container">
        {/* Brand Header */}
        <Link to="/" className="brand-link">
          <div className="brand-logo">
            <div className="logo-cube">
              <div className="cube-face front"></div>
              <div className="cube-face back"></div>
              <div className="cube-face left"></div>
              <div className="cube-face right"></div>
              <div className="cube-face top"></div>
              <div className="cube-face bottom"></div>
            </div>
          </div>
          <span className="brand-name">Eventify</span>
        </Link>

        {/* Auth Card */}
        <div className="auth-card">
          <div className="card-glow"></div>

          <div className="auth-header">
            <h1 className="auth-title">
              Welcome
              <br />
              <span className="title-gradient">Back</span>
            </h1>
            <p className="auth-subtitle">Sign in to continue to your account</p>
          </div>

          {/* Error Alert */}
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
                <div className="alert-title">Authentication Failed</div>
                <div className="alert-message">{error}</div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            {/* Email Field */}
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <div className="input-wrapper">
                <div className="input-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <input
                  type="email"
                  className="form-input"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-wrapper">
                <div className="input-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <input
                  type="password"
                  className="form-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="auth-submit" disabled={loading}>
              {loading ? (
                <>
                  <div className="btn-spinner"></div>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="auth-footer">
            <p className="footer-text">
              Don't have an account?{" "}
              <Link to="/register" className="footer-link">Create one</Link>
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="auth-features">
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <span>Secure Authentication</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <span>Instant Access</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">☁️</div>
            <span>Cloud-Native</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .auth-page {
          min-height: 100vh;
          background: #0a0a0f;
          color: #fff;
          font-family: 'Space Grotesk', system-ui, sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 2rem;
        }

        /* Background */
        .auth-bg {
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

        /* Grid Pattern */
        .grid-pattern {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.02;
        }

        .grid-line-v,
        .grid-line-h {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
        }

        .grid-line-v {
          width: 1px;
          height: 100%;
        }

        .grid-line-h {
          width: 100%;
          height: 1px;
        }

        .auth-container {
          max-width: 480px;
          width: 100%;
          position: relative;
          z-index: 1;
          animation: fadeInUp 0.8s ease-out;
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

        /* Brand */
        .brand-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          justify-content: center;
          margin-bottom: 3rem;
          text-decoration: none;
          color: #fff;
          transition: transform 0.3s;
        }

        .brand-link:hover {
          transform: scale(1.05);
        }

        .brand-logo {
          width: 40px;
          height: 40px;
          perspective: 1000px;
        }

        .logo-cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: cubeRotate 10s infinite linear;
        }

        @keyframes cubeRotate {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }

        .cube-face {
          position: absolute;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          border: 1px solid rgba(255, 255, 255, 0.2);
          opacity: 0.8;
        }

        .cube-face.front  { transform: rotateY(0deg) translateZ(20px); }
        .cube-face.back   { transform: rotateY(180deg) translateZ(20px); }
        .cube-face.right  { transform: rotateY(90deg) translateZ(20px); }
        .cube-face.left   { transform: rotateY(-90deg) translateZ(20px); }
        .cube-face.top    { transform: rotateX(90deg) translateZ(20px); }
        .cube-face.bottom { transform: rotateX(-90deg) translateZ(20px); }

        .brand-name {
          font-size: 1.75rem;
          font-weight: 800;
          font-family: 'Syne', sans-serif;
          background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Auth Card */
        .auth-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 3rem;
          position: relative;
          overflow: hidden;
        }

        .card-glow {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.2), rgba(124, 58, 237, 0.2));
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

        /* Auth Header */
        .auth-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .auth-title {
          font-family: 'Syne', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 0.75rem;
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

        .auth-subtitle {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1rem;
        }

        /* Error Alert */
        .error-alert {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
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

        .alert-icon {
          width: 24px;
          height: 24px;
          color: #ef4444;
          flex-shrink: 0;
        }

        .alert-title {
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 0.25rem;
          color: #fca5a5;
        }

        .alert-message {
          font-size: 0.9rem;
          color: #fca5a5;
          opacity: 0.9;
        }

        /* Form */
        .auth-form {
          margin-bottom: 2rem;
        }

        .form-group {
          margin-bottom: 1.75rem;
        }

        .form-label {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .input-wrapper {
          position: relative;
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
          border-color: rgba(79, 70, 229, 0.5);
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        /* Submit Button */
        .auth-submit {
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

        .auth-submit::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .auth-submit:hover:not(:disabled)::before {
          transform: translateX(100%);
        }

        .auth-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);
        }

        .auth-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .auth-submit svg {
          width: 18px;
          height: 18px;
          transition: transform 0.3s;
        }

        .auth-submit:hover:not(:disabled) svg {
          transform: translateX(4px);
        }

        .btn-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Footer */
        .auth-footer {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-text {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
        }

        .footer-link {
          color: #a5b4fc;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s;
        }

        .footer-link:hover {
          color: #6366f1;
        }

        /* Features */
        .auth-features {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 3rem;
          flex-wrap: wrap;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }

        .feature-icon {
          font-size: 1.25rem;
        }

        /* Responsive */
        @media (max-width: 640px) {
          .auth-card {
            padding: 2rem;
          }

          .auth-title {
            font-size: 2rem;
          }

          .auth-features {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Login;