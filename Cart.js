import classes from "./Cart.css";
import Modal from "../UI/Modal";
const Cart = () => {
  const CartItem = (
    <ul
      classname={classes["cart-item"]}>
      {[
        [{ id: "c1", name: "suhshi", amount: 2, price: 12.99 }].map((item) => (
          <li>{item.name}</li>
        )),
      ]}
    </ul>
  );
  return (
    <Modal>
      {CartItem}
      <div className={classes.total}>
        <span>TOTAL AMOUNT</span>
        <span>35.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
