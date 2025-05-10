import React from 'react';
import { ShieldCheck, Truck, CreditCard, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About TechStore</h1>
        
        <div className="prose prose-lg text-gray-600 mb-12">
          <p className="lead text-xl mb-8">
            Welcome to TechStore, your premier destination for cutting-edge technology and electronics. 
            Since 2020, we've been committed to providing our customers with the latest innovations 
            and exceptional service.
          </p>
          
          <p className="mb-6">
            Our mission is to make high-quality technology accessible to everyone. We carefully curate 
            our product selection to ensure we offer only the best devices and accessories from trusted 
            brands. Whether you're a tech enthusiast, professional, or casual user, we have something 
            for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the most trusted destination for technology products, where innovation meets 
              exceptional customer service. We strive to help our customers stay ahead in the 
              digital age with reliable products and expert guidance.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600">
              We believe in transparency, quality, and customer satisfaction. Every product we sell 
              is thoroughly tested and backed by our satisfaction guarantee. We're not just selling 
              products; we're building lasting relationships with our customers.
            </p>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose TechStore?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">All products are authentic and come with manufacturer warranty</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $100 with quick delivery</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-gray-600">Multiple payment options with encrypted transactions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Dedicated team ready to help with any questions</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-blue-100 mb-6">
            Be part of our growing community of tech enthusiasts and stay updated with the latest 
            products and exclusive offers.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;