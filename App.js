import { Fragment,useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
function App() {
  const [cartIsshown, setCartIsshown]=useState(false);

  const shownChangeHandler=() =>{

       setCartIsshown(true);
  }
  const hideChangeHandler =()=>{
    
    setCartIsshown(false);
  }
  return (
    <Fragment>
     {cartIsshown && <Cart onClose={hideChangeHandler} />}

      <Header onshowCart={shownChangeHandler} />

      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
