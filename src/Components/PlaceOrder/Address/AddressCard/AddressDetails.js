import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddressCard from './AddressCard';
import Radio from '@material-ui/core/Radio';
function AddressDetails(props) {
    return (
        <div>
        <FormControlLabel value={props.product._id} control={<Radio />} label={<AddressCard product={props.product}/>} />
        </div>
    )
}

export default AddressDetails
