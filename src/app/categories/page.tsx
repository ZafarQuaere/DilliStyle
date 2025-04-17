'use client';

import Link from 'next/link';
import { categories } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CategoriesPage() {
  const displayCategories = categories.filter(cat => cat !== 'All');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
            <p className="mt-2 text-gray-600">
              Browse our collection by category
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayCategories.map((category) => (
              <Link
                key={category}
                href={`/categories/${category.toLowerCase()}`}
                className="group"
              >
                <div className="relative h-64 overflow-hidden rounded-lg bg-gray-200 transition-all duration-300 group-hover:shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{category}</h3>
                      <span className="inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors group-hover:bg-gray-900 group-hover:text-white">
                        Browse Products
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 