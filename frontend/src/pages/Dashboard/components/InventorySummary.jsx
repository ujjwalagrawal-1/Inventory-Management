import React from "react";
import Card from "../../../components/ui/Card";
import { useInventory } from "../../../context/InventoryContext";
import "../Dashboard.css";

function StatItem({ icon, value, label, bgColor }) {
  return (
    <div className="stat-item" style={{ minWidth: "100px" }}>
      <div className="stat-icon-wrapper" style={{ backgroundColor: bgColor }}>
        {icon}
      </div>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function InventorySummary() {
  const { getOverallStats } = useInventory();
  const stats = getOverallStats();

  return (
    <Card title="Inventory Summary">
      <div style={{ display: "flex", gap: "24px", justifyContent: "space-around", padding: "10px 0" }}>
        <StatItem icon="📦" value={stats.totalProductsCount} label="Quantity in Hand" bgColor="rgba(251, 146, 60, 0.15)" />
        <StatItem icon="📍" value="200" label="To be received" bgColor="rgba(167, 139, 250, 0.15)" />
      </div>
    </Card>
  );
}
