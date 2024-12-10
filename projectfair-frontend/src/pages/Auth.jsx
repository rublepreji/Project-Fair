import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../../Services/AllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Auth({register}) {
  const navigate= useNavigate()
//To hold register details
  const [userDetails,setuserDetails]=useState({
    username:"",
    email:"",
    password:""
  })
  const handleRegister=async(req,res)=>{
    console.log(userDetails);
    const {username,email,password}=userDetails
    if(!username||!email||!password){
      toast.success('Please fill the form', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
        
        });
        
    }else{
      try{
        const response= await registerAPI(userDetails)
      console.log(response);
      if(response.status==200){
        
        toast.success(response.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
          
          });
          setTimeout(()=>{
            navigate('/login')
          },6000)
      }else{
        toast.success(response.response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
          
          });
      }
      }catch(error){
        console.log(error);
        
      }
      
    }
  }
  const handleLogin=async()=>{
    const {email,password}=userDetails
    if(!email||!password){
      alert("Please fill the form");
      
    }
    else{
      try{
        const response =await loginAPI(userDetails)
      console.log(response);
      if(response.status==200){
        toast.success("Login successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
          
          });
          setTimeout(()=>{
            navigate('/')
          },6000)
          sessionStorage.setItem("username",response.data.currentUser.username)
          sessionStorage.setItem("token",response.data.token)
          
      }else{
        toast.success(response.response.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
          
          });
      }
      }catch(err){
        console.log(err);
        
      }
    }
  }
    
  return (
    <div>
     <div className="row">
      <div className="col-6 p-2">
        <img className='mb-5 ms-5' src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" alt="" />
      </div>
      <div className="col-6 p-5 text-center">
        <h3>Project Fair</h3>
        <h6>Sign{
          register?'Up':'In'
        }</h6>
        {
          register && <input type="text" onChange={e=>setuserDetails({...userDetails,username:e.target.value})} placeholder='Username' className='form-control mb-3' />
        }
        <input type="Email" onChange={e=>setuserDetails({...userDetails,email:e.target.value})} placeholder='Email' className='form-control mb-3' />
        <input type="password" onChange={e=>setuserDetails({...userDetails,password:e.target.value})} placeholder='Password' className='form-control mb-3' />
        {
          register? <div> 
            <button className='mb-3 bg-dark text-light rounded p-1'onClick={handleRegister} >SignUp</button>
            <p>Already Registered?<Link to={'/login'}>Login Now</Link></p>
          </div>
          :
          <div>
             <button className='mb-3 bg-dark text-light rounded p-1' onClick={handleLogin}>SignIn</button>
             <p>New to here?<Link to={'/register'}>Register Now</Link></p>
          </div>
        }

<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
      </div>
     </div>
    </div>
  )
}

export default Auth