const EVENT_BASE_URL = import.meta.env.VITE_EVENT_BASE_URL;

export async function getEvents() {
  const res = await fetch(`${EVENT_BASE_URL}/events`);
  if (!res.ok) throw new Error("Failed to fetch events");
  return res.json();
}

export async function createEvent(token, payload) {
  const res = await fetch(`${EVENT_BASE_URL}/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Create event failed");
  }

  return res.json();
}

export async function reserveSeat(token, eventId) {
  const res = await fetch(
    `${EVENT_BASE_URL}/events/${eventId}/reserve`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Reservation failed");
  }

  return res.json();
}
