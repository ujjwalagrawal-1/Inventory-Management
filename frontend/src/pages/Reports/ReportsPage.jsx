import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Card from "../../components/ui/Card";
import Table from "../../components/ui/Table";
import { formatCurrency } from "../../utils/formatters";
import "./Reports.css";

// Chart Mock Data
const profitRevenueData = [
  { month: "Sep", Revenue: 30000, Profit: 45000 },
  { month: "Oct", Revenue: 40000, Profit: 42000 },
  { month: "Nov", Revenue: 35000, Profit: 38000 },
  { month: "Dec", Revenue: 58000, Profit: 52000 },
  { month: "Jan", Revenue: 55000, Profit: 56000 },
  { month: "Feb", Revenue: 62000, Profit: 50000 },
  { month: "Mar", Revenue: 42000, Profit: 44000 },
];

// Best Selling Category Mock Data
const bestSellingCategories = [
  { category: "Vegetable", turnover: 26000, increase: "3.2%" },
  { category: "Instant Food", turnover: 22000, increase: "2%" },
  { category: "Households", turnover: 22000, increase: "1.5%" },
];

// Best Selling Product Mock Data
const bestSellingProducts = [
  { name: "Tomato", id: "23567", category: "Vegetable", quantity: "225 kg", turnover: 17000, increase: "2.3%" },
  { name: "Onion", id: "25831", category: "Vegetable", quantity: "200 kg", turnover: 12000, increase: "1.3%" },
  { name: "Maggi", id: "56841", category: "Instant Food", quantity: "200 Packet", turnover: 10000, increase: "1.3%" },
  { name: "Surf Excel", id: "23567", category: "Household", quantity: "125 Packet", turnover: 9000, increase: "1%" },
];

export default function ReportsPage() {
  // Category Table setup
  const categoryHeaders = ["Category", "Turn Over", "Increase By"];
  const renderCategoryRow = (row, index) => (
    <tr key={index}>
      <td style={{ fontWeight: 600 }}>{row.category}</td>
      <td>{formatCurrency(row.turnover)}</td>
      <td className="increase-text">{row.increase}</td>
    </tr>
  );

  // Product Table setup
  const productHeaders = ["Product", "Product ID", "Category", "Remaining Quantity", "Turn Over", "Increase By"];
  const renderProductRow = (row, index) => (
    <tr key={index}>
      <td style={{ fontWeight: 600 }}>{row.name}</td>
      <td>{row.id}</td>
      <td>{row.category}</td>
      <td>{row.quantity}</td>
      <td>{formatCurrency(row.turnover)}</td>
      <td className="increase-text">{row.increase}</td>
    </tr>
  );

  return (
    <div className="reports-container">
      {/* Top Row: Overview + Best Selling Category */}
      <div className="reports-top-row">
        {/* Overview Metric Cards */}
        <Card title="Overview">
          <div className="overview-card-content">
            {/* Top Metrics Row */}
            <div className="overview-top-metrics">
              <div className="report-metric">
                <span className="report-metric-value large">₹21,190</span>
                <span className="report-metric-label">Total Profit</span>
              </div>
              <div className="report-metric">
                <span className="report-metric-value large">₹18,300</span>
                <span className="report-metric-label label-orange">Revenue</span>
              </div>
              <div className="report-metric">
                <span className="report-metric-value large">₹17,432</span>
                <span className="report-metric-label label-purple">Sales</span>
              </div>
            </div>

            {/* Bottom Metrics Row */}
            <div className="overview-bottom-metrics">
              <div className="report-metric">
                <span className="report-metric-value medium">₹1,17,432</span>
                <span className="report-metric-label">Net purchase value</span>
              </div>
              <div className="report-metric">
                <span className="report-metric-value medium">₹80,432</span>
                <span className="report-metric-label">Net sales value</span>
              </div>
              <div className="report-metric">
                <span className="report-metric-value medium">₹30,432</span>
                <span className="report-metric-label">MoM Profit</span>
              </div>
              <div className="report-metric">
                <span className="report-metric-value medium">₹1,10,432</span>
                <span className="report-metric-label">YoY Profit</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Best Selling Category Table */}
        <Card 
          title="Best selling category"
          headerRight={<span className="see-all-link">See All</span>}
        >
          <Table 
            headers={categoryHeaders}
            data={bestSellingCategories}
            renderRow={renderCategoryRow}
          />
        </Card>
      </div>

      {/* Middle Row: Profit & Revenue LineChart */}
      <Card 
        title="Profit & Revenue"
        headerRight={
          <button className="btn-filter-date">
            <span>📅</span> Weekly
          </button>
        }
      >
        <div style={{ width: "100%", height: 260, marginTop: "10px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={profitRevenueData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#999" }} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#999" }}
                tickFormatter={(v) => `${v / 1000}k`}
              />
              <Tooltip formatter={(v) => `₹ ${v.toLocaleString()}`} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12, paddingTop: 10 }} />
              <Line type="monotone" name="Revenue" dataKey="Revenue" stroke="#4a90e2" strokeWidth={2.5} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              <Line type="monotone" name="Profit" dataKey="Profit" stroke="#fb923c" strokeWidth={2.5} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Bottom Row: Best Selling Product Table */}
      <Card 
        title="Best selling product"
        headerRight={<span className="see-all-link">See All</span>}
      >
        <Table 
          headers={productHeaders}
          data={bestSellingProducts}
          renderRow={renderProductRow}
        />
      </Card>
    </div>
  );
}
