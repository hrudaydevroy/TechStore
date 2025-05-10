import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, ArrowLeft, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductGrid from '../components/ProductGrid';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = products.find(p => p.id === Number(id));
  
  // Get products in the same category for recommendations
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);
  
  // Simulate multiple product images for demonstration
  const productImages = product 
    ? [
        product.image,
        "https://images.pexels.com/photos/4113353/pexels-photo-4113353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ]
    : [];
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="bg-gray-50 p-8 rounded-lg inline-block">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/products" 
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium inline-flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="mb-6">
        <Link 
          to="/products" 
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to Products
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <div className="mb-4 overflow-hidden rounded-lg">
            <img 
              src={productImages[selectedImage]} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {productImages.map((image, index) => (
              <button 
                key={index}
                className={`border rounded-md overflow-hidden ${
                  selectedImage === index ? 'border-blue-600 ring-2 ring-blue-200' : 'border-gray-200'
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={image} 
                  alt={`${product.name} view ${index + 1}`} 
                  className="w-full h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <div className="mb-2">
            <span className="text-sm text-gray-500 uppercase">{product.category}</span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star 
                  key={index} 
                  size={18} 
                  className={index < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">(16 reviews)</span>
          </div>
          
          <p className="text-3xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
          
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>
          
          {product.inStock ? (
            <div className="mb-6">
              <p className="flex items-center text-green-600 mb-4">
                <span className="w-3 h-3 bg-green-600 rounded-full inline-block mr-2"></span>
                In Stock
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex border border-gray-300 rounded-md w-36">
                  <button 
                    className="px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-full text-center focus:outline-none"
                  />
                  <button 
                    className="px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                
                <button 
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </button>
                
                <button 
                  className="bg-transparent border border-gray-300 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-50 transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart size={18} />
                </button>
              </div>
            </div>
          ) : (
            <div className="mb-6">
              <p className="flex items-center text-red-600 mb-4">
                <span className="w-3 h-3 bg-red-600 rounded-full inline-block mr-2"></span>
                Out of Stock
              </p>
              
              <button 
                className="w-full bg-gray-200 text-gray-500 px-6 py-3 rounded-md font-medium cursor-not-allowed"
                disabled
              >
                Currently Unavailable
              </button>
            </div>
          )}
          
          <div className="border-t border-gray-200 pt-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l-9 5 9 5 9-5-9-5z" />
                </svg>
                <span className="text-sm text-gray-700">Free Shipping</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">1 Year Warranty</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <span className="text-sm text-gray-700">30-Day Returns</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm text-gray-700">Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {relatedProducts.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;