import React from "react";
import Card from "../../components/ui/Card";

export default function ManageStorePage() {
  return (
    <Card title="Manage Store">
      <div style={{ textAlign: "center", padding: "40px", color: "var(--text-secondary)" }}>
        <span style={{ fontSize: "48px" }}>🏪</span>
        <h3 style={{ marginTop: "16px" }}>Store Management</h3>
        <p>Configure warehouse locations, branches, and physical layout setups here.</p>
      </div>
    </Card>
  );
}
