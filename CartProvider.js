import CartContext from "./CartContext";

const CartProvider = (props) => {
    
    const additemHandler = (item) => {};
    const removeitemHandler = (id) => {};
    const cartContext = {
      item: [],
      totalAmount: 0,
      additem: additemHandler,
       removeitem: removeitemHandler
  }
  
  return ( 
  <CartContext.Provider value={cartContext}>
    {props.children}
    </CartContext.Provider>
  );

};
export default CartProvider;
