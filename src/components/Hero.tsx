import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-900 h-[500px]">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 flex justify-end pr-8">
        <Image
          src="/images/banner_image3.png"
          alt="Fashion for Gen Z"
          width={1200}
          height={500}
          priority
          className="object-contain h-full w-auto"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="ml-0 max-w-xl bg-black/25 p-6 rounded-lg backdrop-blur-sm">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Style for Gen Z
          </h1>
          <p className="mt-6 text-xl text-white">
            Discover premium men's clothing that combines comfort, quality, and contemporary style.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/products"
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              Shop Collection
            </Link>
            <Link
              href="/products?featured=true"
              className="text-base font-semibold text-white hover:text-gray-300"
            >
              View Featured <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 