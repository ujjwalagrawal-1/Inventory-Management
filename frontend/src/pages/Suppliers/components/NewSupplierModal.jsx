import React, { useState } from "react";
import Modal from "../../../components/ui/Modal";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import Button from "../../../components/ui/Button";
import { useSuppliers } from "../../../context/SupplierContext";
import "../Suppliers.css";

const categoryOptions = [
  { value: "Instant food", label: "Instant food" },
  { value: "Beverages", label: "Beverages" },
  { value: "Health drinks", label: "Health drinks" },
  { value: "Household", label: "Household" },
  { value: "Dairy", label: "Dairy" }
];

const typeOptions = [
  { value: "Taking Return", label: "Taking Return" },
  { value: "Not Taking Return", label: "Not Taking Return" }
];

export default function NewSupplierModal({ isOpen, onClose }) {
  const { addSupplier } = useSuppliers();
  const [formData, setFormData] = useState({
    name: "",
    product: "",
    category: "",
    buyingPrice: "",
    contact: "",
    type: "Taking Return",
    email: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSelectChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addSupplier({
      name: formData.name,
      product: formData.product,
      category: formData.category,
      buyingPrice: formData.buyingPrice ? Number(formData.buyingPrice) : "",
      contact: formData.contact,
      type: formData.type,
      email: formData.email || `${formData.name.toLowerCase().replace(/\s+/g, "")}@supplier.com`
    });

    setFormData({
      name: "",
      product: "",
      category: "",
      buyingPrice: "",
      contact: "",
      type: "Taking Return",
      email: ""
    });

    onClose();
  };

  const footerButtons = (
    <>
      <Button variant="outline" onClick={onClose}>
        Discard
      </Button>
      <Button variant="primary" onClick={handleSubmit}>
        Add Supplier
      </Button>
    </>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="New Supplier" footer={footerButtons} id="new-supplier-modal">
      <form onSubmit={handleSubmit}>
        {/* Avatar Upload Placeholder */}
        <div className="image-upload-container">
          <div className="image-upload-icon">👤</div>
          <div className="image-upload-text">
            Drag profile image here <br /> or <span className="image-upload-link">Browse image</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px" }}>
          <Input
            label="Supplier Name"
            id="name"
            placeholder="Enter supplier name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <Input
            label="Product"
            id="product"
            placeholder="Enter product supplied"
            value={formData.product}
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

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <Input
              label="Buying Price"
              id="buyingPrice"
              type="number"
              placeholder="Enter buying price"
              value={formData.buyingPrice}
              onChange={handleChange}
            />
            <Input
              label="Contact Number"
              id="contact"
              placeholder="Enter contact number"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>

          <Input
            label="Email Address"
            id="email"
            type="email"
            placeholder="Enter email address (optional)"
            value={formData.email}
            onChange={handleChange}
          />

          <Select
            label="Type"
            id="type"
            options={typeOptions}
            value={formData.type}
            onChange={handleSelectChange}
            required
          />
        </div>
      </form>
    </Modal>
  );
}
