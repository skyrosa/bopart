import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

import Background from '../../../../public/storage/pictures/login.jpg'


const EventForm = () => {
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [subName, setSubName ] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [address, setAddress ] = useState('')
    const [date , setDate] = useState('')
    const [capacity, setCapacity ] = useState('')
    const [description, setDescription] = useState('')
    



    const [error, setError] = useState({})

    const create = async (e) => {
        let dataEvent = {
            image:image,
            name:name,
            subName:subName,
            startTime:startTime,
            endTime:endTime,
            address:address,
            date:date,
            capacity:capacity,
            description:description,
        }   

        try {
            e.preventDefault()
            await axios.post('/events',dataEvent)
            window.location = '/events'
        } catch (err) {
            setError(JSON.parse(err.response.request.response))
        }
    }


    return (
    <>
<section className="flex flex-col rounded-[28px] container h-fit   gap-[25px] pb-[30px] bg-colorWhite font-inter ">


    <div  className="rounded-t-[28px] h-60  bg-center bg-no-repeat bg-cover " style={{ backgroundImage: `url(`+Background+`)`}}>

    </div>

    <form className="flex flex-col w-full font-semibold gap-10" onSubmit={create}>

    <div className="w-full flex flex-row flex-wrap md:flex-nowrap">
        <div className="w-full flex flex-col px-10 gap-4">

            <div className="w-full flex flex-col gap-5">
                <p>Nombre del Taller:</p>
                <input className="w-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[15px]" 
                type="text" 
                value={name}
                onChange={ (e) => setName(e.target.value) } />
            </div>

            <div className="w-full flex flex-col gap-5">
                <p>Subtitulo:</p>
                <input className="w-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[15px]"
                type="text" 
                value={subName}
                onChange={ (e) => setSubName(e.target.value) } />
            </div>

            <div className="w-full flex flex-row gap-7">
                <div className="w-full flex flex-col gap-5">
                <p>Hora Inicio:</p>
                <input className="w-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[15px]" 
                type="time" 
                value={startTime} 
                onChange={ (e) => setStartTime(e.target.value) } />
                </div>
                <div className="w-full flex flex-col gap-5">
                <p>Hora Finalización:</p>
                <input className="w-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[15px]" 
                type="time" 
                value={endTime}
                onChange={ (e) => setEndTime(e.target.value) } />
                </div>
            </div>

            <div className="w-full flex flex-col gap-5">
                <p>Ubicación::</p>
                <input className="w-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[15px]"
                type="text" 
                value={address}
                onChange={ (e) => setAddress(e.target.value) } />
            </div>



        </div>
        

        <div className="w-full flex flex-col px-10 md:px-0 md:pr-10 gap-4">

            <div className="w-full flex flex-row gap-7">
                <div className="w-full flex flex-col gap-5">
                <p>Fecha:</p>
                <input className="w-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[15px]" 
                type="date" 
                value={date}
                onChange={ (e) => setDate(e.target.value) } />
                </div>
                <div className="w-full flex flex-col gap-5">
                <p>Aforo Maximo:</p>
                <input className="w-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[15px]" 
                type="number" 
                value={capacity}
                onChange={ (e) => setCapacity(e.target.value) } />
                </div>
            </div>

        <div className="w-full flex flex-col gap-5 h-full">
            <p>Descripción:</p>
            <textarea className="w-full h-full bg-colorTourq  text-lg font-normal rounded-[10px] px-[13px] py-[15px]" type="textarea"
                onChange={ (e) => setDescription(e.target.value) }>
            </textarea>
                
            
        </div>

        </div>
    </div>

    <div className=" flex justify-center py-[10px] ">
        <button type='submit' className=" px-5 py-[10px]  | text-colorBlack text-lg font-inter font-medium | border-2 rounded-lg border-colorTourq hover:bg-colorGreen hover:text-colorWhite  ">
        Crear Evento
        </button>
    </div>

    </form>



</section>/
    </>
    )
}

export default EventForm
if (document.getElementById('event-form')) {
    const root = createRoot(document.getElementById("event-form"));
    root.render(<EventForm />);
}

/* {/*     <section classNameName="flex flex-col rounded-[28px] container h-fit   gap-[25px] pb-[30px] bg-colorWhite font-inter ">
        
        

        <div  classNameName="rounded-t-[28px] h-60  bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url(`+Background+`)`}}>
        
        </div>
        
        <form classNameName="flex flex-col w-full font-semibold gap-10">

        <div classNameName="w-full flex flex-row flex-wrap md:flex-nowrap">
            <div classNameName="w-full flex flex-col px-10 gap-4">

                <div classNameName="w-full flex flex-col gap-5">
                    <p>Nombre del Taller:</p>
                    <input classNameName="w-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[15px]" type="text"/>
                </div>

                <div classNameName="w-full flex flex-row gap-7">
                    <div classNameName="w-full flex flex-col gap-5">
                    <p>Fecha:</p>
                    <input classNameName="w-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[15px]" type="text"/>
                    </div>
                    <div classNameName="w-full flex flex-col gap-5">
                    <p>Fecha:</p>
                    <input classNameName="w-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[15px]" type="text"/>
                    </div>
                </div>

                <div classNameName="w-full flex flex-col gap-5">
                    <p>Hora Inicio/Finalización:</p>
                    <input classNameName="w-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[15px]" type="text"/>
                </div>

                <div classNameName="w-full flex flex-col gap-5">
                    <p>Ubicación:</p>
                    <input classNameName="w-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[15px]" type="text"/>
                </div>

            </div>

            <div classNameName="w-full flex flex-col px-10 md:px-0 md:pr-10 gap-4">

                <div classNameName="w-full flex flex-col gap-5">
                    <p>Subtitulo:</p>
                    <input classNameName="w-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[15px]" type="text"/>
                </div>

                <div classNameName="w-full flex flex-col gap-5 h-full">
                    <p>Descripción:</p>
                    <textarea  classNameName="w-full h-full bg-colorTourq  text-lg font-normal rounded-[10px] px-[13px] py-[15px]" type="textarea"></textarea>
                </div>

            </div>
        </div>

        <div classNameName=" flex justify-center py-[10px] ">
            <button classNameName=" px-5 py-[10px]  | text-colorBlack text-lg font-inter font-medium | border-2 rounded-lg border-colorTourq hover:bg-colorGreen hover:text-colorWhite  ">
            Guardar Cambios
            </button>
        </div>

        </form>

    

    </section> */
