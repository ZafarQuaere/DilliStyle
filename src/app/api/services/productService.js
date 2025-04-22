import { API_ENDPOINTS, apiRequest } from '../config';

const ProductService = {
  /**
   * Get all products
   * @returns {Promise<Array>} Products array
   */
  getAllProducts: async () => {
    return await apiRequest(API_ENDPOINTS.PRODUCTS.GET_ALL);
  },
  
  /**
   * Get product by ID
   * @param {number} id - Product ID
   * @returns {Promise<Object>} Product object
   */
  getProductById: async (id) => {
    return await apiRequest(API_ENDPOINTS.PRODUCTS.GET_BY_ID(id));
  },
  
  /**
   * Get products by category
   * @param {number} categoryId - Category ID
   * @returns {Promise<Array>} Products array
   */
  getProductsByCategory: async (categoryId) => {
    return await apiRequest(API_ENDPOINTS.PRODUCTS.GET_BY_CATEGORY(categoryId));
  },
  
  /**
   * Get featured products
   * @returns {Promise<Array>} Featured products array
   */
  getFeaturedProducts: async () => {
    return await apiRequest(API_ENDPOINTS.PRODUCTS.GET_FEATURED);
  },
  
  /**
   * Search products by keyword
   * @param {string} keyword - Search keyword
   * @returns {Promise<Array>} Products array
   */
  searchProducts: async (keyword) => {
    return await apiRequest(API_ENDPOINTS.PRODUCTS.SEARCH(keyword));
  },
  
  /**
   * Create a new product (Admin only)
   * @param {Object} product - Product data
   * @returns {Promise<Object>} Created product
   */
  createProduct: async (product) => {
    return await apiRequest(API_ENDPOINTS.PRODUCTS.CREATE, {
      method: 'POST',
      body: JSON.stringify(product),
    });
  },
  
  /**
   * Update a product (Admin only)
   * @param {number} id - Product ID
   * @param {Object} product - Updated product data
   * @returns {Promise<Object>} Updated product
   */
  updateProduct: async (id, product) => {
    return await apiRequest(API_ENDPOINTS.PRODUCTS.UPDATE(id), {
      method: 'PUT',
      body: JSON.stringify(product),
    });
  },
  
  /**
   * Delete a product (Admin only)
   * @param {number} id - Product ID
   * @returns {Promise<void>}
   */
  deleteProduct: async (id) => {
    return await apiRequest(API_ENDPOINTS.PRODUCTS.DELETE(id), {
      method: 'DELETE',
    });
  },
};

export default ProductService; 