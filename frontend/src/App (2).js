import { Routes, Route } from "react-router-dom";
import AddEmployee from "./components/admin/AddEmployee";
import EditEmployee from "./components/admin/EditEmployee";
import AdminDashboard from "./pages/AdminDashboard";
import Adminpage from "./pages/Adminpage";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Employeepage from "./pages/Employeepage";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/" element={<Adminpage />} />
        <Route path="/admin" element={<Adminpage />} />
        {/* <Route path="/employee" element={<Employeepage />} /> */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/edit/:id" element={<EditEmployee />} />
        <Route path="/admin/add" element={<AddEmployee />} />
        {/* <Route path="/employee/dashboard" element={<EmployeeDashboard />} /> */}
      </Routes>
    </>
  );
};

export default App;
