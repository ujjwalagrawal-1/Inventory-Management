import React, { createContext, useState, useContext } from "react";

const InventoryContext = createContext();

const initialProducts = [
  { id: "456567", name: "Maggi", category: "Instant food", price: 430, quantity: 43, unit: "Packets", threshold: 12, expiryDate: "2022-12-11", supplier: "Ronald Martin", supplierContact: "98789 86757", status: "In-stock", image: "" },
  { id: "456568", name: "Bru", category: "Beverages", price: 257, quantity: 0, unit: "Packets", threshold: 12, expiryDate: "2022-12-21", supplier: "Ronald Martin", supplierContact: "98789 86757", status: "Out of stock", image: "" },
  { id: "456569", name: "Red Bull", category: "Beverages", price: 405, quantity: 36, unit: "Packets", threshold: 9, expiryDate: "2022-12-05", supplier: "Tom Homan", supplierContact: "98675 45388", status: "In-stock", image: "" },
  { id: "456570", name: "Bourn Vita", category: "Health drinks", price: 502, quantity: 0, unit: "Packets", threshold: 6, expiryDate: "2022-12-08", supplier: "Veendir", supplierContact: "98675 45566", status: "Out of stock", image: "" },
  { id: "456571", name: "Horlicks", category: "Health drinks", price: 530, quantity: 5, unit: "Packets", threshold: 5, expiryDate: "2023-01-09", supplier: "Veendir", supplierContact: "98675 45566", status: "In-stock", image: "" },
  { id: "456572", name: "Harpic", category: "Household", price: 605, quantity: 10, unit: "Packets", threshold: 5, expiryDate: "2023-01-09", supplier: "Charin", supplierContact: "92675 45457", status: "In-stock", image: "" },
  { id: "456573", name: "Ariel", category: "Household", price: 408, quantity: 0, unit: "Packets", threshold: 7, expiryDate: "2023-12-15", supplier: "Hoffman", supplierContact: "93675 48531", status: "Out of stock", image: "" },
  { id: "456574", name: "Scotch Brite", category: "Household", price: 359, quantity: 43, unit: "Packets", threshold: 8, expiryDate: "2023-06-06", supplier: "Hoffman", supplierContact: "93675 48531", status: "In-stock", image: "" },
  { id: "456575", name: "Coca cola", category: "Beverages", price: 205, quantity: 8, unit: "Packets", threshold: 10, expiryDate: "2022-11-11", supplier: "Tom Homan", supplierContact: "98675 45388", status: "Low stock", image: "" }
];

export function InventoryProvider({ children }) {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: product.id || Math.floor(100000 + Math.random() * 900000).toString(),
      status: determineStatus(product.quantity, product.threshold)
    };
    setProducts((prev) => [newProduct, ...prev]);
  };

  const updateProduct = (id, updatedFields) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const qty = updatedFields.quantity !== undefined ? updatedFields.quantity : p.quantity;
          const thresh = updatedFields.threshold !== undefined ? updatedFields.threshold : p.threshold;
          return {
            ...p,
            ...updatedFields,
            status: determineStatus(qty, thresh)
          };
        }
        return p;
      })
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const determineStatus = (quantity, threshold) => {
    const qty = Number(quantity);
    const thresh = Number(threshold);
    if (qty === 0) return "Out of stock";
    if (qty <= thresh) return "Low stock";
    return "In-stock";
  };

  // Overall statistics calculation
  const getOverallStats = () => {
    const totalCategories = new Set(products.map((p) => p.category)).size;
    const totalProductsCount = products.reduce((acc, p) => acc + Number(p.quantity), 0);
    const totalValue = products.reduce((acc, p) => acc + (Number(p.price) * Number(p.quantity)), 0);
    
    // Low stocks counting
    const lowStockCount = products.filter(p => p.status === "Low stock").length;
    const outOfStockCount = products.filter(p => p.status === "Out of stock").length;

    return {
      totalCategories,
      totalProductsCount,
      totalValue,
      lowStockCount,
      outOfStockCount
    };
  };

  return (
    <InventoryContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, getOverallStats }}>
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventory() {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error("useInventory must be used within an InventoryProvider");
  }
  return context;
}
