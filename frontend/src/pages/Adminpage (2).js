import Signup from "../components/admin/Signup";
import Signin from "../components/admin/Signin";

import "./Adminpage.css";

const Adminpage = () => {
  return (
    <>
      <div className="signup-signin-container">
      <Signin />
      <Signup />
        
      </div>
    </>
  );
};

export default Adminpage;
