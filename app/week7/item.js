import React from 'react';

const Item = ({ item, onSelect }) => {
  // Define a click handler function that triggers the onSelect function.
  const handleItemClick = () => {
    onSelect(item); // Pass the item to the onSelect function.
  };

  return (
    <div
      onClick={handleItemClick} // Add onClick to make the item clickable
      style={{ cursor: 'pointer' }} // Change the cursor to indicate it's clickable
    >
      {item}
    </div>
  );
};

export default Item;

