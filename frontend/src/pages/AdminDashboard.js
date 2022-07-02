import "./AdminDashboard.css";

import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import { connect } from "react-redux";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
const AdminDashboard = ({ getToken, getAdmin }) => {
 
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/admin/getall",
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setEmployees(response.data);
      });
  },[]);
  const deleteEmployee = (id) => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure, you want to delete?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            axios.delete(
              `http://localhost:4000/admin/delete/${id}`,
              {
                headers: {
                  "Content-Type": "application/json",
                  "auth-token": localStorage.getItem("token"),
                },
              }
            ).then(() =>{
              console.log('Delete successful');
              window.location.reload();
          });
          }
        },
        {
          label: 'No',
          onClick: () => {
            navigate("/admin/dashboard");
          }
        }
      ]
    });


    
  };
  const signOut=()=>
  {
    localStorage.removeItem("token");
    localStorage.removeItem("adminDatafirstName");
    localStorage.removeItem("adminDatalastName");
    navigate("/");
  }
  return (
    <>
      <div className="admin-dashboard">
     
<div className="container">
  <div className="row">
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown text-right">
          <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <b> Welcome:</b>  {localStorage.getItem("adminDatafirstName")} {localStorage.getItem("adminDatalastName")}
          </a>
          <ul className="dropdown-menu text-right" aria-labelledby="navbarDropdownMenuLink">
            <li style={{textAlign:"center",color:"blue",cursor:"pointer"}}> <a onClick={signOut}>signOut</a></li>
           
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
<div className="row" style={{paddingRight:"125px", paddingTop:"5px"}}>
  <div className="col-8"><h5>All Users</h5></div>
  <div className="col-4" style={{ textAlign: "right"}}>
<Link to="/admin/add" className="btn btn-success">
            Create User
          </Link>
          </div>
</div>
<div className="row p-2">
{employees.length === 0 && <p>No Employees</p>}
{employees.map((employee) => (
         <div className="card m-1" style={{ width: "18rem"}}  key={employee._id}>
         <div className="card-body">
           <h5 className="card-title" style={{color:"green"}}>{employee.firstName} {employee.lastName}</h5>
           <h6 className="card-subtitle mb-2 text-muted"><b>Gender: </b>{employee.gender}</h6>
           <h6 className="card-subtitle mb-2 text-muted"><b>Email: </b>{employee.email}</h6>
           <h6 className="card-subtitle mb-2 text-muted"><b>Phone: </b>{employee.phoneNumber}</h6>
           <h6 className="card-subtitle mb-2 text-muted"><b>Address: </b>{employee.address}</h6>
           
           <a  className="card-link" style={{color:"blue",cursor:"pointer"}} onClick={() => {
                navigate(`/admin/edit/${employee._id}`);
              }}>Edit</a>
           <a className="card-link" style={{color:"blue",cursor:"pointer"}} onClick={() => {
                deleteEmployee(employee._id);
              }}>Delete</a>
         </div>
       </div>
        ))}
</div>
</div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    getToken: state.signin.token,
   // getAdmin: state.signin.admin,
   getAdmin:localStorage.getItem("adminData")
  };
};

export default connect(mapStateToProps, null)(AdminDashboard);
