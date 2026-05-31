import React from "react";
import "./layout.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-search">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search product, supplier, order"
          className="search-input"
          id="global-search-input"
        />
      </div>

      <div className="header-actions">
        <button className="notification-btn" id="notification-button" aria-label="Notifications">
          <span>🔔</span>
          <span className="notification-badge"></span>
        </button>
        <div className="user-profile" id="user-profile-menu">
          <div className="avatar">👤</div>
        </div>
      </div>
    </header>
  );
}
