import React from "react";
import { useState } from "react";

const Counter = ({ onAdd, productNo }) => {
  const [counter, setCounter] = useState(0);
  const [stock, setStock] = useState(7);
  // const [cart, setCart] = useState({ cant: "" });

  // const { cant } = cart;

  function decr() {
    if (counter > 0) {
      setCounter(counter - 1);
      setStock(stock + 1);
      console.log(`Number ${productNo} stock: ${stock}`);
      console.log(counter);
    } else {
      console.log("ahre");
      console.log(`Number ${productNo} stock: ${stock}`);
      console.log(counter);
    }
  }

  function incr() {
    if (stock > 0) {
      setCounter(counter + 1);
      setStock(stock - 1);
      console.log(stock);
      console.log(counter);
    } else {
      setStock(0);
      console.log(stock);
      console.log(counter);
      console.log("ahre no queda nada");
    }
  }

  // function addToCart() {
  //   let totalCart = items.filter(function (item) {
  //     return item.name === productNo;
  //   });
  //   console.log(totalCart);
  //   setCart(totalCart);
  // }

  return (
    <div className="products" id={productNo}>
      <div className="image">
        <img src="./Multimedia/Berry-farm.png" alt="" />
      </div>
      <div className="name">
        <h2>{productNo}</h2>
      </div>

      <div id="input" class="input-group mb-3">
        <input type="text" class="form-control" />
        <span class="input-group-text">.00</span>
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
          // onClick={() => onAdd(counter)}
          id="addToCart"
          type="button"
          class="btn btn-primary"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Counter;
