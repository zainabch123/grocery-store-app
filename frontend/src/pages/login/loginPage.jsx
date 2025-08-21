import './loginPage.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
      <div className="login-page">
        <div className="login-card">
          <form className="login-form">
            <h2>Login</h2>
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