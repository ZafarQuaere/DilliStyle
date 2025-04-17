'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, name, description, price, image, category } = product;
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, 1);
    
    // Reset button state after a delay
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <Link href={`/products/${id}`} className="block aspect-square overflow-hidden">
        <div className="relative h-64 w-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/products/${id}`}>
          <h3 className="text-lg font-medium text-gray-900 line-clamp-1">{name}</h3>
        </Link>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{description}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900">${price.toFixed(2)}</p>
          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            {category}
          </span>
        </div>
        <div className="mt-4">
          <button 
            onClick={handleAddToCart} 
            disabled={isAdding}
            className={`w-full rounded-md px-4 py-2 text-sm font-medium text-white flex items-center justify-center gap-2 transition-colors
              ${isAdding 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-gray-900 hover:bg-gray-800'}`}
          >
            <FiShoppingCart className="h-4 w-4" />
            {isAdding ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
} 