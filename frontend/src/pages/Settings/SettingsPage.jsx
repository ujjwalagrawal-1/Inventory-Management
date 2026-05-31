import React from "react";
import Card from "../../components/ui/Card";

export default function SettingsPage() {
  return (
    <Card title="Settings">
      <div style={{ textAlign: "center", padding: "40px", color: "var(--text-secondary)" }}>
        <span style={{ fontSize: "48px" }}>⚙️</span>
        <h3 style={{ marginTop: "16px" }}>App Settings</h3>
        <p>Manage application preferences, user credentials, thresholds, and notifications here.</p>
      </div>
    </Card>
  );
}
