import React from "react";
import "./ui.css";

export default function Input({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  error,
  required = false,
  ...props
}) {
  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={id} className="form-label">
          {label} {required && <span style={{ color: "#ef4444" }}>*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        className="form-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      />
      {error && <span style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px" }}>{error}</span>}
    </div>
  );
}
