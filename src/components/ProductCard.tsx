import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        
        {product.featured && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
            Featured
          </span>
        )}
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <span className="text-white font-medium text-lg">Out of Stock</span>
          </div>
        )}
        
        <div className={`absolute right-2 top-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart size={18} className="text-gray-700" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="text-sm text-gray-500 uppercase">{product.category}</span>
        </div>
        
        <Link to={`/product/${product.id}`} className="block mb-1">
          <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          
          <button 
            className={`
              flex items-center justify-center p-2 rounded-full 
              transition-all duration-300
              ${product.inStock 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
            `}
            onClick={() => product.inStock && addToCart(product)}
            disabled={!product.inStock}
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;