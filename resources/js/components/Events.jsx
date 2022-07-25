import React, {useState, useEffect} from 'react'
import { createRoot } from "react-dom/client"
import SmallCard from './card/SmallCard'
import Spinner from './Spinner'
import Pagination from './pagination/Pagination'


const Events = () => {

    const [events, setEvents] = useState([])
    const [page, setPage] = useState(1)
    const [splitPage, setSplitPage] = useState(3)

    const max = Math.round(events.length / splitPage);

    const next = () => {
        if(page < max){
            setPage(page + 1)
        }
      }
    
    const previous = () => {
        if(page > 1){
            setPage(page - 1)
        }
    }


    const getEvents = async () => {
        try {
            const response = await axios.get('/api/events')
            setEvents(response.data)
        } catch(err) {
            console.log(err.response.request.response)
        }
    }


    useEffect(() => {
        getEvents()
    }, [])

  return (
    <div className='w-full flex flex-col gap-5'>
    
        <div className='w-full flex flex-row flex-wrap justify-center gap-6'>
            {   !events.length ? <Spinner />:
                events.slice((page - 1) * splitPage,
                (page - 1) * splitPage + splitPage
                ).map((event, index) => {
                return <SmallCard key={index} event={event} />
            } )
            }
        </div>
        {
            events.length ? <Pagination page={page} max={max} setPage={setPage} next={next} previous={previous} />: ''
        }
    </div>
  )
}

export default Events
if (document.getElementById('events')) {
    const root = createRoot(document.getElementById('events'));
    root.render(<Events />);
}