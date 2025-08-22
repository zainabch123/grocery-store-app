
const Header = () => {
    return (
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
          <div className="cart">Cart</div>
        </div>
      </header>
    );
};

export default Header;