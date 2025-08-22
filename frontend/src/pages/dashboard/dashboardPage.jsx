import { Link } from "react-router-dom";
import Header from "../../../components/header";
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
          <div className="hero-image-carousel">
            Hero Image Carousel
          </div>
        </div>
      </div>
    );
};

export default DashboardPage;