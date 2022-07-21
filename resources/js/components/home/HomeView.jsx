import React, {useState, useEffect} from 'react'
import { createRoot } from "react-dom/client"

import SmallCard from '../card/SmallCard'
import { RowImagesA } from './RowImages'
import { TextImageMiscA } from './TextImageMisc'

const HomeView = () => {
    return (
        <>


        <section>
            <RowImagesA></RowImagesA>
        </section>   
        <section className='flex gap-10 self-center px-40 font-sansita | flex min-h-screen '>
            <SmallCard></SmallCard>
            <SmallCard></SmallCard>
            <SmallCard></SmallCard>
        </section>
        <section>
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