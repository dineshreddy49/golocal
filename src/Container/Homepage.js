import Newbar from '../Components/Homepage/Newbar';
import Homepages from '../Components/Homepage/Homepageheader';
import Products from '../Components/Homepage/Products';
import Offers from '../Components/Homepage/Offers';
import Footer from '../Components/Homepage/Footer';
import Delivary from '../Components/Homepage/Delivery';


function Homepage() {
    

    return (
        <>
            <div>
                <Newbar></Newbar>
                <Homepages></Homepages>
                <Products></Products>
                <Offers></Offers>
                <Delivary></Delivary>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Homepage;