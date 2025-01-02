import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import Papa from 'papaparse';

const DownloadableReports = () => {
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

  // Function to handle CSV export
  const exportCSV = () => {
    const csvData = data.map((company) => ({
      Company: company.name,
      'Overdue Communications': company.communications.length,
      'Next Communication': company.nextCommunication.date,
      Status: company.status,
    }));

    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'all_company_data_report.csv';
    link.click();
  };

  // Function to handle PDF export
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text('Company Data Report', 20, 10);

    let yOffset = 20;
    data.forEach((company, index) => {
      doc.text(`${index + 1}. ${company.name}`, 20, yOffset);
      yOffset += 10;
      doc.text(`Status: ${company.status}`, 20, yOffset);
      yOffset += 10;
      doc.text(`Next Communication: ${company.nextCommunication.date}`, 20, yOffset);
      yOffset += 10;
      doc.text(`Communications Count: ${company.communications.length}`, 20, yOffset);
      yOffset += 20;
    });

    doc.save('all_company_data_report.pdf');
  };

  const handleDownload = (format) => {
    if (format === 'pdf') {
      exportPDF();
    } else if (format === 'csv') {
      exportCSV();
    }
  };

  // Inline styling for the component
  const containerStyle = {
    padding: '15px',
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '250px', 
    textAlign: 'center',
    margin: '20px auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column', 
    gap: '25px', 
  };

  const buttonStyle = {
    padding: '8px 10px', 
    backgroundColor: '#0056b3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin:'10px',
    fontSize: '12px', 
    transition: 'background-color 0.3s',
    flex: 1,
    justifyContent: 'space-between',
    gap: '25px', 
  };

  const buttonHoverStyle = {
    backgroundColor: '#004494',
  };

  return (
    <div style={containerStyle}>
      <h2>Downloadable Reports</h2>
      <div>
        <button
          onClick={() => handleDownload('pdf')}
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
        >
          Download PDF
        </button>
        <button
          onClick={() => handleDownload('csv')}
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
        >
          Download CSV
        </button>
      </div>
    </div>
  );
};

export default DownloadableReports;
