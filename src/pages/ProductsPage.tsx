import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SortDesc, SortAsc } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import { products, categories } from '../data/products';
import { Product } from '../types';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Sort by price
    result.sort((a, b) => {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });
    
    setFilteredProducts(result);
  }, [selectedCategory, sortOrder]);
  
  // Update category when URL param changes
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);
  
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shop Our Products</h1>
      
      <div className="lg:flex mb-8">
        <div className="w-full lg:w-64 mb-6 lg:mb-0">
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.id}>
                  <button
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sort By</h3>
              <div className="space-y-2">
                <button
                  className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                    sortOrder === 'asc' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setSortOrder('asc')}
                >
                  <SortAsc size={18} className="mr-2" />
                  Price: Low to High
                </button>
                <button
                  className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                    sortOrder === 'desc' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setSortOrder('desc')}
                >
                  <SortDesc size={18} className="mr-2" />
                  Price: High to Low
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <button
              className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} className="mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            
            {showFilters && (
              <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2 mb-6">
                  {categories.map(category => (
                    <li key={category.id}>
                      <button
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-blue-100 text-blue-700'
                            : 'hover:bg-gray-100'
                        }`}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setShowFilters(false);
                        }}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sort By</h3>
                <div className="space-y-2">
                  <button
                    className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                      sortOrder === 'asc' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => {
                      setSortOrder('asc');
                      setShowFilters(false);
                    }}
                  >
                    <SortAsc size={18} className="mr-2" />
                    Price: Low to High
                  </button>
                  <button
                    className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                      sortOrder === 'desc' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => {
                      setSortOrder('desc');
                      setShowFilters(false);
                    }}
                  >
                    <SortDesc size={18} className="mr-2" />
                    Price: High to Low
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="lg:flex-1 lg:pl-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600">Showing {filteredProducts.length} products</p>
          </div>
          
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <p className="text-lg text-gray-600">No products found in this category.</p>
              <button
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                onClick={() => setSelectedCategory('all')}
              >
                View all products
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;