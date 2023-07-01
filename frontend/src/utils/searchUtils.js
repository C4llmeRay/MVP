export const searchProducts = (searchTerm, products) => {
  return products.filter((product) => {
    const stringifiedProduct = JSON.stringify(product);
    return stringifiedProduct.includes(searchTerm);
  });
};