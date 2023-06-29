import axios from "axios";
import { getToken, saveToken } from "./authService";

axios.defaults.baseURL = "http://localhost:4000/api";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post("/users/register", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Log in a user
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post("/users/login", credentials);
    const res = response.data;
    saveToken(res.token);
  } catch (error) {
    throw error.response.data;
  }
};

// Fetch all products
export const getProducts = async () => {
  try {
    const response = await axios.get('/products');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Create a new product
export const createProduct = async (productData) => {
  try {
    const response = await axios.post("/products", productData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Fetch a single product by ID
export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Update a product by ID
export const updateProductById = async (productId, productData) => {
  try {
    const response = await axios.put(`/products/${productId}`, productData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Delete a product by ID
export const deleteProductById = async (productId) => {
  try {
    const response = await axios.delete(`/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUserProfile = async () => {
  try {
    const token = getToken();
    if (!token) {
      throw new Error("user not authorized");
    } else {
    const profile=  await axios.get("/users", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      return profile.data.user 
    }
  } catch (error) {
    throw error.response.data;
  }
};



export default axios;
