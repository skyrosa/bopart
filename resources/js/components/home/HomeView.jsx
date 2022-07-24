import React, {useState, useEffect} from 'react'
import { createRoot } from "react-dom/client"

import SmallCardA from '../card/SmallCard'
import { RowImagesA } from './RowImages'
import { RowImagesB } from './RowImages'
import { TextImageMiscLeft } from './TextImageMisc'
import { TextImageMiscRight } from './TextImageMisc'

const HomeView = () => {
    return (
        <>

    <div className=' bg-gradient-to-l from-colorTourq to-colorPink'>

        <section className=''>
            <RowImagesB/>
        </section>   
        <section className=''>
            <TextImageMiscLeft/>
        </section>
        <section class=' flex flex-col 2xl: xl:flex-wrap sm:flex-wrap sm:flex-row p-10 overflow-hidden items-center gap-7  w-full justify-center    '>

            <SmallCardA/>
            <SmallCardA/> 
            <SmallCardA/>
            <SmallCardA/> 
            <SmallCardA/>
            <SmallCardA/> 
            <SmallCardA/>
            <SmallCardA/> 
            <SmallCardA/> 
            
        </section>
        <section className=''>
            <TextImageMiscRight/>
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