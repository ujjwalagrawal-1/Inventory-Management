import React, { useState } from "react";
import NewOrderModal from "./components/NewOrderModal";
import Card from "../../components/ui/Card";
import Table from "../../components/ui/Table";
import Button from "../../components/ui/Button";
import { useOrders } from "../../context/OrderContext";
import { useApp } from "../../context/AppContext";
import { formatCurrency, formatDate } from "../../utils/formatters";
import "./Orders.css";

export default function OrdersPage() {
  const { orders, getOverallStats } = useOrders();
  const { searchTerm } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = getOverallStats();

  // Filter orders based on search
  const filteredOrders = orders.filter((o) =>
    o.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    o.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const headers = [
    "Products",
    "Order Value",
    "Quantity",
    "Order ID",
    "Expected Delivery",
    "Status",
  ];

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Delayed":
        return "badge badge-delayed";
      case "Confirmed":
        return "badge badge-confirmed";
      case "Returned":
        return "badge badge-returned";
      case "Out for delivery":
        return "badge badge-out-for-delivery";
      default:
        return "badge";
    }
  };

  const renderRow = (order, index) => (
    <tr key={order.id}>
      <td style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: 600 }}>
        <div style={{ width: "32px", height: "32px", borderRadius: "4px", backgroundColor: "#f4f6fb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>
          📦
        </div>
        <div>
          <div>{order.name}</div>
          <small style={{ color: "var(--text-muted)", fontWeight: 400 }}>{order.category}</small>
        </div>
      </td>
      <td>{formatCurrency(order.orderValue)}</td>
      <td>{order.quantity} {order.unit}</td>
      <td>{order.id}</td>
      <td>{formatDate(order.expectedDelivery)}</td>
      <td>
        <span className={getStatusBadgeClass(order.status)}>{order.status}</span>
      </td>
    </tr>
  );

  return (
    <div className="orders-container">
      {/* Overall Orders Statistics Block */}
      <Card title="Overall Orders">
        <div className="orders-stats-card">
          {/* Total Orders */}
          <div className="orders-stat-block">
            <div className="orders-stat-title primary">Total Orders</div>
            <div className="orders-stat-value-row">
              <span className="orders-stat-value">{stats.totalOrdersCount}</span>
            </div>
            <div className="orders-stat-footer">Last 7 days</div>
          </div>

          {/* Total Received */}
          <div className="orders-stat-block">
            <div className="orders-stat-title warning">Total Received</div>
            <div className="orders-stat-value-row">
              <span className="orders-stat-value">{stats.receivedCount}</span>
              <span className="orders-stat-subvalue">{formatCurrency(stats.receivedValue)}</span>
            </div>
            <div className="orders-stat-footer">Last 7 days <span style={{ marginLeft: "8px" }}>Revenue</span></div>
          </div>

          {/* Total Returned */}
          <div className="orders-stat-block">
            <div className="orders-stat-title purple">Total Returned</div>
            <div className="orders-stat-value-row">
              <span className="orders-stat-value">{stats.returnedCount}</span>
              <span className="orders-stat-subvalue">{formatCurrency(stats.returnedValue)}</span>
            </div>
            <div className="orders-stat-footer">Last 7 days <span style={{ marginLeft: "8px" }}>Cost</span></div>
          </div>

          {/* On the Way */}
          <div className="orders-stat-block">
            <div className="orders-stat-title danger">On the way</div>
            <div className="orders-stat-value-row">
              <span className="orders-stat-value">{stats.onTheWayCount}</span>
              <span className="orders-stat-subvalue">{formatCurrency(stats.onTheWayValue)}</span>
            </div>
            <div className="orders-stat-footer">Ordered <span style={{ marginLeft: "8px" }}>Cost</span></div>
          </div>
        </div>
      </Card>

      {/* Orders Table list */}
      <Card>
        <div className="orders-card-header">
          <h3 className="orders-card-title">Orders</h3>
          <div className="orders-header-actions">
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              Add Product
            </Button>
            <Button variant="outline">
              <span>🎛️</span> Filters
            </Button>
            <Button variant="outline">
              Order History
            </Button>
          </div>
        </div>

        {/* Reusable Table */}
        <Table headers={headers} data={filteredOrders} renderRow={renderRow} />

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

      {/* New Order Form Modal */}
      <NewOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
