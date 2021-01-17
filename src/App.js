import './App.css';
import React, { useEffect } from "react";
import Cart from './Container/CartPage/Cart';
import MainPage from './Container/ProductsPage/MainPage';
import { Switch, Route } from 'react-router-dom';
import PlaceOrder from './Container/PlaceOrder/PlaceOrder';
import LoginPage from './Container/LoginPage/LoginPage';
import SignupPage from './Container/SignupPage/SignupPage';
import MyOrder from './Container/MyOrder/MyOrder'

import { useDispatch, useSelector } from 'react-redux';
import {isUserLoggedIn} from './Redux'
function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticated]);
  return (
    <div className="App">
    <Switch>
      <Route path="/" exact component={MainPage}/>
      <Route path= "/cart" component={Cart}></Route>
      <Route path= "/placeorder" component={PlaceOrder}></Route>
      <Route path= "/login" component={LoginPage}></Route>
      <Route path= "/signup" component={SignupPage}></Route>
      <Route path= "/myorder" component={MyOrder}></Route>
    </Switch>
    </div>
  );
}

export default App;
