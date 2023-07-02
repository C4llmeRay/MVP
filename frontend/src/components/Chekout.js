import React from 'react';

const Checkout = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Shipping Information</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="fullName" />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control" id="city" />
            </div>
            <div className="mb-3">
              <label htmlFor="state" className="form-label">State</label>
              <input type="text" className="form-control" id="state" />
            </div>
            <div className="mb-3">
              <label htmlFor="zipCode" className="form-label">Zip Code</label>
              <input type="text" className="form-control" id="zipCode" />
            </div>
            <button type="submit" className="btn btn-primary">Continue</button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Order Summary</h2>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Product Name</h5>
              <p className="card-text">Product Description</p>
              <p className="card-text">Price: $99.99</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total</h5>
              <p className="card-text">Order Total: $99.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

