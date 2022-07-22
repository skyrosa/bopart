import React, {useState, useEffect} from 'react'
import { createRoot } from "react-dom/client"

import SmallCard from '../card/SmallCard'
import { RowImagesA } from './RowImages'
import { TextImageMiscA } from './TextImageMisc'

const HomeView = () => {
    return (
        <>


        <section className=''>
            <RowImagesA></RowImagesA>
        </section>   
        <section className='flex p-5 justify-center space-x-10  '>
            <SmallCard></SmallCard>
            <SmallCard></SmallCard>
            <SmallCard></SmallCard>
        </section>
        <section className=''>
            <TextImageMiscA/>
        </section>

        </>
    )
}


export default HomeView
if (document.getElementById('home-view')) {
    const root = createRoot(document.getElementById("home-view"));
    root.render(<HomeView />);
}