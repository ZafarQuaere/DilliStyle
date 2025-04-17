import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <CategorySection />
      <Footer />
    </div>
  );
}
