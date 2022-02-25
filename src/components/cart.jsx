import "./cart.css";
import { useContext, useState } from "react";
import storeContext from "../store/storeContext";

const Cart = () => {
  const { cart } = useContext(storeContext);

  return (
    <div className="cart">
      <h1>You currently have {cart.length} items in your cart</h1>

      <div className="products">
        <ul>
          {cart.map((prod) => (
            <li key={prod._id}>{prod.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
