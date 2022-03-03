import React,{ useState} from 'react';
import './register.css';
import {Link } from 'react-router-dom';
// import {auth} from './firebase';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Register(){
 
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    console.log(username,password)
    
   const handleSignup = async(e)=>{
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/v1/register',{
      username: username,
      password: password,
    }).catch(err => console.log(err));

    localStorage.setItem('token', res.data)
    navigate('/search')
  }

  return(
    <div className="loginpage">
  
    <div className="login_container">
       <h2>Sign-In</h2>

      <form action="">

        <h5>Username</h5>
        <input type="email" value={username} onChange={event => setUsername(event.target.value)}/>

        <h5>Password</h5>
        <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>

      <button onClick={handleSignup} className="signIn_btn">Sign up</button>

      </form>
      <div className="register-btn">
          Already have an account? 
          <Link to="/" style={{marginLeft: 6}}>
              sign in
          </Link>
      </div>
    </div>
        
    
    </div>

  )
}