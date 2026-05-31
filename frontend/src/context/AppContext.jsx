import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [activePage, setActivePage] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");

  const navigateTo = (pageId) => {
    if (pageId === "logout") {
      alert("Logging out...");
      // Add logout routine here
      return;
    }
    setActivePage(pageId);
  };

  return (
    <AppContext.Provider value={{ activePage, setActivePage, navigateTo, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
