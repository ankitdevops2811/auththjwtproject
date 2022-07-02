import "./AddEmployee.css";

import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";

const AddEmployee = ({ getToken }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber:"",
    address:"",
    gender:""
  });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  // const onChangeGenderValue=(event)=>{

  // }
  const submitHandler = (event) => {
    event.preventDefault();
    if (input.password.length >= 8) {
      axios
        .post(
          "http://localhost:4000/admin/add",
          input,
          {
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          navigate("/admin/dashboard");
        });
    } else {
      alert("Password length must be 8 characters");
    }
  };
  return (
    <>
      <div className="add-employee">
        <h1>Create New User</h1>
        <form onSubmit={submitHandler}>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={inputHandler}
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={inputHandler}
          />
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
           <input
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
            onChange={inputHandler}
            
          />
      <div onChange={inputHandler}>
        <input type="radio" value="Male" name="gender"  className="radioButton"/>
        <label className="radiolabel">Male</label> 
        
       
        <input type="radio" value="Female" name="gender" className="radioButton"/> 
        <label className="radiolabel">Female</label> 
        
        <input type="radio" value="Other" name="gender" className="radioButton"/> 
        <label className="radiolabel" >Other</label> 
      </div>
          <textarea
            name="address"
            placeholder="Address"
            onChange={inputHandler}
          />
          <button className="btn btn-success">Add User</button>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    getToken: state.signin.token,
  };
};

export default connect(mapStateToProps, null)(AddEmployee);
