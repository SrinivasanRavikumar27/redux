import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/cart.css';

function CartPage() {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  console.log(cartItems);

  const removeProduct = id => {
    dispatch({
      type: 'RemoveFromCart',
      payload: id,
    });
    dispatch({
      type: 'RemoveFromCart1',
      payload: id,
    });
  };

  const decreaseQuantity = id => {
    dispatch({
      type: 'MinusQuantity',
      payload: id,
    });
  };

  const increaseQuantity = id => {
    dispatch({
      type: 'AddQuantity',
      payload: id,
    });
  };

  const productTotal = item => {
    return item.quantity * item.price;
  };

  const subTotal = cartItems.reduce((total, item) => total + productTotal(item), 0);

  const overallTotal = subTotal;

  return (
    <div>
      {cartItems.length > 0 ? (
        <div className='display-container'>
          <h1>Cart Page</h1>
          {
            cartItems.map(cart => 
             (
            <div key={cart.id} className='row product-detail'>
              <div className=' col-3 image-container'>
                <img src={cart.images[0]} alt="Product Thumbnail" />
              </div>
              <div className=' col-5 product'>
                <h2>{cart.title}</h2>
                <p>Details of Product</p>
                <p>{cart.description}</p>
              </div>
              <div className=' col-3 quantity'>
                <button className='quantityButton' onClick={() => decreaseQuantity(cart.id)}> - </button>
                <span>{cart.quantity}</span>
                <button className='quantityButton' onClick={() => increaseQuantity(cart.id)}> + </button>
                <p className='price'>Rs : {productTotal(cart)}</p>
              </div>
              <button className='removeButton bg-danger' onClick={() => removeProduct(cart.id)}>Remove</button>
            </div>
          )
          )
          }

          <div className='shipping'>
            <p className='subTotal'>Subtotal : <span> {`Rs ${subTotal}`}</span></p>
            <p className='shipCharge'>Shipping Charges : <span>Free</span></p>
          </div>
          <div className='total'>
            <p>Total : <span>{`Rs ${overallTotal}`}</span></p>
          </div>
        </div>
      ) : (
        <div className='empty-cart'>
          <h1>Your Cart is Empty!</h1>
        </div>
      )}
    </div>
  );
}

export default CartPage;
