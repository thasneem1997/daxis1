import React from "react";
import { Link } from "react-router-dom";
import "../components/Register.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register() {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target; //object destructuring
    setformData((prevState) => ({ ...prevState, [id]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExist = users.find((user) => user.username === formData.username);

    if (userExist) {
      alert("User already exists");
      navigate("/")
      
    } else if (formData.password !== formData.confirmpassword) {
      alert("Passwords don't match");
    } else {
     
      users.push({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

     
      localStorage.setItem("users", JSON.stringify(users));
      alert("Account created successfully");
      navigate("/");
} 
    

      };
  return (
    <div>
      <form onSubmit={handleSubmit} className="shadow-sm  bg-body-tertiary rounded  p-3 rounded w-25 p-3" style={{marginTop:'100px'}}>
        <h1 className="mt-5 fs-3 fw-bolder">Sign up</h1>

        <input
          type="text"
          className="form-label mt-4"
          placeholder="enter your name"
          required
          value={formData.username}
          onChange={handleChange}
          id="username"
        />
        <br />
       

        <input
          type="email"
          className="form-label"
          placeholder="enter your Email"
          required
          value={formData.email}
          onChange={handleChange}
          id="email"
        />
        <br />
       
        <input
          type="password"
          className="form-label"
          placeholder="enter your password"
          required
          value={formData.password}
          onChange={handleChange}
          id="password"
        />
        <br />
        
        <input
          type="text"
          className="form-label"
          placeholder="enter your Confirm password"
          required
          value={formData.confirmpassword}
          onChange={handleChange}
          id="confirmpassword"
        />
        <br />
        <br />
      
        <button className="rounded">Create Account</button><br/><br/>
        <p>
          Already have an account?
          <Link to="/" className="text-decoration-none ms-1">Sign in</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
