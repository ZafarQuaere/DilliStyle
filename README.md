# MenStyle - Men's Clothing E-commerce Website

A modern, responsive e-commerce website for men's clothing built with Next.js 15 and Tailwind CSS 4.

![MenStyle E-commerce](https://via.placeholder.com/800x400?text=MenStyle+E-commerce)

## Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Product Catalog**: Browse through various categories of men's clothing
- **Product Details**: View detailed information about each product with images and specifications
- **Shopping Cart**: Add products to cart and manage your selections
- **Category Browsing**: Filter products by categories
- **Sorting Options**: Sort products by price, name, or popularity
- **Clean UI/UX**: Modern interface focused on user experience

## Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - For type safety and better developer experience
- **Tailwind CSS 4** - For utility-first styling
- **React Icons** - For comprehensive icon set
- **TurboRepo** - For optimized development experience

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/menstyle.git
cd menstyle
```

2. Install the dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/src/app` - App Router pages and layouts
- `/src/components` - Reusable React components
- `/src/context` - Context providers (e.g., cart context)
- `/src/data` - Mock data for products and categories
- `/public/images` - Product images and assets

## Key Pages

- **Home** (`/`) - Landing page with featured products and categories
- **Products** (`/products`) - All products with filtering and sorting
- **Product Details** (`/products/[id]`) - Individual product page
- **Categories** (`/categories`) - Browse all categories
- **Category** (`/categories/[category]`) - Products filtered by category
- **Cart** (`/cart`) - Shopping cart with product management
- **About** (`/about`) - About page with company information

## Deployment

This project can be easily deployed using Vercel, Netlify, or any other hosting service that supports Next.js:

### Deploying on Vercel (Recommended)

1. Push your code to a GitHub repository
2. Import your project to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be live after the build completes

## Customization

- Add your own products in `/src/data/products.ts`
- Modify the design by editing the Tailwind classes
- Add more pages and functionality as needed

## Future Enhancements

- User authentication and profiles
- Payment gateway integration
- Wishlist functionality
- Reviews and ratings
- Admin dashboard

## License

This project is licensed under the MIT License.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- React Icons for the comprehensive icon set
