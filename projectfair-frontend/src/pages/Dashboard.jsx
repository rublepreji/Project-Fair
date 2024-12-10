import React, { useEffect, useState } from 'react'
import Addproject from '../components/Addproject'
import Viewproject from '../components/Viewproject'
import Userproject from '../components/Userproject'

function Dashboard() {
  const [username,setUsername]=useState('')
   
  useEffect(()=>{
    setUsername(sessionStorage.getItem("username"))
  },[])
  return (
    <div>
      <div className="row p-5">
        <h2>Welcome {username}</h2>
      </div>
      <div className="row p-5">
        <div className="col-8">
          <div className="row">
            <div className="col-6">
              <h3>My Project</h3>
            </div>
            <div className="col-6">
            <Addproject/>
            </div>
          </div>
          <div className="row">
            <Viewproject/>
          </div>
        </div>
        <div className="col-4">
          <Userproject/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard