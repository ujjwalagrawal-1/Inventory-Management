import React from "react";
import "./ui.css";

export default function Card({
  title,
  headerRight,
  children,
  className = "",
  id,
  ...props
}) {
  return (
    <div id={id} className={`ui-card ${className}`} {...props}>
      {(title || headerRight) && (
        <div className="ui-card-header">
          {title && <h3 className="ui-card-title">{title}</h3>}
          {headerRight && <div className="ui-card-header-actions">{headerRight}</div>}
        </div>
      )}
      <div className="ui-card-body-content">
        {children}
      </div>
    </div>
  );
}
