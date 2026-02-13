// import { Link } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";

// export default function Landing() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);
//   const heroRef = useRef(null);

//   useEffect(() => {
//     setIsVisible(true);
    
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div className="landing-container">
//       {/* Animated Background */}
//       <div className="background-layers">
//         <div className="gradient-orb gradient-orb-1"></div>
//         <div className="gradient-orb gradient-orb-2"></div>
//         <div className="gradient-orb gradient-orb-3"></div>
//         <div className="noise-overlay"></div>
//       </div>

//       {/* Cursor Follower */}
//       <div 
//         className="cursor-glow"
//         style={{
//           left: `${mousePosition.x}px`,
//           top: `${mousePosition.y}px`,
//         }}
//       ></div>

//       {/* Navigation */}
//       <nav className="navbar">
//         <div className="nav-content">
//           <div className="logo-section">
//             <div className="logo-icon">
//               <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </div>
//             <span className="logo-text">Eventify</span>
//           </div>

//           <div className="nav-links">
//             <Link to="/login" className="nav-link nav-link-login">
//               <span>Login</span>
//               <div className="link-underline"></div>
//             </Link>
//             <Link to="/register" className="nav-link nav-link-register">
//               <span>Get Started</span>
//               <div className="button-glow"></div>
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className={`hero-section ${isVisible ? 'visible' : ''}`} ref={heroRef}>
//         <div className="hero-content">
//           <div className="hero-badge">
//             <span className="badge-dot"></span>
//             <span>Cloud-Native Event Platform</span>
//           </div>

//           <h1 className="hero-title">
//             <span className="title-line title-line-1">Transform How</span>
//             <span className="title-line title-line-2">Events Come</span>
//             <span className="title-line title-line-3 gradient-text">To Life</span>
//           </h1>

//           <p className="hero-description">
//             Enterprise-grade event management powered by AWS microservices.
//             Create, manage, and scale events with zero downtime and 
//             race-condition-safe seat reservations.
//           </p>

//           <div className="hero-actions">
//             <Link to="/register" className="cta-primary">
//               <span className="cta-text">Start Building</span>
//               <svg className="cta-arrow" viewBox="0 0 16 16" fill="none">
//                 <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//               <div className="cta-shine"></div>
//             </Link>
//             <button className="cta-secondary">
//               <svg className="play-icon" viewBox="0 0 24 24" fill="none">
//                 <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
//                 <path d="M10 8L16 12L10 16V8Z" fill="currentColor"/>
//               </svg>
//               <span>See How It Works</span>
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="hero-stats">
//             <div className="stat-item">
//               <div className="stat-value">99.9%</div>
//               <div className="stat-label">Uptime SLA</div>
//             </div>
//             <div className="stat-divider"></div>
//             <div className="stat-item">
//               <div className="stat-value">&lt;50ms</div>
//               <div className="stat-label">Response Time</div>
//             </div>
//             <div className="stat-divider"></div>
//             <div className="stat-item">
//               <div className="stat-value">Zero</div>
//               <div className="stat-label">Downtime Deploys</div>
//             </div>
//           </div>
//         </div>

//         {/* Hero Visual */}
//         <div className="hero-visual">
//           <div className="visual-card card-1">
//             <div className="card-header">
//               <div className="card-status status-live"></div>
//               <span>Live Event</span>
//             </div>
//             <div className="card-content">
//               <div className="event-title">Tech Summit 2026</div>
//               <div className="event-stats">
//                 <div className="event-stat">
//                   <span className="stat-number">847</span>
//                   <span className="stat-text">Registered</span>
//                 </div>
//                 <div className="event-stat">
//                   <span className="stat-number">153</span>
//                   <span className="stat-text">Available</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="visual-card card-2">
//             <div className="card-header">
//               <div className="card-status status-processing"></div>
//               <span>Processing</span>
//             </div>
//             <div className="card-content">
//               <div className="progress-bar">
//                 <div className="progress-fill"></div>
//               </div>
//               <div className="progress-text">Sending confirmations...</div>
//             </div>
//           </div>

//           <div className="visual-card card-3">
//             <div className="card-header">
//               <div className="card-status status-success"></div>
//               <span>Completed</span>
//             </div>
//             <div className="card-content">
//               <div className="success-icon">
//                 <svg viewBox="0 0 24 24" fill="none">
//                   <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>
//               <div className="success-text">Reservation Confirmed</div>
//             </div>
//           </div>

//           {/* Floating Elements */}
//           <div className="floating-element element-1">
//             <div className="element-icon">⚡</div>
//           </div>
//           <div className="floating-element element-2">
//             <div className="element-icon">🎯</div>
//           </div>
//           <div className="floating-element element-3">
//             <div className="element-icon">🚀</div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="features-section">
//         <div className="section-header">
//           <div className="section-badge">Platform Features</div>
//           <h2 className="section-title">Built on AWS.<br/>Engineered for Scale.</h2>
//         </div>

//         <div className="features-grid">
//           <div className="feature-card">
//             <div className="feature-icon icon-microservices">
//               <svg viewBox="0 0 24 24" fill="none">
//                 <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
//                 <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
//                 <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
//                 <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
//               </svg>
//             </div>
//             <h3 className="feature-title">Microservices Architecture</h3>
//             <p className="feature-description">
//               Deployed on ECS Fargate with Application Load Balancer for optimal scalability and fault isolation.
//             </p>
//             <div className="feature-tech">
//               <span className="tech-tag">ECS</span>
//               <span className="tech-tag">Fargate</span>
//               <span className="tech-tag">ALB</span>
//             </div>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon icon-security">
//               <svg viewBox="0 0 24 24" fill="none">
//                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
//               </svg>
//             </div>
//             <h3 className="feature-title">Enterprise Security</h3>
//             <p className="feature-description">
//               JWT authentication, role-based access control, HTTPS via ACM, and IAM least-privilege roles.
//             </p>
//             <div className="feature-tech">
//               <span className="tech-tag">JWT</span>
//               <span className="tech-tag">RBAC</span>
//               <span className="tech-tag">ACM</span>
//             </div>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon icon-data">
//               <svg viewBox="0 0 24 24" fill="none">
//                 <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//               </svg>
//             </div>
//             <h3 className="feature-title">Race-Condition Safe</h3>
//             <p className="feature-description">
//               DynamoDB conditional writes ensure seat reservations never conflict, even under high load.
//             </p>
//             <div className="feature-tech">
//               <span className="tech-tag">DynamoDB</span>
//               <span className="tech-tag">Atomic Ops</span>
//             </div>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon icon-workflow">
//               <svg viewBox="0 0 24 24" fill="none">
//                 <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
//                 <polyline points="7.5 4.21 12 6.81 16.5 4.21" stroke="currentColor" strokeWidth="2"/>
//                 <polyline points="7.5 19.79 7.5 14.6 3 12" stroke="currentColor" strokeWidth="2"/>
//                 <polyline points="21 12 16.5 14.6 16.5 19.79" stroke="currentColor" strokeWidth="2"/>
//                 <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" strokeWidth="2"/>
//                 <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2"/>
//               </svg>
//             </div>
//             <h3 className="feature-title">Event-Driven Workflows</h3>
//             <p className="feature-description">
//               Asynchronous processing with SQS, Lambda, and SES for reliable email notifications.
//             </p>
//             <div className="feature-tech">
//               <span className="tech-tag">SQS</span>
//               <span className="tech-tag">Lambda</span>
//               <span className="tech-tag">SES</span>
//             </div>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon icon-cicd">
//               <svg viewBox="0 0 24 24" fill="none">
//                 <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
//                 <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//               </svg>
//             </div>
//             <h3 className="feature-title">Automated CI/CD</h3>
//             <p className="feature-description">
//               GitHub Actions with AWS OIDC for secure, automated deployments to ECR and ECS.
//             </p>
//             <div className="feature-tech">
//               <span className="tech-tag">GitHub Actions</span>
//               <span className="tech-tag">OIDC</span>
//             </div>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon icon-deploy">
//               <svg viewBox="0 0 24 24" fill="none">
//                 <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                 <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </div>
//             <h3 className="feature-title">Zero-Downtime Deploys</h3>
//             <p className="feature-description">
//               Rolling updates with health checks and load balancing ensure continuous availability.
//             </p>
//             <div className="feature-tech">
//               <span className="tech-tag">Rolling Updates</span>
//               <span className="tech-tag">Health Checks</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Architecture Section */}
//       <section className="architecture-section">
//         <div className="arch-content">
//           <div className="arch-text">
//             <div className="section-badge">System Architecture</div>
//             <h2 className="section-title">Production-Grade<br/>Infrastructure</h2>
//             <p className="arch-description">
//               Fully containerized with Docker, orchestrated locally via Docker Compose, 
//               and deployed on AWS ECS with automatic scaling, monitoring, and observability.
//             </p>
//             <ul className="arch-features">
//               <li className="arch-feature">
//                 <svg viewBox="0 0 24 24" fill="none">
//                   <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//                 <span>Containerized microservices with Docker</span>
//               </li>
//               <li className="arch-feature">
//                 <svg viewBox="0 0 24 24" fill="none">
//                   <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//                 <span>React frontend with modern tooling</span>
//               </li>
//               <li className="arch-feature">
//                 <svg viewBox="0 0 24 24" fill="none">
//                   <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//                 <span>Production-grade monitoring and logging</span>
//               </li>
//               <li className="arch-feature">
//                 <svg viewBox="0 0 24 24" fill="none">
//                   <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//                 <span>Externalized secrets and configuration</span>
//               </li>
//             </ul>
//           </div>

//           <div className="arch-visual">
//             <div className="arch-diagram">
//               <div className="diagram-layer layer-frontend">
//                 <div className="layer-label">Frontend</div>
//                 <div className="layer-box">React + Vite</div>
//               </div>
//               <div className="diagram-arrow"></div>
//               <div className="diagram-layer layer-lb">
//                 <div className="layer-label">Load Balancer</div>
//                 <div className="layer-box">ALB + ACM</div>
//               </div>
//               <div className="diagram-arrow"></div>
//               <div className="diagram-layer layer-services">
//                 <div className="layer-label">Microservices</div>
//                 <div className="service-boxes">
//                   <div className="layer-box small">Auth</div>
//                   <div className="layer-box small">Events</div>
//                   <div className="layer-box small">Booking</div>
//                 </div>
//               </div>
//               <div className="diagram-arrow"></div>
//               <div className="diagram-layer layer-data">
//                 <div className="layer-label">Data & Messaging</div>
//                 <div className="service-boxes">
//                   <div className="layer-box small">DynamoDB</div>
//                   <div className="layer-box small">SQS</div>
//                   <div className="layer-box small">Lambda</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="cta-section">
//         <div className="cta-content">
//           <h2 className="cta-title">Ready to Experience<br/>Next-Gen Event Management?</h2>
//           <p className="cta-description">
//             Join organizations leveraging cloud-native architecture for seamless event experiences.
//           </p>
//           <Link to="/register" className="cta-button">
//             <span>Get Started Free</span>
//             <svg viewBox="0 0 16 16" fill="none">
//               <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-content">
//           <div className="footer-brand">
//             <div className="footer-logo">
//               <svg viewBox="0 0 24 24" fill="none">
//                 <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//               <span>Eventify</span>
//             </div>
//             <p className="footer-tagline">Cloud-native event management platform</p>
//           </div>

//           <div className="footer-links">
//             <div className="footer-column">
//               <h4>Product</h4>
//               <a href="#">Features</a>
//               <a href="#">Pricing</a>
//               <a href="#">Documentation</a>
//             </div>
//             <div className="footer-column">
//               <h4>Company</h4>
//               <a href="#">About</a>
//               <a href="#">Blog</a>
//               <a href="#">Careers</a>
//             </div>
//             <div className="footer-column">
//               <h4>Resources</h4>
//               <a href="#">API Docs</a>
//               <a href="#">Support</a>
//               <a href="#">Status</a>
//             </div>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <p>© {new Date().getFullYear()} Eventify. Powered by AWS.</p>
//           <div className="footer-bottom-links">
//             <a href="#">Privacy</a>
//             <a href="#">Terms</a>
//             <a href="#">Security</a>
//           </div>
//         </div>
//       </footer>

//       <style jsx>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         .landing-container {
//           min-height: 100vh;
//           background: #0a0a0f;
//           color: #ffffff;
//           font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
//           overflow-x: hidden;
//           position: relative;
//         }

//         /* Background Layers */
//         .background-layers {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           pointer-events: none;
//           z-index: 0;
//         }

//         .gradient-orb {
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(120px);
//           opacity: 0.4;
//           animation: float 20s ease-in-out infinite;
//         }

//         .gradient-orb-1 {
//           width: 600px;
//           height: 600px;
//           background: radial-gradient(circle, #6366f1 0%, transparent 70%);
//           top: -200px;
//           left: -200px;
//           animation-delay: 0s;
//         }

//         .gradient-orb-2 {
//           width: 500px;
//           height: 500px;
//           background: radial-gradient(circle, #8b5cf6 0%, transparent 70%);
//           top: 50%;
//           right: -150px;
//           animation-delay: -7s;
//         }

//         .gradient-orb-3 {
//           width: 450px;
//           height: 450px;
//           background: radial-gradient(circle, #06b6d4 0%, transparent 70%);
//           bottom: -100px;
//           left: 30%;
//           animation-delay: -14s;
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translate(0, 0) scale(1);
//           }
//           33% {
//             transform: translate(50px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-30px, 30px) scale(0.9);
//           }
//         }

//         .noise-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
//           opacity: 0.03;
//           pointer-events: none;
//         }

//         /* Cursor Glow */
//         .cursor-glow {
//           position: fixed;
//           width: 400px;
//           height: 400px;
//           background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
//           transform: translate(-50%, -50%);
//           pointer-events: none;
//           z-index: 1;
//           transition: opacity 0.3s;
//         }

//         /* Navigation */
//         .navbar {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           z-index: 1000;
//           padding: 1.5rem 0;
//           backdrop-filter: blur(12px);
//           -webkit-backdrop-filter: blur(12px);
//           background: rgba(10, 10, 15, 0.7);
//           border-bottom: 1px solid rgba(255, 255, 255, 0.05);
//         }

