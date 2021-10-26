import React from "react";

function Header({ total, money }) {
  return (
    <>
      <div>
        {total > 0 && money - total !== 0 && (
          <div>
            You have <b>🤑 ${money - total} 🤑</b> left to spend!
          </div>
        )}
        {total === 0 && (
          <div>
            You have a total of <b>💰 ${money} 💰</b> coins!
          </div>
        )}
        {money - total === 0 && (
          <div>
            <b>
              💸 You must gain control over your money or the lack of it will
              forever control you. 💸
            </b>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
