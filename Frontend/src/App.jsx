import React, { useEffect } from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import ViewPDF from "./components/ViewPDF";
import Admin from "./components/Admin";
import AdminPanel from "./components/AdminPanel";


function App() {
  const [authUser, setAuthUser,authAdmin,setAuthAdmin] = useAuth();
  console.log(authAdmin)
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white ">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route 
            path="/admin-panel"
            element={authAdmin ? <AdminPanel/>:<Navigate to="/admin-login"/>}
          />
          <Route path="/admin-login" element={<Admin/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/view-pdf" element={<ViewPDF />} /> 
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
