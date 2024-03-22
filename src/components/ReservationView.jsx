import ReservationForm from "./ReservationForm";

function ReservationView({ reservations, addReservation }) {
  return (
    <div>
      <h2>Reservation View</h2>

      <ReservationForm
        reservations={reservations}
        addReservation={addReservation}
      />
    </div>
  );
}

export default ReservationView;
