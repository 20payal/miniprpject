import React,{useState} from 'react';
import "./SignIn.css";
import logo from "../img/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notifyA = (msg) => toast.error(msg)
  const notifyB = (msg) => toast.success(msg)
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


  const postData = () => {

    if(!emailRegex.test(email)){
        notifyA("Invalid Email")
        return
    }

    fetch("http://localhost:5000/signin",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email: email,
          password: password
        })
      }).then(res=>res.json())
        .then(data =>{
          if(data.error){
            notifyA(data.error)
          }else{
            notifyB(data.message)
            navigate("/")
          }
          console.log(data)
        })
  }



  return (
    <div className='signIn'>
      <div>
        <div className='loginForm'>
          <img className='signUpLogo' src={logo} alt='' />
          <div>
          <input type='email' name='email' id='email' value={email} placeholder='Enter Email Id' onChange={(e)=>{setEmail(e.target.value)}} />
          </div>
          <div>
          <input type='password' name='password' id='password' value={password} placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}} />
          </div>
          <input type='submit' id='login-btn' onClick={()=>{
            postData()}} value="Sign In" />
        </div>
        <div className='loginForm2'>
          Create an account ?
          <Link to="/signup">
          <span style={{color:"blue",cursor:"pointer"}}>Singn Up</span> 
                
          </Link>
        </div>
      </div>
    </div>
  )
}
