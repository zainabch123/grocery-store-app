import "./loginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <form className="login-form">
          <h2>Login</h2>
          <label>
            First Name:
            <input type="text" id="first-name" name="first-name"></input>
          </label>
          <label>
            Last Name:
            <input type="text" id="last-name" name="last-name"></input>
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
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
