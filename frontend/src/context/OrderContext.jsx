import React, { createContext, useState, useContext } from "react";

const OrderContext = createContext();

const initialOrders = [
  { id: "7535", name: "Maggi", category: "Instant food", orderValue: 4306, quantity: 43, unit: "Packets", expectedDelivery: "2022-12-11", status: "Delayed" },
  { id: "5724", name: "Bru", category: "Beverages", orderValue: 2557, quantity: 22, unit: "Packets", expectedDelivery: "2022-12-21", status: "Confirmed" },
  { id: "2775", name: "Red Bull", category: "Beverages", orderValue: 4075, quantity: 36, unit: "Packets", expectedDelivery: "2022-12-05", status: "Returned" },
  { id: "2275", name: "Bourn Vita", category: "Health drinks", orderValue: 5052, quantity: 14, unit: "Packets", expectedDelivery: "2022-12-08", status: "Out for delivery" },
  { id: "2427", name: "Horlicks", category: "Health drinks", orderValue: 5370, quantity: 5, unit: "Packets", expectedDelivery: "2023-01-09", status: "Returned" },
  { id: "2578", name: "Harpic", category: "Household", orderValue: 6065, quantity: 10, unit: "Packets", expectedDelivery: "2023-01-09", status: "Out for delivery" },
  { id: "2757", name: "Ariel", category: "Household", orderValue: 4078, quantity: 23, unit: "Packets", expectedDelivery: "2023-12-15", status: "Delayed" },
  { id: "3757", name: "Scotch Brite", category: "Household", orderValue: 3559, quantity: 43, unit: "Packets", expectedDelivery: "2023-06-06", status: "Confirmed" },
  { id: "2474", name: "Coca cola", category: "Beverages", orderValue: 2055, quantity: 41, unit: "Packets", expectedDelivery: "2022-11-11", status: "Delayed" }
];

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(initialOrders);

  const addOrder = (order) => {
    const newOrder = {
      ...order,
      id: order.id || Math.floor(1000 + Math.random() * 9000).toString(),
      status: order.status || "Confirmed"
    };
    setOrders((prev) => [newOrder, ...prev]);
  };

  const getOverallStats = () => {
    const totalOrdersCount = orders.length;
    
    // Total Received
    const receivedCount = orders.filter(o => o.status === "Confirmed" || o.status === "Out for delivery").length;
    const receivedValue = orders
      .filter(o => o.status === "Confirmed" || o.status === "Out for delivery")
      .reduce((sum, o) => sum + Number(o.orderValue), 0);

    // Total Returned
    const returnedCount = orders.filter(o => o.status === "Returned").length;
    const returnedValue = orders
      .filter(o => o.status === "Returned")
      .reduce((sum, o) => sum + Number(o.orderValue), 0);

    // On the way
    const onTheWayCount = orders.filter(o => o.status === "Delayed" || o.status === "Out for delivery").length;
    const onTheWayValue = orders
      .filter(o => o.status === "Delayed" || o.status === "Out for delivery")
      .reduce((sum, o) => sum + Number(o.orderValue), 0);

    return {
      totalOrdersCount: 37, // hardcoded value from mockup stats block
      receivedCount: 32, // hardcoded from mockup
      receivedValue: 25000, // hardcoded from mockup
      returnedCount: 5, // hardcoded from mockup
      returnedValue: 2500, // hardcoded from mockup
      onTheWayCount: 12, // hardcoded from mockup
      onTheWayValue: 2356, // hardcoded from mockup
      
      // Let's also compute dynamic stats in case the user adds/modifies values:
      dynamicTotal: totalOrdersCount,
      dynamicReceivedCount: receivedCount,
      dynamicReceivedValue: receivedValue,
      dynamicReturnedCount: returnedCount,
      dynamicReturnedValue: returnedValue,
      dynamicOnTheWayCount: onTheWayCount,
      dynamicOnTheWayValue: onTheWayValue
    };
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, getOverallStats }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrderProvider");
  }
  return context;
}
