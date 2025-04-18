'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiX, FiArrowLeft, FiShoppingBag } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate a checkout process
    setTimeout(() => {
      clearCart();
      setIsCheckingOut(false);
      alert('Thank you for your order! This is a demo, so no actual order was placed.');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Shopping Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="flex justify-center mb-4">
                <FiShoppingBag className="h-16 w-16 text-gray-400" />
              </div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Link
                href="/products"
                className="inline-block rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-medium text-gray-900">
                        {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}
                      </h2>
                      <button
                        onClick={clearCart}
                        className="text-sm text-red-600 hover:text-red-800"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                  
                  <ul className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <li key={item.product.id} className="p-6">
                        <div className="flex items-center">
                          <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                            <Image
                              src={item.product.image}
                              alt={item.product.name}
                              fill
                              className="object-cover object-center"
                            />
                          </div>
                          
                          <div className="ml-4 flex-1">
                            <div className="flex justify-between">
                              <h3 className="text-base font-medium text-gray-900">
                                <Link href={`/products/${item.product.id}`} className="hover:underline">
                                  {item.product.name}
                                </Link>
                              </h3>
                              <button
                                onClick={() => removeFromCart(item.product.id)}
                                className="text-gray-400 hover:text-gray-600"
                              >
                                <FiX className="h-5 w-5" />
                              </button>
                            </div>
                            
                            <p className="mt-1 text-sm text-gray-500">
                              {item.product.category}
                            </p>
                            
                            <div className="mt-2 flex items-center justify-between">
                              <div className="flex items-center border border-gray-300 rounded-md">
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                >
                                  -
                                </button>
                                <span className="px-3 py-1 text-gray-800">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                >
                                  +
                                </button>
                              </div>
                              
                              <div className="flex items-center">
                                <span className="text-base font-medium text-gray-900">
                                  ₹{(item.product.price * item.quantity).toFixed(2)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6">
                  <Link
                    href="/products"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <FiArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden h-fit">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-base text-gray-600">Subtotal</span>
                    <span className="text-base font-medium text-gray-900">₹{totalPrice.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-base text-gray-600">Shipping</span>
                    <span className="text-base font-medium text-gray-900">Free</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-base text-gray-600">Tax</span>
                    <span className="text-base font-medium text-gray-900">₹{(totalPrice * 0.05).toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 flex justify-between">
                    <span className="text-lg font-medium text-gray-900">Total</span>
                    <span className="text-lg font-bold text-gray-900">
                      ₹{(totalPrice + (totalPrice * 0.05)).toFixed(2)}
                    </span>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className={`w-full rounded-md px-6 py-3 text-base font-medium text-white flex items-center justify-center gap-2 transition-colors
                      ${isCheckingOut 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gray-900 hover:bg-gray-800'}`}
                  >
                    {isCheckingOut ? 'Processing...' : 'Checkout'}
                  </button>
                </div>
                
                <div className="p-6 bg-gray-50">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">We Accept</h3>
                  <div className="flex space-x-2">
                    <div className="h-8 w-12 bg-gray-200 rounded"></div>
                    <div className="h-8 w-12 bg-gray-200 rounded"></div>
                    <div className="h-8 w-12 bg-gray-200 rounded"></div>
                    <div className="h-8 w-12 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 