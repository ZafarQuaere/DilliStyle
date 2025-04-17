'use client';

import { products } from '@/data/products';
import ProductCard from './ProductCard';
import Link from 'next/link';

export default function FeaturedProducts() {
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium men's clothing and accessories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/products" 
            className="inline-block rounded-md border border-gray-900 bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
} 