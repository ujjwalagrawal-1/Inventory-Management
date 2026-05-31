import React from "react";
import "./ui.css";

export default function Table({
  headers = [],
  data = [],
  renderRow,
  className = "",
  id,
}) {
  return (
    <div className={`table-responsive ${className}`} id={id}>
      <table className="ui-table">
        <thead>
          <tr>
            {headers.map((h, index) => (
              <th key={index}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => renderRow(row, index))
          ) : (
            <tr>
              <td colSpan={headers.length} style={{ textAlign: "center", color: "var(--text-muted)", padding: "24px" }}>
                No records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
