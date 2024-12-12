import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { getAllUserProjectAPI } from '../../Services/AllApi';
import Projectcard from '../components/Projectcard';

function Projects() {
  //1 To hold token
  const [token,setToken]=useState('')

  const [alluserproject,setAlluserproject]=useState([])
  //2 To define function for apifetching

  const getalluserprojects=async()=>{
    if(token){
      const reqheader={
        "content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
      console.log(reqheader);
      //API calling
      const response = await getAllUserProjectAPI(reqheader)
      console.log(response);
      setAlluserproject(response.data)
      
      
    }
  }
  console.log(alluserproject);
  useEffect(()=>{
    setToken(sessionStorage.getItem("token"))
    getalluserprojects()
  },[token])
  
  return (
    <div>
      <div className="container p-5 text-center">
      <h3>All Projects</h3>
      <div className="d-flex w-70">
      <input type="text" className='form-control' placeholder='Search By Technology'/>
      <IoSearch className='fs-3 mt-1' style={{marginLeft:'-30px'}} />
      </div>
      <div className="row p-5">
           {
            alluserproject.length>=0? alluserproject.map(project=>(
              <div className="col-4">
              <Projectcard project={project}/>
            </div>
            )):'No projects'
           }
            
          </div>
      </div>
    </div>
  )
}

export default Projects