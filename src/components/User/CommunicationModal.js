import React, { useState } from 'react';

const CommunicationModal = ({ isOpen, onClose, onSave }) => {
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new communication object
    const newCommunication = { type, date, notes };
    onSave(newCommunication); // Pass the new communication to the parent (UserDashboard)
  };

  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Log New Communication</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Communication Type:
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <label>
            Notes:
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </label>
          <button type="submit">Log Communication</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CommunicationModal;
