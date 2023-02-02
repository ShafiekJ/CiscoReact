import React , { useEffect ,useState} from 'react'
import axios from 'axios'
import './Block.css'


export default function Block(props ) {
  if(props.visible == false){return <div></div>}
  const[version, setVersion] = useState('red')
  const[location, setLocation] = useState( )
  const [refresh, setRefresh] = useState(false)

 
  useEffect (() =>{
    setLocation('None')
    const arr = []

  axios.get( `https://pokeapi.co/api/v2/pokemon/${props.props.id}/encounters`)
  .then((res) => {   res.data.map(p => {
     p.version_details.map(
      k => {   
    if( k.version.name == version )
    {arr.push(p.location_area.name.replace(/-/g," ").replace(/' area'/g, '') + "\n\n")
 
        
    }
    setLocation(arr)
 
 
}


   )
    
    if(arr.length == 0){setLocation('None') }
     console.log(p) 
  }

  )
})
 
  }, [props.props.id ,  props.visible ,version])

 
  return(
   
 <div className = "popup" >
 <img class = "popup-img"src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.props.id}.png`} />
    <div className ='info'> 
      <div className='version' > {() =>setVersion('')}
        <button onClick={ () =>setVersion('red')}>Red</button>
        <button onClick={ () =>setVersion('blue')}>Blue</button>
        <button onClick={ () =>setVersion('yellow')}>Yellow</button>
        <button onClick={ () =>setVersion('gold')}>Gold</button>
        <button onClick={ () =>setVersion('silver')}>silver</button>
        <button onClick={ () =>setVersion('crystal')}>Crystal</button>
        <button onClick={ () =>setVersion('ruby')}>Ruby</button>
        <button onClick={ () =>setVersion('sapphire')}>Sapphire</button>
        <button onClick={ () =>setVersion('emerald')}>Emerald</button>
        <button onClick={ () =>setVersion('diamond')}>Diamond</button>
        <button onClick={ () =>setVersion('pearl')}>Pearl</button>
        <button onClick={ () =>setVersion('platinum')}>Platinum</button>
        <button onClick={ () =>setVersion('heartgold')}>Heartgold</button>
        <button onClick={ () =>setVersion('soulsilver')}>Soulsilver</button>
        <button onClick={ () =>setVersion('black')}>Black</button>
        <button onClick={ () =>setVersion('white')}>White</button>
        <button onClick={ () =>setVersion('black-2')}>Black 2</button>
        <button onClick={ () =>setVersion('white-2')}>White 2</button>
        <button onClick={ () =>setVersion('x')}>X</button>
        <button onClick={ () =>setVersion('y')}>Y</button>
        <button onClick={ () =>setVersion('sun')}>Sun</button>
        <button onClick={ () =>setVersion('moon')}>Moon</button>


      </div>
    Id: {props.props.id} <br></br>
    Name: {props.props.name} <br></br>
    Location: {location}   <br></br>
    Types: {props.props.types.map(p => p = p.type.name + ' ')} <br></br>
    <button className = "close" onClick ={ () =>  props.setVisible(false)} >Close</button>
</div>

  </div>

  )
}
