import Header from './components/common/Header';
import ProductsPage from './components/market/ProductsPage';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <ProductsPage />
      </main>
      <footer className="app-footer">
        <p>&copy; 2026 Everyday Market. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
