import { useState } from 'react';
import CategoryMenuItem from './CategoryMenuItem';
import './CategoryMenu.css';

function CategoryMenu({ categories, onCategorySelect }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelect = (categoryName) => {
    setSelectedCategory(categoryName);
    onCategorySelect(categoryName);
  };

  return (
    <div className="categories-container">
      <h2 className="section-title">Shop by Category</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <CategoryMenuItem
            key={category.id}
            categoryName={category.name}
            isSelected={selectedCategory === category.name}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;
