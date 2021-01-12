import React from 'react'
import './Address.css'
function AddressCard(props) {
    return (
        <div className="address-card-container">
            <div>{props.product.fullName}</div>
            <div>{props.product.address}</div>
            <div>{props.product.locality}</div>
            <div>{props.product.mobileNumber}</div>
            <div>{props.product.state}</div>
            <div>{props.product.pinCode}</div>
        </div>
    )
}

export default AddressCard
