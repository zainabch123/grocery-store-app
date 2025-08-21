import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/search/searchPage.jsx";
import RegisterPage from "./pages/register/registerPage.jsx";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="search" element={<SearchPage />} />
      <Route path="/" element={<RegisterPage/>}/>
    </Routes>
  );
}

export default App;
