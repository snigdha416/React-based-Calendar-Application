// src/components/OverdueCommunicationTrends/OverdueCommunicationTrends.jsx
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const OverdueCommunicationTrends = () => {
  // Hardcoded mock data (as per the provided structure)
  const [data, setData] = useState([
    {
      name: 'Company 1',
      communications: [
        { type: 'Call', date: '2024-09-15', status: 'completed', notes: 'Great call!' },
        { type: 'Email', date: '2024-09-10', status: 'completed', notes: 'Followed up' },
        { type: 'Meeting', date: '2024-09-05', status: 'completed', notes: 'Discussed project scope' },
        { type: 'LinkedIn Post', date: '2024-09-01', status: 'completed', notes: 'Post engagement' },
        { type: 'Call', date: '2024-08-30', status: 'completed', notes: 'Initial contact' }
      ],
      nextCommunication: { type: 'Call', date: '2024-09-20' },
      status: 'overdue'
    },
    {
      name: 'Company 2',
      communications: [
        { type: 'Call', date: '2024-09-10', status: 'completed', notes: 'Great call!' },
        { type: 'Email', date: '2024-09-08', status: 'completed', notes: 'Scheduled meeting' },
        { type: 'Meeting', date: '2024-09-07', status: 'completed', notes: 'Initial meeting' },
        { type: 'LinkedIn Post', date: '2024-09-05', status: 'completed', notes: 'Follow-up' },
        { type: 'Call', date: '2024-09-03', status: 'completed', notes: 'Cold call' }
      ],
      nextCommunication: { type: 'Meeting', date: '2024-09-18' },
      status: 'due-today'
    },
    {
      name: 'Company 3',
      communications: [
        { type: 'Call', date: '2024-09-10', status: 'completed', notes: 'Great call!' },
        { type: 'Email', date: '2024-09-08', status: 'completed', notes: 'Scheduled meeting' },
        { type: 'Meeting', date: '2024-09-07', status: 'completed', notes: 'Initial meeting' },
        { type: 'LinkedIn Post', date: '2024-09-05', status: 'completed', notes: 'Follow-up' },
        { type: 'Call', date: '2024-09-03', status: 'completed', notes: 'Cold call' }
      ],
      nextCommunication: { type: 'Meeting', date: '2024-09-18' },
      status: 'upcoming'
    },
  ]);

  // Filter the overdue companies
  const overdueData = data.filter(company => company.status === 'overdue');

  // Prepare chart data for overdue companies
  const chartData = {
    labels: overdueData.map(company => company.name), // Using company names as labels
    datasets: [
      {
        label: 'Overdue Communications',
        data: overdueData.map(() => 1), // Assuming each overdue company has a single overdue communication count
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Overdue Communication Trends</h2>
      <Line data={chartData} />
    </div>
  );
};

export default OverdueCommunicationTrends;
