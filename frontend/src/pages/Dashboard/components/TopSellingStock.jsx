import React from "react";
import Card from "../../../components/ui/Card";
import Table from "../../../components/ui/Table";
import "../Dashboard.css";

const topSellingData = [
  { name: "Surf Excel", soldQty: 30, remainingQty: 12, price: "₹ 100" },
  { name: "Rin", soldQty: 21, remainingQty: 15, price: "₹ 207" },
  { name: "Parle G", soldQty: 19, remainingQty: 17, price: "₹ 105" },
];

export default function TopSellingStock({ onSeeAll }) {
  const headers = ["Name", "Sold Quantity", "Remaining Quantity", "Price"];

  const renderRow = (row, index) => (
    <tr key={index}>
      <td style={{ fontWeight: 600 }}>{row.name}</td>
      <td>{row.soldQty}</td>
      <td>{row.remainingQty}</td>
      <td>{row.price}</td>
    </tr>
  );

  return (
    <Card
      title="Top Selling Stock"
      headerRight={
        <span
          onClick={onSeeAll}
          style={{ color: "var(--primary-color)", fontSize: "13px", cursor: "pointer", fontWeight: "600" }}
        >
          See All
        </span>
      }
    >
      <Table headers={headers} data={topSellingData} renderRow={renderRow} />
    </Card>
  );
}
