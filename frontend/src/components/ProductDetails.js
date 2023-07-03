import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, addToCart } from '../api';
import '../styles/ProductDetails.css'; 

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      await addToCart(product._id);
      alert('Product added to cart successfully');
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card mb-3 product-details">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.image} className="img-fluid rounded-start product-image-large" alt={product.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body product-info">
            <h5 className="card-title product-name">{product.name}</h5>
            <p className="card-text product-description">{product.description}</p>
            <p className="card-text product-price"><small className="text-muted">Price: ${product.price}</small></p>
            <p className="card-text product-category"><small className="text-muted">Category: {product.category}</small></p>
            <button className="btn btn-primary add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;






