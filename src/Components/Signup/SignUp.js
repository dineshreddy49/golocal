import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch,useSelector } from 'react-redux';
import {signupUser} from '../../Redux'
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const { register, errors, handleSubmit } = useForm({
    criteriaMode: "all",
    mode: "onChange"
  });
  const classes = useStyles();
  const signup= useSelector(state=>state.signup)
  const dispatch = useDispatch();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const onSubmit=(e)=>{
  e.preventDefault();
  const details = {
      email, password,firstName,lastName
  }
console.log(details)
  dispatch(signupUser(details));
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                ref={register({ required: true})}
              />
                {/* without enter data for the password input will result both messages to appear */}
                {errors?.firstName?.types?.required && <p className = "warning">firstName required</p>}
            </Grid>
            <Grid item xs={12} sm={6}>
            <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                ref={register({ required: true})}
              />
                {/* without enter data for the password input will result both messages to appear */}
                {errors?.lastName?.types?.required && <p className = "warning">lastName required</p>}
            </Grid>
            <Grid item xs={12}>
              <label>Email:</label>
              <input
                name="email"
                placeholder="Enter Your Email ID"
                onChange={(e) => setEmail(e.target.value)}
                ref={register({
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })}
              />
              {errors?.email?.types?.required && <p className = "warning">Email Required</p>}
              {errors?.email?.types?.pattern && <p className = "warning">Enter a Valid Email Id</p>}<br />
            </Grid>
            <Grid item xs={12}>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
                ref={register({ required: true, minLength: 10 })}
              />
              {/* without enter data for the password input will result both messages to appear */}
              {errors?.password?.types?.required && <p className = "warning">password required</p>}
              {errors?.password?.types?.minLength && <p className = "warning" >password minLength 10</p>}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}