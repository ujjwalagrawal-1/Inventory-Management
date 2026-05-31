/**
 * Formats a number as Rupee currency (e.g., 18300 -> ₹ 18,300)
 * @param {number|string} amount 
 * @returns {string}
 */
export const formatCurrency = (amount) => {
  const num = Number(amount);
  if (isNaN(num)) return "₹ 0";
  return `₹ ${num.toLocaleString("en-IN")}`;
};

/**
 * Formats a date string to DD/MM/YY format (e.g., 2022-12-11 -> 11/12/22)
 * @param {string} dateString 
 * @returns {string}
 */
export const formatDate = (dateString) => {
  if (!dateString) return "-";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString; // fallback
  
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  
  return `${day}/${month}/${year}`;
};

/**
 * Formats a number with Indian format comma grouping
 * @param {number|string} num 
 * @returns {string}
 */
export const formatNumber = (num) => {
  const n = Number(num);
  if (isNaN(n)) return "0";
  return n.toLocaleString("en-IN");
};
