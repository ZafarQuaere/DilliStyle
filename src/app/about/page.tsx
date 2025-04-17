import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About <span className="font-serif text-red-600">दिल्ली</span> <span className="font-sans italic">Style</span></h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Your premium destination for men's fashion and accessories.
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  <span className="font-serif text-red-600">दिल्ली</span> <span className="font-sans italic">Style</span> was founded in 2020 with a simple mission: to provide high-quality, stylish clothing for modern men at affordable prices. We believe that every man deserves to look and feel his best without breaking the bank.
                </p>
                <p className="text-gray-600 mb-4">
                  Our team of fashion experts carefully selects each item in our collection, ensuring that we offer only the finest products that meet our strict standards for quality, style, and comfort.
                </p>
                <p className="text-gray-600">
                  From casual everyday wear to formal attire for special occasions, we strive to cater to all your clothing needs with a diverse range of products that combine contemporary design with timeless elegance.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/about-image.jpg"
                  alt="दिल्ली Style team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on quality. Every product we offer is made from premium materials and crafted with attention to detail.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to reducing our environmental impact by implementing sustainable practices throughout our business operations.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Focus</h3>
                <p className="text-gray-600">
                  Your satisfaction is our top priority. We strive to provide exceptional customer service and create a seamless shopping experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to shop?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Explore our collection and discover the perfect additions to your wardrobe.
            </p>
            <Link
              href="/products"
              className="inline-block rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800"
            >
              Browse Products
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}