function ItemList() {
    // Step 2: Initialize State Variable
    const [sortBy, setSortBy] = useState('name'); // Default sorting by name
  
    // Step 3: Sort the Items
    const sortedItems = [...items].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
    });
  
    // Step 4: Create Sort Buttons
    const handleSortByName = () => setSortBy('name');
    const handleSortByCategory = () => setSortBy('category');
  
    // Step 5: Render the Items
    const itemComponents = sortedItems.map(item => (
      <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
    ));
  
    return (
      <div>
        <div>
          {/* Step 4: Create Sort Buttons */}
          <button
            onClick={handleSortByName}
            style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'transparent' }}
          >
            Sort by Name
          </button>
          <button
            onClick={handleSortByCategory}
            style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'transparent' }}
          >
            Sort by Category
          </button>
        </div>
        <ul>
          {/* Step 5: Render the Items */}
          {itemComponents}
        </ul>
      </div>
    );
  }
  
  export default ItemList;
  