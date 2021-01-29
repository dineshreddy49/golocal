import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Card, Col, Media } from 'react-bootstrap'
import { addToCart, deleteFromCart,decreaseFromCart } from '../../Redux'
import { useDispatch, useSelector } from 'react-redux';
import './CartItemCard.css';
import { makeStyles } from '@material-ui/core/styles';
import generatePublicUrl from '../../urlconfig'

function CartItemCard(props) {
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {

    dispatch(addToCart(cartItems, props.product))
  }
  const handleDecreaseFromCart = (e) => {

    dispatch(decreaseFromCart(cartItems, props.product))
  }
  const handleRemoveFromCart=(e)=>{
    dispatch(deleteFromCart(cartItems, props.product))
  }
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  return (
    <div >
      <row>
          <Card border="dark" className="cart-card" >
            <Media>
            <img
            className="mr-3" src={generatePublicUrl(props.product._id)} alt="not displayed" />
            <Media.Body className="cart-body">
                <h5>{props.product.name}</h5>
                <p>
                  RS:{props.product.price}₹/-</p>
              </Media.Body>
              <div className="increse-remove-container">
              <div className="quantityControl">
                <button onClick={handleDecreaseFromCart}>-</button>
                <input value={props.product.count} readOnly />
                <button onClick={handleAddToCart}>+</button>
              </div>
              <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={handleRemoveFromCart}
            >
              Delete
            </Button>
            </div>
            </Media>
          </Card>
      </row>
    </div>
  )
}

export default CartItemCard
