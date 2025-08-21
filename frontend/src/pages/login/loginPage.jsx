import "./loginPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();


  function handleInput(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const loginUser = async () => {
      try {
        const res = await fetch("http://localhost:4000" + "/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        console.log("returned data:", data.user);

        if(data.user) {
        setFormData({ email: "", password: "" });
        navigate("/search");
        }

      } catch (error) {
        console.log("Error", error);
      }
    };

    loginUser();
  }
  return (
    <div className="login-page">
      <div className="login-card">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label>
            Email:
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInput}
            ></input>
          </label>
          <label>
            Password:
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleInput}
            ></input>
          </label>
          <button type="submit">Submit</button>
          <hr></hr>
          <div className="signup-link">
            <p>Don't have an account?</p>
            <Link to={`/register`}>Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
