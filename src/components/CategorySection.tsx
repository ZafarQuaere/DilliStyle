'use client';

import Link from 'next/link';
import { categories } from '@/data/products';

export default function CategorySection() {
  const displayCategories = categories.filter(cat => cat !== 'All');

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our wide selection of men's clothing across various categories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {displayCategories.map((category) => (
            <Link
              key={category}
              href={`/categories/${category.toLowerCase()}`}
              className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-center h-32"
            >
              <span className="text-lg font-medium text-gray-900">{category}</span>
              <span className="mt-2 text-sm text-gray-600">Shop Now →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 