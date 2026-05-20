import './CategoryMenuItem.css';

function CategoryMenuItem({ categoryName, isSelected, onSelect }) {
  return (
    <div 
      className={category-card }
      onClick={() => onSelect(categoryName)}
    >
      <div className="category-icon">📦</div>
      <h3 className="category-name">{categoryName}</h3>
      <p className="category-action">Click to explore →</p>
    </div>
  );
}

export default CategoryMenuItem;
