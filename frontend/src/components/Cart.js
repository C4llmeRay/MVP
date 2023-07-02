import React from 'react';

const Cart = ({ cartItems, cartItemCount, removeFromCart }) => {
  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div>
      <h2>Cart</h2>
      <p>Item count: {cartItemCount}</p>
      <div className="card-deck">
        {cartItems.map((item) => (
          <div className="card" key={item._id} style={{ width: '18rem' }}>
            <img className="card-img-top" src={item.product.image} alt={item.product.name} />
            <div className="card-body">
              <h5 className="card-title">{item.product.name}</h5>
              <p className="card-text">Price: ${item.product.price}</p>
              <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item.product._id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;





