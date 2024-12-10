import React from 'react'
import { IoSearch } from "react-icons/io5";
function Projects() {
  return (
    <div>
      <div className="container p-5 text-center">
      <h3>All Projects</h3>
      <div className="d-flex w-70">
      <input type="text" className='form-control' placeholder='Search By Technology'/>
      <IoSearch className='fs-3 mt-1' style={{marginLeft:'-30px'}} />
      </div>
      </div>
    </div>
  )
}

export default Projects