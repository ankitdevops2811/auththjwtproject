import { Link } from "react-router-dom";

import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <h1 className="title">Employee Management System</h1>
      <Link className="button" to="/admin">
        Admin Dashboard
      </Link>
      <Link className="button" to="/employee">
        Employee Dashboard
      </Link>
    </>
  );
};

export default Homepage;
