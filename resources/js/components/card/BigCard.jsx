import React, {useState, useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import Spinner from '../Spinner'

const BigCard = () => {

  const [event, setEvent] = useState()

  const getEvent = async () => {
      try {
          const response = await axios.get('/api/getFirstEvents')
          setEvent(response.data[0])
      } catch(err) {
          console.log(err.response.request.response)
      }
  }

  useEffect(() => {
      getEvent()
  }, [])

  return (
    <div className='flex w-full md:w-5/12 shadow border-1 border-[#929191] rounded-lg'>
      {
        !event ? <Spinner />: 
        <div className='w-full flex flex-row'>
          <div className={`w-full ${!event.image ? 'bg-colorBlack': ''} bg-cover bg-center bg-no-repeat rounded-l-lg`} style={{ backgroundImage: `url(`+event.image+`)` }}></div>
          <div className='w-full card flex flex-col gap-3 font-sansita'>
            <h1 className='w-full text-center font-bold text-base md:text-3xl'>{event.name}</h1>
            <div>
              <p className='w-full text-sm md:text-xl truncate_text'>{event.description} </p><a href={`/events/`+ event.id} className='text-colorTourq text-sm md:text-xl'>Ver mas</a>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default BigCard
if (document.getElementById('big-card')) {
    const root = createRoot(document.getElementById('big-card'));
    root.render(<BigCard />);
}