//         .nav-content {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 0 2rem;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .logo-section {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//         }

//         .logo-icon {
//           width: 32px;
//           height: 32px;
//           color: #6366f1;
//           animation: logoFloat 3s ease-in-out infinite;
//         }

//         @keyframes logoFloat {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-4px); }
//         }

//         .logo-text {
//           font-size: 1.5rem;
//           font-weight: 700;
//           background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%);
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//           letter-spacing: -0.02em;
//         }

//         .nav-links {
//           display: flex;
//           gap: 1rem;
//           align-items: center;
//         }

//         .nav-link {
//           text-decoration: none;
//           color: #ffffff;
//           font-size: 0.95rem;
//           font-weight: 500;
//           position: relative;
//           padding: 0.5rem 1rem;
//           transition: color 0.3s;
//         }

//         .nav-link-login {
//           color: rgba(255, 255, 255, 0.7);
//         }

//         .nav-link-login:hover {
//           color: #ffffff;
//         }

//         .link-underline {
//           position: absolute;
//           bottom: 0;
//           left: 50%;
//           width: 0;
//           height: 2px;
//           background: #6366f1;
//           transition: width 0.3s, left 0.3s;
//         }

//         .nav-link-login:hover .link-underline {
//           width: 100%;
//           left: 0;
//         }

//         .nav-link-register {
//           background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
//           border-radius: 8px;
//           position: relative;
//           overflow: hidden;
//         }

//         .button-glow {
//           position: absolute;
//           top: -50%;
//           left: -50%;
//           width: 200%;
//           height: 200%;
//           background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
//           opacity: 0;
//           transition: opacity 0.3s;
//         }

//         .nav-link-register:hover .button-glow {
//           opacity: 1;
//           animation: buttonGlowMove 1.5s ease-in-out infinite;
//         }

//         @keyframes buttonGlowMove {
//           0% { transform: translate(-50%, -50%); }
//           100% { transform: translate(50%, 50%); }
//         }

//         /* Hero Section */
//         .hero-section {
//           position: relative;
//           z-index: 2;
//           padding: 180px 2rem 120px;
//           max-width: 1400px;
//           margin: 0 auto;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 4rem;
//           align-items: center;
//           opacity: 0;
//           transform: translateY(30px);
//           transition: opacity 1s, transform 1s;
//         }

//         .hero-section.visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .hero-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 0.5rem;
//           padding: 0.5rem 1rem;
//           background: rgba(99, 102, 241, 0.1);
//           border: 1px solid rgba(99, 102, 241, 0.3);
//           border-radius: 50px;
//           font-size: 0.85rem;
//           font-weight: 500;
//           color: #a5b4fc;
//           margin-bottom: 2rem;
//           animation: fadeInUp 0.8s 0.2s backwards;
//         }

//         .badge-dot {
//           width: 6px;
//           height: 6px;
//           background: #6366f1;
//           border-radius: 50%;
//           animation: pulse 2s ease-in-out infinite;
//         }

//         @keyframes pulse {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.5; transform: scale(0.8); }
//         }

//         .hero-title {
//           font-size: 4.5rem;
//           font-weight: 800;
//           line-height: 1.1;
//           margin-bottom: 1.5rem;
//           letter-spacing: -0.03em;
//         }

//         .title-line {
//           display: block;
//           opacity: 0;
//           transform: translateY(20px);
//         }

//         .title-line-1 {
//           animation: fadeInUp 0.8s 0.3s backwards;
//         }

//         .title-line-2 {
//           animation: fadeInUp 0.8s 0.4s backwards;
//         }

