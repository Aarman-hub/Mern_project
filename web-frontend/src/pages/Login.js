import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import LoginForm from '../components/forms/LoginFrom';

const Login = () => {
  const [formData, setFormData] = useState({
    email:"",
    password:"",
    loading:false,
    error:"",
  });

  const { email, password, loading, error} = formData;

  const navigate = useNavigate();


  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]:e.target.value});
  }
  const handlesubmit = async (e) =>{
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/api/user/signin",{
        email,
        password
      });
      toast.success("Login Successfully.");
      navigate("/");
    } catch (err) {
      toast.error("Something missing!");
    }
    
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <LoginForm handleChange={handleChange} handlesubmit={handlesubmit} />
        </div>
      </div>
    </div>
  )
}

export default Login