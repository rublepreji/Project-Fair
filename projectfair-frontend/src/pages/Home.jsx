import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Projectcard from '../components/Projectcard';

function Home() {
  //hold token from sessionStorage
  const [token,setToken]=useState("")

  useEffect(()=>{
    setToken(sessionStorage.getItem("token"))
  },[token])
  return (
    <div>
      <div className="container">
        <div className="row">
        <div className="col-6 p-5 ps-5">
            <h1 className='text-primary text-center m-3'>Project Fair</h1>
            <p style={{textAlign:"justify"}} >Project management is the application of specific knowledge, skills, methodologies, and techniques aimed at achieving specific and measurable project goals, including, ultimately, successful project completion.</p>
            <div className="div text-center">
             {
              token ?
              <Link to={'/dashboard'}>
              <button className='bg-primary rounded text-light p-1 border-light '>Get Started</button>
              </Link>
              :
               <Link to={'/login'}>
               <button className='bg-primary rounded text-light p-1 border-light '>Get Started</button>
               </Link>
             }
            </div>
        </div>
        <div className="col-6">
            <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg" alt="" />
        </div>
        </div>
        <div className="div">
          <h3>Explore our projects</h3>
          <div className="row p-5">
            <div className="col-4">
              <Projectcard/>
            </div>
            <div className="col-4"><Projectcard/></div>
            <div className="col-4"><Projectcard/></div>
          </div>
        </div>
        <div className="div text-center">
          <Link to={'/projects'}>
            <button className='btn btn-dark'>View Project</button>
          </Link>
        </div>
        </div>
    </div>
  )
}

export default Home