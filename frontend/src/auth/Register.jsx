// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { register } from "../api/auth.api";

// function Register() {
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
//       await register(email, password);
//       navigate("/login");
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
//         <h2 style={{ marginBottom: 4 }}>Create account</h2>
//         <p className="muted" style={{ marginBottom: 20 }}>
//           Register to book or host events
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
//             {loading ? "Creating account..." : "Register"}
//           </button>
//         </form>

//         <p className="muted" style={{ marginTop: 16, textAlign: "center" }}>
//           Already have an account?{" "}
//           <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Register;
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../api/auth.api";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    try {
      await register(email, password);
      setSuccess("Registered successfully. Redirecting to login…");
      setTimeout(() => navigate("/login"), 1200);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="container center">
      <div className="card auth-card">
        <h2>Create account</h2>
        <p className="muted">Register to book or host events</p>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button>Create account</button>
        </form>

        <p className="muted small">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
