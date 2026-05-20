import { useState, useEffect } from 'react';
import './ProductsPage.css';

function ProductsPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const categoryList = [
        { id: 1, name: 'Fresh Fruits' },
        { id: 2, name: 'Vegetables' },
        { id: 3, name: 'Dairy Products' },
        { id: 4, name: 'Bakery Items' },
        { id: 5, name: 'Beverages' }
      ];
      setCategories(categoryList);
      setLoading(false);
    }, 2000);
  }, []);

  const handleCategoryClick = (categoryName) => {
    console.log(`Selected category: ${categoryName}`);
  };

  if (loading) {
    return <div className="loading-spinner">Loading categories...</div>;
  }

  return (
    <div className="products-page">
      {/* Welcome Hero Section */}
      <div className="welcome-hero">
        <h1>Welcome to Your Everyday Market</h1>
        <p>Discover quality products at great prices</p>
      </div>

      {/* Shop by Category Section */}
      <div className="hero-section">
        <h2>Shop by Category</h2>
        <p>Discover quality products at great prices</p>
      </div>
      
      <div className="categories-grid">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="category-card"
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="category-icon">📦</div>
            <h3>{category.name}</h3>
            <p className="category-action">Click to explore →</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;