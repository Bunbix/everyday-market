function CategoryMenuItem({ category, onSelect }) {
  return (
    <div 
      className="category-card"
      onClick={() => onSelect(category.name)}
    >
      <div className="category-icon">📦</div>
      <h3>{category.name}</h3>
      <p className="category-action">Click to explore →</p>
    </div>
  );
}

export default CategoryMenuItem;
