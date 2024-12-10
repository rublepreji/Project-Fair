import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import { LiaArrowsAltVSolid } from "react-icons/lia";

function Userproject() {
  const [open, setOpen] = useState(false);
  return (
    <div>
       <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text"aria-expanded={open} style={{float:'right'}} className='bg-dark'>
       <LiaArrowsAltVSolid/>
      </Button >
      <Collapse in={open}>
        <div id="example-collapse-text">
        <div className='text-center'>
        <img width={200} height={200} src="https://th.bing.com/th/id/OIP.clPV9PMNJFqi1hvsllmdvAHaHa?w=768&h=768&rs=1&pid=ImgDetMain" alt="" />
         <input type="text" placeholder='Username' className='form-control mb-3 mt-3'  />
         <input type="text" placeholder='GitHub' className='form-control mb-3'  />
         <input type="text" placeholder='LinkedIn' className='form-control mb-3'  />
        </div>
        </div>
      </Collapse>
    </div>
  )
}

export default Userproject