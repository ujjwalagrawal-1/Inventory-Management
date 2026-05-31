import React, { useState } from "react";
import Modal from "../../../components/ui/Modal";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import Button from "../../../components/ui/Button";
import { useInventory } from "../../../context/InventoryContext";
import "../Inventory.css";

const categoryOptions = [
  { value: "Instant food", label: "Instant food" },
  { value: "Beverages", label: "Beverages" },
  { value: "Health drinks", label: "Health drinks" },
  { value: "Household", label: "Household" },
  { value: "Dairy", label: "Dairy" }
];

export default function NewProductModal({ isOpen, onClose }) {
  const { addProduct } = useInventory();
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    category: "",
    price: "",
    quantity: "",
    unit: "",
    expiryDate: "",
    threshold: "",
    supplier: "Ronald Martin", // Default supplier
    supplierContact: "98789 86757"
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
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
    
    // Add product to context
    addProduct({
      name: formData.name,
      id: formData.id || undefined, // will auto-gen if blank
      category: formData.category,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
      unit: formData.unit,
      expiryDate: formData.expiryDate,
      threshold: Number(formData.threshold),
      supplier: formData.supplier,
      supplierContact: formData.supplierContact
    });

    // Reset state
    setFormData({
      name: "",
      id: "",
      category: "",
      price: "",
      quantity: "",
      unit: "",
      expiryDate: "",
      threshold: "",
      supplier: "Ronald Martin",
      supplierContact: "98789 86757"
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
    <Modal isOpen={isOpen} onClose={onClose} title="New Product" footer={footerButtons} id="new-product-modal">
      <form onSubmit={handleSubmit}>
        {/* Image Drag-and-Drop Area */}
        <div className="image-upload-container">
          <div className="image-upload-icon">📷</div>
          <div className="image-upload-text">
            Drag image here <br /> or <span className="image-upload-link">Browse image</span>
          </div>
        </div>

        {/* Form Fields Grid */}
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
            id="id"
            placeholder="Enter product ID (optional)"
            value={formData.id}
            onChange={handleChange}
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

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <Input
              label="Buying Price"
              id="price"
              type="number"
              placeholder="Enter buying price"
              value={formData.price}
              onChange={handleChange}
              required
            />
            <Input
              label="Quantity"
              id="quantity"
              type="number"
              placeholder="Enter product quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <Input
              label="Unit"
              id="unit"
              placeholder="Enter unit (e.g. Packets)"
              value={formData.unit}
              onChange={handleChange}
              required
            />
            <Input
              label="Expiry Date"
              id="expiryDate"
              type="date"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
          </div>

          <Input
            label="Threshold Value"
            id="threshold"
            type="number"
            placeholder="Enter threshold value"
            value={formData.threshold}
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </Modal>
  );
}
