import React, { useState } from "react";
import OverviewTab from "./components/OverviewTab";
import PurchasesTab from "./components/PurchasesTab";
import AdjustmentsTab from "./components/AdjustmentsTab";
import HistoryTab from "./components/HistoryTab";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import "./ProductDetails.css";

export default function ProductDetailsPage({ product, onBack }) {
  const [activeTab, setActiveTab] = useState("overview");

  if (!product) {
    return (
      <Card>
        <div style={{ textAlign: "center", padding: "40px" }}>
          <h3>No product selected</h3>
          <Button variant="primary" onClick={onBack}>Go back to Inventory</Button>
        </div>
      </Card>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab product={product} />;
      case "purchases":
        return <PurchasesTab product={product} />;
      case "adjustments":
        return <AdjustmentsTab product={product} />;
      case "history":
        return <HistoryTab product={product} />;
      default:
        return <OverviewTab product={product} />;
    }
  };

  return (
    <div className="product-details-container">
      {/* Header View */}
      <div className="details-header">
        <div className="details-title-row">
          <button 
            onClick={onBack} 
            style={{ background: "none", border: "none", color: "var(--primary-color)", cursor: "pointer", fontSize: "14px", fontWeight: "600", display: "flex", alignItems: "center", gap: "4px", padding: 0 }}
          >
            ← Back to Inventory
          </button>
          <h2 className="details-product-name">{product.name}</h2>
          <span className="details-product-category">{product.category}</span>
        </div>
        <div className="details-header-actions">
          <Button variant="outline">✏️ Edit</Button>
          <Button variant="outline">📥 Download</Button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <Card>
        <div className="details-tabs">
          <button 
            className={`details-tab-btn ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button 
            className={`details-tab-btn ${activeTab === "purchases" ? "active" : ""}`}
            onClick={() => setActiveTab("purchases")}
          >
            Purchases
          </button>
          <button 
            className={`details-tab-btn ${activeTab === "adjustments" ? "active" : ""}`}
            onClick={() => setActiveTab("adjustments")}
          >
            Adjustments
          </button>
          <button 
            className={`details-tab-btn ${activeTab === "history" ? "active" : ""}`}
            onClick={() => setActiveTab("history")}
          >
            History
          </button>
        </div>

        {/* Dynamic Tab Body */}
        {renderTabContent()}
      </Card>
    </div>
  );
}