//         .title-line-3 {
//           animation: fadeInUp 0.8s 0.5s backwards;
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .gradient-text {
//           background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-size: 200% auto;
//           animation: gradientShift 3s ease-in-out infinite;
//         }

//         @keyframes gradientShift {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         .hero-description {
//           font-size: 1.25rem;
//           line-height: 1.7;
//           color: rgba(255, 255, 255, 0.7);
//           margin-bottom: 2.5rem;
//           max-width: 540px;
//           animation: fadeInUp 0.8s 0.6s backwards;
//         }

//         .hero-actions {
//           display: flex;
//           gap: 1rem;
//           margin-bottom: 4rem;
//           animation: fadeInUp 0.8s 0.7s backwards;
//         }

//         .cta-primary {
//           display: inline-flex;
//           align-items: center;
//           gap: 0.75rem;
//           padding: 1rem 2rem;
//           background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
//           color: #ffffff;
//           text-decoration: none;
//           border-radius: 12px;
//           font-size: 1.05rem;
//           font-weight: 600;
//           position: relative;
//           overflow: hidden;
//           transition: transform 0.3s, box-shadow 0.3s;
//         }

//         .cta-primary:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 20px 40px rgba(99, 102, 241, 0.4);
//         }

//         .cta-arrow {
//           width: 16px;
//           height: 16px;
//           transition: transform 0.3s;
//         }

//         .cta-primary:hover .cta-arrow {
//           transform: translateX(4px);
//         }

//         .cta-shine {
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
//           transition: left 0.5s;
//         }

//         .cta-primary:hover .cta-shine {
//           left: 100%;
//         }

//         .cta-secondary {
//           display: inline-flex;
//           align-items: center;
//           gap: 0.75rem;
//           padding: 1rem 2rem;
//           background: transparent;
//           border: 2px solid rgba(255, 255, 255, 0.1);
//           color: #ffffff;
//           border-radius: 12px;
//           font-size: 1.05rem;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s;
//         }

//         .cta-secondary:hover {
//           background: rgba(255, 255, 255, 0.05);
//           border-color: rgba(255, 255, 255, 0.2);
//         }

//         .play-icon {
//           width: 24px;
//           height: 24px;
//         }

//         /* Hero Stats */
//         .hero-stats {
//           display: flex;
//           gap: 2rem;
//           align-items: center;
//           animation: fadeInUp 0.8s 0.8s backwards;
//         }

//         .stat-item {
//           flex: 1;
//         }

//         .stat-value {
//           font-size: 2rem;
//           font-weight: 700;
//           color: #ffffff;
//           margin-bottom: 0.25rem;
//         }

//         .stat-label {
//           font-size: 0.9rem;
//           color: rgba(255, 255, 255, 0.5);
//         }

//         .stat-divider {
//           width: 1px;
//           height: 40px;
//           background: rgba(255, 255, 255, 0.1);
//         }

//         /* Hero Visual */
//         .hero-visual {
//           position: relative;
//           height: 600px;
//           animation: fadeInUp 0.8s 0.9s backwards;
//         }

//         .visual-card {
//           position: absolute;
//           background: rgba(255, 255, 255, 0.03);
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 16px;
//           padding: 1.5rem;
//           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
//           transition: transform 0.3s;
//         }

//         .visual-card:hover {
//           transform: translateY(-8px);
//         }

//         .card-1 {
//           top: 20px;
//           left: 0;
//           width: 280px;
//           animation: cardFloat 6s ease-in-out infinite;
//         }

//         .card-2 {
//           top: 200px;
//           right: 40px;
//           width: 260px;
//           animation: cardFloat 6s ease-in-out infinite;
//           animation-delay: -2s;
//         }

//         .card-3 {
//           bottom: 40px;
//           left: 60px;
//           width: 240px;
//           animation: cardFloat 6s ease-in-out infinite;
//           animation-delay: -4s;
//         }

//         @keyframes cardFloat {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//         }

//         .card-header {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           margin-bottom: 1rem;
//           font-size: 0.85rem;
//           color: rgba(255, 255, 255, 0.6);
//         }

//         .card-status {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//           animation: statusPulse 2s ease-in-out infinite;
//         }

//         .status-live {
//           background: #ef4444;
//           box-shadow: 0 0 10px #ef4444;
//         }

//         .status-processing {
//           background: #f59e0b;
//           box-shadow: 0 0 10px #f59e0b;
//         }

//         .status-success {
//           background: #10b981;
//           box-shadow: 0 0 10px #10b981;
//         }

//         @keyframes statusPulse {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.5; }
//         }

//         .event-title {
//           font-size: 1.1rem;
//           font-weight: 600;
//           margin-bottom: 1rem;
//           color: #ffffff;
//         }

//         .event-stats {
//           display: flex;
//           gap: 1.5rem;
//         }

//         .event-stat {
//           display: flex;
//           flex-direction: column;
//         }

//         .stat-number {
//           font-size: 1.5rem;
//           font-weight: 700;
//           color: #6366f1;
//         }

//         .stat-text {
//           font-size: 0.85rem;
//           color: rgba(255, 255, 255, 0.5);
//         }

//         .progress-bar {
//           width: 100%;
//           height: 8px;
//           background: rgba(255, 255, 255, 0.1);
//           border-radius: 4px;
//           overflow: hidden;
//           margin-bottom: 0.75rem;
//         }

//         .progress-fill {
//           width: 70%;
//           height: 100%;
//           background: linear-gradient(90deg, #6366f1, #8b5cf6);
//           border-radius: 4px;
//           animation: progressFill 2s ease-in-out infinite;
//         }

//         @keyframes progressFill {
//           0%, 100% { width: 70%; }
//           50% { width: 85%; }
//         }

//         .progress-text {
//           font-size: 0.9rem;
//           color: rgba(255, 255, 255, 0.7);
//         }

//         .success-icon {
//           width: 48px;
//           height: 48px;
//           background: rgba(16, 185, 129, 0.1);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin: 0 auto 0.75rem;
//         }

//         .success-icon svg {
//           width: 24px;
//           height: 24px;
//           color: #10b981;
//         }

//         .success-text {
//           text-align: center;
//           font-size: 0.95rem;
//           color: #ffffff;
//         }

//         /* Floating Elements */
//         .floating-element {
//           position: absolute;
//           animation: floatElement 8s ease-in-out infinite;
//         }

//         .element-1 {
//           top: 60px;
//           right: 20px;
//           animation-delay: 0s;
//         }

//         .element-2 {
//           bottom: 120px;
//           right: 100px;
//           animation-delay: -2.6s;
//         }

//         .element-3 {
//           top: 280px;
//           left: -20px;
//           animation-delay: -5.2s;
//         }

//         @keyframes floatElement {
//           0%, 100% {
//             transform: translate(0, 0) rotate(0deg);
//           }
//           33% {
//             transform: translate(20px, -20px) rotate(120deg);
//           }
//           66% {
//             transform: translate(-10px, 10px) rotate(240deg);
//           }
//         }

//         .element-icon {
//           font-size: 2rem;
//           filter: drop-shadow(0 4px 12px rgba(99, 102, 241, 0.3));
//         }

//         /* Features Section */
//         .features-section {
//           position: relative;
//           z-index: 2;
//           padding: 120px 2rem;
//           max-width: 1400px;
//           margin: 0 auto;
//         }

//         .section-header {
//           text-align: center;
//           margin-bottom: 5rem;
//         }

//         .section-badge {
//           display: inline-block;
//           padding: 0.5rem 1rem;
//           background: rgba(139, 92, 246, 0.1);
//           border: 1px solid rgba(139, 92, 246, 0.3);
//           border-radius: 50px;
//           font-size: 0.85rem;
//           font-weight: 500;
//           color: #c4b5fd;
//           margin-bottom: 1.5rem;
//         }

//         .section-title {
//           font-size: 3.5rem;
//           font-weight: 800;
//           line-height: 1.2;
//           letter-spacing: -0.02em;
//         }

//         .features-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 2rem;
//         }

//         .feature-card {
//           background: rgba(255, 255, 255, 0.02);
//           border: 1px solid rgba(255, 255, 255, 0.05);
//           border-radius: 20px;
//           padding: 2rem;
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           position: relative;
//           overflow: hidden;
//         }

//         .feature-card::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent);
//           opacity: 0;
//           transition: opacity 0.4s;
//         }

//         .feature-card:hover {
//           background: rgba(255, 255, 255, 0.04);
//           border-color: rgba(99, 102, 241, 0.3);
//           transform: translateY(-8px);
//         }

//         .feature-card:hover::before {
//           opacity: 1;
//         }

//         .feature-icon {
//           width: 56px;
//           height: 56px;
//           border-radius: 12px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-bottom: 1.5rem;
//           position: relative;
//         }

//         .feature-icon svg {
//           width: 28px;
//           height: 28px;
//           z-index: 1;
//         }

//         .icon-microservices {
//           background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(99, 102, 241, 0.05));
//           border: 1px solid rgba(99, 102, 241, 0.2);
//           color: #6366f1;
//         }

//         .icon-security {
//           background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05));
//           border: 1px solid rgba(139, 92, 246, 0.2);
//           color: #8b5cf6;
//         }

//         .icon-data {
//           background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(6, 182, 212, 0.05));
//           border: 1px solid rgba(6, 182, 212, 0.2);
//           color: #06b6d4;
//         }

//         .icon-workflow {
//           background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05));
//           border: 1px solid rgba(16, 185, 129, 0.2);
//           color: #10b981;
//         }

//         .icon-cicd {
//           background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05));
//           border: 1px solid rgba(245, 158, 11, 0.2);
//           color: #f59e0b;
//         }

//         .icon-deploy {
//           background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.05));
//           border: 1px solid rgba(236, 72, 153, 0.2);
//           color: #ec4899;
//         }

//         .feature-title {
//           font-size: 1.3rem;
//           font-weight: 700;
//           margin-bottom: 0.75rem;
//           color: #ffffff;
//         }

//         .feature-description {
//           font-size: 0.95rem;
//           line-height: 1.6;
//           color: rgba(255, 255, 255, 0.6);
//           margin-bottom: 1.25rem;
//         }

//         .feature-tech {
//           display: flex;
//           gap: 0.5rem;
//           flex-wrap: wrap;
//         }

//         .tech-tag {
//           padding: 0.35rem 0.75rem;
//           background: rgba(99, 102, 241, 0.1);
//           border: 1px solid rgba(99, 102, 241, 0.2);
//           border-radius: 6px;
//           font-size: 0.75rem;
//           font-weight: 500;
//           color: #a5b4fc;
//         }

//         /* Architecture Section */
//         .architecture-section {
//           position: relative;
//           z-index: 2;
//           padding: 120px 2rem;
//           background: rgba(255, 255, 255, 0.01);
//           border-top: 1px solid rgba(255, 255, 255, 0.05);
//           border-bottom: 1px solid rgba(255, 255, 255, 0.05);
//         }

//         .arch-content {
//           max-width: 1400px;
//           margin: 0 auto;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 6rem;
//           align-items: center;
//         }

//         .arch-description {
//           font-size: 1.1rem;
//           line-height: 1.7;
//           color: rgba(255, 255, 255, 0.7);
//           margin-bottom: 2rem;
//         }

//         .arch-features {
//           list-style: none;
//           display: flex;
//           flex-direction: column;
//           gap: 1rem;
//         }

//         .arch-feature {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           font-size: 1rem;
//           color: rgba(255, 255, 255, 0.8);
//         }

//         .arch-feature svg {
//           width: 20px;
//           height: 20px;
//           color: #10b981;
//           flex-shrink: 0;
//         }

//         .arch-visual {
//           position: relative;
//         }

//         .arch-diagram {
//           background: rgba(255, 255, 255, 0.02);
//           border: 1px solid rgba(255, 255, 255, 0.05);
//           border-radius: 20px;
//           padding: 3rem;
//           display: flex;
//           flex-direction: column;
//           gap: 1.5rem;
//         }

//         .diagram-layer {
//           display: flex;
//           flex-direction: column;
//           gap: 0.75rem;
//         }

//         .layer-label {
//           font-size: 0.85rem;
//           color: rgba(255, 255, 255, 0.5);
//           text-transform: uppercase;
//           letter-spacing: 0.05em;
//         }

//         .layer-box {
//           background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
//           border: 1px solid rgba(99, 102, 241, 0.3);
//           border-radius: 12px;
//           padding: 1rem 1.5rem;
//           text-align: center;
//           font-weight: 600;
//           color: #ffffff;
//           transition: all 0.3s;
//         }

//         .layer-box:hover {
//           background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
//           transform: scale(1.05);
//         }

//         .service-boxes {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 0.75rem;
//         }

//         .layer-box.small {
//           padding: 0.75rem 1rem;
//           font-size: 0.9rem;
//         }

//         .diagram-arrow {
//           width: 2px;
//           height: 20px;
//           background: linear-gradient(180deg, rgba(99, 102, 241, 0.5), rgba(99, 102, 241, 0.1));
//           margin: 0 auto;
//           position: relative;
//         }

//         .diagram-arrow::after {
//           content: '';
//           position: absolute;
//           bottom: -4px;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 0;
//           height: 0;
//           border-left: 4px solid transparent;
//           border-right: 4px solid transparent;
//           border-top: 6px solid rgba(99, 102, 241, 0.5);
//         }

//         /* CTA Section */
//         .cta-section {
//           position: relative;
//           z-index: 2;
//           padding: 120px 2rem;
//           max-width: 1000px;
//           margin: 0 auto;
//           text-align: center;
//         }

//         .cta-content {
//           background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
//           border: 1px solid rgba(99, 102, 241, 0.2);
//           border-radius: 24px;
//           padding: 4rem 3rem;
//           position: relative;
//           overflow: hidden;
//         }

//         .cta-content::before {
//           content: '';
//           position: absolute;
//           top: -50%;
//           left: -50%;
//           width: 200%;
//           height: 200%;
//           background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
//           animation: ctaRotate 10s linear infinite;
//         }

//         @keyframes ctaRotate {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         .cta-title {
//           font-size: 3rem;
//           font-weight: 800;
//           line-height: 1.2;
//           margin-bottom: 1.5rem;
//           position: relative;
//           z-index: 1;
//         }

//         .cta-description {
//           font-size: 1.2rem;
//           color: rgba(255, 255, 255, 0.7);
//           margin-bottom: 2.5rem;
//           position: relative;
//           z-index: 1;
//         }

//         .cta-button {
//           display: inline-flex;
//           align-items: center;
//           gap: 0.75rem;
//           padding: 1.25rem 2.5rem;
//           background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
//           color: #ffffff;
//           text-decoration: none;
//           border-radius: 12px;
//           font-size: 1.1rem;
//           font-weight: 600;
//           position: relative;
//           z-index: 1;
//           transition: transform 0.3s, box-shadow 0.3s;
//         }

//         .cta-button:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 20px 50px rgba(99, 102, 241, 0.5);
//         }

//         .cta-button svg {
//           width: 18px;
//           height: 18px;
//           transition: transform 0.3s;
//         }

//         .cta-button:hover svg {
//           transform: translateX(5px);
//         }

//         /* Footer */
//         .footer {
//           position: relative;
//           z-index: 2;
//           padding: 4rem 2rem 2rem;
//           background: rgba(255, 255, 255, 0.01);
//           border-top: 1px solid rgba(255, 255, 255, 0.05);
//         }

//         .footer-content {
//           max-width: 1400px;
//           margin: 0 auto;
//           display: grid;
//           grid-template-columns: 1.5fr 1fr 1fr 1fr;
//           gap: 3rem;
//           margin-bottom: 3rem;
//         }

//         .footer-logo {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           margin-bottom: 1rem;
//         }

//         .footer-logo svg {
//           width: 28px;
//           height: 28px;
//           color: #6366f1;
//         }

//         .footer-logo span {
//           font-size: 1.3rem;
//           font-weight: 700;
//           color: #ffffff;
//         }

//         .footer-tagline {
//           font-size: 0.95rem;
//           color: rgba(255, 255, 255, 0.5);
//         }

//         .footer-column h4 {
//           font-size: 0.95rem;
//           font-weight: 600;
//           color: #ffffff;
//           margin-bottom: 1rem;
//         }

//         .footer-column a {
//           display: block;
//           font-size: 0.9rem;
//           color: rgba(255, 255, 255, 0.6);
//           text-decoration: none;
//           margin-bottom: 0.75rem;
//           transition: color 0.3s;
//         }

//         .footer-column a:hover {
//           color: #6366f1;
//         }

//         .footer-bottom {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding-top: 2rem;
//           border-top: 1px solid rgba(255, 255, 255, 0.05);
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           font-size: 0.9rem;
//           color: rgba(255, 255, 255, 0.5);
//         }

//         .footer-bottom-links {
//           display: flex;
//           gap: 2rem;
//         }

//         .footer-bottom-links a {
//           color: rgba(255, 255, 255, 0.5);
//           text-decoration: none;
//           transition: color 0.3s;
//         }

//         .footer-bottom-links a:hover {
//           color: #ffffff;
//         }

//         /* Responsive Design */
//         @media (max-width: 1024px) {
//           .hero-section {
//             grid-template-columns: 1fr;
//             padding-top: 140px;
//           }

//           .hero-title {
//             font-size: 3.5rem;
//           }

//           .hero-visual {
//             height: 500px;
//           }

//           .features-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }

//           .arch-content {
//             grid-template-columns: 1fr;
//           }

//           .footer-content {
//             grid-template-columns: 1fr 1fr;
//           }
//         }

//         @media (max-width: 768px) {
//           .nav-content {
//             padding: 0 1.5rem;
//           }

//           .hero-title {
//             font-size: 2.5rem;
//           }

//           .hero-description {
//             font-size: 1.1rem;
//           }

//           .hero-actions {
//             flex-direction: column;
//           }

//           .features-grid {
//             grid-template-columns: 1fr;
//           }

//           .section-title {
//             font-size: 2.5rem;
//           }

//           .cta-title {
//             font-size: 2rem;
//           }

//           .footer-content {
//             grid-template-columns: 1fr;
//           }

//           .footer-bottom {
//             flex-direction: column;
//             gap: 1rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// // }
// import { Link } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";

// export default function Landing() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [scrollY, setScrollY] = useState(0);
//   const [currentWord, setCurrentWord] = useState(0);
//   const titleWords = ["Events", "Tickets", "Bookings", "Moments"];

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ 
//         x: (e.clientX / window.innerWidth) * 2 - 1,
//         y: (e.clientY / window.innerHeight) * 2 - 1
//       });
//     };

//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     // Word rotation effect
//     const wordInterval = setInterval(() => {
//       setCurrentWord((prev) => (prev + 1) % titleWords.length);
//     }, 3000);

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("scroll", handleScroll);
//       clearInterval(wordInterval);
//     };
//   }, []);

//   return (
//     <div className="landing">
//       {/* Particle Background */}
//       <div className="particle-field">
//         {[...Array(50)].map((_, i) => (
//           <div 
//             key={i} 
//             className="particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${3 + Math.random() * 4}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Gradient Mesh */}
//       <div className="gradient-mesh">
//         <div className="mesh-gradient-1"></div>
//         <div className="mesh-gradient-2"></div>
//         <div className="mesh-gradient-3"></div>
//       </div>

//       {/* Grid Overlay */}
//       <div className="grid-overlay">
//         <div className="grid-container">
//           {[...Array(20)].map((_, i) => (
//             <div key={`v-${i}`} className="grid-v-line" style={{ left: `${i * 5}%` }} />
//           ))}
//           {[...Array(20)].map((_, i) => (
//             <div key={`h-${i}`} className="grid-h-line" style={{ top: `${i * 5}%` }} />
//           ))}
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="nav">
//         <div className="nav-container">
//           <div className="nav-left">
//             <div className="logo">
//               <div className="logo-3d">
//                 <div className="cube">
//                   <div className="cube-side front"></div>
//                   <div className="cube-side back"></div>
//                   <div className="cube-side left"></div>
//                   <div className="cube-side right"></div>
//                   <div className="cube-side top"></div>
//                   <div className="cube-side bottom"></div>
//                 </div>
//               </div>
//               <span className="logo-text">Eventify</span>
//             </div>
//             <span className="nav-edition">Winter '26</span>
//           </div>

//           <div className="nav-right">
//             <Link to="/login" className="nav-link">Sign In</Link>
//             <Link to="/register" className="nav-cta">
//               <span>Start for free</span>
//               <div className="cta-glow"></div>
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-container">
//           {/* Badge */}
//           <div className="hero-badge">
//             <span className="badge-pulse"></span>
//             <span>THE CLOUD-NATIVE EDITION</span>
//           </div>

//           {/* Main Title */}
//           <h1 className="hero-title">
//             <span className="title-line">
//               <span className="title-text">Transform</span>
//             </span>
//             <span className="title-line">
//               <span className="title-text title-rotate">
//                 {titleWords.map((word, i) => (
//                   <span 
//                     key={word}
//                     className={`rotating-word ${i === currentWord ? 'active' : ''}`}
//                   >
//                     {word}
//                   </span>
//                 ))}
//               </span>
//             </span>
//             <span className="title-line">
//               <span className="title-text title-gradient">Forever</span>
//             </span>
//           </h1>

//           {/* Subtitle */}
//           <p className="hero-description">
//             A microservices masterpiece deployed on <span className="highlight">AWS ECS Fargate</span>.
//             <br />
//             Race-condition-safe. Zero-downtime. Production-grade.
//           </p>

//           {/* Stats */}
//           <div className="hero-stats">
//             <div className="stat-item">
//               <div className="stat-number">
//                 <span className="number-main">99.9</span>
//                 <span className="number-unit">%</span>
//               </div>
//               <div className="stat-label">Uptime SLA</div>
//             </div>
            
//             <div className="stat-divider" />
            
//             <div className="stat-item">
//               <div className="stat-number">
//                 <span className="number-main">&lt;50</span>
//                 <span className="number-unit">ms</span>
//               </div>
//               <div className="stat-label">Response Time</div>
//             </div>
            
//             <div className="stat-divider" />
            
//             <div className="stat-item">
//               <div className="stat-number">
//                 <span className="number-main">∞</span>
//               </div>
//               <div className="stat-label">Scalability</div>
//             </div>
//           </div>

//           {/* CTA Buttons */}
//           <div className="hero-actions">
//             <Link to="/register" className="btn-primary-large">
//               <span className="btn-content">
//                 <span className="btn-text">Launch Platform</span>
//                 <svg className="btn-arrow" viewBox="0 0 24 24" fill="none">
//                   <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </span>
//               <div className="btn-shine"></div>
//             </Link>

//             <button className="btn-secondary-large">
//               <div className="play-btn">
//                 <svg viewBox="0 0 24 24" fill="none">
//                   <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
//                   <path d="M10 8L16 12L10 16V8Z" fill="currentColor"/>
//                 </svg>
//               </div>
//               <span>Watch Demo</span>
//             </button>
//           </div>
//         </div>

//         {/* Floating Visual Elements */}
//         <div className="hero-visuals">
//           {/* Animated Card 1 - Live Event */}
//           <div 
//             className="floating-card card-1"
//             style={{
//               transform: `
//                 translateY(${scrollY * 0.15}px) 
//                 rotateY(${mousePosition.x * 5}deg) 
//                 rotateX(${-mousePosition.y * 5}deg)
//               `
//             }}
//           >
//             <div className="card-shine"></div>
//             <div className="card-content">
//               <div className="card-header">
//                 <div className="status-indicator status-live">
//                   <span className="pulse-ring"></span>
//                   <span className="pulse-dot"></span>
//                 </div>
//                 <span className="status-text">LIVE NOW</span>
//                 <span className="card-time">2h 14m</span>
//               </div>
//               <h3 className="card-title">AWS re:Invent 2026</h3>
//               <div className="card-stats">
//                 <div className="card-stat">
//                   <div className="stat-val">2,847</div>
//                   <div className="stat-lbl">Registered</div>
//                 </div>
//                 <div className="card-stat">
//                   <div className="stat-val">153</div>
//                   <div className="stat-lbl">Available</div>
//                 </div>
//               </div>
//               <div className="capacity-bar">
//                 <div className="capacity-fill" style={{ width: '73%' }}>
//                   <div className="capacity-glow"></div>
//                 </div>
//                 <span className="capacity-text">73% Full</span>
//               </div>
//             </div>
//           </div>

//           {/* Animated Card 2 - Processing */}
//           <div 
//             className="floating-card card-2"
//             style={{
//               transform: `
//                 translateY(${scrollY * -0.12}px) 
//                 rotateY(${mousePosition.x * -3}deg) 
//                 rotateX(${-mousePosition.y * 3}deg)
//               `
//             }}
//           >
//             <div className="card-shine"></div>
//             <div className="card-content">
//               <div className="card-header">
//                 <div className="status-indicator status-process">
//                   <div className="spinner"></div>
//                 </div>
//                 <span className="status-text">PROCESSING</span>
//               </div>
//               <div className="process-info">
//                 <div className="process-icon">
//                   <svg viewBox="0 0 24 24" fill="none">
//                     <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
//                   </svg>
//                 </div>
//                 <div className="process-text">
//                   <div className="process-title">Email Confirmations</div>
//                   <div className="process-subtitle">847 / 1000 sent</div>
//                 </div>
//               </div>
//               <div className="progress-track">
//                 <div className="progress-fill">
//                   <div className="progress-glow"></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Animated Card 3 - Success */}
//           <div 
//             className="floating-card card-3"
//             style={{
//               transform: `
//                 translateY(${scrollY * 0.08}px) 
//                 rotateY(${mousePosition.x * 4}deg) 
//                 rotateX(${-mousePosition.y * 4}deg)
//               `
//             }}
//           >
//             <div className="card-shine"></div>
//             <div className="card-content">
//               <div className="success-icon-wrap">
//                 <div className="success-icon">
//                   <svg viewBox="0 0 24 24" fill="none">
//                     <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
//                     <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//               </div>
//               <div className="success-text">Reservation Confirmed</div>
//               <div className="success-subtext">Booking ID: #EVT-2026-847</div>
//             </div>
//           </div>

//           {/* 3D Floating Objects */}
//           {/* <div className="object-3d object-1" style={{
//             transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px) rotate(${scrollY * 0.1}deg)`
//           }}>
//             <div className="object-sphere"></div>
//           </div>

//           <div className="object-3d object-2" style={{
//             transform: `translateY(${Math.cos(scrollY * 0.008) * 30}px) rotate(${-scrollY * 0.15}deg)`
//           }}>
//             <div className="object-torus"></div>
//           </div> */}
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="features">
//         <div className="features-container">
//           <div className="section-header">
//             <div className="section-tag">PLATFORM ARCHITECTURE</div>
//             <h2 className="section-title">
//               Built on AWS.
//               <br />
//               <span className="title-accent">Engineered to Scale.</span>
//             </h2>
//           </div>

//           <div className="features-grid">
//             {[
//               {
//                 icon: (
//                   <svg viewBox="0 0 24 24" fill="none">
//                     <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
//                     <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
//                     <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
//                     <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
//                   </svg>
//                 ),
//                 title: "Microservices",
//                 desc: "Deployed on ECS Fargate with Application Load Balancer for optimal scalability and fault isolation.",
//                 tags: ["ECS", "Fargate", "ALB"],
//                 color: "blue"
//               },
//               {
//                 icon: (
//                   <svg viewBox="0 0 24 24" fill="none">
//                     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
//                   </svg>
//                 ),
//                 title: "Security First",
//                 desc: "JWT authentication, RBAC, HTTPS via ACM, and IAM least-privilege roles ensure enterprise-grade protection.",
//                 tags: ["JWT", "RBAC", "ACM"],
//                 color: "purple"
//               },
//               {
//                 icon: (
//                   <svg viewBox="0 0 24 24" fill="none">
//                     <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                   </svg>
//                 ),
//                 title: "Atomic Operations",
//                 desc: "DynamoDB conditional writes ensure seat reservations never conflict, even under extreme load.",
//                 tags: ["DynamoDB", "ACID"],
//                 color: "cyan"
//               },
//               {
//                 icon: (
//                   <svg viewBox="0 0 24 24" fill="none">
//                     <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
//                   </svg>
//                 ),
//                 title: "Event-Driven",
//                 desc: "Asynchronous workflows with SQS, Lambda, and SES for reliable, scalable email notifications.",
//                 tags: ["SQS", "Lambda", "SES"],
//                 color: "green"
//               },
//               {
//                 icon: (
//                   <svg viewBox="0 0 24 24" fill="none">
//                     <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
//                     <path d="M12 1v6m0 6v6M23 12h-6m-6 0H1" stroke="currentColor" strokeWidth="2"/>
//                   </svg>
//                 ),
//                 title: "CI/CD Pipeline",
//                 desc: "GitHub Actions with AWS OIDC for secure, automated deployments to ECR and ECS.",
//                 tags: ["Actions", "OIDC"],
//                 color: "orange"
//               },
//               {
//                 icon: (
//                   <svg viewBox="0 0 24 24" fill="none">
//                     <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2"/>
//                     <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 ),
//                 title: "Zero Downtime",
//                 desc: "Rolling updates with health checks and load balancing ensure continuous availability.",
//                 tags: ["Rolling", "Health Checks"],
//                 color: "pink"
//               }
//             ].map((feature, i) => (
//               <div key={i} className="feature-card" data-color={feature.color}>
//                 <div className="feature-icon-wrap">
//                   <div className="feature-icon">{feature.icon}</div>
//                 </div>
//                 <h3 className="feature-title">{feature.title}</h3>
//                 <p className="feature-desc">{feature.desc}</p>
//                 <div className="feature-tags">
//                   {feature.tags.map((tag, j) => (
//                     <span key={j} className="tag">{tag}</span>
//                   ))}
//                 </div>
//                 <div className="feature-hover-effect"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="cta-section">
//         <div className="cta-container">
//           <div className="cta-content">
//             <h2 className="cta-title">
//               Ready for the
//               <br />
//               <span className="cta-accent">Next Generation</span>
//               <br />
//               of Events?
//             </h2>
//             <Link to="/register" className="cta-button">
//               <span className="cta-btn-text">Get Started</span>
//               <svg className="cta-btn-icon" viewBox="0 0 24 24" fill="none">
//                 <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2"/>
//               </svg>
//               <div className="cta-btn-glow"></div>
//             </Link>
//           </div>
//           <div className="cta-visual">
//             <div className="cta-orb"></div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-container">
//           {/* Top Section */}
//           <div className="footer-top">
//             <div className="footer-brand-section">
//               <div className="footer-logo">
//                 <div className="logo-3d-small">
//                   <div className="cube-small">
//                     <div className="cube-side front"></div>
//                     <div className="cube-side back"></div>
//                     <div className="cube-side left"></div>
//                     <div className="cube-side right"></div>
//                     <div className="cube-side top"></div>
//                     <div className="cube-side bottom"></div>
//                   </div>
//                 </div>
//                 <span className="footer-logo-text">Eventify</span>
//               </div>
//               <p className="footer-tagline">
//                 Cloud-native event management platform.
//                 <br />
//                 Built on AWS. Engineered for scale.
//               </p>
//               <div className="footer-socials">
//                 <a href="#" className="social-link" aria-label="Twitter">
//                   <svg viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//                   </svg>
//                 </a>
//                 <a href="#" className="social-link" aria-label="GitHub">
//                   <svg viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
//                   </svg>
//                 </a>
//                 <a href="#" className="social-link" aria-label="LinkedIn">
//                   <svg viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>

//             <div className="footer-links-grid">
//               <div className="footer-col">
//                 <h4 className="footer-col-title">Product</h4>
//                 <ul className="footer-links-list">
//                   <li><a href="#">Features</a></li>
//                   <li><a href="#">Pricing</a></li>
//                   <li><a href="#">Security</a></li>
//                   <li><a href="#">Roadmap</a></li>
//                 </ul>
//               </div>

//               <div className="footer-col">
//                 <h4 className="footer-col-title">Platform</h4>
//                 <ul className="footer-links-list">
//                   <li><a href="#">API Reference</a></li>
//                   <li><a href="#">Documentation</a></li>
//                   <li><a href="#">Integrations</a></li>
//                   <li><a href="#">Status</a></li>
//                 </ul>
//               </div>

//               <div className="footer-col">
//                 <h4 className="footer-col-title">Company</h4>
//                 <ul className="footer-links-list">
//                   <li><a href="#">About</a></li>
//                   <li><a href="#">Blog</a></li>
//                   <li><a href="#">Careers</a></li>
//                   <li><a href="#">Press</a></li>
//                 </ul>
//               </div>

//               <div className="footer-col">
//                 <h4 className="footer-col-title">Resources</h4>
//                 <ul className="footer-links-list">
//                   <li><a href="#">Community</a></li>
//                   <li><a href="#">Support</a></li>
//                   <li><a href="#">Partners</a></li>
//                   <li><a href="#">Contact</a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="footer-bottom">
//             <div className="footer-bottom-left">
//               <p className="footer-copyright">
//                 © {new Date().getFullYear()} Eventify Inc. All rights reserved.
//               </p>
//               <div className="footer-badge">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
//                   <path d="M2 17L12 22L22 17"/>
//                   <path d="M2 12L12 17L22 12"/>
//                 </svg>
//                 <span>Powered by AWS</span>
//               </div>
//             </div>

//             <div className="footer-bottom-right">
//               <a href="#" className="footer-legal-link">Privacy Policy</a>
//               <span className="footer-separator">•</span>
//               <a href="#" className="footer-legal-link">Terms of Service</a>
//               <span className="footer-separator">•</span>
//               <a href="#" className="footer-legal-link">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         .landing {
//           background: #0a0a0f;
//           color: #fff;
//           font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif;
//           min-height: 100vh;
//           overflow-x: hidden;
//           position: relative;
//         }

//         /* Particle Field */
//         .particle-field {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           pointer-events: none;
//           z-index: 1;
//         }

//         .particle {
//           position: absolute;
//           width: 2px;
//           height: 2px;
//           background: rgba(255, 255, 255, 0.4);
//           border-radius: 50%;
//           animation: particleFloat 5s ease-in-out infinite;
//         }

//         @keyframes particleFloat {
//           0%, 100% {
//             opacity: 0;
//             transform: translateY(0) scale(0);
//           }
//           50% {
//             opacity: 1;
//             transform: translateY(-100px) scale(1);
//           }
//         }

//         /* Gradient Mesh */
//         .gradient-mesh {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           pointer-events: none;
//           z-index: 0;
//         }

//         .mesh-gradient-1,
//         .mesh-gradient-2,
//         .mesh-gradient-3 {
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(100px);
//           opacity: 0.3;
//           animation: meshFloat 20s ease-in-out infinite;
//         }

//         .mesh-gradient-1 {
//           width: 600px;
//           height: 600px;
//           background: radial-gradient(circle, #4f46e5 0%, transparent 70%);
//           top: -200px;
//           left: -200px;
//         }

//         .mesh-gradient-2 {
//           width: 500px;
//           height: 500px;
//           background: radial-gradient(circle, #7c3aed 0%, transparent 70%);
//           top: 40%;
//           right: -150px;
//           animation-delay: -7s;
//         }

//         .mesh-gradient-3 {
//           width: 550px;
//           height: 550px;
//           background: radial-gradient(circle, #06b6d4 0%, transparent 70%);
//           bottom: -100px;
//           left: 30%;
//           animation-delay: -14s;
//         }

//         @keyframes meshFloat {
//           0%, 100% {
//             transform: translate(0, 0) scale(1);
//           }
//           33% {
//             transform: translate(50px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-50px, 50px) scale(0.9);
//           }
//         }

//         /* Grid Overlay */
//         .grid-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           pointer-events: none;
//           z-index: 1;
//           opacity: 0.03;
//         }

//         .grid-v-line,
//         .grid-h-line {
//           position: absolute;
//           background: rgba(255, 255, 255, 0.1);
//         }

//         .grid-v-line {
//           width: 1px;
//           height: 100%;
//         }

//         .grid-h-line {
//           width: 100%;
//           height: 1px;
//         }

//         /* Navigation */
//         .nav {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           z-index: 1000;
//           background: rgba(10, 10, 15, 0.8);
//           backdrop-filter: blur(20px);
//           border-bottom: 1px solid rgba(255, 255, 255, 0.05);
//         }

//         .nav-container {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 1.25rem 2rem;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .nav-left {
//           display: flex;
//           align-items: center;
//           gap: 2rem;
//         }

//         .logo {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//         }

//         .logo-3d {
//           width: 32px;
//           height: 32px;
//           perspective: 1000px;
//         }

//         .cube {
//           width: 100%;
//           height: 100%;
//           position: relative;
//           transform-style: preserve-3d;
//           animation: cubeRotate 10s infinite linear;
//         }

//         @keyframes cubeRotate {
//           from {
//             transform: rotateX(0deg) rotateY(0deg);
//           }
//           to {
//             transform: rotateX(360deg) rotateY(360deg);
//           }
//         }

//         .cube-side {
//           position: absolute;
//           width: 32px;
//           height: 32px;
//           background: linear-gradient(135deg, #4f46e5, #7c3aed);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           opacity: 0.8;
//         }

//         .cube-side.front  { transform: rotateY(0deg) translateZ(16px); }
//         .cube-side.back   { transform: rotateY(180deg) translateZ(16px); }
//         .cube-side.right  { transform: rotateY(90deg) translateZ(16px); }
//         .cube-side.left   { transform: rotateY(-90deg) translateZ(16px); }
//         .cube-side.top    { transform: rotateX(90deg) translateZ(16px); }
//         .cube-side.bottom { transform: rotateX(-90deg) translateZ(16px); }

//         .logo-text {
//           font-size: 1.5rem;
//           font-weight: 700;
//           font-family: 'Syne', sans-serif;
//           background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .nav-edition {
//           font-size: 0.85rem;
//           color: rgba(255, 255, 255, 0.5);
//           font-weight: 500;
//         }

//         .nav-right {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//         }

//         .nav-link {
//           color: rgba(255, 255, 255, 0.7);
//           text-decoration: none;
//           font-size: 0.95rem;
//           font-weight: 500;
//           padding: 0.5rem 1rem;
//           transition: color 0.3s;
//         }

//         .nav-link:hover {
//           color: #fff;
//         }

//         .nav-cta {
//           position: relative;
//           padding: 0.6rem 1.5rem;
//           background: #fff;
//           color: #0a0a0f;
//           text-decoration: none;
//           font-size: 0.95rem;
//           font-weight: 600;
//           border-radius: 8px;
//           overflow: hidden;
//           transition: transform 0.2s;
//         }

//         .nav-cta:hover {
//           transform: translateY(-2px);
//         }

//         .cta-glow {
//           position: absolute;
//           inset: -2px;
//           background: linear-gradient(135deg, #4f46e5, #7c3aed);
//           z-index: -1;
//           opacity: 0;
//           transition: opacity 0.3s;
//           filter: blur(8px);
//         }

//         .nav-cta:hover .cta-glow {
//           opacity: 1;
//         }

//         /* Hero Section */
//         .hero {
//           position: relative;
//           z-index: 2;
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           padding: 8rem 2rem 4rem;
//         }

//         .hero-container {
//           max-width: 1400px;
//           margin: 0 auto;
//           width: 100%;
//         }

//         .hero-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 0.5rem;
//           padding: 0.5rem 1.25rem;
//           background: rgba(79, 70, 229, 0.1);
//           border: 1px solid rgba(79, 70, 229, 0.3);
//           border-radius: 50px;
//           font-size: 0.75rem;
//           font-weight: 600;
//           letter-spacing: 0.05em;
//           color: #a5b4fc;
//           margin-bottom: 3rem;
//           animation: badgeFadeIn 0.8s ease-out;
//         }

//         @keyframes badgeFadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .badge-pulse {
//           width: 6px;
//           height: 6px;
//           background: #4f46e5;
//           border-radius: 50%;
//           animation: pulse 2s ease-in-out infinite;
//         }

//         @keyframes pulse {
//           0%, 100% {
//             opacity: 1;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.5;
//             transform: scale(0.8);
//           }
//         }

//         /* Hero Title - MASSIVE */
//         .hero-title {
//           font-family: 'Syne', sans-serif;
//           font-size: clamp(3.5rem, 12vw, 9rem);
//           font-weight: 800;
//           line-height: 0.95;
//           margin-bottom: 2rem;
//           letter-spacing: -0.03em;
//         }

//         .title-line {
//           display: block;
//           overflow: hidden;
//         }

//         .title-text {
//           display: inline-block;
//           animation: titleSlideUp 1s cubic-bezier(0.22, 1, 0.36, 1) backwards;
//         }

//         .title-line:nth-child(1) .title-text {
//           animation-delay: 0.1s;
//         }

//         .title-line:nth-child(2) .title-text {
//           animation-delay: 0.2s;
//         }

//         .title-line:nth-child(3) .title-text {
//           animation-delay: 0.3s;
//         }

//         @keyframes titleSlideUp {
//           from {
//             transform: translateY(100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         .title-rotate {
//           position: relative;
//           display: inline-block;
//           height: 1.2em;
//           vertical-align: bottom;
//         }

//         .rotating-word {
//           position: absolute;
//           left: 0;
//           top: 0;
//           opacity: 0;
//           transform: translateY(20px);
//           transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
//         }

//         .rotating-word.active {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .title-gradient {
//           background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #06b6d4 100%);
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-size: 200% auto;
//           animation: gradientFlow 4s ease infinite;
//         }

//         @keyframes gradientFlow {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }

//         /* Hero Description */
//         .hero-description {
//           font-size: clamp(1.1rem, 2vw, 1.4rem);
//           line-height: 1.6;
//           color: rgba(255, 255, 255, 0.7);
//           max-width: 700px;
//           margin-bottom: 3rem;
//           animation: fadeIn 1s ease-out 0.5s backwards;
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .highlight {
//           color: #a5b4fc;
//           font-weight: 600;
//         }

//         /* Hero Stats */
//         .hero-stats {
//           display: flex;
//           gap: 3rem;
//           align-items: center;
//           margin-bottom: 3rem;
//           animation: fadeIn 1s ease-out 0.6s backwards;
//         }

//         .stat-item {
//           flex: 0 0 auto;
//         }

//         .stat-number {
//           display: flex;
//           align-items: baseline;
//           gap: 0.25rem;
//           margin-bottom: 0.5rem;
//         }

//         .number-main {
//           font-size: 2.5rem;
//           font-weight: 700;
//           font-family: 'Syne', sans-serif;
//         }

//         .number-unit {
//           font-size: 1.25rem;
//           color: rgba(255, 255, 255, 0.5);
//         }

//         .stat-label {
//           font-size: 0.9rem;
//           color: rgba(255, 255, 255, 0.5);
//           font-weight: 500;
//         }

//         .stat-divider {
//           width: 1px;
//           height: 40px;
//           background: rgba(255, 255, 255, 0.1);
//         }

//         /* Hero Actions */
//         .hero-actions {
//           display: flex;
//           gap: 1rem;
//           margin-bottom: 4rem;
//           animation: fadeIn 1s ease-out 0.7s backwards;
//         }

//         .btn-primary-large {
//           position: relative;
//           padding: 1.25rem 2.5rem;
//           background: #fff;
//           color: #0a0a0f;
//           text-decoration: none;
//           font-size: 1.1rem;
//           font-weight: 600;
//           border-radius: 12px;
//           overflow: hidden;
//           transition: transform 0.3s, box-shadow 0.3s;
//           display: inline-flex;
//           align-items: center;
//         }

//         .btn-primary-large:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 20px 50px rgba(79, 70, 229, 0.5);
//         }

//         .btn-content {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           position: relative;
//           z-index: 1;
//         }

//         .btn-arrow {
//           width: 20px;
//           height: 20px;
//           transition: transform 0.3s;
//         }

//         .btn-primary-large:hover .btn-arrow {
//           transform: translateX(4px);
//         }

//         .btn-shine {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(90deg, transparent, rgba(79, 70, 229, 0.2), transparent);
//           transform: translateX(-100%);
//           transition: transform 0.6s;
//         }

//         .btn-primary-large:hover .btn-shine {
//           transform: translateX(100%);
//         }

//         .btn-secondary-large {
//           padding: 1.25rem 2rem;
//           background: transparent;
//           border: 2px solid rgba(255, 255, 255, 0.1);
//           color: #fff;
//           font-size: 1.1rem;
//           font-weight: 600;
//           border-radius: 12px;
//           cursor: pointer;
//           display: inline-flex;
//           align-items: center;
//           gap: 0.75rem;
//           transition: all 0.3s;
//         }

//         .btn-secondary-large:hover {
//           background: rgba(255, 255, 255, 0.05);
//           border-color: rgba(255, 255, 255, 0.2);
//         }

//         .play-btn {
//           width: 24px;
//           height: 24px;
//           color: #a5b4fc;
//         }

//         /* Hero Visuals */
//         .hero-visuals {
//           position: absolute;
//           right: 0;
//           top: 50%;
//           transform: translateY(-50%);
//           width: 50%;
//           height: 80vh;
//           pointer-events: none;
//         }

//         .floating-card {
//           position: absolute;
//           background: rgba(255, 255, 255, 0.03);
//           backdrop-filter: blur(30px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 20px;
//           padding: 1.75rem;
//           transform-style: preserve-3d;
//           transition: transform 0.1s ease-out;
//           box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
//         }

//         .card-1 {
//           width: 340px;
//           top: 10%;
//           right: 15%;
//           animation: cardFloat1 6s ease-in-out infinite;
//         }

//         .card-2 {
//           width: 320px;
//           top: 45%;
//           right: 5%;
//           animation: cardFloat2 7s ease-in-out infinite;
//         }

//         .card-3 {
//           width: 300px;
//           bottom: 1%;
//           right: 25%;
//           animation: cardFloat3 5s ease-in-out infinite;
//         }

//         @keyframes cardFloat1 {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }

//         @keyframes cardFloat2 {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//         }

//         @keyframes cardFloat3 {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-25px); }
//         }

//         .card-shine {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.05), transparent);
//           border-radius: 20px;
//           opacity: 0;
//           transition: opacity 0.3s;
//         }

//         .floating-card:hover .card-shine {
//           opacity: 1;
//         }

//         .card-header {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           margin-bottom: 1.25rem;
//         }

//         .status-indicator {
//           position: relative;
//           width: 12px;
//           height: 12px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .status-live .pulse-ring {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           border: 2px solid #ef4444;
//           border-radius: 50%;
//           animation: pulseRing 2s ease-out infinite;
//         }

//         @keyframes pulseRing {
//           0% {
//             transform: scale(1);
//             opacity: 1;
//           }
//           100% {
//             transform: scale(2);
//             opacity: 0;
//           }
//         }

//         .pulse-dot {
//           width: 8px;
//           height: 8px;
//           background: #ef4444;
//           border-radius: 50%;
//           box-shadow: 0 0 10px #ef4444;
//         }

//         .status-process .spinner {
//           width: 12px;
//           height: 12px;
//           border: 2px solid #f59e0b;
//           border-top-color: transparent;
//           border-radius: 50%;
//           animation: spin 1s linear infinite;
//         }

//         @keyframes spin {
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         .status-text {
//           font-size: 0.75rem;
//           font-weight: 600;
//           letter-spacing: 0.05em;
//           color: rgba(255, 255, 255, 0.6);
//         }

//         .card-time {
//           margin-left: auto;
//           font-size: 0.85rem;
//           color: rgba(255, 255, 255, 0.5);
//           font-weight: 500;
//         }

//         .card-title {
//           font-size: 1.25rem;
//           font-weight: 700;
//           margin-bottom: 1.25rem;
//           font-family: 'Syne', sans-serif;
//         }

//         .card-stats {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 1.5rem;
//           margin-bottom: 1.25rem;
//         }

//         .stat-val {
//           font-size: 1.75rem;
//           font-weight: 700;
//           color: #a5b4fc;
//           font-family: 'Syne', sans-serif;
//         }

//         .stat-lbl {
//           font-size: 0.85rem;
//           color: rgba(255, 255, 255, 0.5);
//           margin-top: 0.25rem;
//         }

//         .capacity-bar {
//           position: relative;
//           height: 8px;
//           background: rgba(255, 255, 255, 0.1);
//           border-radius: 4px;
//           overflow: hidden;
//           margin-bottom: 0.75rem;
//         }

//         .capacity-fill {
//           position: relative;
//           height: 100%;
//           background: linear-gradient(90deg, #4f46e5, #7c3aed);
//           border-radius: 4px;
//           transition: width 2s ease-out;
//         }

//         .capacity-glow {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
//           animation: shimmer 2s ease-in-out infinite;
//         }

//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }

//         .capacity-text {
//           font-size: 0.85rem;
//           color: rgba(255, 255, 255, 0.6);
//           font-weight: 500;
//         }

//         /* Card 2 Specific */
//         .process-info {
//           display: flex;
//           gap: 1rem;
//           margin-bottom: 1rem;
//         }

//         .process-icon {
//           width: 48px;
//           height: 48px;
//           background: rgba(245, 158, 11, 0.1);
//           border-radius: 12px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #f59e0b;
//         }

//         .process-icon svg {
//           width: 24px;
//           height: 24px;
//         }

//         .process-title {
//           font-size: 1rem;
//           font-weight: 600;
//           margin-bottom: 0.25rem;
//         }

//         .process-subtitle {
//           font-size: 0.85rem;
//           color: rgba(255, 255, 255, 0.5);
//         }

//         .progress-track {
//           height: 6px;
//           background: rgba(255, 255, 255, 0.1);
//           border-radius: 3px;
//           overflow: hidden;
//           position: relative;
//         }

//         .progress-fill {
//           width: 85%;
//           height: 100%;
//           background: linear-gradient(90deg, #f59e0b, #fbbf24);
//           border-radius: 3px;
//           position: relative;
//           animation: progressGrow 2s ease-out;
//         }

//         @keyframes progressGrow {
//           from {
//             width: 0;
//           }
//         }

//         .progress-glow {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
//           animation: shimmer 1.5s ease-in-out infinite;
//         }

//         /* Card 3 Specific */
//         .success-icon-wrap {
//           display: flex;
//           justify-content: center;
//           margin-bottom: 1rem;
//         }

//         .success-icon {
//           width: 64px;
//           height: 64px;
//           background: rgba(16, 185, 129, 0.1);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #10b981;
//         }

//         .success-icon svg {
//           width: 32px;
//           height: 32px;
//         }

//         .success-text {
//           text-align: center;
//           font-size: 1.1rem;
//           font-weight: 600;
//           margin-bottom: 0.5rem;
//         }

//         .success-subtext {
//           text-align: center;
//           font-size: 0.85rem;
//           color: rgba(255, 255, 255, 0.5);
//           font-family: 'Space Mono', monospace;
//         }

//         /* 3D Objects */
//         .object-3d {
//           position: absolute;
//           pointer-events: none;
//         }

//         .object-1 {
//           top: 5%;
//           right: 40%;
//         }

//         .object-2 {
//           bottom: 20%;
//           right: 10%;
//         }

//         .object-sphere {
//           width: 60px;
//           height: 60px;
//           background: linear-gradient(135deg, #4f46e5, #7c3aed);
//           border-radius: 50%;
//           box-shadow: 0 10px 30px rgba(79, 70, 229, 0.4);
//           animation: spherePulse 3s ease-in-out infinite;
//         }

//         @keyframes spherePulse {
//           0%, 100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.1);
//           }
//         }

//         .object-torus {
//           width: 80px;
//           height: 80px;
//           border: 12px solid #06b6d4;
//           border-radius: 50%;
//           box-shadow: 
//             0 0 30px rgba(6, 182, 212, 0.4),
//             inset 0 0 30px rgba(6, 182, 212, 0.2);
//           animation: torusRotate 8s linear infinite;
//         }

//         @keyframes torusRotate {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         /* Features Section */
//         .features {
//           position: relative;
//           z-index: 2;
//           padding: 8rem 2rem;
//           background: rgba(255, 255, 255, 0.01);
//           border-top: 1px solid rgba(255, 255, 255, 0.05);
//         }

//         .features-container {
//           max-width: 1400px;
//           margin: 0 auto;
//         }

//         .section-header {
//           text-align: center;
//           margin-bottom: 5rem;
//         }

//         .section-tag {
//           display: inline-block;
//           padding: 0.5rem 1.25rem;
//           background: rgba(124, 58, 237, 0.1);
//           border: 1px solid rgba(124, 58, 237, 0.3);
//           border-radius: 50px;
//           font-size: 0.75rem;
//           font-weight: 600;
//           letter-spacing: 0.1em;
//           color: #c4b5fd;
//           margin-bottom: 2rem;
//         }

//         .section-title {
//           font-family: 'Syne', sans-serif;
//           font-size: clamp(2.5rem, 6vw, 4.5rem);
//           font-weight: 800;
//           line-height: 1.1;
//         }

//         .title-accent {
//           background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .features-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 2rem;
//         }

//         .feature-card {
//           position: relative;
//           background: rgba(255, 255, 255, 0.02);
//           border: 1px solid rgba(255, 255, 255, 0.05);
//           border-radius: 24px;
//           padding: 2.5rem;
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           overflow: hidden;
//         }

//         .feature-card:hover {
//           background: rgba(255, 255, 255, 0.04);
//           border-color: rgba(79, 70, 229, 0.3);
//           transform: translateY(-8px);
//         }

//         .feature-card::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 2px;
//           background: linear-gradient(90deg, transparent, currentColor, transparent);
//           opacity: 0;
//           transition: opacity 0.4s;
//         }

//         .feature-card[data-color="blue"]::before { color: #4f46e5; }
//         .feature-card[data-color="purple"]::before { color: #7c3aed; }
//         .feature-card[data-color="cyan"]::before { color: #06b6d4; }
//         .feature-card[data-color="green"]::before { color: #10b981; }
//         .feature-card[data-color="orange"]::before { color: #f59e0b; }
//         .feature-card[data-color="pink"]::before { color: #ec4899; }

//         .feature-card:hover::before {
//           opacity: 1;
//         }

//         .feature-icon-wrap {
//           margin-bottom: 1.5rem;
//         }

//         .feature-icon {
//           width: 56px;
//           height: 56px;
//           background: rgba(79, 70, 229, 0.1);
//           border: 1px solid rgba(79, 70, 229, 0.2);
//           border-radius: 14px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #a5b4fc;
//           transition: all 0.4s;
//         }

//         .feature-card:hover .feature-icon {
//           background: rgba(79, 70, 229, 0.15);
//           border-color: rgba(79, 70, 229, 0.4);
//           transform: scale(1.1) rotate(5deg);
//         }

//         .feature-icon svg {
//           width: 28px;
//           height: 28px;
//         }

//         .feature-title {
//           font-size: 1.4rem;
//           font-weight: 700;
//           margin-bottom: 1rem;
//           font-family: 'Syne', sans-serif;
//         }

//         .feature-desc {
//           font-size: 1rem;
//           line-height: 1.6;
//           color: rgba(255, 255, 255, 0.6);
//           margin-bottom: 1.5rem;
//         }

//         .feature-tags {
//           display: flex;
//           gap: 0.5rem;
//           flex-wrap: wrap;
//         }

//         .tag {
//           padding: 0.4rem 0.85rem;
//           background: rgba(79, 70, 229, 0.1);
//           border: 1px solid rgba(79, 70, 229, 0.2);
//           border-radius: 6px;
//           font-size: 0.75rem;
//           font-weight: 600;
//           color: #a5b4fc;
//         }

//         /* CTA Section */
//         .cta-section {
//           position: relative;
//           z-index: 2;
//           padding: 8rem 2rem;
//         }

//         .cta-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(124, 58, 237, 0.1));
//           border: 1px solid rgba(79, 70, 229, 0.2);
//           border-radius: 32px;
//           padding: 5rem 4rem;
//           position: relative;
//           overflow: hidden;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .cta-title {
//           font-family: 'Syne', sans-serif;
//           font-size: clamp(2.5rem, 5vw, 4rem);
//           font-weight: 800;
//           line-height: 1.1;
//           margin-bottom: 3rem;
//         }

//         .cta-accent {
//           background: linear-gradient(135deg, #4f46e5, #7c3aed);
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .cta-button {
//           display: inline-flex;
//           align-items: center;
//           gap: 1rem;
//           padding: 1.5rem 3rem;
//           background: #fff;
//           color: #0a0a0f;
//           text-decoration: none;
//           font-size: 1.2rem;
//           font-weight: 700;
//           border-radius: 16px;
//           position: relative;
//           overflow: hidden;
//           transition: transform 0.3s, box-shadow 0.3s;
//         }

//         .cta-button:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 30px 60px rgba(79, 70, 229, 0.5);
//         }

//         .cta-btn-icon {
//           width: 24px;
//           height: 24px;
//           transition: transform 0.3s;
//         }

//         .cta-button:hover .cta-btn-icon {
//           transform: translateX(6px);
//         }

//         .cta-btn-glow {
//           position: absolute;
//           inset: -2px;
//           background: linear-gradient(135deg, #4f46e5, #7c3aed);
//           z-index: -1;
//           opacity: 0;
//           filter: blur(12px);
//           transition: opacity 0.3s;
//         }

//         .cta-button:hover .cta-btn-glow {
//           opacity: 1;
//         }

//         .cta-visual {
//           position: relative;
//           width: 400px;
//           height: 400px;
//         }

//         .cta-orb {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           background: radial-gradient(circle, rgba(79, 70, 229, 0.3) 0%, transparent 70%);
//           border-radius: 50%;
//           filter: blur(40px);
//           animation: orbPulse 4s ease-in-out infinite;
//         }

//         @keyframes orbPulse {
//           0%, 100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.2);
//           }
//         }

//         /* Footer */
//         .footer {
//           position: relative;
//           z-index: 2;
//           background: rgba(255, 255, 255, 0.01);
//           border-top: 1px solid rgba(255, 255, 255, 0.08);
//           padding: 5rem 2rem 2rem;
//         }

//         .footer-container {
//           max-width: 1400px;
//           margin: 0 auto;
//         }

//         .footer-top {
//           display: grid;
//           grid-template-columns: 1.2fr 2fr;
//           gap: 6rem;
//           margin-bottom: 4rem;
//           padding-bottom: 4rem;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.05);
//         }

//         .footer-brand-section {
//           max-width: 400px;
//         }

//         .footer-logo {
//           display: flex;
//           align-items: center;
//           gap: 0.875rem;
//           margin-bottom: 1.5rem;
//         }

//         .footer-logo-text {
//           font-size: 1.75rem;
//           font-weight: 800;
//           font-family: 'Syne', sans-serif;
//           background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .logo-3d-small {
//           width: 36px;
//           height: 36px;
//           perspective: 1000px;
//         }

//         .cube-small {
//           width: 100%;
//           height: 100%;
//           position: relative;
//           transform-style: preserve-3d;
//           animation: cubeRotate 10s infinite linear;
//         }

//         .cube-small .cube-side {
//           position: absolute;
//           width: 36px;
//           height: 36px;
//           background: linear-gradient(135deg, #4f46e5, #7c3aed);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           opacity: 0.8;
//         }

//         .cube-small .cube-side.front  { transform: rotateY(0deg) translateZ(18px); }
//         .cube-small .cube-side.back   { transform: rotateY(180deg) translateZ(18px); }
//         .cube-small .cube-side.right  { transform: rotateY(90deg) translateZ(18px); }
//         .cube-small .cube-side.left   { transform: rotateY(-90deg) translateZ(18px); }
//         .cube-small .cube-side.top    { transform: rotateX(90deg) translateZ(18px); }
//         .cube-small .cube-side.bottom { transform: rotateX(-90deg) translateZ(18px); }

//         .footer-tagline {
//           font-size: 1.05rem;
//           line-height: 1.7;
//           color: rgba(255, 255, 255, 0.5);
//           margin-bottom: 2rem;
//         }

//         .footer-socials {
//           display: flex;
//           gap: 0.75rem;
//         }

//         .social-link {
//           width: 40px;
//           height: 40px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: rgba(255, 255, 255, 0.03);
//           border: 1px solid rgba(255, 255, 255, 0.08);
//           border-radius: 10px;
//           color: rgba(255, 255, 255, 0.5);
//           transition: all 0.3s;
//           text-decoration: none;
//         }

//         .social-link:hover {
//           background: rgba(255, 255, 255, 0.08);
//           border-color: rgba(79, 70, 229, 0.5);
//           color: #a5b4fc;
//           transform: translateY(-2px);
//         }

//         .social-link svg {
//           width: 18px;
//           height: 18px;
//         }

//         .footer-links-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 3rem;
//         }

//         .footer-col-title {
//           font-size: 0.85rem;
//           font-weight: 700;
//           text-transform: uppercase;
//           letter-spacing: 0.05em;
//           color: rgba(255, 255, 255, 0.9);
//           margin-bottom: 1.25rem;
//           font-family: 'Syne', sans-serif;
//         }

//         .footer-links-list {
//           list-style: none;
//           display: flex;
//           flex-direction: column;
//           gap: 0.875rem;
//         }

//         .footer-links-list a {
//           color: rgba(255, 255, 255, 0.5);
//           text-decoration: none;
//           font-size: 0.95rem;
//           transition: all 0.3s;
//           display: inline-block;
//           position: relative;
//         }

//         .footer-links-list a::after {
//           content: '';
//           position: absolute;
//           bottom: -2px;
//           left: 0;
//           width: 0;
//           height: 1px;
//           background: #a5b4fc;
//           transition: width 0.3s;
//         }

//         .footer-links-list a:hover {
//           color: #a5b4fc;
//           transform: translateX(4px);
//         }

//         .footer-links-list a:hover::after {
//           width: 100%;
//         }

//         .footer-bottom {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           flex-wrap: wrap;
//           gap: 1.5rem;
//         }

//         .footer-bottom-left {
//           display: flex;
//           align-items: center;
//           gap: 2rem;
//           flex-wrap: wrap;
//         }

//         .footer-copyright {
//           font-size: 0.9rem;
//           color: rgba(255, 255, 255, 0.4);
//         }

//         .footer-badge {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           padding: 0.5rem 1rem;
//           background: rgba(79, 70, 229, 0.05);
//           border: 1px solid rgba(79, 70, 229, 0.2);
//           border-radius: 8px;
//           font-size: 0.85rem;
//           font-weight: 600;
//           color: #a5b4fc;
//         }

//         .footer-badge svg {
//           width: 16px;
//           height: 16px;
//         }

//         .footer-bottom-right {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//         }

//         .footer-legal-link {
//           font-size: 0.9rem;
//           color: rgba(255, 255, 255, 0.4);
//           text-decoration: none;
//           transition: color 0.3s;
//         }

//         .footer-legal-link:hover {
//           color: #a5b4fc;
//         }

//         .footer-separator {
//           color: rgba(255, 255, 255, 0.2);
//           font-size: 0.8rem;
//         }

//         /* Responsive */
//         @media (max-width: 1200px) {
//           .hero-visuals {
//             display: none;
//           }

//           .hero-title {
//             font-size: clamp(3rem, 10vw, 7rem);
//           }

//           .footer-top {
//             grid-template-columns: 1fr;
//             gap: 3rem;
//           }

//           .footer-links-grid {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 2rem;
//           }
//         }

//         @media (max-width: 768px) {
//           .features-grid {
//             grid-template-columns: 1fr;
//           }

//           .hero-stats {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 1.5rem;
//           }

//           .stat-divider {
//             display: none;
//           }

//           .hero-actions {
//             flex-direction: column;
//             width: 100%;
//           }

//           .btn-primary-large,
//           .btn-secondary-large {
//             width: 100%;
//             justify-content: center;
//           }

//           .footer-top {
//             grid-template-columns: 1fr;
//             gap: 2.5rem;
//           }

//           .footer-links-grid {
//             grid-template-columns: 1fr;
//             gap: 2rem;
//           }

//           .footer-bottom {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 1rem;
//           }

//           .footer-bottom-left {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 1rem;
//           }

//           .footer-bottom-right {
//             flex-wrap: wrap;
//           }

//           .cta-container {
//             flex-direction: column;
//             text-align: center;
//             padding: 3rem 2rem;
//           }

//           .cta-visual {
//             width: 200px;
//             height: 200px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Landing() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const titleWords = ["Events", "Tickets", "Bookings", "Moments"];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Word rotation effect
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % titleWords.length);
    }, 3000);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <div className="landing">
      {/* Particle Background */}
      <div className="particle-field">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Gradient Mesh */}
      <div className="gradient-mesh">
        <div className="mesh-gradient-1"></div>
        <div className="mesh-gradient-2"></div>
        <div className="mesh-gradient-3"></div>
      </div>

      {/* Grid Overlay */}
      <div className="grid-overlay">
        <div className="grid-container">
          {[...Array(20)].map((_, i) => (
            <div key={`v-${i}`} className="grid-v-line" style={{ left: `${i * 5}%` }} />
          ))}
          {[...Array(20)].map((_, i) => (
            <div key={`h-${i}`} className="grid-h-line" style={{ top: `${i * 5}%` }} />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-left">
            <div className="logo">
              <div className="logo-3d">
                <div className="cube">
                  <div className="cube-side front"></div>
                  <div className="cube-side back"></div>
                  <div className="cube-side left"></div>
                  <div className="cube-side right"></div>
                  <div className="cube-side top"></div>
                  <div className="cube-side bottom"></div>
                </div>
              </div>
              <span className="logo-text">Eventify</span>
            </div>
            <span className="nav-edition">Winter '26</span>
          </div>

          <div className="nav-right">
            <Link to="/login" className="nav-link">Sign In</Link>
            <Link to="/register" className="nav-cta">
              <span>Start for free</span>
              <div className="cta-glow"></div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          {/* Badge */}
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span>THE CLOUD-NATIVE EDITION</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            <span className="title-line">
              <span className="title-text">Transform</span>
            </span>
            <span className="title-line">
              <span className="title-text title-rotate">
                {titleWords.map((word, i) => (
                  <span 
                    key={word}
                    className={`rotating-word ${i === currentWord ? 'active' : ''}`}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </span>
            <span className="title-line">
              <span className="title-text title-gradient">Forever</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-description">
            A microservices masterpiece deployed on <span className="highlight">AWS ECS Fargate</span>.
            <br />
            Race-condition-safe. Zero-downtime. Production-grade.
          </p>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">
                <span className="number-main">99.9</span>
                <span className="number-unit">%</span>
              </div>
              <div className="stat-label">Uptime SLA</div>
            </div>
            
            <div className="stat-divider" />
            
            <div className="stat-item">
              <div className="stat-number">
                <span className="number-main">&lt;50</span>
                <span className="number-unit">ms</span>
              </div>
              <div className="stat-label">Response Time</div>
            </div>
            
            <div className="stat-divider" />
            
            <div className="stat-item">
              <div className="stat-number">
                <span className="number-main">∞</span>
              </div>
              <div className="stat-label">Scalability</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <Link to="/register" className="btn-primary-large">
              <span className="btn-content">
                <span className="btn-text">Launch Platform</span>
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className="btn-shine"></div>
            </Link>

            <button className="btn-secondary-large">
              <div className="play-btn">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M10 8L16 12L10 16V8Z" fill="currentColor"/>
                </svg>
              </div>
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Floating Visual Elements */}
        <div className="hero-visuals">
          {/* Animated Card 1 - Live Event */}
          <div 
            className="floating-card card-1"
            style={{
              transform: `
                translateY(${scrollY * 0.15}px) 
                rotateY(${mousePosition.x * 5}deg) 
                rotateX(${-mousePosition.y * 5}deg)
              `
            }}
          >
            <div className="card-shine"></div>
            <div className="card-content">
              <div className="card-header">
                <div className="status-indicator status-live">
                  <span className="pulse-ring"></span>
                  <span className="pulse-dot"></span>
                </div>
                <span className="status-text">LIVE NOW</span>
                <span className="card-time">2h 14m</span>
              </div>
              <h3 className="card-title">AWS re:Invent 2026</h3>
              <div className="card-stats">
                <div className="card-stat">
                  <div className="stat-val">2,847</div>
                  <div className="stat-lbl">Registered</div>
                </div>
                <div className="card-stat">
                  <div className="stat-val">153</div>
                  <div className="stat-lbl">Available</div>
                </div>
              </div>
              <div className="capacity-bar">
                <div className="capacity-fill" style={{ width: '73%' }}>
                  <div className="capacity-glow"></div>
                </div>
                <span className="capacity-text">73% Full</span>
              </div>
            </div>
          </div>

          {/* Animated Card 2 - Processing */}
          <div 
            className="floating-card card-2"
            style={{
              transform: `
                translateY(${scrollY * -0.12}px) 
                rotateY(${mousePosition.x * -3}deg) 
                rotateX(${-mousePosition.y * 3}deg)
              `
            }}
          >
            <div className="card-shine"></div>
            <div className="card-content">
              <div className="card-header">
                <div className="status-indicator status-process">
                  <div className="spinner"></div>
                </div>
                <span className="status-text">PROCESSING</span>
              </div>
              <div className="process-info">
                <div className="process-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="process-text">
                  <div className="process-title">Email Confirmations</div>
                  <div className="process-subtitle">847 / 1000 sent</div>
                </div>
              </div>
              <div className="progress-track">
                <div className="progress-fill">
                  <div className="progress-glow"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Card 3 - Success */}
          <div 
            className="floating-card card-3"
            style={{
              transform: `
                translateY(${scrollY * 0.08}px) 
                rotateY(${mousePosition.x * 4}deg) 
                rotateX(${-mousePosition.y * 4}deg)
              `
            }}
          >
            <div className="card-shine"></div>
            <div className="card-content">
              <div className="success-icon-wrap">
                <div className="success-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="success-text">Reservation Confirmed</div>
              <div className="success-subtext">Booking ID: #EVT-2026-847</div>
            </div>
          </div>

          {/* 3D Floating Objects */}
          <div className="object-3d object-1" style={{
            transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px) rotate(${scrollY * 0.1}deg)`
          }}>
            <div className="object-sphere"></div>
          </div>

          <div className="object-3d object-2" style={{
            transform: `translateY(${Math.cos(scrollY * 0.008) * 30}px) rotate(${-scrollY * 0.15}deg)`
          }}>
            <div className="object-torus"></div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features">
        <div className="features-container">
          <div className="section-header">
            <div className="section-tag">PLATFORM ARCHITECTURE</div>
            <h2 className="section-title">
              Built on AWS.
              <br />
              <span className="title-accent">Engineered to Scale.</span>
            </h2>
          </div>

          <div className="features-grid">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                    <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                    <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                    <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: "Microservices",
                desc: "Deployed on ECS Fargate with Application Load Balancer for optimal scalability and fault isolation.",
                tags: ["ECS", "Fargate", "ALB"],
                color: "blue"
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: "Security First",
                desc: "JWT authentication, RBAC, HTTPS via ACM, and IAM least-privilege roles ensure enterprise-grade protection.",
                tags: ["JWT", "RBAC", "ACM"],
                color: "purple"
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
                title: "Atomic Operations",
                desc: "DynamoDB conditional writes ensure seat reservations never conflict, even under extreme load.",
                tags: ["DynamoDB", "ACID"],
                color: "cyan"
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: "Event-Driven",
                desc: "Asynchronous workflows with SQS, Lambda, and SES for reliable, scalable email notifications.",
                tags: ["SQS", "Lambda", "SES"],
                color: "green"
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 1v6m0 6v6M23 12h-6m-6 0H1" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: "CI/CD Pipeline",
                desc: "GitHub Actions with AWS OIDC for secure, automated deployments to ECR and ECS.",
                tags: ["Actions", "OIDC"],
                color: "orange"
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2"/>
                    <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "Zero Downtime",
                desc: "Rolling updates with health checks and load balancing ensure continuous availability.",
                tags: ["Rolling", "Health Checks"],
                color: "pink"
              }
            ].map((feature, i) => (
              <div key={i} className="feature-card" data-color={feature.color}>
                <div className="feature-icon-wrap">
                  <div className="feature-icon">{feature.icon}</div>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
                <div className="feature-tags">
                  {feature.tags.map((tag, j) => (
                    <span key={j} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="feature-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready for the
              <br />
              <span className="cta-accent">Next Generation</span>
              <br />
              of Events?
            </h2>
            <Link to="/register" className="cta-button">
              <span className="cta-btn-text">Get Started</span>
              <svg className="cta-btn-icon" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <div className="cta-btn-glow"></div>
            </Link>
          </div>
          <div className="cta-visual">
            {/* 3D Floating Scene */}
            <div className="visual-scene">
              {/* Animated Rings */}
              <div className="floating-ring ring-1">
                <div className="ring-inner"></div>
              </div>
              <div className="floating-ring ring-2">
                <div className="ring-inner"></div>
              </div>
              <div className="floating-ring ring-3">
                <div className="ring-inner"></div>
              </div>

              {/* Central Sphere */}
              <div className="central-sphere">
                <div className="sphere-glow"></div>
                <div className="sphere-core"></div>
              </div>

              {/* Floating Icons */}
              <div className="floating-icon icon-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <div className="floating-icon icon-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="floating-icon icon-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <path d="M22 4L12 14.01l-3-3"/>
                </svg>
              </div>

              {/* Particle Field */}
              <div className="particle-field">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="particle" style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Top Section */}
          <div className="footer-top">
            <div className="footer-brand-section">
              <div className="footer-logo">
                <div className="logo-3d-small">
                  <div className="cube-small">
                    <div className="cube-side front"></div>
                    <div className="cube-side back"></div>
                    <div className="cube-side left"></div>
                    <div className="cube-side right"></div>
                    <div className="cube-side top"></div>
                    <div className="cube-side bottom"></div>
                  </div>
                </div>
                <span className="footer-logo-text">Eventify</span>
              </div>
              <p className="footer-tagline">
                Cloud-native event management platform.
                <br />
                Built on AWS. Engineered for scale.
              </p>
              <div className="footer-socials">
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-links-grid">
              <div className="footer-col">
                <h4 className="footer-col-title">Product</h4>
                <ul className="footer-links-list">
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Security</a></li>
                  <li><a href="#">Roadmap</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4 className="footer-col-title">Platform</h4>
                <ul className="footer-links-list">
                  <li><a href="#">API Reference</a></li>
                  <li><a href="#">Documentation</a></li>
                  <li><a href="#">Integrations</a></li>
                  <li><a href="#">Status</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4 className="footer-col-title">Company</h4>
                <ul className="footer-links-list">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Press</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4 className="footer-col-title">Resources</h4>
                <ul className="footer-links-list">
                  <li><a href="#">Community</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Partners</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p className="footer-copyright">
                © {new Date().getFullYear()} Eventify Inc. All rights reserved.
              </p>
              <div className="footer-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                  <path d="M2 17L12 22L22 17"/>
                  <path d="M2 12L12 17L22 12"/>
                </svg>
                <span>Powered by AWS</span>
              </div>
            </div>

            <div className="footer-bottom-right">
              <a href="#" className="footer-legal-link">Privacy Policy</a>
              <span className="footer-separator">•</span>
              <a href="#" className="footer-legal-link">Terms of Service</a>
              <span className="footer-separator">•</span>
              <a href="#" className="footer-legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .landing {
          background: #0a0a0f;
          color: #fff;
          font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
        }

        /* Particle Field */
        .particle-field {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          animation: particleFloat 5s ease-in-out infinite;
        }

        @keyframes particleFloat {
          0%, 100% {
            opacity: 0;
            transform: translateY(0) scale(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-100px) scale(1);
          }
        }

        /* Gradient Mesh */
        .gradient-mesh {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .mesh-gradient-1,
        .mesh-gradient-2,
        .mesh-gradient-3 {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          animation: meshFloat 20s ease-in-out infinite;
        }

        .mesh-gradient-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #4f46e5 0%, transparent 70%);
          top: -200px;
          left: -200px;
        }

        .mesh-gradient-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #7c3aed 0%, transparent 70%);
          top: 40%;
          right: -150px;
          animation-delay: -7s;
        }

        .mesh-gradient-3 {
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, #06b6d4 0%, transparent 70%);
          bottom: -100px;
          left: 30%;
          animation-delay: -14s;
        }

        @keyframes meshFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(50px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-50px, 50px) scale(0.9);
          }
        }

        /* Grid Overlay */
        .grid-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          opacity: 0.03;
        }

        .grid-v-line,
        .grid-h-line {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
        }

        .grid-v-line {
          width: 1px;
          height: 100%;
        }

        .grid-h-line {
          width: 100%;
          height: 1px;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(10, 10, 15, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.25rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-3d {
          width: 32px;
          height: 32px;
          perspective: 1000px;
        }

        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: cubeRotate 10s infinite linear;
        }

        @keyframes cubeRotate {
          from {
            transform: rotateX(0deg) rotateY(0deg);
          }
          to {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }

        .cube-side {
          position: absolute;
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          border: 1px solid rgba(255, 255, 255, 0.2);
          opacity: 0.8;
        }

        .cube-side.front  { transform: rotateY(0deg) translateZ(16px); }
        .cube-side.back   { transform: rotateY(180deg) translateZ(16px); }
        .cube-side.right  { transform: rotateY(90deg) translateZ(16px); }
        .cube-side.left   { transform: rotateY(-90deg) translateZ(16px); }
        .cube-side.top    { transform: rotateX(90deg) translateZ(16px); }
        .cube-side.bottom { transform: rotateX(-90deg) translateZ(16px); }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          font-family: 'Syne', sans-serif;
          background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-edition {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 500;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 0.5rem 1rem;
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: #fff;
        }

        .nav-cta {
          position: relative;
          padding: 0.6rem 1.5rem;
          background: #fff;
          color: #0a0a0f;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.2s;
        }

        .nav-cta:hover {
          transform: translateY(-2px);
        }

        .cta-glow {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s;
          filter: blur(8px);
        }

        .nav-cta:hover .cta-glow {
          opacity: 1;
        }

        /* Hero Section */
        .hero {
          position: relative;
          z-index: 2;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 8rem 2rem 4rem;
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .hero-badge {
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
          margin-bottom: 3rem;
          animation: badgeFadeIn 0.8s ease-out;
        }

        @keyframes badgeFadeIn {
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
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }

        /* Hero Title - MASSIVE */
        .hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3.5rem, 12vw, 9rem);
          font-weight: 800;
          line-height: 0.95;
          margin-bottom: 2rem;
          letter-spacing: -0.03em;
        }

        .title-line {
          display: block;
          overflow: hidden;
        }

        .title-text {
          display: inline-block;
          animation: titleSlideUp 1s cubic-bezier(0.22, 1, 0.36, 1) backwards;
        }

        .title-line:nth-child(1) .title-text {
          animation-delay: 0.1s;
        }

        .title-line:nth-child(2) .title-text {
          animation-delay: 0.2s;
        }

        .title-line:nth-child(3) .title-text {
          animation-delay: 0.3s;
        }

        @keyframes titleSlideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .title-rotate {
          position: relative;
          display: inline-block;
          height: 1.2em;
          vertical-align: bottom;
        }

        .rotating-word {
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .rotating-word.active {
          opacity: 1;
          transform: translateY(0);
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
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Hero Description */
        .hero-description {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          max-width: 700px;
          margin-bottom: 3rem;
          animation: fadeIn 1s ease-out 0.5s backwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .highlight {
          color: #a5b4fc;
          font-weight: 600;
        }

        /* Hero Stats */
        .hero-stats {
          display: flex;
          gap: 3rem;
          align-items: center;
          margin-bottom: 3rem;
          animation: fadeIn 1s ease-out 0.6s backwards;
        }

        .stat-item {
          flex: 0 0 auto;
        }

        .stat-number {
          display: flex;
          align-items: baseline;
          gap: 0.25rem;
          margin-bottom: 0.5rem;
        }

        .number-main {
          font-size: 2.5rem;
          font-weight: 700;
          font-family: 'Syne', sans-serif;
        }

        .number-unit {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 500;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Hero Actions */
        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 4rem;
          animation: fadeIn 1s ease-out 0.7s backwards;
        }

        .btn-primary-large {
          position: relative;
          padding: 1.25rem 2.5rem;
          background: #fff;
          color: #0a0a0f;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
          display: inline-flex;
          align-items: center;
        }

        .btn-primary-large:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(79, 70, 229, 0.5);
        }

        .btn-content {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          position: relative;
          z-index: 1;
        }

        .btn-arrow {
          width: 20px;
          height: 20px;
          transition: transform 0.3s;
        }

        .btn-primary-large:hover .btn-arrow {
          transform: translateX(4px);
        }

        .btn-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(79, 70, 229, 0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .btn-primary-large:hover .btn-shine {
          transform: translateX(100%);
        }

        .btn-secondary-large {
          padding: 1.25rem 2rem;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 12px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s;
        }

        .btn-secondary-large:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .play-btn {
          width: 24px;
          height: 24px;
          color: #a5b4fc;
        }

        /* Hero Visuals */
        .hero-visuals {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 50%;
          height: 80vh;
          pointer-events: none;
        }

        .floating-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 1.75rem;
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
        }

        .card-1 {
          width: 340px;
          top: 10%;
          right: 15%;
          animation: cardFloat1 6s ease-in-out infinite;
        }

        .card-2 {
          width: 320px;
          top: 50%;
          right: 5%;
          animation: cardFloat2 7s ease-in-out infinite;
        }

        .card-3 {
          width: 300px;
          bottom: 15%;
          right: 25%;
          animation: cardFloat3 5s ease-in-out infinite;
        }

        @keyframes cardFloat1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes cardFloat2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes cardFloat3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }

        .card-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.05), transparent);
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .floating-card:hover .card-shine {
          opacity: 1;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .status-indicator {
          position: relative;
          width: 12px;
          height: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .status-live .pulse-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid #ef4444;
          border-radius: 50%;
          animation: pulseRing 2s ease-out infinite;
        }

        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #ef4444;
          border-radius: 50%;
          box-shadow: 0 0 10px #ef4444;
        }

        .status-process .spinner {
          width: 12px;
          height: 12px;
          border: 2px solid #f59e0b;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .status-text {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: rgba(255, 255, 255, 0.6);
        }

        .card-time {
          margin-left: auto;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 500;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          font-family: 'Syne', sans-serif;
        }

        .card-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.25rem;
        }

        .stat-val {
          font-size: 1.75rem;
          font-weight: 700;
          color: #a5b4fc;
          font-family: 'Syne', sans-serif;
        }

        .stat-lbl {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 0.25rem;
        }

        .capacity-bar {
          position: relative;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 0.75rem;
        }

        .capacity-fill {
          position: relative;
          height: 100%;
          background: linear-gradient(90deg, #4f46e5, #7c3aed);
          border-radius: 4px;
          transition: width 2s ease-out;
        }

        .capacity-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shimmer 2s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .capacity-text {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 500;
        }

        /* Card 2 Specific */
        .process-info {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .process-icon {
          width: 48px;
          height: 48px;
          background: rgba(245, 158, 11, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f59e0b;
        }

        .process-icon svg {
          width: 24px;
          height: 24px;
        }

        .process-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .process-subtitle {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .progress-track {
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          width: 85%;
          height: 100%;
          background: linear-gradient(90deg, #f59e0b, #fbbf24);
          border-radius: 3px;
          position: relative;
          animation: progressGrow 2s ease-out;
        }

        @keyframes progressGrow {
          from {
            width: 0;
          }
        }

        .progress-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
          animation: shimmer 1.5s ease-in-out infinite;
        }

        /* Card 3 Specific */
        .success-icon-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .success-icon {
          width: 64px;
          height: 64px;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #10b981;
        }

        .success-icon svg {
          width: 32px;
          height: 32px;
        }

        .success-text {
          text-align: center;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .success-subtext {
          text-align: center;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          font-family: 'Space Mono', monospace;
        }

        /* 3D Objects */
        .object-3d {
          position: absolute;
          pointer-events: none;
        }

        .object-1 {
          top: 5%;
          right: 40%;
        }

        .object-2 {
          bottom: 20%;
          right: 10%;
        }

        .object-sphere {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          border-radius: 50%;
          box-shadow: 0 10px 30px rgba(79, 70, 229, 0.4);
          animation: spherePulse 3s ease-in-out infinite;
        }

        @keyframes spherePulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .object-torus {
          width: 80px;
          height: 80px;
          border: 12px solid #06b6d4;
          border-radius: 50%;
          box-shadow: 
            0 0 30px rgba(6, 182, 212, 0.4),
            inset 0 0 30px rgba(6, 182, 212, 0.2);
          animation: torusRotate 8s linear infinite;
        }

        @keyframes torusRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Features Section */
        .features {
          position: relative;
          z-index: 2;
          padding: 8rem 2rem;
          background: rgba(255, 255, 255, 0.01);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .features-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-tag {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #c4b5fd;
          margin-bottom: 2rem;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
        }

        .title-accent {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .feature-card {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 2.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .feature-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(79, 70, 229, 0.3);
          transform: translateY(-8px);
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, currentColor, transparent);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .feature-card[data-color="blue"]::before { color: #4f46e5; }
        .feature-card[data-color="purple"]::before { color: #7c3aed; }
        .feature-card[data-color="cyan"]::before { color: #06b6d4; }
        .feature-card[data-color="green"]::before { color: #10b981; }
        .feature-card[data-color="orange"]::before { color: #f59e0b; }
        .feature-card[data-color="pink"]::before { color: #ec4899; }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-icon-wrap {
          margin-bottom: 1.5rem;
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          background: rgba(79, 70, 229, 0.1);
          border: 1px solid rgba(79, 70, 229, 0.2);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a5b4fc;
          transition: all 0.4s;
        }

        .feature-card:hover .feature-icon {
          background: rgba(79, 70, 229, 0.15);
          border-color: rgba(79, 70, 229, 0.4);
          transform: scale(1.1) rotate(5deg);
        }

        .feature-icon svg {
          width: 28px;
          height: 28px;
        }

        .feature-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          font-family: 'Syne', sans-serif;
        }

        .feature-desc {
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 1.5rem;
        }

        .feature-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .tag {
          padding: 0.4rem 0.85rem;
          background: rgba(79, 70, 229, 0.1);
          border: 1px solid rgba(79, 70, 229, 0.2);
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #a5b4fc;
        }

        /* CTA Section */
        .cta-section {
          position: relative;
          z-index: 2;
          padding: 8rem 2rem;
        }

        .cta-container {
          max-width: 1200px;
          margin: 0 auto;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(124, 58, 237, 0.1));
          border: 1px solid rgba(79, 70, 229, 0.2);
          border-radius: 32px;
          padding: 5rem 4rem;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cta-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 3rem;
        }

        .cta-accent {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem 3rem;
          background: #fff;
          color: #0a0a0f;
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: 700;
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 60px rgba(79, 70, 229, 0.5);
        }

        .cta-btn-icon {
          width: 24px;
          height: 24px;
          transition: transform 0.3s;
        }

        .cta-button:hover .cta-btn-icon {
          transform: translateX(6px);
        }

        .cta-btn-glow {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          z-index: -1;
          opacity: 0;
          filter: blur(12px);
          transition: opacity 0.3s;
        }

        .cta-button:hover .cta-btn-glow {
          opacity: 1;
        }

        .cta-visual {
          position: relative;
          width: 450px;
          height: 450px;
          perspective: 1000px;
        }

        /* Visual Scene */
        .visual-scene {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        /* Floating Rings */
        .floating-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-style: preserve-3d;
          animation: ringOrbit 20s linear infinite;
        }

        .ring-1 {
          width: 300px;
          height: 300px;
          margin: -150px 0 0 -150px;
        }

        .ring-2 {
          width: 240px;
          height: 240px;
          margin: -120px 0 0 -120px;
          animation-duration: 15s;
          animation-direction: reverse;
        }

        .ring-3 {
          width: 180px;
          height: 180px;
          margin: -90px 0 0 -90px;
          animation-duration: 25s;
        }

        @keyframes ringOrbit {
          from {
            transform: rotateX(75deg) rotateZ(0deg);
          }
          to {
            transform: rotateX(75deg) rotateZ(360deg);
          }
        }

        .ring-inner {
          width: 100%;
          height: 100%;
          border: 2px solid rgba(79, 70, 229, 0.3);
          border-radius: 50%;
          box-shadow: 
            0 0 20px rgba(79, 70, 229, 0.3),
            inset 0 0 20px rgba(79, 70, 229, 0.2);
          animation: ringPulse 3s ease-in-out infinite;
        }

        .ring-1 .ring-inner {
          border-color: rgba(79, 70, 229, 0.4);
        }

        .ring-2 .ring-inner {
          border-color: rgba(124, 58, 237, 0.4);
          animation-delay: -1s;
        }

        .ring-3 .ring-inner {
          border-color: rgba(6, 182, 212, 0.4);
          animation-delay: -2s;
        }

        @keyframes ringPulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        /* Central Sphere */
        .central-sphere {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 120px;
          height: 120px;
          margin: -60px 0 0 -60px;
          transform-style: preserve-3d;
          animation: sphereFloat 6s ease-in-out infinite;
        }

        @keyframes sphereFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .sphere-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(20px);
          animation: glowPulse 2s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .sphere-core {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          border-radius: 50%;
          box-shadow: 
            0 0 40px rgba(79, 70, 229, 0.6),
            inset 0 0 20px rgba(255, 255, 255, 0.2);
          animation: sphereRotate 10s linear infinite;
        }

        @keyframes sphereRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Floating Icons */
        .floating-icon {
          position: absolute;
          width: 56px;
          height: 56px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a5b4fc;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .floating-icon svg {
          width: 28px;
          height: 28px;
        }

        .icon-1 {
          top: 10%;
          right: 15%;
          animation: iconFloat1 6s ease-in-out infinite;
        }

        .icon-2 {
          bottom: 20%;
          left: 10%;
          animation: iconFloat2 7s ease-in-out infinite;
        }

        .icon-3 {
          top: 60%;
          right: 5%;
          animation: iconFloat3 5s ease-in-out infinite;
        }

        @keyframes iconFloat1 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(10px, -10px) rotate(5deg);
          }
          50% {
            transform: translate(20px, 0px) rotate(0deg);
          }
          75% {
            transform: translate(10px, 10px) rotate(-5deg);
          }
        }

        @keyframes iconFloat2 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(-15px, -10px) rotate(-5deg);
          }
          66% {
            transform: translate(5px, 10px) rotate(5deg);
          }
        }

        @keyframes iconFloat3 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-10px, -15px) rotate(10deg);
          }
        }

        /* Particle Field */
        .particle-field {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(165, 180, 252, 0.6);
          border-radius: 50%;
          animation: particleFloat 4s ease-in-out infinite;
        }

        @keyframes particleFloat {
          0%, 100% {
            opacity: 0;
            transform: translateY(0) scale(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-50px) scale(1);
          }
        }

        /* Footer */
        .footer {
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.01);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 5rem 2rem 2rem;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.2fr 2fr;
          gap: 6rem;
          margin-bottom: 4rem;
          padding-bottom: 4rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-brand-section {
          max-width: 400px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          margin-bottom: 1.5rem;
        }

        .footer-logo-text {
          font-size: 1.75rem;
          font-weight: 800;
          font-family: 'Syne', sans-serif;
          background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .logo-3d-small {
          width: 36px;
          height: 36px;
          perspective: 1000px;
        }

        .cube-small {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: cubeRotate 10s infinite linear;
        }

        .cube-small .cube-side {
          position: absolute;
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          border: 1px solid rgba(255, 255, 255, 0.2);
          opacity: 0.8;
        }

        .cube-small .cube-side.front  { transform: rotateY(0deg) translateZ(18px); }
        .cube-small .cube-side.back   { transform: rotateY(180deg) translateZ(18px); }
        .cube-small .cube-side.right  { transform: rotateY(90deg) translateZ(18px); }
        .cube-small .cube-side.left   { transform: rotateY(-90deg) translateZ(18px); }
        .cube-small .cube-side.top    { transform: rotateX(90deg) translateZ(18px); }
        .cube-small .cube-side.bottom { transform: rotateX(-90deg) translateZ(18px); }

        .footer-tagline {
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 2rem;
        }

        .footer-socials {
          display: flex;
          gap: 0.75rem;
        }

        .social-link {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          color: rgba(255, 255, 255, 0.5);
          transition: all 0.3s;
          text-decoration: none;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(79, 70, 229, 0.5);
          color: #a5b4fc;
          transform: translateY(-2px);
        }

        .social-link svg {
          width: 18px;
          height: 18px;
        }

        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
        }

        .footer-col-title {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1.25rem;
          font-family: 'Syne', sans-serif;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }

        .footer-links-list a {
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s;
          display: inline-block;
          position: relative;
        }

        .footer-links-list a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #a5b4fc;
          transition: width 0.3s;
        }

        .footer-links-list a:hover {
          color: #a5b4fc;
          transform: translateX(4px);
        }

        .footer-links-list a:hover::after {
          width: 100%;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .footer-bottom-left {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .footer-copyright {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.4);
        }

        .footer-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(79, 70, 229, 0.05);
          border: 1px solid rgba(79, 70, 229, 0.2);
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #a5b4fc;
        }

        .footer-badge svg {
          width: 16px;
          height: 16px;
        }

        .footer-bottom-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .footer-legal-link {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-legal-link:hover {
          color: #a5b4fc;
        }

        .footer-separator {
          color: rgba(255, 255, 255, 0.2);
          font-size: 0.8rem;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .hero-visuals {
            display: none;
          }

          .hero-title {
            font-size: clamp(3rem, 10vw, 7rem);
          }

          .footer-top {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .footer-links-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }

          .hero-stats {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }

          .stat-divider {
            display: none;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
          }

          .btn-primary-large,
          .btn-secondary-large {
            width: 100%;
            justify-content: center;
          }

          .footer-top {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .footer-links-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .footer-bottom-left {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .footer-bottom-right {
            flex-wrap: wrap;
          }

          .cta-container {
            flex-direction: column;
            text-align: center;
            padding: 3rem 2rem;
          }

          .cta-visual {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
}