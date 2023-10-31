import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  // Define state for the selected item (if needed).
  const [selectedItem, setSelectedItem] = useState(null);

  // Define a function to handle item selection.
  const handleItemSelection = (item) => {
    // Set the selected item in state, if needed.
    setSelectedItem(item);
    // Trigger the onItemSelect function with the selected item.
    onItemSelect(item);
  };

  return (
    <div>
      <h2>Shopping List</h2>
      {/* Rendering sorting buttons (if any) */}
      {/* Example:
      <button onClick={handleSortByName}>Sort by Name</button>
      <button onClick={handleSortByCategory}>Sort by Category</button>
      */}

      <ul>
        {items.map((item, index) => (
          <Item
            key={index}
            item={item}
            onSelect={handleItemSelection} // Pass the onSelect function
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
