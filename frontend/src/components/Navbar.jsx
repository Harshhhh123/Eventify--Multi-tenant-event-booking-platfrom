// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// function Navbar() {
//   const { user } = useAuth();

//   if (!user) return null; // 🔒 critical

//   return (
//     <div style={{ borderBottom: "1px solid var(--border)", background: "white" }}>
//       <div className="container" style={{ display: "flex", gap: 16 }}>
//         <strong>Eventify</strong>

//         <Link to="/">Home</Link>

//         {user.role === "USER" && <Link to="/dashboard">Dashboard</Link>}

//         {user.role === "ORGANIZER" && (
//           <Link to="/organizer/dashboard">Organizer</Link>
//         )}
//       </div>
//     </div>
//   );
// }

// // export default Navbar;
// import { Link, useLocation } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { removeToken } from "../utils/token";
// import { useNavigate } from "react-router-dom";

// function Navbar() {
//   const { user } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();

//   if (!user) return null;

//   const handleLogout = () => {
//     removeToken();
//     navigate("/login", { replace: true });
//     window.location.reload();
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Brand */}
//         <Link to="/" className="navbar-brand">
//           <div className="brand-logo">
//             <div className="logo-cube">
//               <div className="cube-face front"></div>
//               <div className="cube-face back"></div>
//             </div>
//           </div>
//           <span className="brand-text">Eventify</span>
//         </Link>

//         {/* Navigation Links */}
//         <div className="nav-links">
//           <Link 
//             to="/" 
//             className={`nav-link ${isActive('/') || isActive('/home') ? 'active' : ''}`}
//           >
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
//               <polyline points="9 22 9 12 15 12 15 22"/>
//             </svg>
//             <span>Events</span>
//           </Link>

//           {user.role === "USER" && (
//             <Link 
//               to="/dashboard" 
//               className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}
//             >
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <rect x="3" y="3" width="7" height="7"/>
//                 <rect x="14" y="3" width="7" height="7"/>
//                 <rect x="14" y="14" width="7" height="7"/>
//                 <rect x="3" y="14" width="7" height="7"/>
//               </svg>
//               <span>Dashboard</span>
//             </Link>
//           )}

//           {user.role === "ORGANIZER" && (
//             <Link 
//               to="/organizer/dashboard" 
//               className={`nav-link ${isActive('/organizer/dashboard') ? 'active' : ''}`}
//             >
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 2L2 7l10 5 10-5-10-5z"/>
//                 <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
//               </svg>
//               <span>Organizer</span>
//             </Link>
//           )}
//         </div>

//         {/* User Menu */}
//         <div className="nav-user">
//           <div className="user-info">
//             <div className="user-avatar">
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
//                 <circle cx="12" cy="7" r="4"/>
//               </svg>
//             </div>
//             <div className="user-details">
//               <div className="user-email">{user.email}</div>
//               <div className="user-role">{user.role}</div>
//             </div>
//           </div>

//           <button className="logout-btn" onClick={handleLogout}>
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
//               <polyline points="16 17 21 12 16 7"/>
//               <line x1="21" y1="12" x2="9" y2="12"/>
//             </svg>
//             <span>Logout</span>
//           </button>
//         </div>
//       </div>

//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Space+Grotesk:wght@400;500;600&display=swap');

//         .navbar {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           z-index: 1000;
//           background: rgba(10, 10, 15, 0.8);
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);
//           border-bottom: 1px solid rgba(255, 255, 255, 0.08);
//           font-family: 'Space Grotesk', sans-serif;
//         }

//         .navbar-container {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 1rem 2rem;
//           display: flex;
//           align-items: center;
//           gap: 2rem;
//         }

//         /* Brand */
//         .navbar-brand {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           text-decoration: none;
//           color: #fff;
//           margin-right: auto;
//           transition: transform 0.3s;
//         }

//         .navbar-brand:hover {
//           transform: scale(1.05);
//         }

//         .brand-logo {
//           width: 32px;
//           height: 32px;
//           perspective: 1000px;
//         }

