import CartIcon from "../Cart/CartIcon";
import {useContext} from 'react';
import "./HeaderCartButton.css";
import CartContext from "../../Store/CartContext";
const HeaderCartButton = (props) => {

const CartCtx = useContext(CartContext)
const numberofcartitems =CartCtx.item.reduce((currNumber,item)=>{
  return currNumber + item.amount;
},0)

  return (
    <button className='button' onClick={props.onClick}>
      <span className='icon'>
        <CartIcon />
      </span>
      <span> your Cart</span>
      <span className='badge'>{numberofcartitems}</span>
    </button>
  );
};
export default HeaderCartButton;
