import React from "react";
import Card from "../../../components/ui/Card";
import "../Dashboard.css";

function StatItem({ icon, value, label, bgColor }) {
  return (
    <div className="stat-item">
      <div className="stat-icon-wrapper" style={{ backgroundColor: bgColor }}>
        {icon}
      </div>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function SalesOverview() {
  return (
    <Card title="Sales Overview">
      <div className="stats-grid">
        <StatItem icon="💼" value="₹ 832" label="Sales" bgColor="rgba(167, 139, 250, 0.15)" />
        <StatItem icon="📈" value="₹ 18,300" label="Revenue" bgColor="rgba(96, 165, 250, 0.15)" />
        <StatItem icon="💰" value="₹ 868" label="Profit" bgColor="rgba(251, 146, 60, 0.15)" />
        <StatItem icon="🏠" value="₹ 17,432" label="Cost" bgColor="rgba(52, 211, 153, 0.15)" />
      </div>
    </Card>
  );
}
