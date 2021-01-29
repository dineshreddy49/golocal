import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector  } from 'react-redux';
import Button from '@material-ui/core/Button';
import './Review.css'
import {placeOrder} from '../../../Redux/index'

const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  root:{
    margin: theme.spacing(1),
  }
}));

export default function Review() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cartItems= useSelector(state=>state.cart.items)
  const deliveryAddress= useSelector(state=>state.addAddress)
  const addressId = deliveryAddress.selectedAddress._id;
  
  // const _id = cartItems.map((items)=>(
  //   items.id
  // ))
  // const price = cartItems.map((items)=>(
  //   items.price
  // ))
  // const count = cartItems.map((items)=>(
  //   items.count
  // ))
  const items = []
  cartItems.map((product) => {
     items.push( {"productId":product._id,
    "count":product.count,
    "price":product.price})
  })
  //const items =  cartItems1;
  const paymentStatus = "pending";
  const paymentType = "cod";
  console.log(items)
  const totalAmount = cartItems.reduce((a, c) => a + c.price * c.count, 0);
  const handleOrder = (e) =>{
    e.preventDefault();
    const orders={
      addressId,totalAmount,items,paymentStatus,paymentType
    }
    console.log(orders)
    dispatch(placeOrder(orders));
  }

   console.log(deliveryAddress)
  return (
    <React.Fragment>
      <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.price} />
            <Typography variant="body2">{product.price} x {product.count}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
           ₹ {totalAmount} /-
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{deliveryAddress.selectedAddress.fullName}</Typography>
          <Typography gutterBottom>{deliveryAddress.selectedAddress.mobileNumber},{deliveryAddress.selectedAddress.address},{deliveryAddress.selectedAddress.locality}</Typography>
          <Typography gutterBottom>{deliveryAddress.selectedAddress.cityDistrictTown},{deliveryAddress.selectedAddress.state},{deliveryAddress.selectedAddress.pinCode}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
        <Button
                type="submit"
                variant="contained"
                color="primary"
                className="place-order-css"
                onClick={handleOrder}
                >Order Now</Button>
      </Grid>
      </div>
    </React.Fragment>
  );
}