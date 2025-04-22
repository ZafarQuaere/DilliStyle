# Connecting Your Frontend with the Backend API

This guide explains how to integrate your Next.js frontend with the Java Spring Boot backend API.

## Overview

The integration between frontend and backend is done through REST API calls. The backend exposes various endpoints for authentication, products, categories, and orders that your frontend can communicate with.

## Configuration

1. The API configuration is located in `src/app/api/config.js`
2. The default backend URL is `http://localhost:8080/api`
3. To change this in production, set the environment variable `NEXT_PUBLIC_API_URL`

## Services

We've created service modules to help you interact with the backend API:

1. **AuthService** (`src/app/api/services/authService.js`): Handles user authentication
2. **ProductService** (`src/app/api/services/productService.js`): Manages product operations

You can also create additional services following the same pattern for categories and orders.

## Authentication Flow

1. **User Registration**:
   ```javascript
   import AuthService from '@/app/api/services/authService';
   
   // In your registration component
   const handleRegister = async (userData) => {
     try {
       const response = await AuthService.register(userData);
       // Handle successful registration
     } catch (error) {
       // Handle error
     }
   };
   ```

2. **User Login**:
   ```javascript
   import AuthService from '@/app/api/services/authService';
   
   // In your login component
   const handleLogin = async (username, password) => {
     try {
       const response = await AuthService.login(username, password);
       // Redirect to dashboard or home page
     } catch (error) {
       // Handle login error
     }
   };
   ```

3. **Accessing Protected Routes**:
   ```javascript
   import AuthService from '@/app/api/services/authService';
   
   // In your component or middleware
   const isAuthenticated = AuthService.isLoggedIn();
   const isAdmin = AuthService.isAdmin();
   
   // Use these booleans to control access to routes
   ```

## Using Product Service

```javascript
import ProductService from '@/app/api/services/productService';
import { useEffect, useState } from 'react';

// In your products component
const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await ProductService.getAllProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};
```

## Error Handling

The `apiRequest` function in `config.js` handles common API errors. You should wrap your API calls in try-catch blocks to properly handle errors in your components.

## CORS Configuration

The backend is already configured to accept requests from `http://localhost:3000`. If your frontend runs on a different URL, you'll need to update the CORS configuration in the backend's `WebSecurityConfig.java`.

## Environment Variables

For production deployment, set these environment variables:

```
NEXT_PUBLIC_API_URL=https://your-production-api.com/api
```

## Testing the Integration

1. Start the backend server (runs on port 8080)
2. Start the Next.js frontend (runs on port 3000)
3. Try registering a user and logging in
4. Test fetching products and other API operations

## Troubleshooting

- **CORS errors**: Make sure the backend CORS configuration includes your frontend URL
- **Authentication issues**: Check that tokens are being properly stored and sent with requests
- **404 errors**: Verify the API endpoints match between frontend and backend
- **500 errors**: Check the backend logs for details on server-side errors

For any issues, check both the frontend console and backend logs to pinpoint the problem. 