'use client';

import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiShoppingCart, FiHeart, FiShare2, FiChevronRight } from 'react-icons/fi';
import { products } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/context/CartContext';

export default function ProductDetailPage() {
  const { id } = useParams();
  const productId = Number(id);
  
  const product = products.find(p => p.id === productId);
  
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();
  
  if (!product) {
    return notFound();
  }
  
  // Get related products from the same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, quantity);
    
    // Reset button state after a delay
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <FiChevronRight className="mx-2 h-4 w-4" />
            <Link href="/products" className="hover:text-gray-900">Products</Link>
            <FiChevronRight className="mx-2 h-4 w-4" />
            <Link href={`/categories/${product.category.toLowerCase()}`} className="hover:text-gray-900">
              {product.category}
            </Link>
            <FiChevronRight className="mx-2 h-4 w-4" />
            <span className="text-gray-900">{product.name}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <div className="mt-4">
                <span className="text-2xl font-bold text-gray-900">₹{product.price.toFixed(2)}</span>
              </div>
              
              <div className="mt-2">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  {product.category}
                </span>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">Description</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
              </div>
              
              <div className="mt-8">
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
                    className="rounded-l-md border border-gray-300 px-4 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <div className="w-16 border-t border-b border-gray-300 px-4 py-2 text-center">
                    {quantity}
                  </div>
                  <button
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="rounded-r-md border border-gray-300 px-4 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <button 
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className={`flex-1 rounded-md px-6 py-3 text-base font-medium text-white flex items-center justify-center gap-2 transition-colors
                    ${isAdding 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-gray-900 hover:bg-gray-800'}`}
                >
                  <FiShoppingCart className="h-5 w-5" />
                  {isAdding ? 'Added to Cart!' : 'Add to Cart'}
                </button>
                <button className="rounded-md border border-gray-300 p-3 text-gray-600 hover:bg-gray-100">
                  <FiHeart className="h-5 w-5" />
                </button>
                <button className="rounded-md border border-gray-300 p-3 text-gray-600 hover:bg-gray-100">
                  <FiShare2 className="h-5 w-5" />
                </button>
              </div>
              
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="text-lg font-medium text-gray-900">Shipping & Returns</h3>
                <p className="mt-2 text-gray-600">
                  Free standard shipping on all orders. Returns accepted within 30 days.
                </p>
              </div>
            </div>
          </div>
          
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">You might also like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 