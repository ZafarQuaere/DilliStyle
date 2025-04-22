# E-Commerce Backend API

This is the backend API for the e-commerce website built with Spring Boot and Java.

## Prerequisites

- Java 17 or higher
- Maven 3.6.0 or higher
- MySQL 8.0 or higher
- Docker and Docker Compose (optional, for containerized setup)

## Setup Instructions

### Option 1: Local Development Setup

#### 1. Clone the repository

```bash
git clone <repository-url>
cd ecom/backend
```

#### 2. Configure the database

Make sure you have MySQL installed and running. Update the database configuration in `src/main/resources/application.properties` if needed:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecom_db?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=password
```

#### 3. Build the application

```bash
mvn clean install
```

#### 4. Run the application

```bash
mvn spring-boot:run
```

The server will start at http://localhost:8080.

### Option 2: Docker Setup

#### 1. Clone the repository

```bash
git clone <repository-url>
cd ecom/backend
```

#### 2. Start with Docker Compose

```bash
docker-compose up -d
```

This will start both the MySQL database and the Spring Boot application in containers.
The server will be available at http://localhost:8080.

To stop the containers:

```bash
docker-compose down
```

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/signin` - Login and get JWT token

### Products

- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get product by ID
- `GET /api/products/category/{categoryId}` - Get products by category
- `GET /api/products/featured` - Get featured products
- `GET /api/products/search?keyword=value` - Search products
- `POST /api/products` - Create a new product (Admin only)
- `PUT /api/products/{id}` - Update a product (Admin only)
- `DELETE /api/products/{id}` - Delete a product (Admin only)

### Categories

- `GET /api/categories` - Get all categories
- `GET /api/categories/{id}` - Get category by ID
- `POST /api/categories` - Create a new category (Admin only)
- `PUT /api/categories/{id}` - Update a category (Admin only)
- `DELETE /api/categories/{id}` - Delete a category (Admin only)

### Orders

- `GET /api/orders` - Get all orders (Admin only)
- `GET /api/orders/user` - Get current user's orders
- `GET /api/orders/{id}` - Get order by ID (Admin or Order Owner)
- `POST /api/orders` - Create a new order
- `PUT /api/orders/{id}/status?status=SHIPPED` - Update order status (Admin only)
- `DELETE /api/orders/{id}` - Delete an order (Admin only)

## Testing the API

You can use tools like Postman or cURL to test the API endpoints.

### Example: Login request

```bash
curl -X POST http://localhost:8080/api/auth/signin \
  -H "Content-Type: application/json" \
  -d '{"username":"admin", "password":"admin123"}'
```

### Default Admin User

A default admin user is created on startup:
- Username: admin
- Password: admin123

## Deploying to Production

For production deployment, consider the following:

1. Use environment variables for sensitive configurations
2. Configure HTTPS
3. Set up proper logging
4. Configure CORS settings for production URLs
5. Use a production-ready database configuration

### Cloud Deployment Options

1. **AWS Elastic Beanstalk**: Easy deployment with auto-scaling
2. **Heroku**: Simple deployment with Procfile
3. **Google Cloud Run**: Containerized deployment with scaling
4. **Digital Ocean App Platform**: Simple PaaS solution

## Connecting with Frontend

The backend is configured to accept requests from the frontend running at http://localhost:3000. 
If your frontend is running on a different URL, update the CORS configuration in `WebSecurityConfig.java`. 