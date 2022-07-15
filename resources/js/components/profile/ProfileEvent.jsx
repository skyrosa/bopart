import React, {useState, useEffect} from 'react'
import Button from '../Button'

const ProfileEvent = (props) => {
    const [date, setDate] = useState(props.event.date)
    
    const changeFormat = () => {
        let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"]
        let getMonth = date.split('-')[1];
        let getDay = date.split('-')[2]
        let month = getMonth[0] == 0 ? getMonth[1] : getMonth
        return getDay+' '+months[month]
    }

    useEffect(() => {
        setDate(changeFormat())
    }, [])

  return (
    <div className='flex flex-row w-full border-b'>
        <div className='w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(`+props.event.image+`)` }}>

        </div>
        <div className='w-full flex flex-col space-y-5 py-2'> 

            <div className='mt-3'>
                <h1 className='pl-2 font-inter font-bold text-[20px] lg:text-[32px] text-left capitalize my-1'>
                    {props.event.name.replace(/[_]/gi, ' ')}
                </h1>
                <p className='pl-2 text-[12px] font-bold lg:text-[18px] text-colorPink capitalize'>
                    {date}
                </p>
            </div>

            <div className='flex justify-center w-full'>
                <Button link={`events/${props.event.id}/drop-out`}>
                    retirarse
                </Button>
            </div>
            
        </div>
    </div>
  )
}

export default ProfileEvent
