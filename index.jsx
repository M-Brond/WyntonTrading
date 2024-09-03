import React from 'react';
import { Menu, X, ChevronRight, BarChart2, PieChart, TrendingUp, Globe, Users, DollarSign } from 'lucide-react';
import Image from 'next/image';

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WT-cf30RfQ5kJVctRo7YS6JregvyvMRTK.jpg" alt="WT Logo" width={40} height={40} className="rounded-sm" />
            <span className="text-2xl font-bold text-white">Wynton Trading</span>
          </div>
          <nav className={`md:flex space-x-8 ${isMenuOpen ? 'block absolute top-full left-0 right-0 bg-gray-800 shadow-md p-4' : 'hidden'} md:relative md:bg-transparent md:shadow-none md:p-0`}>
            <a href="#about" className="block md:inline-block py-2 text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#services" className="block md:inline-block py-2 text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#insights" className="block md:inline-block py-2 text-gray-300 hover:text-white transition-colors">Insights</a>
            <a href="#contact" className="block md:inline-block py-2 text-gray-300 hover:text-white transition-colors">Contact</a>
          </nav>
          <button className="md:hidden text-gray-300 hover:text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <main className="pt-20">
        <section id="hero" className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-32 md:py-48">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Elevate Your Investments</h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300">Wynton Trading: Where Precision Meets Prosperity</p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Explore Our Strategies
            </button>
          </div>
        </section>

        {/* Add more sections here (About, Services, etc.) */}

      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WT-cf30RfQ5kJVctRo7YS6JregvyvMRTK.jpg" alt="WT Logo" width={40} height={40} className="rounded-sm inline-block mr-2" />
              <span className="text-lg font-semibold">© 2023 Wynton Trading. All rights reserved.</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-8">
              <a href="#" className="hover:text-gray-300 transition-colors mb-2 md:mb-0">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors mb-2 md:mb-0">Terms of Service</a>
              <a href="#" className="hover:text-gray-300 transition-colors mb-2 md:mb-0">Contact Us</a>
              <a href="#" className="hover:text-gray-300 transition-colors mb-2 md:mb-0">Investor Login</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
