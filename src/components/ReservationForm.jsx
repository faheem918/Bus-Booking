import { useState } from "react";
import BusLayout from "./BusLayout";

function ReservationForm({ reservations, addReservation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSeat && firstName && lastName && email) {
      addReservation({ firstName, lastName, email, seatNumber: selectedSeat });

      setFirstName("");
      setLastName("");
      setEmail("");
      setSelectedSeat(null);
    } else {
      alert("Please fill in all fields and select a seat");
    }
  };

  const handleSeatSelect = (seatNumber) => {
    setSelectedSeat(seatNumber);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Make a Reservation</h3>
      <BusLayout reservations={reservations} onSeatSelect={handleSeatSelect} />
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Seat Number: {selectedSeat}</label>
      </div>
      <button type="submit">Book Seat</button>
    </form>
  );
}

export default ReservationForm;
