import React, { useState } from 'react'
import AuthForm from '../components/forms/AuthForm'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:"",
    loading:false,
    error:"",
  });

  const {username, email, password, loading, error} = formData;

  const navigate = useNavigate();


  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]:e.target.value});
  }
  const handlesubmit = async (e) =>{
    e.preventDefault();

    try {
      const {data} = await axios.post("http://localhost:8000/api/user/signup",{
        username,
        email,
        password
      });
      toast.success("Account created");

      navigate("/login");
    } catch (err) {
      toast.error("Something wrong!");

    }
    
  }

  return (
    <>
      <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6 offset-md-3'>
              <AuthForm handleChange={handleChange} handlesubmit={handlesubmit} />
            </div>
          </div>
      </div>
    </>
  )
}

export default Register