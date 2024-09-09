import React from "react";
import { Link } from "react-router-dom";
import "../components/Login.scss";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [formData, setformData] = useState({ email: "", password: "" });
  const handleInput = (e) => {
    const { id, value } = e.target;
    setformData((prevState) => ({ ...prevState, [id]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) =>
        user.email === formData.email &&
        user.password === formData.password
    );
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("logged in successful");

      navigate("/Dashboard");
    }
    else{
      alert("invalid credentails")
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="shadow-sm  bg-body-tertiary rounded  p-3 rounded w-25 p-3" style={{marginTop:'150px'}}>
        <h1 className="mt-5 fs-2 fw-bolder">Login </h1>
        <input className="form-label mt-4"
          type="text"
          placeholder="enter your Email"
          required
          onChange={handleInput}
          value={formData.email}
          id="email"
        />
        <br />
      
        <input className="form-label"
          type="text"
          placeholder="enter your Password"
          required
          onChange={handleInput}
          value={formData.password}
          id="password"
        />
        <br />
        <br />
        <button className="rounded ms-2">Login</button>
        <br/> <br/>
        <p>
          Don't have an account?
          <Link to="/Register" className="text-decoration-none  ms-1">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
