import React from 'react';

function ItemList({ items }) {
  const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {sortedItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
