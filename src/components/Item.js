import React from "react";

function Item({ item, onUpdateItem, onDeleteItem }) {
  const handleToggleCart = () => {
    const updatedItem = { ...item, isInCart: !item.isInCart };

    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isInCart: updatedItem.isInCart })
    })
    .then(response => response.json())
    .then(data => onUpdateItem(data));
  };

  const handleDelete = () => {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "DELETE"
    })
    .then(() => onDeleteItem(item.id));
  };

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button onClick={handleToggleCart}>
        {item.isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default Item;
