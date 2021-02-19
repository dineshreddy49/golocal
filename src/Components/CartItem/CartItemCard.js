import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Card, Col, Media } from 'react-bootstrap'
import { addToCart, deleteFromCart,decreaseFromCart,modifyCart } from '../../Redux'
import { useDispatch, useSelector } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './CartItemCard.css';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import generatePublicUrl from '../../urlconfig';
import InputBase from '@material-ui/core/InputBase';
const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));


function CartItemCard(props) {
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch();
  const classes = useStyles();
  const [age, setAge] = React.useState(props.product.count);
  const handleChange = (event) => {
    setAge(event.target.value);
    dispatch(modifyCart(cartItems, props.product,event.target.value))
    console.log(props.product.count)
  };
  const handleAddToCart = (e) => {

   // dispatch(addToCart(cartItems, props.product))
  }
  const handleDecreaseFromCart = (e) => {

    dispatch(decreaseFromCart(cartItems, props.product))
  }
  const handleRemoveFromCart=(e)=>{
    dispatch(deleteFromCart(cartItems, props.product))
  }
 // console.log(age);
  
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
              <div></div>
              <FormControl className={classes.margin}>
              
        <InputLabel id="demo-customized-select-label">Quantity</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
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
