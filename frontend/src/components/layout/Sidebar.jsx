import React from "react";
import "./layout.css";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "⊞" },
  { id: "inventory", label: "Inventory", icon: "📦" },
  { id: "reports", label: "Reports", icon: "📊" },
  { id: "suppliers", label: "Suppliers", icon: "👤" },
  { id: "orders", label: "Orders", icon: "🛒" },
  { id: "manage-store", label: "Manage Store", icon: "🏪" },
];

export default function Sidebar({ activePage = "dashboard", onNavigate }) {
  return (
    <div className="sidebar">
      {/* Brand Logo */}
      <div className="sidebar-header">
        <div className="logo-icon">K</div>
        <span className="logo-text">KANBAN</span>
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <div
            key={item.id}
            id={`nav-item-${item.id}`}
            className={`nav-item ${activePage === item.id ? "active" : ""}`}
            onClick={() => onNavigate && onNavigate(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      {/* Sidebar Footer (Settings, Logout) */}
      <div className="sidebar-footer">
        <div
          id="nav-item-settings"
          className={`nav-item ${activePage === "settings" ? "active" : ""}`}
          onClick={() => onNavigate && onNavigate("settings")}
        >
          <span className="nav-icon">⚙️</span>
          <span>Settings</span>
        </div>
        <div
          id="nav-item-logout"
          className="nav-item"
          onClick={() => onNavigate && onNavigate("logout")}
        >
          <span className="nav-icon">🚪</span>
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
}
