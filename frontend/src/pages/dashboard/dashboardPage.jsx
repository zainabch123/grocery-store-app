import { Link } from "react-router-dom";
import heroImage1 from "../../assets/heroImage1.jpg";
import heroImage2 from "../../assets/heroImage2.jpg";
import heroImage3 from "../../assets/heroImage3.jpg";
import Header from "../../components/header";
import "./dashboardPage.css";
import { useState } from "react";

const DashboardPage = () => {
  const heroImg = [heroImage1, heroImage2, heroImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextHeroImg() {
    setCurrentIndex((i) => (i === heroImg.length - 1 ? 0 : i + 1));
  }

  function prevHeroImg() {
    setCurrentIndex((i) => (i === 0 ? heroImg.length - 1 : i - 1));
  }



  return (
    <div className="dashboard-page">
      <Header />
      <div className="overflow-container">
        <nav className="nav-bar">
          <div className="nav-bar-content">
            <Link to="/">Home</Link>
            <Link to="">Groceries</Link>
            <Link to="">Fashion</Link>
            <Link to="">Beauty</Link>
            <Link to="">Electronics</Link>
          </div>
        </nav>
        <div className="hero-image-carousel">
          <button className="prev-button" onClick={prevHeroImg}>
            {"<"}
          </button>
          <img src={heroImg[currentIndex]} />
          <button className="next-button" onClick={nextHeroImg}>
            {">"}
          </button>
        </div>
        <div style={{ height: "100px" }}>Today's Deals</div>
        <div>Something else</div>
      </div>
    </div>
  );
};

export default DashboardPage;
