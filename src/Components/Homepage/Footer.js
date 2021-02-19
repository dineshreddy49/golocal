//import { Form,Col,Container,Row, Button} from 'react-bootstrap';
import { Row,Col } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';
import './Footer.css'

function Footer() {
    

    return (
        <>
            <div className = "footer-final">
            <div class="container-footer">
                <Row>
                    <Col>
                        <h6 class="mb-0">Get connected with us on social networks!</h6>
                    </Col>
                    <Col className= "spacing">
                        <SocialIcon  network="twitter" fgColor="#ffffff" style={{ height: 30, width: 30 }}></SocialIcon><span>  </span>
                        <SocialIcon  network="facebook" fgColor="#ffffff" style={{ height: 30, width: 30 }}></SocialIcon><span>  </span>
                        <SocialIcon  network="google" fgColor="#ffffff" style={{ height: 30, width: 30 }}></SocialIcon><span>  </span> 
                        <SocialIcon  network="pinterest" fgColor="#ffffff" style={{ height: 30, width: 30 }}></SocialIcon><span>  </span>           
                    </Col>
                </Row>
            </div>
            <div className= "container-center">
                    <Row>
                        <Col>
                            <h6 className= "h6">Go Local</h6>
                            <hr className= "line" />
                            <p className= "textcolor" >Getting quality dairy products is difficult these days, don't worry Go Local delivers all products right from our dairy farms at your doorstep</p>
                        </Col>
                        <Col className= "products">
                            <h6 className= "h6" >Products</h6>
                            <hr className= "line" />
                            <p>
                            <a className= "textcolor" href="#!">Milk</a>
                            </p>
                            <p>
                            <a className= "textcolor" href="#!">Cheese</a>
                            </p>
                            <p>
                            <a className= "textcolor" href="#!">ButterMilk</a>
                            </p>
                            <p>
                            <a className= "textcolor" href="#!">Ghee</a>
                            </p>
                        </Col>
                        <Col className= "links">
                            <h6 className= "h6" >UseFul Links</h6>
                            <hr className= "line" />
                            <p>
                            <a className= "textcolor" href="#!">Your Account</a>
                            </p>
                            <p>
                            <a className= "textcolor" href="#!">Becomne an Affilate</a>
                            </p>
                            <p>
                            <a className= "textcolor" href="#!">Our Offers</a>
                            </p>
                            <p>
                            <a className= "textcolor" href="#!">Help</a>
                            </p>
                        </Col>
                        <Col className= "address">
                            <h6 className= "h6" >Contact Us</h6>
                            <hr className= "line" />
                            <p>
                            <a className= "textcolor" href="#!">HYDERBAD TELANGANA</a>
                            </p>
                            <p>
                            <a className= "textcolor" href="#!">orderwithus@golocal.com</a>
                            </p>
                            <p>
                            <a className= "textcolor" href="#!">+91 7871258791</a>
                            </p>
                            <p>
                            <a className= "textcolor" href="#!">+91 9790726584</a>
                            </p>
                        </Col>
                    </Row>
            </div>
            <h3 className="text" fixed= "bottom">@2020 Copyright:<span> Site:</span> Golocal.com</h3>
            </div>
        </>
    )
}

export default Footer;