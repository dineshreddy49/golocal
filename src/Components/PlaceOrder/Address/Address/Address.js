import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { getAddress, selectedAddress } from '../../../../Redux'
import { useDispatch,useSelector } from 'react-redux';
import AddressDetails from '../AddressCard/AddressDetails';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
function Address(props) {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    const products= useSelector(state=>state.addAddress)
    const dispatch = useDispatch();
    useEffect(() => {dispatch(getAddress())}, [])
    console.log(products)
    let content =null
    const n = 10;
    const handleAddress=(e)=>{
        e.preventDefault();
        dispatch(selectedAddress(value));

    }
    if(products.error)
    {
        content=<p>Error fetching the data please check your internet connection</p>
    }
    if(products.loading)
    {
        content=<p>Loading the data please wait</p>
    }
    if(products.address.length === 0)
    {

        content=<div>Please add a new address</div>
    }
    if(products.address.length >0)
    {
        content=products.address.map((product,key)=>
        <div key={key}>
        <Col><AddressDetails product={product}/></Col>
        </div>
        )
    }
  
    console.log(value._id)
    return (
        <div>
        <div>
          <Container className="products-container" >
          <Row xs={1} md={2}>
          <FormControl component="fieldset">
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
           {content}
          </RadioGroup>
        </FormControl>
          </Row>
          <Button
          variant="contained"
          color="primary"
          className="Login-Stepper-Button"
          onClick={handleAddress}
        >DELIVER HERE
    </Button>
        </Container>
        </div>
      </div>
        
 )
}
export default Address
