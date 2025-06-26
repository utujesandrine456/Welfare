import React from "react";
import './index.css';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";


function App() {

  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
    </Router>
      
      
    </>
  )
}

export default App;
