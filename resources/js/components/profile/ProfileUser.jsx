import React, {useEffect, useState} from 'react'
import { createRoot } from "react-dom/client"
import ProfileEvent from './ProfileEvent'
import Spinner from '../Spinner'

const ProfileUser = () => {
  const [myUser, setMyUser] = useState()
  const [myEvents, setMyEvents] = useState([])

  const getInformation = async () => {
    const user = await axios.get('/myInformation')
    setMyUser(user.data)
    const events = await user.data.event
    setMyEvents(events)
  }

  const dropOutEvent = async (id) => {
    await axios.get(`events/${id}/drop-out`)
    setMyEvents(false)
  }

  useEffect(() => {
    getInformation()
  }, [myEvents])

  return ( 
    <section className='container'>
      <div className='flex justify-center'>
        { !myUser ? <Spinner /> :
        <div className='bg-colorWhite w-full lg:w-2/4 rounded-[20px] flex flex-col items-center'>

          <div className='w-5/6 lg:w-4/5 border-1 border-[#959393] rounded-[20px] my-4 flex flex-col items-center'>
              <h1 className='font-inter font-bold text-[20px] lg:text-[32px] capitalize my-3'>perfil personal</h1>
              <span className='border-b-2 border-[#959393] w-48 lg:w-80'></span>
              <div className='mt-3 bg-colorTourq py-2  w-48 lg:w-80 text-center font-inter rounded-md capitalize'>
                { myUser.name}
              </div>
              <div className='mt-3 mb-3 bg-colorTourq py-2 w-48 lg:w-80 text-center font-inter rounded-md'>
                {myUser.email}
              </div>
          </div>

          <h1 className='font-inter font-bold text-[20px] lg:text-[32px] capitalize my-3'>mis eventos</h1>
          <span className='border-b-2 border-[#959393] w-48 lg:w-80'></span>

          <div className='my-4 w-full'>
            { !myEvents ? <Spinner />:
              !myEvents.length ?
              <div className='flex justify-center'>
                <div className='text-center py-2 w-48 lg:w-80 rounded-md bg-colorYellow font-inter font-bold'>
                  No hay eventos inscrito
                </div>
              </div>:
              myEvents.map((event, index) => {
              return <ProfileEvent key={index} myEvent={event} event={dropOutEvent} />
              })
            }
          </div>

        </div>
        }
      </div>
    </section>
  
  )
}

export default ProfileUser
if (document.getElementById('profile-user')) {
  const root = createRoot(document.getElementById("profile-user"));
  root.render(<ProfileUser />);
}
