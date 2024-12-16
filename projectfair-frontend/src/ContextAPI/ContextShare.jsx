import React from 'react'
import { createContext, useState } from "react";

//create context
export const addprojectContextResponse =createContext()
export const addEditContextResponse =createContext()
function ContextShare({children}) {
     //2 create a state
     const [addprojectContext,setAddprojectContext]=useState('')
     const [addEditContext,setEditContext]=useState('')
  return (
    <div>
        <addprojectContextResponse.Provider value={{addprojectContext,setAddprojectContext}}>
        <addEditContextResponse.Provider value={{addEditContext,setEditContext}}>
        {children}
        </addEditContextResponse.Provider>
        </addprojectContextResponse.Provider>

    </div>
  )
}

export default ContextShare