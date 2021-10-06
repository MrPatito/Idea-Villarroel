import React from "react";
import Counter from "./Item/counter";

const ItemListContainer = (props) => {
  return (
    <div className="contenedor">
      <Counter productNo="One" />
      <Counter productNo="Two" />
      <Counter productNo="Three" />
      <Counter productNo="Four" />
      <Counter productNo="Five" />
      <Counter productNo="Six" />
      <Counter productNo="Seven" />
      <Counter productNo="Eight" />
    </div>
  );
};

export default ItemListContainer;
