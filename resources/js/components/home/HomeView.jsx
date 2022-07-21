import React, {useState, useEffect} from 'react'
import Button from '../Button'
import SmallCard from '../card/SmallCard'

const HomeView = () => {
    return (
        <>
        <SmallCard></SmallCard>
        </>
    )
}


export default HomeView
if (document.getElementById('home-view')) {
    const root = createRoot(document.getElementById("home-view"));
    root.render(<HomeView />);
}