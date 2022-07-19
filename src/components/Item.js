import React, {useState} from "react";

function Item({ name, category }) {
  const [addItem, setAddItem] = useState(false)

  function manageAddittions() {
    setAddItem((addItem) => !addItem)
  }
  return (
    <li className={ addItem ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addItem ? "remove" : "add"} onClick={manageAddittions} >{ addItem ? "Remove from ": "Add to" } Cart</button>
    </li>
  );
}

export default Item;
