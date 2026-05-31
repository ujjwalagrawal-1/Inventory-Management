import React from "react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import "./ManageStore.css";

const stores = [
  {
    branch: "Singanallur Branch",
    name: "Lisy Store",
    address: "1A/Krihnarajapuram, 3 rd street sulur",
    city: "Coimbatore - 6313403",
    phone: "044- 653578",
  },
  {
    branch: "Slur Branch",
    name: "Lisy Store",
    address: "54 Ramani colony, 3 rd street sulur",
    city: "Coimbatore - 63133452",
    phone: "044- 653763",
  },
  {
    branch: "Gaandipuram Branch",
    name: "Lisy Store",
    address: "32/ Venkatasamy layout, 3 rd street sulur",
    city: "Coimbatore - 6313403",
    phone: "044- 653578",
  },
];

export default function ManageStorePage() {
  return (
    <Card className="manage-store-card">
      <div className="manage-store-header">
        <h2 className="manage-store-title">Manage Store</h2>
        <Button variant="primary" className="add-store-btn">
          Add Store
        </Button>
      </div>

      <div className="store-list">
        {stores.map((store) => (
          <article className="store-row" key={store.branch}>
            <div className="store-branch-panel">
              <h3>{store.branch}</h3>
            </div>

            <div className="store-details-panel">
              <div className="store-copy">
                <h3>{store.name}</h3>
                <p>{store.address}</p>
                <p>{store.city}</p>
                <p>{store.phone}</p>
              </div>

              <Button variant="outline" className="edit-store-btn">
                Edit
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Card>
  );
}
