import { Nav,Navbar, Button } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import React, {  Fragment } from "react";
//import image1 from '../images/Logo.jpeg'
import './Newbar.css'
import { useHistory } from 'react-router-dom'


function Newbar() {
  const history = useHistory();
  const handleOnSubmit = () => {
    history.push(`/signin`);
  };
  return (
    <Fragment>
      <div className="newbar-final">
      <Navbar collapseOnSelect expand="lg" className= "navbar" >
        <Navbar.Brand className= "logostyle" href="#home">GO LOCAL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
              <NavLink to="/" className="nav-link">Home</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div> 
      </Fragment>
  );
}

export default Newbar;

