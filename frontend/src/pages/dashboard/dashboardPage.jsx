import { Link } from "react-router-dom";
import heroImage1 from "../../assets/heroImage1.jpg";
import Header from "../../components/header";
import "./dashboardPage.css";

const DashboardPage = () => {
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
        <div className="hero-image-carousel"><img src={heroImage1}/></div>
        <div style={{ height: "100px" }}>Today's Deals</div>
        <div>Something else</div>
      </div>
    </div>
  );
};

export default DashboardPage;
