import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <Link 
            to="/products" 
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium"
          >
            View All
            <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;