import Carousel from 'react-bootstrap/Carousel';
import './CarouselFest.css';

import CarouselTL from '../../../../assets/images/carousel-TL.jpg';
import CarouselMF from '../../../../assets/images/carousel-MF.jpg';
import CarouselUMF from '../../../../assets/images/carousel-UMF.jpg';
import CarouselEDC from '../../../../assets/images/carousel-EDC.jpg';

const CarouselFest = () => {
	return (
		<div className='carousel__container'>
    <Carousel fade variant="dark">
      <Carousel.Item>
        <img
          className="item__image d-block"
          src={CarouselTL}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="item__image d-block"
          src={CarouselUMF}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="item__image d-block"
          src={CarouselMF}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="item__image d-block"
          src={CarouselEDC}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
		</div>
	);
};

export default CarouselFest;