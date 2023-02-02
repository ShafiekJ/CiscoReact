import { useState, useEffect } from 'react'
import './App.css'
import Pokelist from './Pokelist'
import axios from 'axios'
 import Background from './Background'
 

function App() {
  const [ pokemon, setPokemon] = useState([ ])
  const [currentPageUrl , setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=905")
 
  const [loading, setLoading] = useState(true)
  const [dat , setDat ] = useState()
 
  

  useEffect(() => {
    setLoading(true)
    let cancel
    async function update(){
    

 

 await axios.get(currentPageUrl , {
    cancelToken : new axios.CancelToken( 
      c => cancel  = c
    )
  }).then(res => {
    setLoading(false)
  
 
  res.data['results'].map(p => 
    p =   axios.get(p.url).then(res =>{setDat(res.data)  ,  setPokemon(prevPoke =>{
       return [...prevPoke, res.data]})
  
    } ))
  
   }

   ).catch(e =>{if (axios.isCancel(e))  return}) 
    
    
 
   
   
return () =>cancel()
}
 
 update()
 
    },[currentPageUrl] )


  
  if (loading) {return "Girls are now preparing please wait..."}
 
 
  return (
    <div className="App">
       
      
      <div className='background'><Background/></div>
      <div className="wrap">
      <Pokelist pokemon ={pokemon} />
    </div>

    </div>
  );
}

export default App

//block, filter , type damages chart