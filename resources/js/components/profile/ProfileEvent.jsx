import React, {useState, useEffect} from 'react'
import Button from '../Button'

const ProfileEvent = (props) => {
    const [date, setDate] = useState(props.myEvent.date)
    
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
    <div className='flex flex-row w-full h-28 lg:h-48   border-b'>
        <div className='w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(`+props.myEvent.image+`)` }}>

        </div>
        <div className='w-full flex flex-col justify-evenly'> 

            <div className=''>
                <h1 className='pl-2 font-inter font-bold text-[15px] lg:text-[24px] text-left capitalize my-1'>
                    {props.myEvent.name}
                </h1>
                <p className='pl-2 text-[12px] font-bold lg:text-[18px] text-colorPink capitalize'>
                    {date}
                </p>
            </div>

            <div className='flex justify-center w-full'>
                <Button idEvent={props.myEvent} event={props.event}>
                    retirarse
                </Button>
            </div>
            
        </div>
    </div>
  )
}

export default ProfileEvent
