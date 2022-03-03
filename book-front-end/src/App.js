import React from 'react'
import './App.css';
import Search from './Conponents/Search';
import Userbooks from './Conponents/Userbooks';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './Conponents/Register';
import Login from './Conponents/Loginpage';

function App() {


  return (
    <div className="App"> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/userbooks" element={<Userbooks/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
       
    </div>
  );
}

export default App;
