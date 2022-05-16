import React from 'react';
import data from "../data"

export default function Basket(props) {
  const { products } = data;
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice;
  return (
    <aside className="basket-item col-1 ">
      <h2 className="cart-items">Cart Items</h2>
      <div className="basket-item">
        {cartItems.length === 0 && <div>Your cart is empty, try adding some product to your cart.</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
            <div className="col-2 item-name">{item.name}</div>
            
            <div className="col-2">
              
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
             Rs { item.qty * item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
           
           
         

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>Rs {totalPrice.toFixed(2)}</strong>
              </div>
            </div>
       
            <div className="row">
              <button onClick={() => alert('Please login to proceed!')}>
                 Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}