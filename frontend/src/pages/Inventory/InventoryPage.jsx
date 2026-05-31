import React, { useState } from "react";
import OverallInventoryStats from "./components/OverallInventoryStats";
import NewProductModal from "./components/NewProductModal";
import Card from "../../components/ui/Card";
import Table from "../../components/ui/Table";
import Button from "../../components/ui/Button";
import { useInventory } from "../../context/InventoryContext";
import { useApp } from "../../context/AppContext";
import { formatCurrency, formatDate } from "../../utils/formatters";
import "./Inventory.css";

export default function InventoryPage({ onViewProduct }) {
  const { products } = useInventory();
  const { searchTerm } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter products based on search term
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const headers = [
    "Products",
    "Buying Price",
    "Quantity",
    "Threshold Value",
    "Expiry Date",
    "Availability",
  ];

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "In-stock":
        return "badge badge-in-stock";
      case "Low stock":
        return "badge badge-low-stock";
      case "Out of stock":
        return "badge badge-out-of-stock";
      default:
        return "badge";
    }
  };

  const renderRow = (product, index) => (
    <tr
      key={product.id}
      style={{ cursor: "pointer" }}
      onClick={() => onViewProduct && onViewProduct(product)}
      title="Click to view details"
    >
      <td style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: 600 }}>
        <div style={{ width: "32px", height: "32px", borderRadius: "4px", backgroundColor: "#f4f6fb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>
          📦
        </div>
        <div>
          <div>{product.name}</div>
          <small style={{ color: "var(--text-muted)", fontWeight: 400 }}>{product.category}</small>
        </div>
      </td>
      <td>{formatCurrency(product.price)}</td>
      <td>{product.quantity} {product.unit}</td>
      <td>{product.threshold} {product.unit}</td>
      <td>{formatDate(product.expiryDate)}</td>
      <td>
        <span className={getStatusBadgeClass(product.status)}>{product.status}</span>
      </td>
    </tr>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Top Overall Inventory Stats */}
      <OverallInventoryStats />

      {/* Products Table Card */}
      <Card>
        <div className="products-card-header">
          <h3 className="products-card-title">Products</h3>
          <div className="products-header-actions">
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              Add Product
            </Button>
            <Button variant="outline">
              <span>🎛️</span> Filters
            </Button>
            <Button variant="outline">
              Download all
            </Button>
          </div>
        </div>

        {/* Reusable Table */}
        <Table headers={headers} data={filteredProducts} renderRow={renderRow} />

        {/* Pagination Block */}
        <div className="pagination-container">
          <Button variant="outline" disabled={true} style={{ padding: "6px 12px", fontSize: "12px" }}>
            Previous
          </Button>
          <span>Page 1 of 10</span>
          <Button variant="outline" style={{ padding: "6px 12px", fontSize: "12px" }}>
            Next
          </Button>
        </div>
      </Card>

      {/* Add Product Modal Overlay */}
      <NewProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
