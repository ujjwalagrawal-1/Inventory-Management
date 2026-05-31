import React, { useState } from "react";
import Modal from "../../../components/ui/Modal";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import Button from "../../../components/ui/Button";
import { useOrders } from "../../../context/OrderContext";
import "../Orders.css";

const categoryOptions = [
  { value: "Instant food", label: "Instant food" },
  { value: "Beverages", label: "Beverages" },
  { value: "Health drinks", label: "Health drinks" },
  { value: "Household", label: "Household" },
  { value: "Dairy", label: "Dairy" }
];

export default function NewOrderModal({ isOpen, onClose }) {
  const { addOrder } = useOrders();
  const [formData, setFormData] = useState({
    name: "",
    productId: "",
    category: "",
    orderValue: "",
    quantity: "",
    unit: "",
    buyingPrice: "",
    expectedDelivery: "",
    notify: false
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value
    }));
  };

  const handleSelectChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      category: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addOrder({
      name: formData.name,
      productId: formData.productId,
      category: formData.category,
      orderValue: Number(formData.orderValue),
      quantity: Number(formData.quantity),
      unit: formData.unit,
      buyingPrice: Number(formData.buyingPrice),
      expectedDelivery: formData.expectedDelivery,
      notify: formData.notify,
      status: "Confirmed" // Default status for new orders
    });

    setFormData({
      name: "",
      productId: "",
      category: "",
      orderValue: "",
      quantity: "",
      unit: "",
      buyingPrice: "",
      expectedDelivery: "",
      notify: false
    });

    onClose();
  };

  const footerButtons = (
    <>
      <Button variant="outline" onClick={onClose}>
        Discard
      </Button>
      <Button variant="primary" onClick={handleSubmit}>
        Add Product
      </Button>
    </>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="New Order" footer={footerButtons} id="new-order-modal">
      <form onSubmit={handleSubmit}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px" }}>
          <Input
            label="Product Name"
            id="name"
            placeholder="Enter product name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <Input
            label="Product ID"
            id="productId"
            placeholder="Enter product ID"
            value={formData.productId}
            onChange={handleChange}
            required
          />

          <Select
            label="Category"
            id="category"
            placeholder="Select product category"
            options={categoryOptions}
            value={formData.category}
            onChange={handleSelectChange}
            required
          />

          <Input
            label="Order value"
            id="orderValue"
            type="number"
            placeholder="Enter order value"
            value={formData.orderValue}
            onChange={handleChange}
            required
          />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <Input
              label="Quantity"
              id="quantity"
              type="number"
              placeholder="Enter product quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
            <Input
              label="Unit"
              id="unit"
              placeholder="Enter product unit"
              value={formData.unit}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <Input
              label="Buying price"
              id="buyingPrice"
              type="number"
              placeholder="Enter buying price"
              value={formData.buyingPrice}
              onChange={handleChange}
              required
            />
            <Input
              label="Date of delivery"
              id="expectedDelivery"
              type="date"
              value={formData.expectedDelivery}
              onChange={handleChange}
              required
            />
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="notify"
              className="checkbox-input"
              checked={formData.notify}
              onChange={handleChange}
            />
            <label htmlFor="notify" className="checkbox-label">
              Notify on the date of delivery
            </label>
          </div>
        </div>
      </form>
    </Modal>
  );
}
