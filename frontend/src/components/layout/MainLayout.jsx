import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./layout.css";

export default function MainLayout({ children, activePage = "dashboard", onNavigate }) {
  return (
    <div className="main-layout">
      {/* Sidebar Navigation */}
      <Sidebar activePage={activePage} onNavigate={onNavigate} />

      {/* Content Container */}
      <div className="content-container">
        {/* Top Header Bar */}
        <Header />

        {/* Dynamic Page Content */}
        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  );
}
