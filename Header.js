import React from "react";
import mealsimage from '../../assets/meals.jpg'
import classes from './Header.modules.css'
const Header = (props) => {
    return (
    <React.Fragment>
    <header className={classes.header}>
      <h1>React Meals</h1>
      <button>Cart</button>
    </header>
    <div className={classes['main-image']}>
       < image src ={mealsimage} alt='A  table of full of delious food!'></image>
    </div>
  </React.Fragment>
    );
    };
export default Header;
