import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import {signupUser} from '../../Redux'
import { useForm } from "react-hook-form";
import _ from "lodash/fp";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signup() {
  const { register, errors, handleSubmit } = useForm({
    criteriaMode: "all",
    mode: "onChange"
  });
  const classes = useStyles();
  const history = useHistory();
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
  const handleLogin=()=>
  {
    history.push(`/login`);
  }
  const buttonContent=
    <Button
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
    className={classes.submit}
    onClick={onSubmit}
  >
   signup
  </Button>
  if(signup.loading){
    const buttonContent=
    <Button
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
    className={classes.submit}
    onClick={onSubmit}
  >
   please wait
  </Button>
  }
  if(signup.signedup){
    const buttonContent=
    <Button
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
    className={classes.submit}
    onClick={onSubmit}
  >
   signup
  </Button>
  }
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Go Local Sign up
        </Typography>
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
          <Grid item>
            <Link href="#" variant="body2" onClick={handleLogin}>{"Already have an account? Sign In"}</Link>
                
            </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}