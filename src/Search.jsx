import React, {useState} from 'react'

 


export default function Search(props) {
   const [search , setSearch] = useState()
   const Change = (e) =>{
    setSearch(e.target.value)
   }
  props.onChange
  return (
      <div>
  <input placeholder ="Search" type = "text" onChange = {Change}/>
 </div>
  )
}
