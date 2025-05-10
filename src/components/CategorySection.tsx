import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  // Skip the "All Products" category
  const displayCategories = categories.filter(cat => cat.id !== 'all');
  
  const getCategoryImage = (categoryId: string) => {
    const imageMap: Record<string, string> = {
      audio: "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      wearables: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      computers: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      cameras: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      gaming: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      phones: "https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    };
    
    return imageMap[categoryId] || "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {displayCategories.map(category => (
            <Link 
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img 
                  src={getCategoryImage(category.id)} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white font-medium text-lg">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;