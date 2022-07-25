import React, {useState, useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import SmallCard from './card/SmallCard'
import Spinner from './Spinner'

const Slide = () => {

    const [events, setEvents] = useState([])
    const getEvents = async () => {
        try {
            const response = await axios.get('/api/getFirstEvents')
            setEvents(response.data)
        } catch(err) {
            console.log(err.response.request.response)
        }
    }


    useEffect(() => {
        getEvents()
    }, [])


  return (
    <div className='w-full flex flex-row gap-4 overflow-x-auto scroll pl-5'>
        {   !events.length ? <Spinner />:
            events.map((event, index) => {

            return <div className='w-96 py-3 '>
                <SmallCard key={index} event={event} />
            </div> 
        } )}
    </div>
  )
}

export default Slide
if (document.getElementById('slide')) {
    const root = createRoot(document.getElementById('slide'));
    root.render(<Slide />);
}