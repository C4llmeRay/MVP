import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';
import '../styles/ProductCard.css'

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        console.log(data)
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
        <div className="product-card" key={product._id}>
          <div className="product-details">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.category}</p>
          </div>
          <div className="product-image">
          <img src={product.image} alt={product.title} />
          </div>
        </div>
      ))}
    </div>
  );
};


export default Products;
