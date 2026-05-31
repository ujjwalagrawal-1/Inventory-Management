import React from "react";
import Card from "../../../components/ui/Card";
import "../Dashboard.css";

const lowQtyData = [
  { name: "Tata Salt", remaining: "10 Packet", emoji: "🧂" },
  { name: "Lays", remaining: "15 Packet", emoji: "🥔" },
  { name: "Lays (Blue)", remaining: "15 Packet", emoji: "🥔" },
];

export default function LowQuantityStock({ onSeeAll }) {
  return (
    <Card
      title="Low Quantity Stock"
      headerRight={
        <span
          onClick={onSeeAll}
          style={{ color: "var(--primary-color)", fontSize: "13px", cursor: "pointer", fontWeight: "600" }}
        >
          See All
        </span>
      }
    >
      <div className="low-stock-list">
        {lowQtyData.map((item, i) => (
          <div key={i} className="low-stock-item">
            <div className="low-stock-image-placeholder">
              {item.emoji}
            </div>
            <div className="low-stock-info">
              <div className="low-stock-name">{item.name}</div>
              <div className="low-stock-qty">Remaining Quantity : {item.remaining}</div>
            </div>
            <span className="low-stock-badge">Low</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
