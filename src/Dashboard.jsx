import React, {useEffect, useState} from 'react';
import { FaHeartbeat, FaChartBar, FaUser, FaCog, FaSignOutAlt, FaSearch, FaBell } from 'react-icons/fa';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';



const data = [
  { name: 'Mon', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Tue', uv: 300, pv: 1398, amt: 2210 },
  { name: 'Wed', uv: 200, pv: 9800, amt: 2290 },
  { name: 'Thu', uv: 750, pv: 4300, amt: 2100 },
  { name: 'Fri', uv: 500, pv: 3908, amt: 2000 },
  { name: 'Sat', uv: 250, pv: 4800, amt: 2181 },
  { name: 'Sun', uv: 400, pv: 3800, amt: 2500 },
];

const Dashboard = () => {

  const [activeTab, setActiveTab] = React.useState('dashboard');
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {

    const token = localStorage.getItem('token');
    const userData = JSON.parse(localStorage.getItem('user'));

    if(!token){
      navigate('/login');
    }else{
      if(userData){
        setUser(userData)
      }else{
        navigate('/login');
      }
    }
  }, [navigate]);
  

  const handleLogout = async () => {

    try{
      
      localStorage.removeItem('token');

      const res = await axios.post('http://localhost:3000/api/auth/logout', {}, {
        withCredentials: true, 
      });

      if(res.data.ok){
        toast.success(res.data.message);
        navigate('/');
      }else{
        toast.error("Failed to Logout !!");
      }
    }catch{
      toast.error("Internal Server Error !!");
    }

  }



  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#232946] to-[#1a1a2e]">
   
      <aside className="w-20 bg-[#232946]/80 backdrop-blur-lg flex flex-col items-center py-8 shadow-lg">
        
        <div className="mb-10">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 flex items-center justify-center shadow-lg">
            <FaHeartbeat className="text-white text-3xl" />
          </div>
        </div>
       
        <nav className="flex flex-col gap-8 text-gray-300 text-2xl">
          <FaChartBar className={`cursor-pointer ${activeTab === 'dashboard' ? 'text-green-400' : 'hover:text-green-400'}`} onClick={() => setActiveTab('dashboard')} />
          <FaUser className={`cursor-pointer ${activeTab === 'user' ? 'text-green-400' : 'hover:text-green-400'}`} onClick={() => setActiveTab('user')} />
          <FaCog className={`cursor-pointer ${activeTab === 'settings' ? 'text-green-400' : 'hover:text-green-400'}`} onClick={() => setActiveTab('settings')} />
          <FaSignOutAlt className="hover:text-red-400 cursor-pointer mt-auto" onClick={handleLogout} />
        </nav>

      </aside>

      
      <div className="flex-1 flex flex-col">
        
        <header className="flex items-center justify-between px-8 py-6 bg-[#232946]/60 backdrop-blur-md shadow-md">
          <div className="text-5xl font-bold text-white tracking-wide">Wellnest</div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="rounded-full px-4 py-2 bg-[#1a1a2e] text-normal text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <FaSearch className="absolute right-3 top-2.5 text-gray-400" />
            </div>
            <button className="bg-[#29a978] text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-400 transition">Download</button>
            <FaBell className="text-2xl text-gray-300 hover:text-green-400 cursor-pointer" />
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 flex items-center justify-center">
              <FaUser className="text-white text-xl" />
            </div>
          </div>
        </header>

    
        <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'dashboard' && (
            <>
              <div className="col-span-1 bg-[#232946]/80 rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center">
                <div className="text-[#29a978] mb-2 text-3xl font-bold ">Heart Rate</div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 flex items-center justify-center shadow-lg">
                      <span className="text-3xl text-white font-bold">220</span>
                    </div>
                    <span className="text-gray-400 text-[18px]">bpm</span>
                  </div>
                  <div className="flex gap-8 mt-4">
                    <div className="text-center">
                      <div className="text-xl text-white font-semibold">168</div>
                      <div className="text-[18px] text-gray-400">Steps</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl text-white font-semibold">2.08</div>
                      <div className="text-[18px] text-gray-400">Pace</div>
                    </div>
                  </div>
                </div>

              
              <div className="col-span-1 bg-[#232946]/80 rounded-2xl p-4 shadow-lg">
                <div className="text-[#29a978] mb-5 text-3xl font-bold ">Metrics</div>
                  <ResponsiveContainer width="100%" height={180}>
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
                      <XAxis dataKey="name" stroke="#a0aec0" fontSize={14} />
                      <YAxis stroke="#a0aec0" fontSize={14} />
                      <Tooltip contentStyle={{ background: '#232946', border: 'none', color: '#fff' }} />
                      <Line type="monotone" dataKey="uv" stroke="#29a978" strokeWidth={3} dot={false}  activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2, fill: '#29a978' }}/>
                    </LineChart>
                  </ResponsiveContainer>
                </div>

              
              <div className="col-span-1 bg-[#232946]/80 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
                <div className="text-[#29a978] mb-5 text-3xl font-bold ">Calories</div>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl text-white font-bold">186,000</span>
                    <span className="text-gray-400 text-[18px]">kcal</span>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <div className="bg-[#1a1a2e] px-4 py-2 rounded-lg text-white">31 min</div>
                  </div>
                </div>

            
              <div className="col-span-1 bg-[#232946]/80 rounded-2xl p-6 shadow-lg">
                <div className="text-[#29a978] mb-5 text-3xl font-bold ">Activity</div>
                  <ResponsiveContainer width="100%" height={120}>
                    <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
                      <XAxis dataKey="name" stroke="#a0aec0" fontSize={14} />
                      <YAxis stroke="#a0aec0" fontSize={14} />
                      <Tooltip contentStyle={{ background: '#232946', border: 'none', color: '#fff' }} />
                      <Bar dataKey="uv" fill="#29a978" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

            
              <div className="col-span-1 bg-[#232946]/80 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
                <div className="text-[#29a978] mb-5 text-3xl font-bold ">Tree Map</div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl text-white font-bold">+819</span>
                    <span className="text-gray-400">pts</span>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <div className="bg-[#1a1a2e] px-4 py-2 rounded-lg text-white">Calculation Rate</div>
                  </div>
                </div>

            
              <div className="col-span-1 bg-[#232946]/80 rounded-2xl p-6 shadow-lg">
                <div className="text-[#29a978] mb-5 text-3xl font-bold ">Relations</div>
                  <ResponsiveContainer width="100%" height={120}>
                    <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
                      <XAxis dataKey="name" stroke="#a0aec0" fontSize={14} />
                      <YAxis stroke="#a0aec0" fontSize={14} />
                      <Tooltip contentStyle={{ background: '#232946', border: 'none', color: '#fff' }} />
                      <Bar dataKey="pv" fill="#f87171" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
            </>
          )}

          {activeTab === 'settings' && (

            <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-[#232946]/80 rounded-2xl p-8 shadow-lg">
              <div className="text-[#29a978] mb-6 text-4xl font-bold border-b border-[#2d3748] pb-4">Settings</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-[18px] mb-2 font-semibold">App Theme</label>
                  <select className="w-full p-3 rounded-lg bg-[#1a1a2e] text-white focus:outline-none focus:ring-2 focus:ring-[#29a978]">
                    <option>Dark</option>
                    <option>Light</option>
                    <option>System Default</option>
                  </select>
                  <p className="text-sm text-gray-500 mt-1">Choose your preferred appearance</p>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-[18px] mb-2 font-semibold">Notifications</label>
                  <select className="w-full p-3 rounded-lg bg-[#1a1a2e] text-white focus:outline-none focus:ring-2 focus:ring-[#29a978]">
                    <option>All</option>
                    <option>Important Only</option>
                    <option>None</option>
                  </select>
                  <p className="text-sm text-gray-500 mt-1">Control what you get notified about</p>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-[18px] mb-2 font-semibold">Language</label>
                  <select className="w-full p-3 rounded-lg bg-[#1a1a2e] text-white focus:outline-none focus:ring-2 focus:ring-[#29a978]">
                    <option>English</option>
                    <option>Kinyarwanda</option>
                    <option>French</option>
                  </select>
                  <p className="text-sm text-gray-500 mt-1">Interface language preference</p>
                </div>

                <div>
                  <label className="block text-gray-300 text-[18px] mb-2 font-semibold">Account Visibility</label>
                  <select className="w-full p-3 rounded-lg bg-[#1a1a2e] text-white focus:outline-none focus:ring-2 focus:ring-[#29a978]">
                    <option>Public</option>
                    <option>Private</option>
                  </select>
                  <p className="text-sm text-gray-500 mt-1">Control who can see your profile</p>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <button className="bg-[#29a978] hover:bg-green-500 text-white px-5 py-2 rounded-lg font-medium transition">
                  Save Settings
                </button>
                <button className="bg-[#3a3a4d] hover:bg-[#4b4b62] text-white px-5 py-2 rounded-lg font-medium transition">
                  Reset to Default
                </button>
              </div>

            </div>
          
          )}


          {activeTab === 'user' && (
            
            <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-[#232946]/80 rounded-2xl p-8 shadow-lg">
              <div className="text-[#29a978] mb-6 text-4xl font-bold border-b border-[#2d3748] pb-4">User Profile</div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-6">
                <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 flex items-center justify-center text-white text-4xl font-bold shadow-md">
                  UUS
                </div>
                <div className="flex-1">
                  <div className="text-white text-2xl font-semibold">{user.username}</div>
                  <div className="text-gray-400 text-sm">{user.email}</div>
                  <div className="text-gray-400 text-normal mt-1 font-semibold">Member</div>
                  <div className="flex gap-4 mt-4">
                    <div className="bg-[#1a1a2e] px-3 py-1 rounded-full text-sm text-green-400">Active</div>
                    <div className="bg-[#1a1a2e] px-3 py-1 rounded-full text-sm text-blue-400">Joined: Mar 2024</div>
                  </div>
                </div>
              </div>

              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-400 text-sm">Phone Number</label>
                  <div className="text-white font-medium text-lg">+250 785 805 869</div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm">Address</label>
                  <div className="text-white font-medium text-lg">Kigali, Rwanda</div>
                </div>

                <div className="md:col-span-2">
                  <label className="text-gray-400 text-sm">Bio</label>
                  <div className="text-white text-base leading-6 mt-1">
                    Passionate about building smart solutions using React and Node.js. Loves solving Olympiad problems and mentoring students in STEM.
                  </div>
                </div>
              </div>

            
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-[#29a978] hover:bg-green-500 text-white px-5 py-2 rounded-lg font-medium transition">
                  Edit Profile
                </button>
                <button className="bg-[#3a3a4d] hover:bg-[#4b4b62] text-white px-5 py-2 rounded-lg font-medium transition">
                  Change Password
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-medium transition ml-auto" onClick={handleLogout}>
                  Logout
                </button>
              </div>

            </div>

          )}

        </main>

      </div>
    </div>
  );
};

export default Dashboard;
