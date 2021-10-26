import React from "react";
import BasketItem from "./BasketItem";

function Basket({ basket, products, total, resetBasket }) {
  return (
    <>
      <div className="basket-container container">
        <h3>Your Receipt</h3>
        <ul>
          {basket.map((item) => (
            <BasketItem
              key={item.id}
              item={item}
              product={products.find((product) => product.id === item.id)}
            />
          ))}
        </ul>

        <div className="total">
          <b>TOTAL</b> ${total}
        </div>
        <button className="basket-reset-button" onClick={resetBasket}>Reset Basket</button>
      </div>

      <style jsx>
        {`
          .basket-container {
            padding: 20px;
            backgorund: #fff;
            border: 1px solid #222;
          }

          .basket-container h3{
            font-size: 20px;
            margin-bottom: 15px;
          }

          .basket-container .total{
            border-top: 1px solid #ccc;
            padding-top: 10px;
            margin-top: 10px;
            font-size: 20px;
            font-weight: bold;
            text-align: right;
            color: #68cb50;
          }

          .basket-reset-button {
            background: #ccc;
            height: 40px;
            padding: 0 20px;
            font-size: 14px;
            font-weight: 550;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}

export default Basket;
