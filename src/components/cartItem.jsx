import "./cartItem.css";
import "../services/dataService.js";
import { useContext } from "react";
import storeContext from "../store/storeContext";

const CartItem = (props) => {
  const { removeProductFromCart } = useContext(storeContext);

  const removeProd = () => {
    removeProductFromCart(props.data._id);
  };

  const getTotal = () => {
    let total = props.data.quantity * props.data.price;
    return "$" + total.toFixed(2);
  };

  return (
    <div className="cart-item">
      <img src={"/images/" + props.data.img} alt="Product" />
      <div className="info">
        <h5 className="title-name">{props.data.title}</h5>
        <label>{props.data.category}</label>
        <h5 className="title-descrition">{props.data.descrition}</h5>
      </div>

      <label className="price">${props.data.price.toFixed(2)}</label>
      <label className="quanity">{props.data.quantity}</label>
      <label className="total">{getTotal()}</label>

      <button onClick={removeProd} className="btn btn-sm btn-primary">
        Remove from 🛒
      </button>
    </div>
  );
};

export default CartItem;
