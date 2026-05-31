/**
 * Validates if a field is not empty
 * @param {any} value 
 * @returns {boolean}
 */
export const validateRequired = (value) => {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  return true;
};

/**
 * Validates if value is a valid email
 * @param {string} email 
 * @returns {boolean}
 */
export const validateEmail = (email) => {
  if (!email) return false;
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

/**
 * Validates if value is a valid phone number (10-15 digits, allowing spaces/hyphens)
 * @param {string} phone 
 * @returns {boolean}
 */
export const validatePhone = (phone) => {
  if (!phone) return false;
  const cleaned = phone.replace(/[\s-()]/g, "");
  return /^\+?[0-9]{10,15}$/.test(cleaned);
};

/**
 * Validates if value is a number and is >= minimum limit
 * @param {any} value 
 * @param {number} min 
 * @returns {boolean}
 */
export const validateMinNumber = (value, min = 0) => {
  const num = Number(value);
  return !isNaN(num) && num >= min;
};
