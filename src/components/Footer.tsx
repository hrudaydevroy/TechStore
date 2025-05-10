import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Send, CreditCard, Truck, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Service highlights */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center md:justify-start">
              <div className="bg-gray-800 p-3 rounded-full mr-4">
                <Truck size={24} className="text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Free Shipping</h3>
                <p className="text-sm">On all orders over $100</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-gray-800 p-3 rounded-full mr-4">
                <CreditCard size={24} className="text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Secure Payment</h3>
                <p className="text-sm">100% secure transactions</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-end">
              <div className="bg-gray-800 p-3 rounded-full mr-4">
                <ShieldCheck size={24} className="text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-white">1 Year Warranty</h3>
                <p className="text-sm">On all electronic products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">TechStore</h2>
            <p className="mb-4">
              Your one-stop shop for all the latest and greatest tech gadgets. We offer premium products with exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/products?category=audio" className="hover:text-white transition-colors">Audio</Link></li>
              <li><Link to="/products?category=wearables" className="hover:text-white transition-colors">Wearables</Link></li>
              <li><Link to="/products?category=computers" className="hover:text-white transition-colors">Computers</Link></li>
              <li><Link to="/products?category=phones" className="hover:text-white transition-colors">Phones</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="hover:text-white transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} TechStore. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <img 
                src="https://via.placeholder.com/200x30/374151/FFFFFF?text=Payment+Methods" 
                alt="Payment methods" 
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;