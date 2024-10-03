import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Leaves from "./components/Leaves";
import Tasks from "./components/Tasks";
import Signout from "./components/Signout";
import EditProfile from "./components/EditProfile";

function App() {
  return (
    <div className="appDiv">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/tasks" element={<Tasks></Tasks>}>
            Tasks
          </Route>
          <Route path="/leaves" element={<Leaves></Leaves>}>
            Leaves
          </Route>
          <Route path="/editProfile" element={<EditProfile></EditProfile>}>
            Edit Profile
          </Route>
          <Route path="/signout" element={<Signout></Signout>}>
            Signout
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
