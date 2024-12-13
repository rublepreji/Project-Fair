import React, { useContext, useEffect, useState } from 'react'
import { PiArrowSquareOutFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { getUserProjectAPI } from '../../Services/AllApi';
import { addprojectContextResponse } from '../ContextAPI/ContextShare';
import Editproject from './Editproject';

function Viewproject() {
  const {addprojectContext,setAddprojectContext}=useContext(addprojectContextResponse)
  const [token,settoken]=useState('')
  const [projectDetails,setProjectdetails]=useState([])
  const getuserproject=async()=>{
    if(token){
      
      const reqheader={
        "content-Type":"multipart/form-json",
        "Authorization":`Bearer ${token}`
      }
      console.log(reqheader);
      try{
        const response = await getUserProjectAPI(reqheader)
        console.log(response);
        setProjectdetails(response.data)
        
      }catch(err){
        console.log(err);
        
      }
    }
  }
  useEffect(()=>{
    settoken(sessionStorage.getItem("token"))
    getuserproject()
  },[token,addprojectContext])
  return (
    <div>
      <div className="row d-block column p-5">
          {
            projectDetails.length>0?projectDetails.map(project=>(
              <div className="col mt-3 mb-3 fw-bold shadow p-3 d-flex">
                <h3>{project.title}</h3> 
              <span style={{float:'right'}}>
                <Editproject project={project}/>
                 <PiArrowSquareOutFill className='mx-1'/>
                 <FaGithub className='mx-1' />
                 <RiDeleteBinLine className='mx-1'/>
                 </span>
                 </div>
            )):'No projects'
          }        
      </div>
    </div>
  )
}

export default Viewproject