import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";

import { setAdmin, setToken } from "../../redux/signin/signin.action";

const Signin = ({ setToken, setAdmin }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:4000/admin/signin",
        input
      )
      .then((response) => {
        localStorage.setItem("token",response.data.token);
        setToken(response.data.token);
        localStorage.setItem("adminDatafirstName",response.data.admin.firstName);
        localStorage.setItem("adminDatalastName",response.data.admin.lastName);
        setAdmin(response.data.admin);
        navigate(`/admin/dashboard`);
      });
  };
  return (
    <>
      <div>
        <h2>User Signin</h2>
        <form onSubmit={submitHandler}>
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={inputHandler}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={inputHandler}
          />
          <button className="btn btn-success">Signin</button>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch(setToken(token)),
    setAdmin: (admin) => dispatch(setAdmin(admin)),
  };
};

export default connect(null, mapDispatchToProps)(Signin);
