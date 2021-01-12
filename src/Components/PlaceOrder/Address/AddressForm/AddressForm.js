import React,{ useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch,useSelector } from 'react-redux';
import {addAddress} from '../../../../Redux'
import { Container } from '@material-ui/core';
import './AddressForm.css';
const useStyles = makeStyles((theme) => ({
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  }));
export default function AddressForm() {
    const classes = useStyles();
    const [fullName, setFname] = useState('');
    const [mobileNumber, setPhoneNumber] = useState('');
    const [pinCode, setZip] = useState('');
    const [locality, setAddress2] = useState('');
    const [address, setAddress1] = useState('');
    const [cityDistrictTown, setCity] = useState('');
    const [state, setState] = useState('');
    const dispatch = useDispatch();
    const handleSubmitAddress=(e)=>{
        e.preventDefault();
        const details = {
                payload:{
                address:{
                    fullName,mobileNumber,pinCode,locality,address,cityDistrictTown,state
                }
        }
        }
        dispatch(addAddress(details));
        }
    return (
    <React.Fragment>
    <Container className="addressForm-container">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="Name"
            name="Name"
            label="name"
            fullWidth
            autoComplete="given-name"
            onInput={ e=>setFname(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} >
        <TextField
        required
        id="Phone Number"
        name="Phone Number"
        label="Phone Number"
        fullWidth
        autoComplete="Phone Number"
        onInput={ e=>setPhoneNumber(e.target.value)}
      />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            onInput={ e=>setAddress1(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            onInput={ e=>setAddress2(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            onInput={ e=>setCity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth onInput={ e=>setState(e.target.value)}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            onInput={ e=>setZip(e.target.value)}
          />
        </Grid>
      </Grid>
      <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      onClick={handleSubmitAddress}
    >Save Address</Button>
    </Container>
    </React.Fragment>
  );
}