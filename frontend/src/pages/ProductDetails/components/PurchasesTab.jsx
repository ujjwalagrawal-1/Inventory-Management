import React from "react";
import Table from "../../../components/ui/Table";
import { formatCurrency } from "../../../utils/formatters";

export default function PurchasesTab({ product }) {
  const purchaseHistory = [
    { date: "2023-04-10", orderId: "PO-98471", quantity: 50, price: product.price || 430, status: "Delivered" },
    { date: "2023-05-12", orderId: "PO-98562", quantity: 30, price: product.price || 430, status: "On the way" },
  ];

  const headers = ["Date", "Order ID", "Quantity", "Unit Cost", "Status"];

  const renderRow = (row, index) => (
    <tr key={index}>
      <td>{row.date}</td>
      <td>{row.orderId}</td>
      <td>{row.quantity}</td>
      <td>{formatCurrency(row.price)}</td>
      <td>
        <span className={`badge ${row.status === "Delivered" ? "badge-in-stock" : "badge-low-stock"}`}>
          {row.status}
        </span>
      </td>
    </tr>
  );

  return (
    <div style={{ padding: "10px 0" }}>
      <h4 className="details-section-title">Purchase History</h4>
      <Table headers={headers} data={purchaseHistory} renderRow={renderRow} />
    </div>
  );
}
