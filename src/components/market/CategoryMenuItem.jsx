import './CategoryMenuItem.css';

function CategoryMenuItem({ category, isSelected, onSelect }) {
  return (
    <div 
      className={`category-card${isSelected ? ' selected' : ''}`}
      onClick={() => onSelect(category.name)}
    >
      <div className="category-icon">📦</div>
      <h3>{category.name}</h3>
      <p className="category-action">Click to explore →</p>
    </div>
  );
}

export default CategoryMenuItem;
