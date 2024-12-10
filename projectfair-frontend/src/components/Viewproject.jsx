import React from 'react'
import { PiArrowSquareOutFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
function Viewproject() {
  return (
    <div>
      <div className="row d-block column p-5">
        <div className="col mt-3 mb-3 fw-bold shadow p-3 ">React App1 <span style={{float:'right'}}> <PiArrowSquareOutFill className='mx-1'/><FaGithub className='mx-1' /><RiDeleteBinLine className='mx-1'/></span></div>
        <div className="col mb-3 fw-bold shadow p-3">Project fair <span style={{float:'right'}}> <PiArrowSquareOutFill className='mx-1' /><FaGithub className='mx-1'/><RiDeleteBinLine className='mx-1'/></span></div>
        <div className="col mb-3 fw-bold shadow p-3">React <span style={{float:'right'}}> <PiArrowSquareOutFill className='mx-1'/><FaGithub className='mx-1'/><RiDeleteBinLine className='mx-1'/></span></div>
      </div>
    </div>
  )
}

export default Viewproject