//         .logo-cube {
//           width: 100%;
//           height: 100%;
//           position: relative;
//           transform-style: preserve-3d;
//           animation: cubeRotate 10s infinite linear;
//         }

//         @keyframes cubeRotate {
//           from { transform: rotateX(0deg) rotateY(0deg); }
//           to { transform: rotateX(360deg) rotateY(360deg); }
//         }

//         .cube-face {
//           position: absolute;
//           width: 32px;
//           height: 32px;
//           background: linear-gradient(135deg, #4f46e5, #7c3aed);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           opacity: 0.8;
//         }

//         .cube-face.front { transform: rotateY(0deg) translateZ(16px); }
//         .cube-face.back { transform: rotateY(180deg) translateZ(16px); }

//         .brand-text {
//           font-size: 1.5rem;
//           font-weight: 800;
//           font-family: 'Syne', sans-serif;
//           background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         /* Nav Links */
//         .nav-links {
//           display: flex;
//           gap: 0.5rem;
//         }

//         .nav-link {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           padding: 0.75rem 1.25rem;
//           color: rgba(255, 255, 255, 0.7);
//           text-decoration: none;
//           border-radius: 10px;
//           font-size: 0.95rem;
//           font-weight: 500;
//           transition: all 0.3s;
//           position: relative;
//         }

//         .nav-link svg {
//           width: 18px;
//           height: 18px;
//         }

//         .nav-link:hover {
//           color: #fff;
//           background: rgba(255, 255, 255, 0.05);
//         }

//         .nav-link.active {
//           color: #fff;
//           background: rgba(79, 70, 229, 0.15);
//           border: 1px solid rgba(79, 70, 229, 0.3);
//         }

//         .nav-link.active::before {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 40%;
//           height: 2px;
//           background: #6366f1;
//           border-radius: 2px 2px 0 0;
//         }

//         /* User Menu */
//         .nav-user {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//         }

//         .user-info {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           padding: 0.5rem 1rem;
//           background: rgba(255, 255, 255, 0.03);
//           border: 1px solid rgba(255, 255, 255, 0.08);
//           border-radius: 12px;
//         }

//         .user-avatar {
//           width: 36px;
//           height: 36px;
//           background: linear-gradient(135deg, #4f46e5, #7c3aed);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #fff;
//         }

//         .user-avatar svg {
//           width: 20px;
//           height: 20px;
//         }

//         .user-details {
//           display: flex;
//           flex-direction: column;
//           gap: 0.125rem;
//         }

//         .user-email {
//           font-size: 0.875rem;
//           font-weight: 600;
//           color: #fff;
//         }

//         .user-role {
//           font-size: 0.75rem;
//           color: rgba(255, 255, 255, 0.5);
//           text-transform: uppercase;
//           letter-spacing: 0.05em;
//         }

//         .logout-btn {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           padding: 0.75rem 1.25rem;
//           background: transparent;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 10px;
//           color: rgba(255, 255, 255, 0.7);
//           font-size: 0.95rem;
//           font-weight: 500;
//           cursor: pointer;
//           transition: all 0.3s;
//           font-family: 'Space Grotesk', sans-serif;
//         }

//         .logout-btn svg {
//           width: 18px;
//           height: 18px;
//         }

//         .logout-btn:hover {
//           background: rgba(239, 68, 68, 0.1);
//           border-color: rgba(239, 68, 68, 0.3);
//           color: #fca5a5;
//         }

//         /* Responsive */
//         @media (max-width: 1024px) {
//           .navbar-container {
//             flex-wrap: wrap;
//           }

//           .nav-links {
//             order: 3;
//             width: 100%;
//             justify-content: center;
//           }
//         }

//         @media (max-width: 768px) {
//           .navbar-container {
//             padding: 1rem 1.5rem;
//           }

//           .user-details {
//             display: none;
//           }

//           .nav-link span,
//           .logout-btn span {
//             display: none;
//           }

//           .nav-link,
//           .logout-btn {
//             padding: 0.75rem;
//           }
//         }
//       `}</style>
//     </nav>
//   );
// }

