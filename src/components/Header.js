import React from "react";
import { moneyFormat } from "../helpers";

function Header({ total, money }) {
  return (
    <>
      {total > 0 && money - total !== 0 && (
        <div className="header">
          You have <span>🤑 ${moneyFormat(money - total)} 🤑</span> left to
          spend!
        </div>
      )}
      {total === 0 && (
        <div className="header">
          You have a total of <span>💰 ${moneyFormat(money)} 💰</span> coins!
        </div>
      )}
      {money - total === 0 && (
        <div className="header">
          <b>
            💸 You must gain control over your money or the lack of it will
            forever control you. 💸
          </b>
        </div>
      )}
      <style jsx="true">{`
        .header {
            position: sticky;
            top: 0;
          background: linear-gradient(
            135deg,
            #b9e765 0,
            #a3e15f 16.67%,
            #89d758 33.33%,
            #6acc50 50%,
            #44c049 66.67%,
            #00b747 83.33%,
            #00af48 100%
          );
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 24px;
          letter-spacing: 1px;
        }
        .header span {
          margin: 0 10px;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

export default Header;
