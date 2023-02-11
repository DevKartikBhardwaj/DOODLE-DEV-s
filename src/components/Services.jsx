import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import img from "../assets/2.jpg";
import img2 from "../assets/5.png";
function Services() {
    return (
        <div className="services">
            <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={5000} showThumbs={false} showIndicators={false}>
                <div>
                    <img src={img} alt="img not found" />
                    <p className="legend">Full Stack</p>
                </div>
                <div>
                    <img src={img2} alt="img not found" />
                    <p className="legend">Peer to Peer Suppourt</p>
                </div>
            </Carousel >
        </div>
    );
}

export default Services;