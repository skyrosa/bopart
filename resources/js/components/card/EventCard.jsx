import React, {useState, useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import Spinner from '../Spinner'

const EventCard = (props) => {

    const [data, setData] = useState()
    const [isCheck, setIsCheck] = useState(false)

    
    const getEvent = async () => {
        try {
            const response = await axios.get(`/searchEvent/${props.event}`)
            setData(response.data)
        } catch(err) {
            console.log(err.response.request.response)
        }
    }


    const alert1 = () => {
      swal({
        text: 'Estas a punto de unirte al evento ' + data.name,
        icon: 'info',
        buttons: ['No', 'Si'],
      }).then(response =>{
        response ? checkIn(data.id) : ''
      })
    }
  
    const alert2 = () => {
      swal({
        text: 'Estas a punto de retirarte del evento ' + data.name,
        icon: 'info',
        buttons: ['No', 'Si'],
      }).then(response =>{
        response ? dropOut(data.id) : ''
      })
    }

    const checkIn = async (id) => {
      try {
          const response = await axios.get(`/events/${ id }/check-in`)
          setIsCheck(true)
          swal({
            text: response.data.message,
            icon: response.data.checkIn ?'success' : 'warning',
          })
      } catch(err) {
          const message = JSON.parse(err.response.request.response).message
          console.log(JSON.parse(err.response.request.response).message)
          message == 'Unauthenticated.' ? window.location = '/login' : ''
      }
    }

    const dropOut = async (id) => {
      try {
          const response = await axios.get(`/events/${ id }/drop-out`)
          setIsCheck(false)
          swal({
            text: response.data.message,
            icon: response.data.dropOut ?'success' : 'warning',
          })
      } catch(err) {
          const message = JSON.parse(err.response.request.response).message
          console.log(JSON.parse(err.response.request.response).message)
          message == 'Unauthenticated.' ? window.location = '/login' : ''
      }
    }


    useEffect(() => {
        getEvent()
    }, [isCheck])

  return (
    <div className='w-full lg:w-3/5 shadow-2xl rounded-lg'>
      {
        !data ? <Spinner />:
        <div className='font-sansita flex flex-col'>

          <div className={`w-full h-60 ${!data.image ? 'bg-colorBlack': ''} rounded-t-lg bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url(`+data.image+`)` }}></div>

          <div className='p-3 lg:p-5 w-full flex flex-col gap-6'>
            <h1 className='font-extrabold text-center text-4xl'>{data.name}</h1>

            <div className='flex flex-col md:flex-row gap-5'>

              <div className='w-full flex justify-center '>
                <p className='text-2xl w-full lg:w-5/6 text-center'>{data.description}</p>
              </div>

              <div className='w-full flex flex-col gap-3 '>
                
                <h1 className='font-bold text-2xl '>Inicia: {data.startTime}</h1>
                <h1 className='font-bold text-2xl '>Termina: {data.endTime}</h1>
                <h1 className='font-bold text-2xl '>Puestos disponibles: {data.capacity}</h1>
                <h1 className='font-bold text-2xl '>{data.type}</h1>
              </div>
            </div>

            <h1 className='text-center font-bold text-colorPink text-3xl'>{data.date}</h1>
            <h1 className='text-center font-bold text-2xl'>{data.address}</h1>
            {
              !data.isCheck ? 
              <button onClick={alert1} className='tracking-[0.20em] py-3 font-librefranklin font-bold uppercase bg-colorGreen hover:bg-[#50a34e] rounded-[10px] flex justify-center items-center text-colorWhite text-base md:text-xl'>
                Apuntate 
              </button> : 
              <button onClick={alert2} className='tracking-[0.20em] py-3 font-librefranklin font-bold uppercase bg-colorYellow hover:bg-[#dca956] rounded-[10px] flex justify-center items-center text-colorWhite text-base md:text-xl'>
                Desapuntate 
              </button>
            }

          </div>

        </div>
        
      }
    </div>
  )
}

export default EventCard
if (document.getElementById('event-card')) {
    const root = createRoot(document.getElementById('event-card'));
    let event = document.getElementById('event-card').getAttribute('event');
    root.render(<EventCard event={event} />);
}