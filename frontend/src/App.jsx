import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/search/searchPage.jsx";
import LoginPage from "./pages/login/loginPage.jsx";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="search" element={<SearchPage />} />
      <Route path="/" element={<LoginPage/>}/>
    </Routes>
  );
}

export default App;
