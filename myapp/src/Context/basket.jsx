import React, { createContext } from "react";
import useLocalStrg from "../Hook/useLocalStrg";

export const BasketContext = createContext();

function BasketProvider({ children }) {
  const [basket, setbasket] = useLocalStrg("basket", [])

  function addbasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    if (index === -1) {
      setbasket([...basket, { ...item, count: 1 }]);
    } else {
      basket[index].count++;
      setbasket([...basket]);
    }
  }

  function removerbasket(item) {
    setbasket(basket.filter((x) => x._id !== item._id));
  }
  function increase(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    basket[index].count++;
    setbasket([...basket]);
  }

  function decrease(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    if (basket[index].count === 1) {
      setbasket([...basket]);
      return;
    } else {
      basket[index].count--;
      setbasket([...basket]);
    }
  }

  function totalPrice() {
    return basket.reduce((total,item)=>total+item.count*item.price,0).toFixed(2)
  }
  return (
    <BasketContext.Provider value={{ basket, addbasket, removerbasket,increase,decrease,totalPrice }}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketProvider;
