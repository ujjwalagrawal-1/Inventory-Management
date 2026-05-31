import React from "react";
import Card from "../../../components/ui/Card";
import { useInventory } from "../../../context/InventoryContext";
import { useSuppliers } from "../../../context/SupplierContext";
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

export default function ProductSummary() {
  const { getOverallStats } = useInventory();
  const { suppliers } = useSuppliers();
  const stats = getOverallStats();

  return (
    <Card title="Product Summary">
      <div style={{ display: "flex", gap: "24px", justifyContent: "space-around", padding: "10px 0" }}>
        <StatItem icon="👤" value={suppliers.length} label="Number of Suppliers" bgColor="rgba(96, 165, 250, 0.15)" />
        <StatItem icon="📋" value={stats.totalCategories} label="Number of Categories" bgColor="rgba(167, 139, 250, 0.15)" />
      </div>
    </Card>
  );
}
