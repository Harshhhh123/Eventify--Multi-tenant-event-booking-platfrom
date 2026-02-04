import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user } = useAuth();

  if (!user) return null; // 🔒 critical

  return (
    <div style={{ borderBottom: "1px solid var(--border)", background: "white" }}>
      <div className="container" style={{ display: "flex", gap: 16 }}>
        <strong>Eventify</strong>

        <Link to="/">Home</Link>

        {user.role === "USER" && <Link to="/dashboard">Dashboard</Link>}

        {user.role === "ORGANIZER" && (
          <Link to="/organizer/dashboard">Organizer</Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
