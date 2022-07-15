import React, {useEffect, useState} from 'react'
import { createRoot } from "react-dom/client"
import ProfileEvent from './ProfileEvent'

const ProfileUser = (props) => {
  const [events, setEvents] = useState(JSON.parse(props.events));

  return (
    <section className='container'>
      <div className='flex justify-center'>
        <div className='bg-colorWhite w-full lg:w-2/4 rounded-[20px] flex flex-col items-center'>

          <div className='w-5/6 lg:w-4/5 border-1 border-[#959393] rounded-[20px] my-4 flex flex-col items-center'>
              <h1 className='font-inter font-bold text-[20px] lg:text-[32px] capitalize my-3'>perfil personal</h1>
              <span className='border-b-2 border-[#959393] w-48 lg:w-80'></span>

              <div className='mt-3 bg-colorTourq py-2  w-48 lg:w-80 text-center font-inter rounded-md capitalize'>
                {props.name}
              </div>

              <div className='mt-3 mb-3 bg-colorTourq py-2 w-48 lg:w-80 text-center font-inter rounded-md'>
                {props.email}
              </div>
          </div>

          <h1 className='font-inter font-bold text-[20px] lg:text-[32px] capitalize my-3'>mis eventos</h1>
          <span className='border-b-2 border-[#959393] w-48 lg:w-80'></span>

          <div className='my-4 w-full'>

            {events.map((event, index) => {
              return <ProfileEvent key={index} event={event} />
            }
            )}

          </div>

        </div>
      </div>
    </section>
  )
}

export default ProfileUser
if (document.getElementById('profile-user')) {
  const root = createRoot(document.getElementById("profile-user"));

  let name = document.getElementById('profile-user').getAttribute('name')
  let email = document.getElementById('profile-user').getAttribute('email')
  let events = document.getElementById('profile-user').getAttribute('events');

  root.render(<ProfileUser name={name} email={email} events={events} />);
}
