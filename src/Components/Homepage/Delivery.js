import { Container,Image, Row,Col} from 'react-bootstrap'
import './Delivery.css'
import bg from '../../images/bg.jpg'

function Delivery() {
    

    return (
        <>
        <div className= "delivery-final">
        <div className= "Delivery">
            <h1>Places We Deliver In Hyderabad</h1>
        </div>
        <Container>
        <Row>
            <Col className="trial">
                <Image className = "bg" src = { bg}  />
                <p className = "bgname">HiTec City</p>
            </Col>
            <Col className= "trial">
                <Image className = "bg1" src = { bg}  />
                <p className = "bg1name">Jubliee Hills</p>
            </Col>
            <Col className= "trial">
                <Image className = "bg2" src = { bg}  />
                <p className = "bg2name">Gachibowli</p>
            </Col>
        </Row>
        </Container>
        <br />
        </div>
        </>
    )
}


export default Delivery;