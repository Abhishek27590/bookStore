import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Admin = () => {
  const navigate = useNavigate();
  const [, , authAdmin, setAuthAdmin] = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const clickHandler = async () => {
    const payload = {
      email: email,
      password: password,
    };
    let resData={}
    try{
        const res = await axios.post(
            "http://localhost:4001/admin/adminLogin",
            payload
          );
          resData=res.data
    }
    catch(e){
        const res=e.response
        resData=res.data
    }
    if (resData.status == "true") {
      setAuthAdmin(true);
      toast.success(resData.message)
      navigate("/admin-panel");
    }
    else{
        toast.error(resData.message)
    }
  };
  return (
    <div className="flex flex-col w-full justify-center items-center h-[100vh] gap-5">
      <p className="text-3xl">Hello Admin ⚙️</p>
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        className="w-[450px] h-[50px] p-3 rounded-2xl "
      />
      <input
        type="text"
        name="password"
        value={password}
        placeholder="Enter Password"
        required
        onChange={(e) => setPassword(e.target.value)}
        className="w-[450px] h-[50px] p-3 rounded-2xl "
      />
      <button
        onClick={() => {
          clickHandler();
        }}
        className="w-[100px] h-[40px] bg-blue-950 rounded-3xl hover:bg-blue-900 transition-all"
    >
        Login
      </button>
    </div>
  );
};
export default Admin;
