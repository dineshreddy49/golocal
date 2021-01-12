import React from 'react'
import './PriceDetails.css'
import { useDispatch, useSelector  } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
function PriceDetails() {
    const history = useHistory();
    const cartItems = useSelector(state => state.cart.items)
    const handlePlaceOrder=()=>{
        history.push(`/placeorder`);
    }
    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
      }));
      const classes = useStyles();
    return (
        <div>
        <h3 className="pricedetails">PRICE DETAILS</h3>
        <div className="cost-price">
        <div className="cost-price-item1">Price ({cartItems.length})item</div>
        <div className="cost-price-item2">{cartItems.reduce((a, c) => a + c.price * c.count, 0)}₹/-</div>
        </div>
        <div className="cost-price">
        <div className="cost-price-item1">Discount</div>
        <div className="cost-price-item2">0/-</div>
        </div>
        <div className="cost-price">
        <div className="cost-price-item1">Delivery charges</div>
        <div className="cost-price-item2">FREE</div>
        </div>
        <h3 className="cart-amount">Total Amount:  {cartItems.reduce((a, c) => a + c.price * c.count, 0)}₹/-</h3>
        <div className="place-order-button"><Button
        variant="contained"
        color="primary"
        onClick={handlePlaceOrder}
        className={classes.button}
      >
        Place Order 
      </Button></div>
        </div>
        
    )
}

export default PriceDetails
