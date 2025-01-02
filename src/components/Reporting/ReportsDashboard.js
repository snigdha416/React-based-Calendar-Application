import React from 'react';
import CommunicationFrequencyReport from '../Reporting/CommunicationFrequencyReport';
import EngagementEffectivenessDashboard from '../Reporting/EngagementEffectivenessDashboard';
import OverdueCommunicationTrends from '../Reporting/OverdueCommunicationTrends';
import DownloadableReports from '../Reporting/DownloadableReports';
import RealTimeActivityLog from './RealTimeActivityLog';

const ReportsDashboard = () => {
  return (
    <div>
      <h1>Reports Dashboard</h1>
      <CommunicationFrequencyReport />
      <EngagementEffectivenessDashboard />
      <OverdueCommunicationTrends />
      <DownloadableReports />
      <RealTimeActivityLog />
    </div>
  );
};

export default ReportsDashboard;