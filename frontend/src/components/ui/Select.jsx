import React from "react";
import "./ui.css";

export default function Select({
  label,
  id,
  options = [],
  value,
  onChange,
  className = "",
  error,
  placeholder,
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
      <select
        id={id}
        className="form-select"
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px" }}>{error}</span>}
    </div>
  );
}
