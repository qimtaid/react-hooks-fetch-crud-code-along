// Filter.js
import React from "react";

function Filter({ category, onCategoryChange }) {
  function handleCategorySelect(e) {
    onCategoryChange(e.target.value);
  }

  return (
    <fieldset className="Filter">
      <legend>Filter by category:</legend>
      <select value={category} onChange={handleCategorySelect}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </fieldset>
  );
}

export default Filter;