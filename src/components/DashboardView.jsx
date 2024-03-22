import { useState } from "react";

function DashboardView({ reservations, setReservations }) {
  const [editedReservation, setEditedReservation] = useState({});
  const [editingIndex, setEditingIndex] = useState(null);

  const handleEdit = (index, reservation) => {
    setEditingIndex(index);
    setEditedReservation({ ...reservation });
  };

  const handleSave = () => {
    const updatedReservations = [...reservations];
    updatedReservations[editingIndex] = editedReservation;
    setReservations(updatedReservations);
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  const handleDelete = (id) => {
    const updatedReservations = reservations.filter(
      (reservation) => reservation.id !== id
    );
    setReservations(updatedReservations);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedReservation((prevReservation) => ({
      ...prevReservation,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Dashboard View</h2>
      <h3>All Passengers</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Seat Number</th>
            <th>Date of Booking</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations?.map((reservation, index) => (
            <tr key={index}>
              <td>
                {editingIndex === index ? (
                  <>
                    <input
                      type="text"
                      name="firstName"
                      value={editedReservation.firstName}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={editedReservation.lastName}
                      onChange={handleChange}
                    />
                  </>
                ) : (
                  `${reservation.firstName} ${reservation.lastName}`
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="email"
                    value={editedReservation.email}
                    onChange={handleChange}
                  />
                ) : (
                  reservation.email
                )}
              </td>
              <td>{reservation.seatNumber}</td>
              <td>{new Date().toLocaleDateString()}</td>
              <td>
                {editingIndex === index ? (
                  <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(index, reservation)}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(reservation.id)}>
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardView;
