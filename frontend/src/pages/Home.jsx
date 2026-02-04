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

      // Role updated in DB, JWT is stale → force re-login
      removeToken();
      navigate("/login", { replace: true });
      window.location.reload();
    } catch (err) {
      setOrgError(err.message);
    } finally {
      setOrgLoading(false);
    }
  }

  return (
    <div className="container">
      <h1>Discover Events</h1>
      <p className="muted">Browse and reserve seats for upcoming events</p>

      {/* Organizer Request */}
      {user?.role === "USER" && (
        <div className="card" style={{ marginBottom: 32 }}>
          <h3>Become an Organizer</h3>
          <p className="muted">
            Create and manage your own events.
          </p>

          <button onClick={handleRequestOrganizer} disabled={orgLoading}>
            {orgLoading ? "Processing…" : "Request Organizer Access"}
          </button>

          {orgError && <p className="error">{orgError}</p>}
        </div>
      )}

      {loading && <p className="muted">Loading events…</p>}
      {error && <p className="error">{error}</p>}

      {/* Events Grid */}
      <div className="events-grid">
        {events.map((e) => (
          <div className="card event-card" key={e.eventId}>
            <div className="event-header">
              <div>
                <div className="event-title">{e.title}</div>
                <div className="event-date">
                  {new Date(e.date).toLocaleString()}
                </div>
              </div>

              <span
                className={`badge ${
                  e.availableSeats > 0 ? "available" : "sold"
                }`}
              >
                {e.availableSeats > 0 ? "Open" : "Sold Out"}
              </span>
            </div>

            <p className="muted">
              Seats left: <strong>{e.availableSeats}</strong>
            </p>

            {user?.role === "USER" && e.availableSeats > 0 && (
              <div className="event-footer">
                <button
                  onClick={async () => {
                    try {
                      await reserveSeat(getToken(), e.eventId);
                      alert(
                        "Seat reserved successfully. Confirmation email sent."
                      );
                      window.location.reload();
                    } catch (err) {
                      alert(err.message);
                    }
                  }}
                >
                  Reserve Seat
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
