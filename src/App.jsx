import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import ReservationView from "./components/ReservationView";
import DashboardView from "./components/DashboardView";

function App() {
  const [reservations, setReservations] = useState([]);

  const addReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <ReservationView
                reservations={reservations}
                addReservation={addReservation}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <DashboardView
                reservations={reservations}
                setReservations={setReservations}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
