import React from "react";
import SalesOverview from "./components/SalesOverview";
import PurchaseOverview from "./components/PurchaseOverview";
import InventorySummary from "./components/InventorySummary";
import ProductSummary from "./components/ProductSummary";
import { SalesPurchaseChart, OrderSummaryChart } from "./components/ChartsSection";
import TopSellingStock from "./components/TopSellingStock";
import LowQuantityStock from "./components/LowQuantityStock";
import "./Dashboard.css";

export default function DashboardPage({ onNavigate }) {
  const handleSeeAllInventory = () => {
    if (onNavigate) onNavigate("inventory");
  };

  return (
    <div className="dashboard-container">
      {/* Left Main Column */}
      <div className="dashboard-main-col">
        {/* Sales Overview Grid */}
        <SalesOverview />

        {/* Purchase Overview Grid */}
        <PurchaseOverview />

        {/* Sales & Purchase Chart */}
        <SalesPurchaseChart />

        {/* Top Selling Stock Table */}
        <TopSellingStock onSeeAll={handleSeeAllInventory} />
      </div>

      {/* Right Side Column */}
      <div className="dashboard-side-col">
        {/* Inventory Summary */}
        <InventorySummary />

        {/* Product Summary */}
        <ProductSummary />

        {/* Order Summary Area Chart */}
        <OrderSummaryChart />

        {/* Low Quantity Stock */}
        <LowQuantityStock onSeeAll={handleSeeAllInventory} />
      </div>
    </div>
  );
}
