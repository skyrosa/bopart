import React, {useState, useEffect} from 'react'
import { createRoot } from "react-dom/client"

import SmallCard from '../card/SmallCard'
import { RowImagesA } from './RowImages'
import { TextImageMiscA } from './TextImageMisc'
import { RowImagesB } from './RowImages'
import { TextImageMiscB } from './TextImageMisc'

const HomeView = () => {
    return (
        <>

    <div className=' bg-gradient-to-l from-colorTourq to-colorPink'>

        <section className=''>
            <RowImagesB/>
        </section>   
        <section className=''>
            <TextImageMiscA/>
        </section>
        <section className='flex p-5 justify-center space-x-10  '>
            <SmallCard/>
            <SmallCard/> 
            
        </section>
        <section className=''>
            <TextImageMiscB/>
        </section>
    </div>

        </>
    )
}


export default HomeView
if (document.getElementById('home-view')) {
    const root = createRoot(document.getElementById("home-view"));
    root.render(<HomeView />);
}