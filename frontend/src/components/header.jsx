import { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../utils/appContext.jsx";


const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const {fetchSearchResults, setProducts} = useContext(AppContext);
    const navigate = useNavigate();


  function handleInput(event) {
    setSearchInput(event.target.value);
  }

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      const results = await fetchSearchResults(searchInput);
      setProducts(results.products);
      navigate("/search");
    } catch (error) {
      console.log("Error", error);
    }
  }
  

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
                value={searchInput}
                onChange={handleInput}
              ></input>
              <button type="button" className="search-button" onClick={handleClick}>
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