import React, { useEffect, useState } from "react";
import ItemForm from "./ItemForm";
import Item from "./Item";

function ShoppingList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/items")
      .then((response) => response.json())
      .then((itemsData) => setItems(itemsData));
  }, []);

  const handleAddItem = (newItem) => {
    setItems(currentItems => [...currentItems, newItem]);
  };

  const handleUpdateItem = (updatedItem) => {
    setItems(currentItems => currentItems.map(item => 
      item.id === updatedItem.id ? updatedItem : item
    ));
  };

  const handleDeleteItem = (itemId) => {
    setItems(currentItems => currentItems.filter(item => item.id !== itemId));
  };

  return (
    <div>
      <ItemForm onAddItem={handleAddItem} />
      {items.map(item => (
        <Item
          key={item.id}
          item={item}
          onUpdateItem={handleUpdateItem}
          onDeleteItem={handleDeleteItem}
        />
      ))}
    </div>
  );
}

export default ShoppingList;
