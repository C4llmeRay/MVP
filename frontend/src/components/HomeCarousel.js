import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/HomeCarousel.css';

const HomeCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://images.pexels.com/photos/1293006/pexels-photo-1293006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide" />
          <Carousel.Caption>
            <h3>10% OFF YOUR FIRST ORDER</h3>
            <p>Reasonable Price and 10% OFF YOUR FIRST ORDER</p>
            <div className="text-center mt-3">
              <Link to="/products">
                <Button variant="primary">Shop Now</Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Second slide" />
          <Carousel.Caption>
            <h3>Discover Home Decor</h3>
            <p>Add style to your home with our wide range of home decor items</p>
            <div className="text-center mt-3">
              <Link to="/products">
                <Button variant="primary">Shop Now</Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Third slide" />
          <Carousel.Caption>
            <h3>Explore Electronics</h3>
            <p>Find the latest electronics and gadgets for your digital needs</p>
            <div className="text-center mt-3">
              <Link to="/products">
                <Button variant="primary">Shop Now</Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Fourth slide" />
          <Carousel.Caption>
            <h3>Fashionable Dress</h3>
            <p>Shop trendy and fashionable dresses for every occasion</p>
            <div className="text-center mt-3">
              <Link to="/products">
                <Button variant="primary">Shop Now</Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeCarousel;





