import React from 'react'
import CartItemCard from '../CartItem/CartItemCard'
import { useDispatch, useSelector  } from 'react-redux';
import {Container,Row,Col} from 'react-bootstrap'
import NavBar from '../../Components/NavBar/NavBar'
import './cartitems.css'

function CartItems() {
    const cartItems= useSelector(state=>state.cart.items)
    let content =null
    if(cartItems.length === 0 ){
        content=  <div>
        You have {cartItems.length} items in the basket. <hr />
      </div>
    } 
    if(cartItems.length > 0)
    {
        content=cartItems.map((product,key)=>
        <div key={key}>
        <Col className="each-product"><CartItemCard product={product}/></Col>
        </div>)
    }
    return (
      <div className="cart-items">
      <h2>MY GOLOCAL CART({cartItems.length})</h2>
        <Container className="products-container" >
        <Row xs={1} md={1}>
        {content}
        </Row>
      </Container>
      </div>
    )
}

export default CartItems
