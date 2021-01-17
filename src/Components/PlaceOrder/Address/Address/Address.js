import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { getAddress, selectedAddress } from '../../../../Redux'
import { useDispatch,useSelector } from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import AddressCard from '../AddressCard/AddressCard';
import Radio from '@material-ui/core/Radio';

function Address(props) {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    const UserAddress= useSelector(state=>state.addAddress)
    const dispatch = useDispatch();
    useEffect(() => {dispatch(getAddress())}, [])
    console.log(UserAddress)
    let content =null
    const n = 10;
    const handleAddress=(e)=>{
        e.preventDefault();
        UserAddress.address.map((eachAddress,key)=>{
          if(eachAddress._id==value){
            const details = {
              UserAddress, eachAddress
          }
            dispatch(selectedAddress(details));
          }
        })
    }
    if(UserAddress.error)
    {
        content=<p>Error fetching the data please check your internet connection</p>
    }
    if(UserAddress.loading)
    {
        content=<p>Loading the data please wait</p>
    }
    if(UserAddress.address.length === 0)
    {

        content=<div>Please add a new address</div>
    }
    if(UserAddress.address.length >0)
    {
        content=UserAddress.address.map((eachAddress,key)=>
        <div key={key}>
        <Col>
          <FormControlLabel value={eachAddress._id} control={<Radio />} label={<AddressCard eachAddress={eachAddress}/>} />
        </Col>
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
