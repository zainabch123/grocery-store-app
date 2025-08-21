import "./registerPage.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import { AppContext } from "../../utils/appContext";


const RegisterPage = () => {
   const [formData, setFormData] = useState({ firstName: "", lastName:"", email: "", password: "" });
   const navigate = useNavigate();
   const {apiUrl} = useContext(AppContext);

   function handleInput(event) {
     const { name, value } = event.target;
     setFormData({ ...formData, [name]: value });
   }

   function handleSubmit(event) {
     event.preventDefault();

     const registerUser = async () => {
       try {
         const res = await fetch(apiUrl + "/user/register", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(formData),
         });

         const data = await res.json();
         console.log("returned data:", data);

         if (data.user) {
           setFormData({ firstName: "", lastName: "",email: "", password: "" });
           navigate("/search");
         }
       } catch (error) {
         console.log("Error", error);
       }
     };

     registerUser();
   }
  return (
    <div className="register-page">
      <div className="register-card">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Register</h2>
          <label>
            First Name:
            <input
              type="text"
              id="first-name"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleInput}
            ></input>
          </label>
          <label>
            Last Name:
            <input
              type="text"
              id="last-name"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleInput}
            ></input>
          </label>
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
