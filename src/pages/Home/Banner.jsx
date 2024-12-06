import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../assets/01.jpeg';


const Banner = () => {
    return (
        <Carousel className=''>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img1} />
            </div>
        </Carousel>
    );
};

export default Banner;