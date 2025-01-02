import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/Admin/AdminDashboard';
import CompanyManagement from './components/Admin/CompanyManagement';
// import CompanyForm from './components/Admin/CompanyForm';
import CommunicationMethodManagement from './components/Admin/CommunicationMethodManagement';
// import CommunicationMethodForm from './components/Admin/CommunicationMethodForm';
import Header from './components/shared/Header';
import Dashboard from './components/User/Dashboard';
import CommunicationModal from './components/User/CommunicationModal';
import CalendarView from './components/User/CalendarView';
import Notifications from './components/User/Notifications';
import ReportsDashboard from './components/Reporting/ReportsDashboard';

import CommunicationFrequencyReport from './components/Reporting/CommunicationFrequencyReport';
import EngagementEffectivenessDashboard from './components/Reporting/EngagementEffectivenessDashboard';
import OverdueCommunicationTrends from './components/Reporting/OverdueCommunicationTrends';
import DownloadableReports from './components/Reporting/DownloadableReports';
import RealTimeActivityLog from './components/Reporting/RealTimeActivityLog';


function App() {
  // Local state management for the application
  const [companyData, setCompanyData] = useState([]);
  const [communicationMethodData, setCommunicationMethodData] = useState([]);

  // Methods to pass down to child components
  const updateCompanyData = (newData) => {
    setCompanyData(newData);
  };

  const updateCommunicationMethodData = (newData) => {
    setCommunicationMethodData(newData);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={<AdminDashboard companyData={companyData} />} 
          />
          <Route 
            path="/company-management" 
            element={<CompanyManagement companyData={companyData} updateCompanyData={updateCompanyData} />} 
          />
          <Route 
            path="/communication-methods" 
            element={<CommunicationMethodManagement communicationMethodData={communicationMethodData} updateCommunicationMethodData={updateCommunicationMethodData} />} 
          />
           <Route path="/user" element={<Dashboard />} />
           <Route path="/communication-tasks" element={<CommunicationModal />} />
           <Route path="/calendar-view" element={<CalendarView />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/reports" element={<ReportsDashboard />} />
          <Route path="/reports" element={<ReportsDashboard />} />
        <Route path="/reports/communication-frequency" element={<CommunicationFrequencyReport />} />
        <Route path="/reports/engagement-effectiveness" element={<EngagementEffectivenessDashboard />} />
        <Route path="/reports/overdue-trends" element={<OverdueCommunicationTrends />} />
        <Route path="/reports/downloadable-reports" element={<DownloadableReports />} />
        <Route path= "/reports/realtimeactivitylogs-reports" element={<RealTimeActivityLog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
