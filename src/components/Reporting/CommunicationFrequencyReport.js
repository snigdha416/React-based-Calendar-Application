// src/components/CommunicationFrequencyReport/CommunicationFrequencyReport.jsx
import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const CommunicationFrequencyReport = () => {
  const companies = [
    {
      name: 'Company 1',
      communications: [
        { type: 'Calls', date: '2024-09-15', status: 'completed', notes: 'Great call!' },
        { type: 'Emails', date: '2024-09-10', status: 'completed', notes: 'Followed up' },
        { type: 'Meetings', date: '2024-09-05', status: 'completed', notes: 'Discussed project scope' },
        { type: 'LinkedIn Posts', date: '2024-09-01', status: 'completed', notes: 'Post engagement' },
        { type: 'Calls', date: '2024-08-30', status: 'completed', notes: 'Initial contact' }
      ]
    },
    {
      name: 'Company 2',
      communications: [
        { type: 'Call', date: '2024-09-10', status: 'completed', notes: 'Great call!' },
        { type: 'Email', date: '2024-09-08', status: 'completed', notes: 'Scheduled meeting' },
        { type: 'Meeting', date: '2024-09-07', status: 'completed', notes: 'Initial meeting' },
        { type: 'LinkedIn Post', date: '2024-09-05', status: 'completed', notes: 'Follow-up' },
        { type: 'Call', date: '2024-09-03', status: 'completed', notes: 'Cold call' }
      ]
    },
    {
      name: 'Company 3',
      communications: [
        { type: 'Call', date: '2024-09-10', status: 'completed', notes: 'Great call!' },
        { type: 'Email', date: '2024-09-08', status: 'completed', notes: 'Scheduled meeting' },
        { type: 'Meeting', date: '2024-09-07', status: 'completed', notes: 'Initial meeting' },
        { type: 'LinkedIn Post', date: '2024-09-05', status: 'completed', notes: 'Follow-up' },
        { type: 'Call', date: '2024-09-03', status: 'completed', notes: 'Cold call' }
      ]
    }
  ];

  const [selectedCompany, setSelectedCompany] = useState('');

  const data = selectedCompany
    ? companies.find((company) => company.name === selectedCompany)?.communications.reduce(
        (acc, comm) => {
          acc[comm.type] = (acc[comm.type] || 0) + 1;
          return acc;
        },
        {}
      ) || {}
    : {};

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Frequency',
        data: Object.values(data),
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }
    ]
  };

  return (
    <div>
      <h2>Communication Frequency Report</h2>
      <div>
        <select onChange={(e) => setSelectedCompany(e.target.value)}>
          <option value="">Select Company</option>
          {companies.map((company, index) => (
            <option key={index} value={company.name}>
              {company.name}
            </option>
          ))}
        </select>
      </div>
      {selectedCompany && (
        <>
          <Bar data={chartData} />
          <Pie data={chartData} />
        </>
      )}
    </div>
  );
};

export default CommunicationFrequencyReport;
