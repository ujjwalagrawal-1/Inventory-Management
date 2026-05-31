import React, { useState } from "react";
import NewSupplierModal from "./components/NewSupplierModal";
import Card from "../../components/ui/Card";
import Table from "../../components/ui/Table";
import Button from "../../components/ui/Button";
import { useSuppliers } from "../../context/SupplierContext";
import { useApp } from "../../context/AppContext";
import "./Suppliers.css";

export default function SuppliersPage() {
  const { suppliers } = useSuppliers();
  const { searchTerm } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter suppliers based on search
  const filteredSuppliers = suppliers.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const headers = [
    "Supplier Name",
    "Product",
    "Contact Number",
    "Email",
    "Type",
    "On the way",
  ];

  const getSupplierBadgeClass = (type) => {
    return type === "Taking Return"
      ? "badge badge-taking-return"
      : "badge badge-not-taking-return";
  };

  const renderRow = (supplier, index) => (
    <tr key={supplier.id}>
      <td style={{ fontWeight: 600 }}>{supplier.name}</td>
      <td>{supplier.product}</td>
      <td>{supplier.contact}</td>
      <td>{supplier.email}</td>
      <td>
        <span className={getSupplierBadgeClass(supplier.type)}>{supplier.type}</span>
      </td>
      <td style={{ color: supplier.onTheWay !== "-" ? "var(--primary-color)" : "inherit", fontWeight: supplier.onTheWay !== "-" ? 600 : 400 }}>
        {supplier.onTheWay}
      </td>
    </tr>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Suppliers Table Card */}
      <Card>
        <div className="suppliers-card-header">
          <h3 className="suppliers-card-title">Suppliers</h3>
          <div className="suppliers-header-actions">
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              Add Supplier
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
        <Table headers={headers} data={filteredSuppliers} renderRow={renderRow} />

        {/* Pagination Block */}
        <div className="pagination-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px" }}>
          <Button variant="outline" disabled={true} style={{ padding: "6px 12px", fontSize: "12px" }}>
            Previous
          </Button>
          <span>Page 1 of 10</span>
          <Button variant="outline" style={{ padding: "6px 12px", fontSize: "12px" }}>
            Next
          </Button>
        </div>
      </Card>

      {/* New Supplier Form Modal Overlay */}
      <NewSupplierModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
