import axios from 'axios'
import React, {useState}    from 'react'
import Navbar from './Navbar'
import './Pokelist.css'
import Sticky from 'react-sticky-el'
import Block from './Block'
 
 
export default function Pokelist({pokemon}) {

  const [filter ,setFilter] = useState('')
   
  const [visible, setVisible] = useState(false)
  const [poke,setpoke] = useState(false)

  
function handler(poke, visible){
  setpoke(poke)
setVisible(visible)
 
}

  return (
   
 
     <div  > <Sticky><Navbar  setFilter = {setFilter}/> 
  <Block props = {poke} visible = {visible} setVisible = {setVisible}/></Sticky>
     {pokemon 
     .filter((poke) => poke.name .includes(filter))
     .map(p=>(  
        <div key = {p.id} className = "pokemon" onClick = {()=>  handler(p, true)}>   {p.name}
 <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`} />
        {p.types.map( k =>(k.type.name + ' '))}
 </div>
    ) 
    )}
 
    </div>
  )
}
//images, search function, locations/how to obtain, info in different games, abilities, egg group, evolution cycle, different sorting,

/*search 
return document.getelemetbyid(pokemon id) */