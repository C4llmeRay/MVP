import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';
import '../styles/ProductCard.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div className="card bg-dark text-white product-card" key={product._id}>
          <img className="card-img" src={product.image} alt={product.title} />
          <div className="card-img-overlay">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">Category: {product.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

