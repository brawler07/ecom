import Header from "./component/Header"
import Main from "./component/Main";
import Basket from './component/Basket';
import data from './data';

import { useState } from 'react';
function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const [flag,setFlag]=useState(false)
  const func=()=>{
    setFlag(!flag)
  }
  
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
   
    <div className="App">
      
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        
        {flag?<Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>:<></>}
        <Main products={products} onAdd={onAdd}></Main>
        
      </div>
 <button  className="cart-item" onClick={func}>Review Cart</button>
    </div>

  );
}

export default App;