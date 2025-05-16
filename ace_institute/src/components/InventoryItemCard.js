import React from 'react';
import '../styles/panels/InventoryView.css';

export default function InventoryItemCard({ item }) {
  return (
    <div className={`inventory-card rarity-${item.rarity.toLowerCase()}`}>
      <h2>{item.name}</h2>
      <p><strong>Tipo:</strong> {item.type}</p>
      <p><strong>Departamento:</strong> {item.department}</p>
      <p><strong>Status:</strong> {item.status}</p>
      <p className="rarity-label">{item.rarity}</p>
    </div>
  );
}
