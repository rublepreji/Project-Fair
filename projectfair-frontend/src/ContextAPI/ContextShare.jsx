import React from 'react'
import { createContext, useState } from "react";

//create context
export const addprojectContextResponse =createContext()

function ContextShare({children}) {
     //2 create a state
     const [addprojectContext,setAddprojectContext]=useState('')
  return (
    <div>
        <addprojectContextResponse.Provider value={{addprojectContext,setAddprojectContext}}>
            {children}
        </addprojectContextResponse.Provider>

    </div>
  )
}

export default ContextShare