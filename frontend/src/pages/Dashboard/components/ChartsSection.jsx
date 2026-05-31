import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import Card from "../../../components/ui/Card";
import "../Dashboard.css";

const salesPurchaseData = [
  { month: "Jan", Purchase: 42000, Sales: 48000 },
  { month: "Feb", Purchase: 52000, Sales: 46000 },
  { month: "Mar", Purchase: 48000, Sales: 52000 },
  { month: "Apr", Purchase: 38000, Sales: 40000 },
  { month: "May", Purchase: 42000, Sales: 44000 },
  { month: "Jun", Purchase: 20000, Sales: 40000 },
  { month: "Jul", Purchase: 50000, Sales: 44000 },
  { month: "Aug", Purchase: 40000, Sales: 42000 },
  { month: "Sep", Purchase: 42000, Sales: 40000 },
  { month: "Oct", Purchase: 38000, Sales: 42000 },
];

const orderSummaryData = [
  { month: "Jan", Ordered: 3200, Delivered: 2200 },
  { month: "Feb", Ordered: 2800, Delivered: 1800 },
  { month: "Mar", Ordered: 2200, Delivered: 1600 },
  { month: "Apr", Ordered: 2600, Delivered: 2000 },
  { month: "May", Ordered: 3000, Delivered: 2400 },
];

export function SalesPurchaseChart() {
  return (
    <Card
      title="Sales & Purchase"
      headerRight={
        <button className="btn-filter-date">
          <span>📅</span> Weekly
        </button>
      }
    >
      <div style={{ width: "100%", height: 240, marginTop: "10px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={salesPurchaseData} barCategoryGap="25%" barGap={6}>
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
            <Bar name="Purchase" dataKey="Purchase" fill="#7aa2f7" radius={[4, 4, 0, 0]} />
            <Bar name="Sales" dataKey="Sales" fill="#4ade80" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export function OrderSummaryChart() {
  return (
    <Card title="Order Summary">
      <div style={{ width: "100%", height: 200, marginTop: "10px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={orderSummaryData}>
            <defs>
              <linearGradient id="colorOrdered" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fb923c" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#fb923c" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorDelivered" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7aa2f7" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#7aa2f7" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#999" }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#999" }} />
            <Tooltip />
            <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12, paddingTop: 10 }} />
            <Area type="monotone" name="Ordered" dataKey="Ordered" stroke="#fb923c" strokeWidth={2.5} fill="url(#colorOrdered)" />
            <Area type="monotone" name="Delivered" dataKey="Delivered" stroke="#7aa2f7" strokeWidth={2.5} fill="url(#colorDelivered)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

