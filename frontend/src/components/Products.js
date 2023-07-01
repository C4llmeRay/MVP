import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../api';
import '../styles/ProductCard.css';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

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

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.category.toLowerCase().includes(term.toLowerCase()) ||
        product.price.toString().includes(term) ||
        product.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const productsToRender = searchTerm ? filteredProducts : products;

  // Group products by category
  const groupedProducts = productsToRender.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  const renderProducts = (products) => {
    if (products.length <= 3) {
      return products.map((product) => (
        <div className="card bg-dark text-white product-card mx-2 my-2" key={product._id}>
          <img className="card-img" src={product.image} alt={product.title} />
          <div className="card-img-overlay">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">Category: {product.category}</p>
            <p className="card-text">Price: {product.price}</p>
          </div>
        </div>
      ));
    } else {
      const limitedProducts = products.slice(0, 3);
      return limitedProducts.map((product) => (
        <div className="card bg-dark text-white product-card mx-2 my-2" key={product._id}>
          <img className="card-img" src={product.image} alt={product.title} />
          <div className="card-img-overlay">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">Category: {product.category}</p>
            <p className="card-text">Price: {product.price}</p>
          </div>
        </div>
      ));
    }
  };

  return (
    <div>
      <h2>Products</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search products..."
        />
        <button className="btn btn-primary" type="button">
          Search
        </button>
      </div>
      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category}>
          <h3>{category}</h3>
          <div className="d-flex flex-wrap">{renderProducts(products)}</div>
          <Link to={`/category/${category}`} className="btn btn-primary mt-2">
            View All {category} Products
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Product;








