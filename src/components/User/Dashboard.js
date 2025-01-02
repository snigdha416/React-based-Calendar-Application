// export default UserDashboard;

import React, { useState } from "react";
import CalendarView from './CalendarView'; 
import './Dashboard.css';

// Communication Modal for adding new communication
const CommunicationModal = ({ isOpen, onClose, onSave }) => {
  const [communicationType, setCommunicationType] = useState('');
  const [communicationDate, setCommunicationDate] = useState('');
  const [communicationNotes, setCommunicationNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCommunication = {
      type: communicationType,
      date: communicationDate,
      status: 'completed', // default to completed
      notes: communicationNotes,
    };
    onSave(newCommunication);
    onClose(); // Close modal after saving
  };
    // Reset the form and close the modal (for Cancel button)
    const handleCancel = () => {
      setCommunicationType('');
      setCommunicationDate('');
      setCommunicationNotes('');
      onClose(); // Close the modal
    };
  

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Log a New Communication</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="communicationType">Type of Communication</label>
              <select
                id="communicationType"
                value={communicationType}
                onChange={(e) => setCommunicationType(e.target.value)}
                required
              >
                <option value="">Select Type</option>
                <option value="LinkedIn Post">LinkedIn Post</option>
                <option value="Email">Email</option>
                <option value="Call">Call</option>
                <option value="Meeting">Meeting</option>
              </select>
            </div>
            <div>
              <label htmlFor="communicationDate">Date of Communication</label>
              <input
                type="date"
                id="communicationDate"
                value={communicationDate}
                onChange={(e) => setCommunicationDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="communicationNotes">Notes</label>
              <textarea
                id="communicationNotes"
                value={communicationNotes}
                onChange={(e) => setCommunicationNotes(e.target.value)}
                placeholder="Additional comments"
                required
              />
            </div>
            <div>
            <div className="modal-button-container">
                <button className="save-button" type="submit">Save Communication</button>
                <button className="cancel-button" onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

// User Dashboard Component
const UserDashboard = () => {
  const [showCalendar, setShowCalendar] = useState(false); // State to toggle calendar view
  const [selectedCompany, setSelectedCompany] = useState(null); // Declare selectedCompany state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date())

  const [companies, setCompanies] = useState([
    {
      name: 'Company 1',
      communications: [
        { type: 'Call', date: '15th September', status: 'completed' },
        { type: 'Email', date: '10th September', status: 'completed' },
        { type: 'Meeting', date: '5th September', status: 'completed' },
        { type: 'LinkedIn Post', date: '1st September', status: 'completed' },
        { type: 'Call', date: '30th August', status: 'completed' }
      ],
      nextCommunication: { type: 'Call', date: '20th September' },
      status: 'overdue'
    },
    {
      name: 'Company 2',
      communications: [
        { type: 'Call', date: '10th September', status: 'completed' },
        { type: 'Email', date: '8th September', status: 'completed' },
        { type: 'Meeting', date: '7th September', status: 'completed' },
        { type: 'LinkedIn Post', date: '5th September', status: 'completed' },
        { type: 'Call', date: '3rd September', status: 'completed' }
      ],
      nextCommunication: { type: 'Meeting', date: '18th September' },
      status: 'due-today'
    },
    {
      name: 'Company 3',
      communications: [
        { type: 'Call', date: '20th September', status: 'completed' },
        { type: 'LinkedIn Post', date: '10th September', status: 'completed' },
        { type: 'Email', date: '5th September', status: 'completed' },
        { type: 'Meeting', date: '1st September', status: 'completed' },
        { type: 'Call', date: '25th August', status: 'completed' }
      ],
      nextCommunication: { type: 'Meeting', date: '25th September' },
      status: 'upcoming'
    }
  ]);

  // Handle toggling between dashboard and calendar view
  const toggleCalendarView = () => {
    setShowCalendar(!showCalendar);
  };

    // Function to handle date selection in the calendar
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

     // To get the past communications for the selected date
  const getPastCommunications = () => {
    return companies.flatMap(company =>
      company.communications.filter(comm => new Date(comm.date) < selectedDate)
    );
  };

  // To get the upcoming communications for the selected date
  const getUpcomingCommunications = () => {
    return companies.flatMap(company =>
      company.communications.filter(comm => new Date(comm.date) > selectedDate)
    );
  };

  // Function to get overdue, due today, and upcoming communications
  const getOverdueCommunications = () => {
    return companies.filter(company => 
      new Date(company.nextCommunication.date) < new Date() && company.status === 'overdue'
    );
  };

  const getDueTodayCommunications = () => {
    return companies.filter(company => 
      new Date(company.nextCommunication.date).toDateString() === new Date().toDateString() && company.status === 'due-today'
    );
  };

  // Notifications count
  const overdueCount = getOverdueCommunications().length;
  const dueTodayCount = getDueTodayCommunications().length;
  const upcomingCount = getUpcomingCommunications().length;

  // Perform Communication (open modal)
  const handlePerformCommunication = (company) => {
    setSelectedCompany(company); // Track which company is selected
    setIsModalOpen(true); // Open modal
  };

  // Save communication and update company status
  const handleSaveCommunication = (communication) => {
    const updatedCompanies = companies.map((company) => {
      if (selectedCompany && company.name === selectedCompany.name) {
        // Add new communication
        const updatedCommunications = [...company.communications, communication];

        // Update status based on next communication date
        const nextCommDate = new Date(company.nextCommunication.date);
        const today = new Date();
        let status = '';

        if (nextCommDate < today) {
          status = 'overdue'; 
        } else if (nextCommDate.toDateString() === today.toDateString()) {
          status = 'due-today';
        } else {
          status = 'upcoming';
        }

        return {
          ...company,
          communications: updatedCommunications,
          status: status,  // Update status after communication is logged
        };
      }
      return company;
    });

    setCompanies(updatedCompanies); // Update the state to trigger re-render
    setIsModalOpen(false); // Close modal after saving
  };

     const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>

       {/* Toggle Calendar View */}
       <button onClick={toggleCalendar}>
        {showCalendar ? "Hide Calendar" : "Show Calendar"}       </button>

             {/* Display Calendar if `showCalendar` is true */}     
      {showCalendar && <CalendarView companies={companies} />}
      
      {/* Notification Icon */}
      <div className="notification-icon">
        <span className="icon">&#x1F514;</span> {/* Bell Icon */}
        {(overdueCount > 0 || dueTodayCount > 0 || upcomingCount > 0) && (
          <span className="badge">{overdueCount + dueTodayCount + upcomingCount}</span>
        )}
      </div>

      <div className="notifications-section">
        <h3>Notifications</h3>
        <div className="notifications-grids">
          {/* Overdue Communications Grid */}
          <div className="grid">
            <h4>Overdue Communications</h4>
            <ul>
              {getOverdueCommunications().map((company, idx) => (
                <li key={idx}>{company.name}</li>
              ))}
            </ul>
          </div>

          {/* Due Today Communications Grid */}
          <div className="grid">
            <h4>Due Today Communications</h4>
            <ul>
              {getDueTodayCommunications().map((company, idx) => (
                <li key={idx}>{company.name}</li>
              ))}
            </ul>
          </div>

          {/* Upcoming Communications Grid */}
          <div className="grid">
            <h4>Upcoming Communications</h4>
            <ul>
              {getUpcomingCommunications().map((company, idx) => (
                <li key={idx}>{company.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Company Cards */}
      <div className="companies-section">
        {companies.map((company, index) => (
          <div key={index} className="company-card">
            <h3>{company.name}</h3>
            <div className="communications-summary">
              <div className="communications-list">
                <h4>Last Five Communications:</h4>
                <ul>
                  {company.communications.map((comm, i) => (
                    <li key={i} className={`communication-item ${comm.status === 'completed' ? 'completed' : ''}`}>
                      <span className="communication-type">{comm.type} - </span>
                      <span className="communication-date">{comm.date}</span>
                      {comm.status === 'completed' && (
                        <span className="tooltip">{comm.notes}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Status Badge */}
            <div className="status-section">
              <span className={`badge ${company.status}`}>
                {company.status === 'due-today'
                  ? 'Due Today'
                  : company.status === 'overdue'
                  ? 'Overdue'
                  : 'Upcoming'}
              </span>
            </div>

            <button className="perform-communication" onClick={() => handlePerformCommunication(company)}>
              Perform Communication
            </button>
          </div>
        ))}
      </div>

      {/* Communication Modal */}
      <CommunicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveCommunication}
      />
    </div>
  );
};

export default UserDashboard;




