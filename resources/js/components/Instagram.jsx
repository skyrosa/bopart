import React, {useState, useEffect} from 'react'
import { createRoot } from "react-dom/client"
import Insta from "scraper-instagram"

const Instagram = () => {
  const [post, setPost] = useState('')

  const yourSessionId = '3117114579%3AFLkElr6VCakIY5%3A13%3AAYdYFHYSAY9F6PWbOizRJEsygoCN_ICFbMZptTBXBA'
  const InstaClient = new Insta();
  
  const read = () => {
    InstaClient.authBySessionId(yourSessionId)
  } 
  
  useEffect( function(){
    read()
  }, []); 

  return (
    <div className='w-full h-52 bg-setBlack-100 p-3'>
      hola
    </div>
  )
}

export default Instagram

if (document.getElementById('instagram')) {
    const root = createRoot(document.getElementById("instagram"))
    root.render(<Instagram />)
}