import React from "react";
import Table from "../../../components/ui/Table";
import { formatDate } from "../../../utils/formatters";
import "../ProductDetails.css";

export default function OverviewTab({ product }) {
  const stockLocations = [
    { store: "Sulur Branch", stock: 15 },
    { store: "Singanallur Branch", stock: 19 },
  ];

  const headers = ["Store Name", "Stock in Hand"];

  const renderRow = (row, index) => (
    <tr key={index}>
      <td style={{ fontWeight: 500 }}>{row.store}</td>
      <td style={{ color: "var(--primary-color)", fontWeight: 700 }}>{row.stock}</td>
    </tr>
  );

  return (
    <div className="overview-grid">
      {/* Left Column */}
      <div>
        {/* Primary Details */}
        <h4 className="details-section-title">Primary Details</h4>
        <div className="details-list">
          <div className="details-row">
            <span className="details-label">Product name</span>
            <span className="details-value">{product.name}</span>
          </div>
          <div className="details-row">
            <span className="details-label">Product ID</span>
            <span className="details-value">{product.id}</span>
          </div>
          <div className="details-row">
            <span className="details-label">Product category</span>
            <span className="details-value">{product.category}</span>
          </div>
          <div className="details-row">
            <span className="details-label">Expiry Date</span>
            <span className="details-value">{formatDate(product.expiryDate)}</span>
          </div>
          <div className="details-row">
            <span className="details-label">Threshold Value</span>
            <span className="details-value">{product.threshold} {product.unit || "Packets"}</span>
          </div>
        </div>

        {/* Supplier Details */}
        <h4 className="details-section-title">Supplier Details</h4>
        <div className="details-list">
          <div className="details-row">
            <span className="details-label">Supplier name</span>
            <span className="details-value">{product.supplier || "Ronald Martin"}</span>
          </div>
          <div className="details-row">
            <span className="details-label">Contact Number</span>
            <span className="details-value">{product.supplierContact || "98789 86757"}</span>
          </div>
        </div>

        {/* Stock Locations */}
        <h4 className="details-section-title">Stock Locations</h4>
        <Table headers={headers} data={stockLocations} renderRow={renderRow} />
      </div>

      {/* Right Column (Highlights Panel) */}
      <div className="highlights-panel">
        <div className="product-image-box">
          <div className="product-image-fallback">🍜</div>
        </div>

        <div className="metrics-list">
          <div className="metric-row">
            <span className="metric-label">Opening Stock</span>
            <span className="metric-value">40</span>
          </div>
          <div className="metric-row">
            <span className="metric-label">Remaining Stock</span>
            <span className="metric-value">{product.quantity}</span>
          </div>
          <div className="metric-row">
            <span className="metric-label">On the way</span>
            <span className="metric-value">15</span>
          </div>
          <div className="metric-row">
            <span className="metric-label">Threshold value</span>
            <span className="metric-value">{product.threshold}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
