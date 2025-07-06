import React, {useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import Signup_image from './assets/Signup.png'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';


const Signup = () => {

  const [form , setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirm: ''
  })

  const [agree, setAgree] = useState(false);
  const [loading, setloading] = useState(false);

  const handleChange  = (e) => {
    setForm({ ...form , [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    if(form.password !== form.confirm){
      toast.error("Password do not match !!")
      return;
    }

    if(!agree){
      toast.error("You must agree to the terms and condition !!");
      return;
    }

    setloading(true);

    try{
          const user = await axios.post('http://localhost:3000/api/auth/signup', {
            username: form.username,
            email: form.email,
            password: form.password,
            confirm: form.confirm
          });

          if(user.data){
            toast.success(user.data.message);
            navigate('/dashboard');
          }
      } catch(err) { 
        if (err.response) {

            if(err.response.data.message === "Email is already registered!"){
                toast.error("Email is already registered!");
            }
            else{
                toast.error(err.response.data.message || "Sign up failed");
            }

        } else {
            toast.error("Network or server error");
        }
      } 
  }


return (
    <>
      <ToastContainer/>
      <div className="flex w-full h-screen bg-[#FFF]">

        <div className='w-70 h-[100vh] flex float-right'>
          <img src={Signup_image} alt="login" className='w-[720px] object-cover '/>
        </div>

        <form className='flex flex-col gap-4 p-3 w-[500px] mx-auto my-8' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-2'>
            <h2 className="text-4xl font-bold text-[#178280]  text-center">Create Account</h2>
            <p className='text-normal text-center mb-4'>Join Us today please enter your details</p>
          </div>
          
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="companyname" className="text-[15px]  font-medium text-gray-700">Username:</label>
            <input 
              type="text" 
              placeholder='Username'
              name="username"
              className='px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#178280] focus:border-transparent' 
              onChange={handleChange} required
            />
          </div>

          <div className="flex flex-col gap-1  mb-3">
            <label htmlFor="email" className="text-[15px] font-medium text-gray-700">Email:</label>
            <input 
              type="email" 
              placeholder='Email'
              name="email"
              className='px-4 py-2 border  text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#178280] focus:border-transparent'
              onChange={handleChange} required
            />
          </div>

          <div className="flex flex-col gap-1  mb-3">
            <label htmlFor="password" className="text-[15px] font-medium text-gray-700">Password:</label>
            <input 
              type="password" 
              placeholder='Password'
              name="password"
              className='px-4 py-2 border border-gray-300 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#178280] focus:border-transparent'
              onChange={handleChange} required
            />
          </div>

          <div className="flex flex-col gap-1  mb-1">
            <label htmlFor="confirm-password" className="text-[15px] font-medium text-gray-700">Confirm Password:</label>
            <input 
              type="password" 
              placeholder='Confirm Password'
              name="confirm"
              className='px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#178280] focus:border-transparent'
              onChange={handleChange} required
            />
          </div>

          <div className="flex items-center gap-2 mt-2 ">
            <input 
              type="checkbox" 
              id="agree"
              className='w-4 h-4 rounded border-gray-300 accent-[#178280]'
              checked={agree} onChange ={(e) => setAgree(e.target.checked)}
            />
            <label htmlFor="agree" className="text-[15px] text-gray-600">I agree to the terms and conditions</label>
          </div>
         
          <button 
            type="submit"
            className='w-full py-2 px-4 mt-3 bg-[#178280] text-white font-medium rounded-lg hover:bg-[#269369] transition-colors duration-200' disabled={loading}
          >
            {loading ? 'Creating Account ' : 'Create Account'}
          </button>
          <p className='text-[16px] text-center  text-gray-600'>Already have an account? <Link to="/login" className='text-[#178280] text-normal font-bold underline'>Login</Link></p>

        </form>
      </div> 
    </>
  )
}

export default Signup;