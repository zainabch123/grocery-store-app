import { useEffect, useContext } from "react";
import Header from "../../components/header";
import { AppContext } from "../../utils/appContext.jsx";
import "./searchPage.css";

const SearchPage = () => {
  const {products} = useContext(AppContext);
  console.log("Products in search page:", products);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json)); 
  // }, []);
  return (
    <div className="search-page">
      <Header />
      <div className="overflow-container">
        <ul className="product-card-grid">
          <li className="product-card">{products[0].title}</li>
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
