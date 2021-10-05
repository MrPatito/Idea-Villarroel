import React from "react";
import { useState } from "react";

const Counter = ({ initial, stock, productNo }) => {
  const [counter, setCounter] = useState(0);
  const [itemStock, setStock] = useState(7);
  const [cart, setCart] = useState();

  const items = [
    { key: "1", name: "One", potencia: "200W" },
    { key: "2", name: "Two", potencia: "300W" },
    { key: "3", name: "Three", potencia: "400W" },
    { key: "4", name: "Four", potencia: "800W" },
    { key: "5", name: "Five", potencia: "1000W" },
    { key: "6", name: "Six", potencia: "300W" },
    { key: "7", name: "Three", potencia: "400W" },
    { key: "8", name: "Four", potencia: "800W" },
  ];

  function decr() {
    if (counter > 0) {
      setCounter(counter - 1);
      setStock(itemStock + 1);
      console.log(`Number ${productNo} stock: ${stock}`);
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
      setStock(itemStock - 1);
      console.log(itemStock);
      console.log(counter);
    } else if (stock === 0) {
      setStock(0);
      console.log(itemStock);
      console.log(counter);
    } else {
      console.log("ahre no queda nada");
    }
  }

  function addToCart() {
    let totalCart = items.filter(function (item) {
      return item.name === productNo;
    });
    console.log(totalCart);
    setCart(totalCart);
  }

  return (
    <div className="products" id={productNo}>
      <div className="image">
        <img src="./Multimedia/Berry-farm.png" alt="" />
      </div>
      <div className="name">
        <h2>{productNo}</h2>
      </div>
      <div>
        <div class="input-group mb-3">
          <input type="text" class="form-control" />
          <span class="input-group-text">.00</span>
        </div>
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

        <button onClick={addToCart} type="button" class="btn btn-primary">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Counter;
