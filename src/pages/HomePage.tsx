import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import CategorySection from '../components/CategorySection';
import Newsletter from '../components/Newsletter';
import { products, categories } from '../data/products';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts products={products} />
      <CategorySection categories={categories} />
      <Newsletter />
    </div>
  );
};

export default HomePage;