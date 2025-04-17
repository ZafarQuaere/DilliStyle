import Link from 'next/link';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">
              <span className="font-serif text-xl text-red-600">दिल्ली</span> <span className="font-sans italic">Style</span>
            </h3>
            <p className="text-gray-600">
              Your one-stop destination for high-quality men's clothing and accessories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FiInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FiFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FiTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-gray-900">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-600 hover:text-gray-900">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/featured" className="text-gray-600 hover:text-gray-900">
                  Featured
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-gray-600 hover:text-gray-900">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/customer-service" className="text-gray-600 hover:text-gray-900">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-gray-900">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">About</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-600 hover:text-gray-900">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} <span className="font-serif text-red-600">दिल्ली</span> <span className="font-sans italic">Style</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 