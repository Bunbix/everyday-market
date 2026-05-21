import { useState, useEffect } from 'react';
import CategoryMenu from './CategoryMenu';
import './ProductsPage.css';

function ProductsPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const categoryList = [
            { id: 1, name: 'Fresh Fruits' },
            { id: 2, name: 'Vegetables' },
            { id: 3, name: 'Dairy Products' },
            { id: 4, name: 'Bakery Items' },
            { id: 5, name: 'Beverages' }
          ];
          resolve(categoryList);
        }, 2000);
      });
    };

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