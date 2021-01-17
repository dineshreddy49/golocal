import React,{ useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from '../../Redux';
import {Redirect} from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import _ from "lodash/fp";
import './Signin.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Go Local
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signin() {
  const { register, errors, handleSubmit } = useForm({
    criteriaMode: "all",
    mode: "onChange"
  });
  const classes = useStyles();
  const login= useSelector(state=>state.auth)
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit=(e)=>{
    e.preventDefault();
    const details = {
        email, password
    }
  console.log(details)
    dispatch(loginUser(details));
  }
  console.log(login.error)
  const history = useHistory();
  const handleLogin=()=>
  {
    history.push(`/signup`);
  }
  if(login.authenticated){
    return(<div>
        <Redirect to="/" />
      </div>)
}
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)} >
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
        {login.error && <div> Email ID or Password is Wrong </div>}
           {login.loading ?  
           <Button
            disabled
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >Signing In Please Wait.....</Button>
          :
          <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={onSubmit}
        >Sign In</Button> }
        </form>
      </div>
    </Container>
  );
}