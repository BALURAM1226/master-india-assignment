import React,{ useState, useEffect} from 'react';
import './loginpage.css';
import {Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Login(){
 
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    
  const signIn = async(e)=>{
      e.preventDefault();
      const res = await axios.post('http://localhost:5000/api/v1/register',{
        username: username,
        password: password,
      }).catch(err => console.log(err));
  
      localStorage.setItem('token', res.data)
      navigate('/search')
  }


  const verifyUser = async()=> {
    const token = localStorage.getItem('token');
    const res = await axios.post('http://localhost:5000/api/v1/login',{
       token: token
    }).catch(err => console.log(err));
    if(res.data){
      navigate('/search')
    
    }
    
  }
  useEffect(()=>{
     verifyUser()
  },[])

  return(
    <div className="login-page">
    <div className="login_container">
       <h2>Sign-In</h2>

      <form action="">

        <h5>Username</h5>
        <input type="text" value={username} onChange={event => setUsername(event.target.value)}/>

        <h5>Password</h5>
        <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>

      <button onClick={signIn} className="signIn_btn">Sign In</button>

      </form>
      <div className="register-btn">
          you don't have an account? 
          <Link  to="/register" style={{marginLeft: 6}}>
              sign up
          </Link>
      </div>
    </div>
        
    
    </div>

  )
}