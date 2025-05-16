import React, { useState } from 'react';
import GameHeader from "../../components/GameHeader";
import InventoryItemCard from "../../components/InventoryItemCard";

import GameFooter from "../../components/GameFooter";
import "../../styles/panels/InventoryView.css";

const mockData = [
  { id: 1, name: "Pedra do Tempo", type: "Artefato", department: "Arqueologia", rarity: "Raro", status: "Ativo" },
  { id: 2, name: "DNA Vampírico", type: "Amostra", department: "Ciência Vampírica", rarity: "Épico", status: "Em Análise" },
  { id: 3, name: "Arma de Plasma", type: "Arma", department: "Tecnologia", rarity: "Lendário", status: "Ativo" },
];

export default function InventoryView() {
const [items, setItems] = useState(mockData);
  const [search, setSearch] = useState('');

  const filteredItems = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="inventory-container">
      <GameHeader />
      <h1 className="inventory-title">📦 Inventário A.C.E.</h1>
      <div className="inventory-controls">
        <input
          type="text"
          placeholder="Buscar item..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="add-button">+ ADICIONAR ITEM</button>
      </div>
      <div className="inventory-grid">
        {filteredItems.map(item => (
          <InventoryItemCard key={item.id} item={item} />
        ))}
      </div>
      <GameFooter />
    </div>
  );
}


