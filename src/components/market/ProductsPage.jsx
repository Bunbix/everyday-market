import { useState, useEffect } from 'react';
import CategoryMenu from './CategoryMenu';
import { loadCategories } from './services/marketService';
import './ProductsPage.css';

function ProductsPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCategories().then((data) => {
      setCategories(data);
      setLoading(false);
    });
  }, []);

  const handleCategorySelect = (categoryName) => {
    console.log(`Selected category: ${categoryName}`);
  };

  if (loading) {
    return (
      <div className="products-page">
        <div className="loading-spinner">Loading categories...</div>
      </div>
    );
  }

  return (
    <div className="products-page">
      <div className="welcome-hero">
        <h1>Welcome to Your Everyday Market</h1>
        <p>Discover quality products at great prices</p>
      </div>
      <div className="hero-section">
        <h2>Shop by Category</h2>
        <p>Browse our categories</p>
      </div>
      <CategoryMenu 
        categories={categories} 
        onCategorySelect={handleCategorySelect}
      />
    </div>
  );
}

export default ProductsPage;