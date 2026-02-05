import React from 'react';

export function Dashboard({ user }) {
  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}</h1>
      <div className="metrics">
        <MetricCard title="Active Users" value={1234} />
        <MetricCard title="Revenue" value=",678" />
        <MetricCard title="Conversion" value="3.2%" />
      </div>
    </div>
  );
}

function MetricCard({ title, value }) {
  return (
    <div className="metric-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}
