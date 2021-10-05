import React from "react";
import Counter from "./Item/counter";

const ItemListContainer = (props) => {
  return (
    <div className="contenedor">
      <Counter productNo="one" />
      <Counter productNo="two" />
      <Counter productNo="three" />
      <Counter productNo="four" />
      <Counter productNo="five" />
      <Counter productNo="six" />
      <Counter productNo="seven" />
      <Counter productNo="eight" />
      <div>
        <h1>{props.greeting}</h1>
      </div>
    </div>
  );
};

export default ItemListContainer;
