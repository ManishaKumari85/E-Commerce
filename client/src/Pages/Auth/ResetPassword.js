
import React, { useState,useEffect } from "react";
import Layout from "../../Components/Layout/Layout.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

  const ResetPassword = () => {
  const [newPassword,setNewPassword ] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [id, setId] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setId(searchParams.get('id'));
    setToken(searchParams.get('token'));
  }, []) 

  


  // form function
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8000/resetPasssword`,{
        id,
       token,
        newPassword,
        confirmPassword,
      });
     
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");

      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Forgot Password - Ecommerce APP"}>
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">RESET PASSWORD</h4>
          
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          
          <div className="mb-3">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your ConfirmPassword "
              required
            />
          </div>
         

          <button type="submit" className="btn btn-primary">
            Password Change
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ResetPassword;