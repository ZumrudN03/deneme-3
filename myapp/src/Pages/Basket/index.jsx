import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { BasketContext } from "../../Context/basket";

function Basket() {
  const {totalPrice, basket, removerbasket, increase, decrease } =
    useContext(BasketContext);
  return (
    <>
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <div className="basket">
        {basket.map((x) => (
          <div className="card">
            <div className="card_text">
              <p>{x.title}</p>
              <button onClick={() => increase(x)}>+</button>
              <p>${x.price * x.count}</p>
              <button onClick={() => decrease(x)}>-</button>
            </div>
            <div className="card_icon">
              <p onClick={() => removerbasket(x)}>x</p>
              <p>W</p>
              <p>D</p>
            </div>
          </div>
        ))}
        <p>{totalPrice()}</p>
      </div>
    </>
  );
}

export default Basket;
