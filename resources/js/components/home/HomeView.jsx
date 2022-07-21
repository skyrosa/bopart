import React, {useState, useEffect} from 'react'
import Button from '../Button'
import { createRoot } from "react-dom/client"
import SmallCard from '../card/SmallCard'

const HomeView = () => {
    return (
        <>
        <div className='bg-colorPink flex  min-w-fit   h-full border-2  '>



        <SmallCard></SmallCard>
        <SmallCard></SmallCard>
        <SmallCard></SmallCard>
        
        </div>

        </>
    )
}


export default HomeView
if (document.getElementById('home-view')) {
    const root = createRoot(document.getElementById("home-view"));
    root.render(<HomeView />);
}