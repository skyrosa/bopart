import React, {useState, useEffect} from 'react'
import { createRoot } from "react-dom/client"
import Spinner from '../Spinner'

const Table = () => {

    const [events, setEvents] = useState([])
    const [update, setUpdate] = useState(false)

    const getEvents = async () => {
        try {
            const response = await axios.get('/api/getAllEvents')
            setEvents(response.data)
            setUpdate(false)
        } catch(err) {
            console.log(err.response.request.response)
        }
    }

    const alert = (event) => {
        swal({
          text: 'Estas a punto de unirte al evento ' + event.name,
          icon: 'info',
          buttons: ['No', 'Si'],
        }).then(response =>{
          response ? deleteEvent(event.id) : ''
        })
      }

    const deleteEvent = async (id) => {
        try {
            const response = await axios.delete(`/events/${ id }`)
            setUpdate(true)
            swal({
              text: response.data.message,
              icon: response.data.deleted ?'success' : 'warning',
            })
            getEvents()
        } catch(err) {
            console.log(JSON.parse(err.response.request.response).message)
        }
      }

    useEffect(() => {
        getEvents()
    }, [])


  return (
    <>
        {
            !events.length ? '' :
            events.map((event, index) =>{
                return  <tr key={index}>
                            <th className='px-3 py-2'>
                                <a href={'/events/'+ event.id} className='text-xl font-bold font-sansita text-colorWhite hover:text-colorWhite' >{event.name}</a>
                            </th> 
                            <th className='flex flex-row w-full justify-end mt-2 '>
                            <a href={'/events/'+ event.id +'/edit'} className='focus:outline-none text-white bg-colorGreen hover:bg-[#4e9f4c] focus:ring-4 focus:ring-bg-[#4e9f4c] font-inter rounded-lg text-sm px-4 py-2.5 mr-2 mb-2'>Editar</a>
                            <button onClick={() => alert(event)} className='focus:outline-none text-white bg-colorPink hover:bg-[#be6665] focus:ring-4 focus:ring-bg-[#4e9f4c] font-inter rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 '>Eliminar</button>
                            </th>
                        </tr>
            })
        }
    </>
  )
}

export default Table
if (document.getElementById('table')) {
    const root = createRoot(document.getElementById('table'));
    root.render(<Table />);
}