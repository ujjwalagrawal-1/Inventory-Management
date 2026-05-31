import React from "react";
import Table from "../../../components/ui/Table";

export default function HistoryTab({ product }) {
  const historyLogs = [
    { date: "2023-05-20 14:30", action: "Sale", quantity: -5, description: "Customer Order #ORD-83912", user: "Cashier-1" },
    { date: "2023-05-18 09:15", action: "Stock Intake", quantity: 50, description: "Purchase Order #PO-98471 arrival", user: "Admin" },
    { date: "2023-05-15 11:00", action: "Sale", quantity: -2, description: "Customer Order #ORD-83890", user: "Cashier-2" },
  ];

  const headers = ["Date & Time", "Action", "Qty Change", "Description", "User"];

  const renderRow = (row, index) => (
    <tr key={index}>
      <td>{row.date}</td>
      <td>
        <span className={`badge ${row.action === "Stock Intake" ? "badge-in-stock" : "badge-success"}`}>
          {row.action}
        </span>
      </td>
      <td style={{ color: row.quantity < 0 ? "#f5222d" : "#2e7d32", fontWeight: 700 }}>
        {row.quantity > 0 ? `+${row.quantity}` : row.quantity}
      </td>
      <td>{row.description}</td>
      <td>{row.user}</td>
    </tr>
  );

  return (
    <div style={{ padding: "10px 0" }}>
      <h4 className="details-section-title">Activity History Log</h4>
      <Table headers={headers} data={historyLogs} renderRow={renderRow} />
    </div>
  );
}
