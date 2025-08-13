import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header" style={{}}>
        <div className="logo-section">Logo</div>
        <div className="search-bar-section">
          <input
            type="text"
            id="search-bar-input"
            name="search-bar-input"
            placeholder="Search products here"
          ></input>
          <button className="search-button" type="submit">
            Search
          </button>
        </div>
        <div className="user-profile-section">
          <div className="profile-circle">ZC</div>
        </div>
      </header>
      <div className="overflow-container" style={{}}>
        <div className="product-grid">
          <ul className="product-list">
            <li className="product-card">Product Card 1</li>
            <li className="product-card">Product Card 2</li>
            <li className="product-card">Product Card 3</li>
            <li className="product-card">Product Card 4</li>
            <li className="product-card">Product Card 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
