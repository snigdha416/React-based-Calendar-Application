import React, { useState, useEffect } from 'react';

const EngagementEffectivenessDashboard = () => {
  // Hardcoded mock data
  const data = [
    {
      method: 'Email',
      responseRate: 75,
      followUps: 30,
      successRate: 60,
      effectiveness: 'High'
    },
    {
      method: 'Phone Call',
      responseRate: 85,
      followUps: 15,
      successRate: 70,
      effectiveness: 'Medium'
    },
    {
      method: 'LinkedIn Message',
      responseRate: 50,
      followUps: 20,
      successRate: 40,
      effectiveness: 'Low'
    }
  ];

  return (
    <div>
      <h2>Engagement Effectiveness Dashboard</h2>
      <div>
        {data.map((item, index) => (
          <div key={index} className="method-container">
            <h3>{item.method}</h3>
            <p><strong>Response Rate:</strong> {item.responseRate}%</p>
            <p><strong>Follow-ups:</strong> {item.followUps}</p>
            <p><strong>Success Rate:</strong> {item.successRate}%</p>
            <p><strong>Method Effectiveness:</strong> {item.effectiveness}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EngagementEffectivenessDashboard;
