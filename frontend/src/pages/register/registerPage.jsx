import "./registerPage.css";

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="register-card">
        <form className="register-form">
          <h2>Register</h2>
          <label>
            First Name:
            <input type="text" id="first-name" name="first-name" required></input>
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
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
