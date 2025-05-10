import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{item.category}</p>
        <p className="mt-1 text-lg font-semibold text-gray-900">${item.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center">
        <div className="flex items-center border border-gray-300 rounded-md">
          <button 
            className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>
          
          <span className="px-4 py-2 text-gray-900">{item.quantity}</span>
          
          <button 
            className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>
        
        <button 
          className="ml-4 text-gray-400 hover:text-red-500 transition-colors"
          onClick={() => removeFromCart(item.id)}
          aria-label="Remove item"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;