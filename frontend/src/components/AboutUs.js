import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">About Us</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://images.pexels.com/photos/2284169/pexels-photo-2284169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="About Us"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h3 className="mb-3">Our Story</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae arcu diam.
            Curabitur efficitur lacus non urna interdum, in tincidunt ligula tristique.
            Nullam gravida lacinia justo, sed volutpat lectus semper ac.
          </p>
          <h3 className="mb-3">Our Mission</h3>
          <p>
            Duis id ex nec arcu ultrices fermentum. Vivamus malesuada dui eu dui ultrices,
            sit amet gravida enim efficitur. Nulla luctus felis sit amet eros dignissim,
            vel semper dui bibendum. Proin et metus eget nulla elementum vulputate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

