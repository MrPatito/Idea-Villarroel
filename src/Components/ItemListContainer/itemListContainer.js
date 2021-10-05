import React from "react";
import Counter from "./Item/counter";

const ItemListContainer = (props) => {
  return (
    <div className="contenedor">
      <Counter initial="1" stock="3" productNo="One" />
      <Counter initial="1" stock="9" productNo="Two" />
      <Counter initial="1" stock="5" productNo="Three" />
      <Counter initial="1" stock="10" productNo="Four" />
      <Counter initial="1" stock="2" productNo="Five" />
      <Counter initial="1" stock="4" productNo="Six" />
      <Counter initial="1" stock="6" productNo="Seven" />
      <Counter initial="1" stock="8" productNo="Eight" />
    </div>
  );
};

export default ItemListContainer;
