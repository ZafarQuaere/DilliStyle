// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

// API Endpoints
export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    SIGN_UP: `${API_BASE_URL}/auth/signup`,
    SIGN_IN: `${API_BASE_URL}/auth/signin`,
  },
  
  // Product endpoints
  PRODUCTS: {
    GET_ALL: `${API_BASE_URL}/products`,
    GET_BY_ID: (id) => `${API_BASE_URL}/products/${id}`,
    GET_BY_CATEGORY: (categoryId) => `${API_BASE_URL}/products/category/${categoryId}`,
    GET_FEATURED: `${API_BASE_URL}/products/featured`,
    SEARCH: (keyword) => `${API_BASE_URL}/products/search?keyword=${keyword}`,
    CREATE: `${API_BASE_URL}/products`,
    UPDATE: (id) => `${API_BASE_URL}/products/${id}`,
    DELETE: (id) => `${API_BASE_URL}/products/${id}`,
  },
  
  // Category endpoints
  CATEGORIES: {
    GET_ALL: `${API_BASE_URL}/categories`,
    GET_BY_ID: (id) => `${API_BASE_URL}/categories/${id}`,
    CREATE: `${API_BASE_URL}/categories`,
    UPDATE: (id) => `${API_BASE_URL}/categories/${id}`,
    DELETE: (id) => `${API_BASE_URL}/categories/${id}`,
  },
  
  // Order endpoints
  ORDERS: {
    GET_ALL: `${API_BASE_URL}/orders`,
    GET_USER_ORDERS: `${API_BASE_URL}/orders/user`,
    GET_BY_ID: (id) => `${API_BASE_URL}/orders/${id}`,
    CREATE: `${API_BASE_URL}/orders`,
    UPDATE_STATUS: (id, status) => `${API_BASE_URL}/orders/${id}/status?status=${status}`,
    DELETE: (id) => `${API_BASE_URL}/orders/${id}`,
  },
};

// Common API request helper
export const apiRequest = async (url, options = {}) => {
  // Get token from local storage 
  const token = localStorage.getItem('token');
  
  // Set default headers
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  
  // Add authorization header if token exists
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  
  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });
    
    // Check if response is OK
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Something went wrong');
    }
    
    // Parse response as JSON
    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

export default { API_ENDPOINTS, apiRequest }; 