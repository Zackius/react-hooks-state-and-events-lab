import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [categorySelect, setCategorySelect] = useState("All")
  function manageSelection(event) {
    setCategorySelect(event.target.value)
  }
  const showItem = items.filter((item) => {
    if (categorySelect === "All") return true
    return item.category === categorySelect
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={manageSelection}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {showItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
