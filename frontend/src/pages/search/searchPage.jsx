import "./searchPage.css";

const SearchPage = () => {
  return (
    <div className="search-page">
      <header>
        <div className="header-content">
          <div className="logo">Logo</div>
          <div className="search-bar-section">
            <div className="search-bar">
              <input
                type="text"
                id="search-bar"
                name="search-bar"
                placeholder="Search groceries today..."
              ></input>
              <button type="button" className="search-button">
                Search
              </button>
            </div>
          </div>
          <div className="user-profile">UP</div>
        </div>
      </header>
      <div className="overflow-container">
        <ul className="product-card-grid">
          <li className="product-card">Item 1</li>
          <li className="product-card">Item 2</li>
          <li className="product-card">Item 3</li>
          <li className="product-card">Item 4</li>
          <li className="product-card">Item 5</li>
          <li className="product-card">Item 6</li>
          <li className="product-card">Item 7</li>
          <li className="product-card">Item 8</li>
          <li className="product-card">Item 9</li>
          <li className="product-card">Item 10</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
