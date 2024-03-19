import React from 'react';
import {BrowserRouter as Router, Route,Routes,Link} from "react-router-dom";
import Home from '../pages/Home';
import Product from '../pages/Product';
import CartPage from '../pages/CartPage';
import '../styles/header.css';
import { useSelector } from 'react-redux';

function Header() {

  const cartItems = useSelector(state => state.cart.cartItems); //selects the cart items from the redux store
console.log(cartItems.length);

    const padding = {
        padding : 25,
      }

      const calculateTotalQuantity = cartItems.length;

  return (
    <Router>

    <div style={padding}>
    <Link to='/' style={padding} >Home</Link>
    <Link to='/product' style={padding} >Product</Link>
    <Link to='/cart' className='cartIcon' style={padding} ><i className="fa-duotone fa-cart-shopping-fast fa-fade fa-xl" style={{
    '--fa-primary-color': '#0f574f',
    '--fa-secondary-color': '#1534ac',
    '--fa-secondary-opacity': 0.8,
  }}></i>
  Cart <span className="badge bg-dark text-white ms-1 rounded-pill">{calculateTotalQuantity}</span>
  
</Link>
    </div>
    
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/product' element = {<Product/>}/>
      <Route path='/cart' element = {<CartPage/>} />
    </Routes>
    
        </Router>
  )
}

export default Header