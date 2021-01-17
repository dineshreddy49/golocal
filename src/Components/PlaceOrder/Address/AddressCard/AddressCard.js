import React from 'react'
import './Address.css'
function AddressCard(props) {
    return (
        <div className="address-card-container">
            <div>{props.eachAddress.fullName}</div>
            <div>{props.eachAddress.address}</div>
            <div>{props.eachAddress.locality}</div>
            <div>{props.eachAddress.mobileNumber}</div>
            <div>{props.eachAddress.state}</div>
            <div>{props.eachAddress.pinCode}</div>
        </div>
    )
}

export default AddressCard
