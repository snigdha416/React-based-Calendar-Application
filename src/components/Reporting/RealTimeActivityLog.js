import React, { useState } from 'react';

// Sample data for communications
const initialData = [
  { date: '2024-09-15', type: 'Call', user: 'User 1', company: 'Company 1', notes: 'Great call!' },
  { date: '2024-09-10', type: 'Email', user: 'User 2', company: 'Company 1', notes: 'Followed up' },
  { date: '2024-09-07', type: 'Meeting', user: 'User 3', company: 'Company 2', notes: 'Initial meeting' },
  { date: '2024-09-05', type: 'LinkedIn Post', user: 'User 1', company: 'Company 3', notes: 'Post engagement' },
  { date: '2024-09-01', type: 'Call', user: 'User 2', company: 'Company 2', notes: 'Cold call' },
];

const RealTimeActivityLog = () => {
  const [activities, setActivities] = useState(initialData);
  const [sortBy, setSortBy] = useState('date'); // Default sort by date

  const handleSort = (criteria) => {
    setSortBy(criteria);
    const sortedActivities = [...activities];
    sortedActivities.sort((a, b) => {
      if (criteria === 'date') {
        return new Date(b.date) - new Date(a.date); // Sort by date
      } else if (criteria === 'user') {
        return a.user.localeCompare(b.user); // Sort by user
      } else if (criteria === 'company') {
        return a.company.localeCompare(b.company); // Sort by company
      }
      return 0;
    });
    setActivities(sortedActivities);
  };

  // Inline styles
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '90%',
    maxWidth: '800px',
    margin: '20px auto',
    textAlign: 'center',
  };

  const logHeaderStyle = {
    fontSize: '18px',
    marginBottom: '10px',
  };

  const buttonStyle = {
    padding: '5px 10px',
    margin: '5px',
    backgroundColor: '#0056b3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#004494',
  };

  const tableStyle = {
    width: '100%',
    marginTop: '15px',
    borderCollapse: 'collapse',
  };

  const tableHeaderStyle = {
    backgroundColor: '#0056b3',
    color: 'white',
    padding: '8px',
  };

  const tableCellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={logHeaderStyle}>Real-Time Activity Log</h2>
      
      {/* Sort buttons */}
      <div>
        <button
          style={buttonStyle}
          onClick={() => handleSort('date')}
          onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
        >
          Sort by Date
        </button>
        <button
          style={buttonStyle}
          onClick={() => handleSort('user')}
          onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
        >
          Sort by User
        </button>
        <button
          style={buttonStyle}
          onClick={() => handleSort('company')}
          onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
        >
          Sort by Company
        </button>
      </div>

      {/* Activity Log Table */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Date</th>
            <th style={tableHeaderStyle}>Type</th>
            <th style={tableHeaderStyle}>User</th>
            <th style={tableHeaderStyle}>Company</th>
            <th style={tableHeaderStyle}>Notes</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index}>
              <td style={tableCellStyle}>{activity.date}</td>
              <td style={tableCellStyle}>{activity.type}</td>
              <td style={tableCellStyle}>{activity.user}</td>
              <td style={tableCellStyle}>{activity.company}</td>
              <td style={tableCellStyle}>{activity.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RealTimeActivityLog;
