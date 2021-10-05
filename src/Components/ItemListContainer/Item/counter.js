import React from "react";
import { useState } from "react";

const Counter = ({ onAdd }, props) => {
  const [counter, setCounter] = useState(0);
  const [stock, setStock] = useState(7);

  function decr() {
    if (counter > 0) {
      setCounter(counter - 1);
      setStock(stock + 1);
      console.log(`stock de: ${stock}`);
      console.log(counter);
    } else {
      console.log("ahre");
      console.log(`stock: ${stock}`);
      console.log(counter);
    }
  }

  function incr() {
    if (stock > 0) {
      setCounter(counter + 1);
      setStock(stock - 1);
      console.log(stock);
      console.log(counter);
    } else if (stock === 0) {
      setStock(0);
      console.log(stock);
      console.log(counter);
    } else {
      console.log("ahre no queda nada");
    }
  }

  return (
    <div className="products" id={props.productNo}>
      <div className="image">
        <img src="./Multimedia/Berry-farm.png" alt="" />
      </div>
      <div className="name">
        <h2>Producto 1</h2>
      </div>

      <div className="actionButtons">
        <button
          onClick={incr}
          className="countButton"
          id="incr"
          type="button"
          class="btn btn-primary"
        >
          +
        </button>

        <button
          onClick={decr}
          className="countButton"
          id="decr"
          type="button"
          class="btn btn-primary"
        >
          -
        </button>

        <button
          onClick={() => onAdd(counter)}
          type="button"
          class="btn btn-primary"
        >
          Agregar al carro
        </button>
      </div>
    </div>
  );
};

export default Counter;
