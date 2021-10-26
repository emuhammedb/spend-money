import React from "react";

function BasketItem({ item, product }) {
  return (
    <>
      <li className="basket-item">
        {product.title} <span>✖ {item.amount}</span>
      </li>
      <style jsx>{`
        .basket-item {
          padding-bottom: 10px;
          font-size: 16px;
          font-weight: 600;
        }

        .basket-item span{
          color: #00af48;
        }
      `}
      </style>
    </>
  );
}

export default BasketItem;
