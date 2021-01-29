import React,{ useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch,useSelector } from 'react-redux';
import {addAddress} from '../../../../Redux'
import { Container } from '@material-ui/core';
import './AddressForm.css';
import { useForm } from "react-hook-form";
import _ from "lodash/fp";
const useStyles = makeStyles((theme) => ({
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
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
    const { register, errors, handleSubmit } = useForm({
      criteriaMode: "all",
      mode: "onChange"
    });
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
    <form className={classes.form} handleSubmitAddress={handleSubmit(handleSubmitAddress)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
              <input
                className="input1"
                type="text"
                name="Name"
                placeholder="Enter Your Full Name"
                onChange={(e) => setFname(e.target.value)}
                ref={register({ required: true})}
              />
                {/* without enter data for the password input will result both messages to appear */}
                {errors?.Name?.types?.required && <p className = "warning">Name required</p>}
        </Grid>
        <Grid item xs={12} >
          <input
                className="input1"
                type="text"
                name="cityDistrictTown"
                placeholder="Enter Your Mobile Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                ref={register({ required: true})}
              />
                {/* without enter data for the password input will result both messages to appear */}
                {errors?.cityDistrictTown?.types?.required && <p className = "warning">City required</p>}
        </Grid>
        <Grid item xs={12}>
        <input
                type="text"
                className="input1"
                name="address"
                placeholder="Enter Your Address Line 1"
                onChange={(e) => setAddress1(e.target.value)}
                ref={register({ required: true})}
              />
                {/* without enter data for the password input will result both messages to appear */}
                {errors?.address?.types?.required && <p className = "warning">address required</p>}
        </Grid>
        <Grid item xs={12}>
        <input
                type="text"
                name="locality"
                className="input1"
                placeholder="Enter Your Address Line 2"
                onChange={(e) => setAddress2(e.target.value)}
                ref={register({ required: true})}
              />
                {/* without enter data for the password input will result both messages to appear */}
                {errors?.locality?.types?.required && <p className = "warning">address required</p>}
        </Grid>

        <Grid item xs={12} sm={6}>
        <input
                type="text"
                name="locality"
                className="input1"
                placeholder="Enter Your City"
                onChange={(e) => setCity(e.target.value)}
                ref={register({ required: true})}
              />
                {/* without enter data for the password input will result both messages to appear */}
                {errors?.locality?.types?.required && <p className = "warning">address required</p>}
        </Grid>

        <Grid item xs={12} sm={6}>
          <input
                type="text"
                name="state"
                className="input1"
                placeholder="Enter Your state"
                onChange={(e) => setState(e.target.value)}
                ref={register({ required: true})}
              />
                {/* without enter data for the password input will result both messages to appear */}
                {errors?.state?.types?.required && <p className = "warning">state required</p>}
        </Grid>

        <Grid item xs={12} sm={6}>
        <input
                type="text"
                name="pinCode"
                className="input1"
                placeholder="Enter Your pinCode"
                onChange={(e) => setZip(e.target.value)}
                ref={register({ required: true})}
              />
                {/* without enter data for the password input will result both messages to appear */}
                {errors?.pinCode?.types?.required && <p className = "warning">pinCode required</p>}
        </Grid>
      </Grid>
      <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      onClick={handleSubmitAddress}
    >Save Address</Button></form>
    </Container>
    </React.Fragment>
  );
}