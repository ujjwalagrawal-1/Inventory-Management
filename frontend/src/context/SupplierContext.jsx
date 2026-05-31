import React, { createContext, useState, useContext } from "react";

const SupplierContext = createContext();

const initialSuppliers = [
  { id: "1", name: "Richard Martin", product: "Kit Kat", contact: "7687764556", email: "richard@gmail.com", type: "Taking Return", onTheWay: "13" },
  { id: "2", name: "Tom Homan", product: "Maaza", contact: "9867545388", email: "tomhoman@gmail.com", type: "Taking Return", onTheWay: "-" },
  { id: "3", name: "Veendir", product: "Dairy Milk", contact: "9867545566", email: "veendir@gmail.com", type: "Not Taking Return", onTheWay: "-" },
  { id: "4", name: "Charin", product: "Tomato", contact: "9267545457", email: "charin@gmail.com", type: "Taking Return", onTheWay: "12" },
  { id: "5", name: "Hoffman", product: "Milk Bikis", contact: "9367548531", email: "hoffman@gmail.com", type: "Taking Return", onTheWay: "-" },
  { id: "6", name: "Falnden Juke", product: "Marie Gold", contact: "9667545982", email: "falnden@gmail.com", type: "Not Taking Return", onTheWay: "9" }
];

export function SupplierProvider({ children }) {
  const [suppliers, setSuppliers] = useState(initialSuppliers);

  const addSupplier = (supplier) => {
    const newSupplier = {
      ...supplier,
      id: (suppliers.length + 1).toString(),
      onTheWay: supplier.onTheWay || "-"
    };
    setSuppliers((prev) => [newSupplier, ...prev]);
  };

  const updateSupplier = (id, updatedFields) => {
    setSuppliers((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updatedFields } : s))
    );
  };

  const deleteSupplier = (id) => {
    setSuppliers((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <SupplierContext.Provider value={{ suppliers, addSupplier, updateSupplier, deleteSupplier }}>
      {children}
    </SupplierContext.Provider>
  );
}

export function useSuppliers() {
  const context = useContext(SupplierContext);
  if (!context) {
    throw new Error("useSuppliers must be used within a SupplierProvider");
  }
  return context;
}
