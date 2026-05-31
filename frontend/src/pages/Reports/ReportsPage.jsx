import React from "react";
import Card from "../../components/ui/Card";

export default function ReportsPage() {
  return (
    <Card title="Reports">
      <div style={{ textAlign: "center", padding: "40px", color: "var(--text-secondary)" }}>
        <span style={{ fontSize: "48px" }}>📊</span>
        <h3 style={{ marginTop: "16px" }}>Reports Dashboard</h3>
        <p>Analyze sales, purchases, and supplier performance records here.</p>
      </div>
    </Card>
  );
}
