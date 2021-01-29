import React from 'react'
import CartItems from '../../Components/Cart/CartItems'
import PriceDetails from '../../Components/Cart/PriceDetails/PriceDetails'
import NavBar from '../../Components/NavBar/NavBar'
import './cart.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
}))
function Cart() {
    const classes = useStyles();
    return (
        <div className={classes.grow}>
        <NavBar/>
        <div className="cart">
        <div className="cart-container">
        <div className="cart-container-item1"><CartItems/></div>
        <div className="cart-container-item2"><PriceDetails/></div>    
        </div> 
        </div>
        </div>
    )
}

export default Cart
