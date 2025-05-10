import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const CartPage: React.FC = () => {
  const { cart, clearCart, subtotal, totalItems } = useCart();
  
  // Calculate tax (e.g., 8%)
  const taxRate = 0.08;
  const taxAmount = subtotal * taxRate;
  
  // Calculate shipping (free over $100)
  const shippingAmount = subtotal > 100 ? 0 : 9.99;
  
  // Calculate total
  const total = subtotal + taxAmount + shippingAmount;
  
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 pt-24">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        
        <div className="bg-gray-50 p-8 rounded-lg text-center mb-8">
          <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
            <ShoppingCart size={32} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Link 
            to="/products" 
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Start Shopping
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Shopping Cart ({totalItems} items)</h2>
              <button 
                className="text-red-500 hover:text-red-700 transition-colors text-sm font-medium"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
            
            <div className="divide-y divide-gray-200">
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-900 font-medium">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (8%)</span>
                <span className="text-gray-900 font-medium">${taxAmount.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-900 font-medium">
                  {shippingAmount === 0 ? 'Free' : `$${shippingAmount.toFixed(2)}`}
                </span>
              </div>
              
              <div className="border-t border-gray-200 pt-4 flex justify-between">
                <span className="text-gray-900 font-bold">Total</span>
                <span className="text-blue-600 font-bold">${total.toFixed(2)}</span>
              </div>
            </div>
            
            <Link 
              to="/checkout" 
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Proceed to Checkout
              <ArrowRight size={18} className="ml-2" />
            </Link>
            
            <div className="mt-6">
              <p className="text-sm text-gray-500 text-center">
                We accept all major credit cards and PayPal
              </p>
              <div className="flex justify-center mt-2">
                <img 
                  src="https://via.placeholder.com/200x30/374151/FFFFFF?text=Payment+Methods" 
                  alt="Payment methods" 
                  className="h-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;