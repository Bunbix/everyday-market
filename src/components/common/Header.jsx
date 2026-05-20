import './Header.css';

function Header() {
  const title = "Afolabi's Everyday Market";

  return (
    <header className="main-header">
      <div className="logo-container">
        <img 
          src="https://picsum.photos/80/80?random=1" 
          alt="Market Logo" 
          className="logo"
        />
        <h1>{title}</h1>
      </div>
      <div className="header-banner">
        <img 
          src="https://picsum.photos/1200/200?random=2" 
          alt="Market Banner" 
          className="banner"
        />
      </div>
    </header>
  );
}

export default Header;
