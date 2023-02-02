import React from 'react'
import './textbox.css'
import Mira from './Mira.jsx' 
import Text from './Text.jsx'
 
export default function  () {
  return (
    <div >
        <div className = 'Box'>
             
            <Mira />
            
        </div>
        <div className = "textb"> <Text text = "Hello"/></div>
    </div>
  )
}

//First quote then expression change