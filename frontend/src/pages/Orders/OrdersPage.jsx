import React from "react";
import Card from "../../components/ui/Card";

export default function OrdersPage() {
  return (
    <Card title="Orders">
      <div style={{ textAlign: "center", padding: "40px", color: "var(--text-secondary)" }}>
        <span style={{ fontSize: "48px" }}>🛒</span>
        <h3 style={{ marginTop: "16px" }}>Orders Management</h3>
        <p>Track incoming customer purchases and supplier delivery orders here.</p>
      </div>
    </Card>
  );
}
