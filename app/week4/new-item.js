

import React, { useState } from 'react';

const NewItem = () => {
  // Initialize State Variables
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

 
  const handleSubmit = (e) => {
    e.preventDefault();

    
    const newItem = {
      name,
      quantity,
      category,
    };

    
    console.log(newItem);

    
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="new-item">
      <h2>Add a New Item</h2>
      <form onSubmit={handleSubmit}>
    
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            max="99"
            required
          />
        </div>

        
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default NewItem;
