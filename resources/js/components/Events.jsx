import { map } from 'lodash'
import React, {useState, useEffect} from 'react'
import { createRoot } from "react-dom/client"
import SmallCard from './card/SmallCard'
import Spinner from './Spinner'

const Events = () => {

    const [events, setEvents] = useState([])
    const getEvents = async () => {
        try {
            const response = await axios.get('/getAllEvents')
            setEvents(response.data)
        } catch(err) {
            console.log(err.response.request.response)
        }
    }


    useEffect(() => {
        getEvents()
    }, [])

  return (
    <div className='w-full flex flex-row flex-wrap justify-center gap-6'>
        {   !events.length ? <Spinner />:
            events.map((event, index) => {
            return <SmallCard key={index} event={event} />
        } )}
    </div>
  )
}

export default Events
if (document.getElementById('events')) {
    const root = createRoot(document.getElementById('events'));
    root.render(<Events />);
}