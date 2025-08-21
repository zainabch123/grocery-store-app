import "./registerPage.css";
import {Link} from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="register-card">
        <form className="register-form">
          <h2>Register</h2>
          <label>
            First Name:
            <input
              type="text"
              id="first-name"
              name="first-name"
              required
            ></input>
          </label>
          <label>
            Last Name:
            <input type="text" id="last-name" name="last-name" required></input>
          </label>
          <label>
            Email:
            <input type="email" id="email" name="email" required></input>
          </label>
          <label>
            Password:
            <input
              type="password"
              id="password"
              name="password"
              required
            ></input>
          </label>
          <button type="submit">Submit</button>
          <hr></hr>
          <div className="login-link">
            <p>Already have an account?</p>
            <Link to={`/`}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
