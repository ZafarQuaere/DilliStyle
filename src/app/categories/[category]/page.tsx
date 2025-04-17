'use client';

import { useParams, notFound } from 'next/navigation';
import { products, categories } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { useState } from 'react';

export default function CategoryPage() {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(String(category));
  
  // For URL format from kebab-case to title case
  const formattedCategory = decodedCategory
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Find exact match ignoring case
  const matchedCategory = categories.find(
    c => c.toLowerCase() === formattedCategory.toLowerCase()
  );
  
  if (!matchedCategory) {
    return notFound();
  }
  
  const [sortBy, setSortBy] = useState('default');
  
  // Filter products by category
  const filteredProducts = products.filter(
    product => product.category.toLowerCase() === matchedCategory.toLowerCase()
  );
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
    return 0; // default: no sorting
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Link href="/" className="hover:text-gray-900">Home</Link>
              <span className="mx-2">›</span>
              <Link href="/categories" className="hover:text-gray-900">Categories</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-900">{matchedCategory}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{matchedCategory}</h1>
            <p className="mt-2 text-gray-600">
              Explore our {matchedCategory.toLowerCase()} collection
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-end mb-6">
            <div className="flex items-center">
              <label htmlFor="sort" className="text-sm font-medium text-gray-700 mr-2">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </div>

          {sortedProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
              <Link 
                href="/products" 
                className="mt-4 inline-block text-blue-600 hover:text-blue-800"
              >
                View all products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
} 