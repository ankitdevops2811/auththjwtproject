import "./EditEmployee.css";

import { useState,useEffect} from "react";

import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import { connect } from "react-redux";

 const  EditEmployee =  ({ getToken }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  //const [input, setInput] = useState({ firstName: "", lastName: "" });
  const [input, setInput] = useState({ firstName: "", lastName: "" });
   useEffect(()=> { axios
      .get(
        `http://localhost:4000/admin/getuser/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
       
        setInput(response.data);
       // preventDefault();
      });
    },[]);
   
  function inputHandler(event) {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
    //setInput(input[name]=value);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .put(
        `http://localhost:4000/admin/edit/${id}`,
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
  };
  return (
    <>
      <div className="edit-employee">
        <h1>Edit Users</h1>
        <form onSubmit={submitHandler}>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={inputHandler}
            value={input.firstName}
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={inputHandler}
            value={input.lastName}
          />
          <input
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
            onChange={inputHandler}
            value={input.phoneNumber}
          />
           <div onChange={inputHandler}>
        <input type="radio" value="Male" name="gender"  className="radioButton"
        checked={input.gender === "Male"}/>
        <label className="radiolabel">Male</label> 
        
       
        <input type="radio" value="Female" name="gender" className="radioButton"
        checked={input.gender === "Female"}/> 
        <label className="radiolabel">Female</label> 
        
        <input type="radio" value="Other" name="gender" className="radioButton"
        checked={input.gender === "Other"}/> 
        <label className="radiolabel" >Other</label> 
      </div>
          <textarea
            name="address"
            placeholder="Address"
            onChange={inputHandler}
            value={input.address}
          />
          <button className="btn btn-success">Edit</button>
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

export default connect(mapStateToProps, null)(EditEmployee);
