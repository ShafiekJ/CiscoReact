import React, {useState ,useEffect} from 'react'
import './text.css'


const Typing = ({text}) => {

  
const [currentText , setCurrentText] = useState('');
const [index , setIndex] = useState(0);
useEffect(() => {
  setTimeout(() => {
  setCurrentText((value) => value + text.charAt(index));
  setIndex((prev) =>prev +1);
  
}, 100);
    console.log(index)
}, [currentText])

return <>{currentText}</>
}
export default function Text({text}) {
  return (
    <div > <p className = "text"><Typing text = {text}/></p></div>
  )
}
