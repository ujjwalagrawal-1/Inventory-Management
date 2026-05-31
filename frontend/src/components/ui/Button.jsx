import React from "react";
import "./ui.css";

export default function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  type = "button",
  className = "",
  id,
  ...props
}) {
  const getButtonClass = () => {
    switch (variant) {
      case "primary":
        return "btn-primary";
      case "secondary":
        return "btn-secondary";
      case "outline":
        return "btn-outline";
      case "danger":
        return "btn-danger";
      default:
        return "btn-primary";
    }
  };

  return (
    <button
      id={id}
      type={type}
      className={`btn ${getButtonClass()} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
