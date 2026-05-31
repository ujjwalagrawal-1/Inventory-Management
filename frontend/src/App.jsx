import React, { useState } from "react";
import { AppProvider, useApp } from "./context/AppContext";
import { InventoryProvider } from "./context/InventoryContext";
import { SupplierProvider } from "./context/SupplierContext";
import { OrderProvider } from "./context/OrderContext";
import MainLayout from "./components/layout/MainLayout";


// Import Pages
import DashboardPage from "./pages/Dashboard/DashboardPage";
import InventoryPage from "./pages/Inventory/InventoryPage";
import ProductDetailsPage from "./pages/ProductDetails/ProductDetailsPage";
import SuppliersPage from "./pages/Suppliers/SuppliersPage";
import ReportsPage from "./pages/Reports/ReportsPage";
import OrdersPage from "./pages/Orders/OrdersPage";
import ManageStorePage from "./pages/ManageStore/ManageStorePage";
import SettingsPage from "./pages/Settings/SettingsPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

function AppContent() {
  const { activePage, navigateTo } = useApp();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewProductDetails = (product) => {
    setSelectedProduct(product);
    navigateTo("product-details");
  };

  const handleBackToInventory = () => {
    setSelectedProduct(null);
    navigateTo("inventory");
  };

  const renderActivePage = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardPage onNavigate={navigateTo} />;
      
      case "inventory":
        return <InventoryPage onViewProduct={handleViewProductDetails} />;
      
      case "product-details":
        return (
          <ProductDetailsPage
            product={selectedProduct}
            onBack={handleBackToInventory}
          />
        );
      
      case "suppliers":
        return <SuppliersPage />;
      
      case "reports":
        return <ReportsPage />;
      
      case "orders":
        return <OrdersPage />;
      
      case "manage-store":
        return <ManageStorePage />;
      
      case "settings":
        return <SettingsPage />;
      
      default:
        return <NotFoundPage onBack={() => navigateTo("dashboard")} />;
    }
  };

  // We determine what Sidebar tab is active. For product-details, we keep "inventory" active.
  const activeSidebarTab = activePage === "product-details" ? "inventory" : activePage;

  return (
    <MainLayout activePage={activeSidebarTab} onNavigate={navigateTo}>
      {renderActivePage()}
    </MainLayout>
  );
}

export default function App() {
  return (
    <AppProvider>
      <InventoryProvider>
        <SupplierProvider>
          <OrderProvider>
            <AppContent />
          </OrderProvider>
        </SupplierProvider>
      </InventoryProvider>
    </AppProvider>
  );
}
