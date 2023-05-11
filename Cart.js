import "./Cart.css";
import { useContext } from "react";
import CartContext from "../../Store/CartContext";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount =`$${cartCtx.totalAmount.toFixed(2)}`;
  const HasItem = cartCtx.item.length > 0;
  const cartItemRemoveitemHandler = (id) => {};
  const cartItemAdditemHandler = (item) => {};

  const cartItems = (
    <ul className="cart-item">
      {cartCtx.item.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.prioce}
          onRemove={cartItemRemoveitemHandler.bind(null,item.id)}
          onAdd={cartItemAdditemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
     {cartItems} 
      <div className="total">
        <span>TOTAL AMOUNT</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
        {HasItem && <button className="button">Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
