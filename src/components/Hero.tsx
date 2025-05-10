import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden pt-20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4">
              Discover the Latest in Tech
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Shop the most innovative gadgets and electronics with premium quality and exceptional customer service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="bg-blue-600 text-white px-8 py-4 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Shop Now
                <ArrowRight size={18} className="ml-2" />
              </Link>
              
              <Link 
                to="/featured" 
                className="bg-transparent border border-blue-600 text-blue-600 px-8 py-4 rounded-md font-medium hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                Explore Featured
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-float relative">
            <div className="relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Latest technology devices" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-medium text-gray-500">Starting at</div>
                <div className="text-2xl font-bold text-blue-600">$499.99</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-blue-100 rounded-full opacity-60 z-0"></div>
            <div className="absolute -bottom-8 right-1/4 w-20 h-20 bg-blue-200 rounded-full opacity-60 z-0"></div>
          </div>
        </div>
      </div>
      
      {/* Add a wave effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,256L48,229.3C96,203,192,149,288,149.3C384,149,480,203,576,208C672,213,768,171,864,170.7C960,171,1056,213,1152,208C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;