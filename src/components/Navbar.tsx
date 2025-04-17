'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            <span className="font-serif text-2xl text-red-600">दिल्ली</span> <span className="font-sans italic">Style</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-gray-900">
              Categories
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative p-2">
              <FiShoppingCart className="h-6 w-6 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6 text-gray-700" />
              ) : (
                <FiMenu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
} 