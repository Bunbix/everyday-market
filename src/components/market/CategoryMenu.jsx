import CategoryMenuItem from './CategoryMenuItem';

function CategoryMenu({ categories, onCategorySelect }) {
  return (
    <div className="categories-grid">
      {categories.map((category) => (
        <CategoryMenuItem 
          key={category.id} 
          category={category} 
          onSelect={onCategorySelect}
        />
      ))}
    </div>
  );
}

export default CategoryMenu;
