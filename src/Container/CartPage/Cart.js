import React from 'react'
import CartItems from '../../Components/Cart/CartItems'
import PriceDetails from '../../Components/Cart/PriceDetails/PriceDetails'
import './cart.css'


function Cart() {
    
    return (
        <div className="cart">
        <div className="cart-container">
        <div className="cart-container-item1"><CartItems/></div>
        <div className="cart-container-item2"><PriceDetails/></div>    
        </div> 
        </div>
    )
}

export default Cart
