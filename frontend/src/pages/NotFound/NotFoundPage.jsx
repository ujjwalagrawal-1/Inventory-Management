import React from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function NotFoundPage({ onBack }) {
  return (
    <Card>
      <div style={{ textAlign: "center", padding: "40px", color: "var(--text-secondary)" }}>
        <span style={{ fontSize: "64px" }}>🔍</span>
        <h3 style={{ marginTop: "16px" }}>Page Not Found</h3>
        <p style={{ marginBottom: "24px" }}>The view you are looking for does not exist or has been moved.</p>
        <Button variant="primary" onClick={onBack}>
          Go to Dashboard
        </Button>
      </div>
    </Card>
  );
}
