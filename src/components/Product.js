import React from "react";
import { moneyFormat } from "../helpers";

function Product({ product, total, money, basket, setBasket }) {
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    // product already added
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );
    // product already remove
    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };

  return (
    <>
      <div>
        <img src={product.image} alt=""></img>
        <h6>{product.title}</h6>
        <div className="price">${moneyFormat(product.price)}</div>
        <div className="actions">
          <button
            className="sell-button"
            disabled={!basketItem}
            onClick={removeBasket}
          >
            Sell
          </button>
          <span className="amount">
            {(basketItem && basketItem.amount) || 0}
          </span>
          <button
            className="buy-button"
            disabled={total + product.price > money}
            onClick={addBasket}
          >
            Buy
          </button>
        </div>
        <style jsx="true">{`
          .product {
            padding: 15px;
            background: #fff;
            border: 1px solid #ddd;
            margin-bottom: 20px;
            width: 24%;
          }

          .product img {
            width: 100%;
          }

          .product h6 {
            font-size: 20px;
            margin-botton: 10px;
          }

          .product .price {
            font-size: 20px;
            color: #00af48;
          }

          .product .actions {
            display: flex;
            align-items: center;
            margin-top: 15px
          }

          .actions button {
            height: 40px;
            padding: 0 15px;
            cursor: pointer;
          }

          .actions button [disabled] {
            opacity: .6;
            cursor: not-allowed;
          }

          .actions .buy-button {
            background: #68cb50;
            font-size: 14px;
            color: #fff;
            font-weight: 600;
          }

          .actions .sell-button {
            background: #ccc;
            font-size: 14px;
            color: #fff;
            font-weight: 600;
          }


          .actions .amount {
            width: 50px;
            height: 40px;
            text-align: center;
            border: 1px solid #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            font-weight: 600;
            color: #222;
          }
        `}</style>
      </div>
    </>
  );
}

export default Product;