// export default Navbar;

import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { removeToken } from "../utils/token";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    removeToken();
    navigate("/login", { replace: true });
    window.location.reload();
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-container">
          {/* Brand */}
          <Link to="/" className="navbar-brand">
            <div className="brand-logo">
              <div className="logo-cube">
                <div className="cube-face front"></div>
                <div className="cube-face back"></div>
              </div>
            </div>
            <span className="brand-text">Eventify</span>
          </Link>

          {/* Navigation Links */}
          <div className="nav-links">
            <Link 
              to="/dashboard" 
              className={`nav-link ${isActive('/dashboard') || isActive('/dashboard') ? 'active' : ''}`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span>Events</span>
            </Link>

            {user.role === "USER" && (
              <Link 
                to="/user-dashboard" 
                className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                </svg>
                <span>Dashboard</span>
              </Link>
            )}

            {user.role === "ORGANIZER" && (
              <Link 
                to="/organizer/dashboard" 
                className={`nav-link ${isActive('/organizer/dashboard') ? 'active' : ''}`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span>Organizer</span>
              </Link>
            )}
          </div>

          {/* User Menu */}
          <div className="nav-user">
            <div className="user-info">
              <div className="user-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div className="user-details">
                <div className="user-email">{user.email}</div>
                <div className="user-role">{user.role}</div>
              </div>
            </div>

            <button className="logout-btn" onClick={handleLogout}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Space+Grotesk:wght@400;500;600&display=swap');

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.25rem 0;
          font-family: 'Space Grotesk', sans-serif;
          pointer-events: none;
        }

        .navbar-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .navbar-container {
          background: rgba(10, 10, 15, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 0.875rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 2rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          pointer-events: auto;
        }

        /* Brand */
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: #fff;
          margin-right: auto;
          transition: transform 0.3s;
        }

        .navbar-brand:hover {
          transform: scale(1.05);
        }

        .brand-logo {
          width: 32px;
          height: 32px;
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
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          border: 1px solid rgba(255, 255, 255, 0.2);
          opacity: 0.8;
        }

        .cube-face.front { transform: rotateY(0deg) translateZ(16px); }
        .cube-face.back { transform: rotateY(180deg) translateZ(16px); }

        .brand-text {
          font-size: 1.5rem;
          font-weight: 800;
          font-family: 'Syne', sans-serif;
          background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Nav Links */
        .nav-links {
          display: flex;
          gap: 0.5rem;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1rem;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s;
          position: relative;
        }

        .nav-link svg {
          width: 18px;
          height: 18px;
        }

        .nav-link:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-link.active {
          color: #fff;
          background: rgba(79, 70, 229, 0.15);
          border: 1px solid rgba(79, 70, 229, 0.3);
        }

        .nav-link.active::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40%;
          height: 2px;
          background: #6366f1;
          border-radius: 2px 2px 0 0;
        }

        /* User Menu */
        .nav-user {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 0.875rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
        }

        .user-avatar {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .user-avatar svg {
          width: 18px;
          height: 18px;
        }

        .user-details {
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
        }

        .user-email {
          font-size: 0.8rem;
          font-weight: 600;
          color: #fff;
          max-width: 150px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .user-role {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1rem;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Space Grotesk', sans-serif;
        }

        .logout-btn svg {
          width: 18px;
          height: 18px;
        }

        .logout-btn:hover {
          background: rgba(239, 68, 68, 0.1);
          border-color: rgba(239, 68, 68, 0.3);
          color: #fca5a5;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .navbar-wrapper {
            padding: 0 1.5rem;
          }

          .navbar-container {
            flex-wrap: wrap;
            gap: 1rem;
          }

          .nav-links {
            order: 3;
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .navbar-wrapper {
            padding: 0 1rem;
          }

          .navbar-container {
            padding: 0.75rem 1rem;
          }

          .user-details {
            display: none;
          }

          .nav-link span,
          .logout-btn span {
            display: none;
          }

          .nav-link,
          .logout-btn {
            padding: 0.625rem;
          }

          .brand-text {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;