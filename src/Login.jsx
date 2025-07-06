import React, {useState} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import Login_image from './assets/Login.png';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

const Login = () => {

  const [form , setForm] = useState({ email: '', password: ''});
  const navigate = useNavigate();

  const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!form.email || !form.password){
      toast.error("All fields are required !!");
      return;
    }
  
    try{
      const res = await axios.post('http://localhost:3000/api/auth/login', form);
      toast.success(res.data.message);
      localStorage.setItem('token', res.data.message);
      navigate('/dashboard');
    }catch(err){
      toast.error(err.response?.data?.message || "Login Failed !!");
    }

  }
  
return (
    <div className="flex flex-col md:flex-row w-full min-h-screen h-full">
      <div className="flex-1 flex items-center justify-center bg-white p-4">
        <form className="w-full max-w-md bg-white rounded-lg p-6" onSubmit={handleSubmit}>
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#178280]">Login <span  className='text-4xl'><br/>Welcome back!!</span></h2>
            <p className="text-gray-600 mt-1 text-sm md:text-base">
               Enter your account credentials to acces your account.
            </p>
          </div>

          <div className="mt-6">
            <label className="block text-gray-700 mb-1 text-[18px] font-semibold ">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#178280]"
            />
          </div>

          <div className="mt-5">
            <label className="block text-gray-700 mb-1 text-[18px] font-semibold">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#178280]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-[#178280] text-white font-semibold rounded-lg hover:bg-[#269369] transition"
          >
            Login
          </button>

          <p className="text-center text-gray-600 text-normal mt-3 font-bold">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="text-[#178280] font-medium underline"
            >
              Signup
            </Link>
          </p>
        </form>
      </div>

      
      <div className="w-full md:w-[700px] h-64 md:h-full hidden md:block">
        <img
          src={Login_image}
          alt="Login Visual"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;

