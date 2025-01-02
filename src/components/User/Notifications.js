// src/components/User/Notifications.js
import React from 'react';

const Notifications = ({ companies }) => {
  const overdue = companies.filter((company) => company.overdue);
  const dueToday = companies.filter(
    (company) => !company.overdue && new Date(company.nextCommunication.date) <= new Date()
  );

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <div>
        <h3>Overdue Communications</h3>
        <ul>
          {overdue.map((company) => (
            <li key={company.name}>{company.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Today's Communications</h3>
        <ul>
          {dueToday.map((company) => (
            <li key={company.name}>{company.name} - {company.nextCommunication.date}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
