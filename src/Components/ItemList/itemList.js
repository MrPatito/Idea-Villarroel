import React from "react";
import Item from "./Item/item";
import Counter from "./Item/counter";

const ItemList = ({ items }) => {
  return (
    <div className="products">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
      <Counter />
    </div>
  );
};

export default ItemList;
