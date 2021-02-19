import { Image } from 'react-bootstrap'
import farm from '../../images/farm.png'
import './Offers.css'

function Offers() {
    

    return (
        <>
        <div className="offers-final">
            <div><h1 className= "weoffer">We Offer</h1></div>
            <div className= "imageone">
            <Image src={farm} fluid />
            </div>
        </div>
        </>
    )
}

export default Offers;