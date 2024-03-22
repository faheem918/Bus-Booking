import React, { useState } from "react";
import "./BusLayout.css";

function BusLayout({ reservations, onSeatSelect }) {
  const [selectedSeat, setSelectedSeat] = useState(null);

  const renderSeat = (seatNumber) => {
    // const reserved = reservations && reservations.includes(seatNumber);
    const reserved =
      Array.isArray(reservations) && reservations.includes(seatNumber);
    const selected = selectedSeat === seatNumber ? "selected" : "";
    const status = reserved ? "reserved" : "available";
    return (
      <div
        key={seatNumber}
        className={`seat ${status} ${selected}`}
        onClick={() => handleSeatClick(seatNumber)}
      >
        {seatNumber}
      </div>
    );
  };

  const handleSeatClick = (seatNumber) => {
    if (!reservations || !reservations.includes(seatNumber)) {
      setSelectedSeat(seatNumber);
      onSeatSelect(seatNumber);
    } else {
      // Seat is already booked, handle accordingly
      console.log("Seat is already booked!");
    }
  };

  return (
    <div className="bus-layout">
      <h3>Bus Layout</h3>

      <div className="seats">
        {[...Array(40).keys()].map((seatNumber) => renderSeat(seatNumber + 1))}
      </div>
    </div>
  );
}

export default BusLayout;
