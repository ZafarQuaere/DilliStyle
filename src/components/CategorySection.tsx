'use client';

import Link from 'next/link';
import { categories } from '@/data/products';

export default function CategorySection() {
  const displayCategories = categories.filter(cat => cat !== 'All');

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Shop by Category
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Browse our wide selection of men's clothing across various categories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {displayCategories.map((category) => (
            <Link
              key={category}
              href={`/categories/${category.toLowerCase()}`}
              className="group relative overflow-hidden rounded-lg bg-gray-800 text-center flex flex-col items-center justify-center h-36"
            >
              <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="text-lg font-medium text-white mb-1">{category}</span>
              <span className="flex items-center text-indigo-400 text-sm transform group-hover:translate-x-1 transition-transform duration-300">
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 