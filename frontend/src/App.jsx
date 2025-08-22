import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/search/searchPage.jsx";
import RegisterPage from "./pages/register/registerPage.jsx";
import LoginPage from "./pages/login/loginPage.jsx";
import DashboardPage from "./pages/dashboard/dashboardPage.jsx";
import {AppContext} from "./utils/appContext.jsx";
import "./App.css";

const apiUrl = import.meta.env.VITE_API_URL;

const App = () => {
  return (
    <AppContext.Provider value={({apiUrl})}>
      <Routes>
        <Route path="search" element={<SearchPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<DashboardPage/>}></Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
