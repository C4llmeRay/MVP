import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

const HomeCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide" />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>Description of the first slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>Description of the second slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Third slide" />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>Description of the third slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://images.pexels.com/photos/6567356/pexels-photo-6567356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Fourth slide" />
          <Carousel.Caption>
            <h3>Fourth Slide</h3>
            <p>Description of the fourth slide</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="text-center mt-3">
        <Button variant="primary">Shop Now</Button>
      </div>
    </>
  );
};

export default HomeCarousel;


