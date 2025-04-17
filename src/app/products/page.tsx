'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFeatured, setShowFeatured] = useState(false);
  const [sortBy, setSortBy] = useState('default');

  // Check for featured parameter in URL
  useEffect(() => {
    const featured = searchParams.get('featured');
    setShowFeatured(featured === 'true');
  }, [searchParams]);

  // Filter products by category and featured status
  const filteredProducts = products.filter(product => {
    // Filter by category if not 'All'
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    
    // Filter by featured status if showFeatured is true
    const matchesFeatured = !showFeatured || product.featured === true;
    
    return matchesCategory && matchesFeatured;
  });

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
            <h1 className="text-3xl font-bold text-gray-900">
              {showFeatured ? 'Featured Products' : 'All Products'}
            </h1>
            <p className="mt-2 text-gray-600">
              {showFeatured 
                ? "Our handpicked selection of premium men's clothing and accessories"
                : "Browse our collection of premium men's clothing and accessories"}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-4 mb-8 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedCategory === category
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
              <button
                onClick={() => setShowFeatured(!showFeatured)}
                className={`px-4 py-2 rounded-full text-sm ${
                  showFeatured
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Featured
              </button>
            </div>

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