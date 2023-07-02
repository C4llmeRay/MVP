import React from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../api';

const ProductCard = ({ product }) => {
  const handleAddToCart = async () => {
    try {
      await addToCart(product._id);
      alert('Product added to cart successfully');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card bg-dark text-white product-card mx-2 my-2">
      <img className="card-img" src={product.image} alt={product.title} />
      <div className="card-img-overlay">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Category: {product.category}</p>
        <p className="card-text">Price: {product.price}</p>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <Link to={`/products/${product._id}`} className="btn btn-secondary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;






