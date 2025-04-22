import { API_ENDPOINTS, apiRequest } from '../config';

const TOKEN_KEY = 'token';
const USER_KEY = 'user';

const AuthService = {
  /**
   * Register a new user
   * @param {Object} userData - User registration data
   * @returns {Promise<Object>} Registration response
   */
  register: async (userData) => {
    return await apiRequest(API_ENDPOINTS.AUTH.SIGN_UP, {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },
  
  /**
   * Login user and store token
   * @param {string} username - Username
   * @param {string} password - Password
   * @returns {Promise<Object>} Auth data with token
   */
  login: async (username, password) => {
    const response = await apiRequest(API_ENDPOINTS.AUTH.SIGN_IN, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    });
    
    // Store token and user details
    if (response && response.accessToken) {
      localStorage.setItem(TOKEN_KEY, response.accessToken);
      localStorage.setItem(USER_KEY, JSON.stringify({
        id: response.id,
        username: response.username,
        email: response.email,
        roles: response.roles,
      }));
    }
    
    return response;
  },
  
  /**
   * Logout user and clear storage
   */
  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },
  
  /**
   * Get current user
   * @returns {Object|null} User object or null
   */
  getCurrentUser: () => {
    const userStr = localStorage.getItem(USER_KEY);
    if (!userStr) return null;
    
    try {
      return JSON.parse(userStr);
    } catch (e) {
      return null;
    }
  },
  
  /**
   * Get authentication token
   * @returns {string|null} JWT token or null
   */
  getToken: () => {
    return localStorage.getItem(TOKEN_KEY);
  },
  
  /**
   * Check if user is logged in
   * @returns {boolean} True if user is logged in
   */
  isLoggedIn: () => {
    return !!AuthService.getToken();
  },
  
  /**
   * Check if user has admin role
   * @returns {boolean} True if user is admin
   */
  isAdmin: () => {
    const user = AuthService.getCurrentUser();
    if (!user) return false;
    
    return user.roles.includes('ROLE_ADMIN');
  },
};

export default AuthService; 