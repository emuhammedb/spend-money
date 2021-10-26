import React from "react";
import BasketItem from "./BasketItem";

function Basket({ basket, products, total, resetBasket }) {
  return (
    <>
      {basket.map((item) => (
        <BasketItem
          item={item}
          product={products.find((product) => product.id === item.id)}
        />
      ))}
      
      <div>
          <b>TOTAL</b> ${total}
      </div>
      <button onClick={resetBasket}>Reset Basket</button>
    </>
  );
}

export default Basket;
