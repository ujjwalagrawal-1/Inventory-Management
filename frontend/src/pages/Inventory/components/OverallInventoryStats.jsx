import React from "react";
import Card from "../../../components/ui/Card";
import { useInventory } from "../../../context/InventoryContext";
import { formatCurrency, formatNumber } from "../../../utils/formatters";
import "../Inventory.css";

export default function OverallInventoryStats() {
  const { getOverallStats, products } = useInventory();
  const stats = getOverallStats();

  // Find some dummy revenue/cost figures to match design aesthetics
  const revenueValue = stats.totalValue; 
  const costValue = Math.round(revenueValue * 0.7); // Let's estimate cost around 70% of inventory value

  return (
    <Card>
      <div className="inventory-stats-card">
        {/* Categories Block */}
        <div className="inventory-stat-block">
          <div className="inventory-stat-title primary">Categories</div>
          <div className="inventory-stat-value-row">
            <span className="inventory-stat-value">{stats.totalCategories}</span>
          </div>
          <div className="inventory-stat-footer">Last 7 days</div>
        </div>

        {/* Total Products Block */}
        <div className="inventory-stat-block">
          <div className="inventory-stat-title warning">Total Products</div>
          <div className="inventory-stat-value-row">
            <span className="inventory-stat-value">{stats.totalProductsCount}</span>
            <span className="inventory-stat-subvalue">{formatCurrency(revenueValue)}</span>
          </div>
          <div className="inventory-stat-footer">Last 7 days <span style={{ marginLeft: "8px" }}>Revenue</span></div>
        </div>

        {/* Top Selling Block */}
        <div className="inventory-stat-block">
          <div className="inventory-stat-title purple">Top Selling</div>
          <div className="inventory-stat-value-row">
            <span className="inventory-stat-value">5</span>
            <span className="inventory-stat-subvalue">{formatCurrency(costValue)}</span>
          </div>
          <div className="inventory-stat-footer">Last 7 days <span style={{ marginLeft: "8px" }}>Cost</span></div>
        </div>

        {/* Low Stocks Block */}
        <div className="inventory-stat-block">
          <div className="inventory-stat-title danger">Low Stocks</div>
          <div className="inventory-stat-value-row">
            <span className="inventory-stat-value">{stats.lowStockCount + stats.outOfStockCount}</span>
            <span className="inventory-stat-subvalue" style={{ display: "flex", gap: "10px" }}>
              <span>{stats.lowStockCount} <small style={{ fontSize: "9px" }}>Ordered</small></span>
              <span>{stats.outOfStockCount} <small style={{ fontSize: "9px" }}>Not in stock</small></span>
            </span>
          </div>
          <div className="inventory-stat-footer">Last 7 days</div>
        </div>
      </div>
    </Card>
  );
}
