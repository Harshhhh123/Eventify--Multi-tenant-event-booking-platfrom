import { useState } from "react";
import { createEvent } from "../api/event.api";
import { getToken } from "../utils/token";

function OrganizerDashboard() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      await createEvent(getToken(), {
        title,
        date,
        capacity: Number(capacity)
      });

      setSuccess("Event created successfully");
      setTitle("");
      setDate("");
      setCapacity("");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="container">
      <h2>Create Event</h2>

      <div className="card" style={{ maxWidth: 500 }}>
        {error && <p className="error">{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 12 }}>
            <label className="muted">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div style={{ marginBottom: 12 }}>
            <label className="muted">Date</label>
            <input
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label className="muted">Capacity</label>
            <input
              type="number"
              min="1"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              required
            />
          </div>

          <button type="submit">Create Event</button>
        </form>
      </div>
    </div>
  );
}

export default OrganizerDashboard;
