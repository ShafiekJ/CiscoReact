import React , {useState} from 'react'
import './Navbar.css'
 
 

 
 
export default function Navbar({setFilter}) {
 
     
    
 

  return (
    
    <div className = "navbar"  > 
   
   
    <div className = "search">
    <input id = 'search-input' placeholder = "Search"type = "text" onChange = {(e) => setFilter(e.target.value) }/>
    </div>
 
    
    </div>
  )
}
