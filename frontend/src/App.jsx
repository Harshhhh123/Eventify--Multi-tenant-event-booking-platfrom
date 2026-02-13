import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./pages/Home";
import UserDashboard from "./pages/UserDashboard";
import OrganizerDashboard from "./pages/OrganizerDashboard";
import Landing from "./pages/Landing";

import ProtectedRoute from "./router/ProtectedRoute";
import PublicLayout from "./layouts/PublicLayout";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
<Route path="/" element={<Landing />} />

        {/* PUBLIC */}
        <Route
          path="/login"
          element={
            <PublicLayout>
              <Login />
            </PublicLayout>
          }
        />

        <Route
          path="/register"
          element={
            <PublicLayout>
              <Register />
            </PublicLayout>
          }
        />

        {/* PROTECTED APP */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["USER", "ORGANIZER"]}>
              <AppLayout>
                <Home />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute allowedRoles={["USER"]}>
              <AppLayout>
                <UserDashboard />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/organizer/dashboard"
          element={
            <ProtectedRoute allowedRoles={["ORGANIZER"]}>
              <AppLayout>
                <OrganizerDashboard />
              </AppLayout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
