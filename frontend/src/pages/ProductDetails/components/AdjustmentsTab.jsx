import React from "react";
import Table from "../../../components/ui/Table";

export default function AdjustmentsTab({ product }) {
  const adjustments = [
    { date: "2023-04-15", type: "Correction", quantity: -2, reason: "Damaged packaging", user: "Admin" },
    { date: "2023-05-01", type: "Reconciliation", quantity: 5, reason: "Physical count discrepancy", user: "Store Manager" },
  ];

  const headers = ["Date", "Adjustment Type", "Qty Adjusted", "Reason", "Adjusted By"];

  const renderRow = (row, index) => (
    <tr key={index}>
      <td>{row.date}</td>
      <td style={{ fontWeight: 600 }}>{row.type}</td>
      <td style={{ color: row.quantity < 0 ? "#f5222d" : "#2e7d32", fontWeight: 700 }}>
        {row.quantity > 0 ? `+${row.quantity}` : row.quantity}
      </td>
      <td>{row.reason}</td>
      <td>{row.user}</td>
    </tr>
  );

  return (
    <div style={{ padding: "10px 0" }}>
      <h4 className="details-section-title">Stock Adjustments</h4>
      <Table headers={headers} data={adjustments} renderRow={renderRow} />
    </div>
  );
}
