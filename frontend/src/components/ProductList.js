import React, { useEffect, useState } from 'react';
import { searchProducts } from '../utils/searchUtils';
import { getProducts } from '../api';
import ProductCard from './ProductCard';

const ProductList = () => {
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
    const filtered = searchProducts(term, products);
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h2>Products</h2>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search products..." />
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
      ) : (
        products.map((product) => <ProductCard key={product.id} product={product} />)
      )}
    </div>
  );
};

export default ProductList;

