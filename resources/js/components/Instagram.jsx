import React, {useState, useEffect} from 'react'
import { createRoot } from "react-dom/client"
import {Insta} from "scraper-instagram"

const Instagram = () => {
  const [post, setPost] = useState('')

  const username = 'nike/'
  const url = `https://www.instagram.com/${ username }`



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