import { useState } from 'react';
import CategoryMenuItem from './CategoryMenuItem';

function CategoryMenu({ categories, onCategorySelect }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelect = (categoryName) => {
    setSelectedCategory(categoryName);
    onCategorySelect(categoryName);
  };

  return (
    <div className="categories-grid">
      {categories.map((category) => (
        <CategoryMenuItem 
          key={category.id} 
          category={category} 
          isSelected={selectedCategory === category.name}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}

export default CategoryMenu;
