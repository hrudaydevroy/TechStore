import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, Heart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">TechStore</Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/products" className="text-gray-800 hover:text-blue-600 transition-colors">Shop</Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600 transition-colors">Contact</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 transition-colors">
              <Search size={20} />
            </button>
            <Link to="/wishlist" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Heart size={20} />
            </Link>
            <Link to="/account" className="text-gray-700 hover:text-blue-600 transition-colors">
              <User size={20} />
            </Link>
            <Link to="/cart" className="relative text-gray-700 hover:text-blue-600 transition-colors">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;