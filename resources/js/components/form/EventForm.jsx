import React, { useState } from 'react'
import { createRoot } from "react-dom/client"

const EventForm = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [image, setImage] = useState('')
    const [address, setAddress] = useState('')
    const [capacity, setCapacity] = useState('')
    const [type, setType] = useState('Evento')

    const storeEvent = async (e) => {
        e.preventDefault()
        let event = {
            name: name ,
            description: description,
            date: date,
            startTime: startTime,
            endTime: endTime,
            image: image,
            address: address,
            capacity: capacity,
            type: type,
        }
        
        await axios.post('/events', envet)
    }
  return (
    <div className='w-full h-full flex justify-center'>
        <div className='flex flex-col w-full md:w-5/5 lg:w-3/5 rounded-[28px] bg-colorWhite '>
        
            <form className='flex flex-col w-full font-semibold font-inter gap-4'>
                <input className='rounded-t-[28px] h-60 bg-colorBlack' />

                <div className='flex flex-col md:flex-row w-full gap-4 pt-3'>
                    <div className='w-full flex flex-col gap-4 px-4'>

                        <div className='w-full flex flex-col gap-3'>
                            <p>Nombre del Evento:</p>
                            <input class='w-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[10px]' type='text' 
                                onChange={ (e) => setName(e.target.value) }
                            />
                        </div>

                        <div className='w-full flex flex-col gap-3'>
                            <p>Fecha del Evento:</p>
                            <input class='w-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[10px]' type='date' 
                                onChange={ (e) => setDate(e.target.value) }
                            />
                        </div>

                        <div className='w-full flex flex-row gap-3'>
                            <div className='w-full flex flex-col gap-3'>
                                <p>Hora de Inicio:</p>
                                <input class='w-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[10px]' type='time'
                                    onChange={ (e) => setStartTime(e.target.value) }
                                 />
                            </div>
                            <div className='w-full flex flex-col gap-3'>
                                <p>Hora de Finalizado:</p>
                                <input class='w-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[10px]' type='time' 
                                    onChange={ (e) => setEndTime(e.target.value) }
                                />
                            </div>
                        </div>

                        <div className='w-full flex flex-col gap-3'>
                            <p>Dirección:</p>
                            <input class='w-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[10px]' type='text'
                                onChange={ (e) => setAddress(e.target.value) }
                             />
                        </div>
                    </div>

                    <div className='w-full h-full flex flex-col gap-4 px-4'>

                        <div className='w-full flex flex-row-reverse gap-3'>
                            <div className='w-full flex flex-col gap-3'>
                                <p>Maximo de persona:</p>
                                <input class='w-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[10px]' type='number' 
                                    onChange={ (e) => setCapacity(e.target.value) }                                  
                                />
                            </div>
                            <div className='w-full flex flex-col gap-3'>
                                <p>Categoria:</p>
                                <select class='w-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[10px]' onChange={ (e) => setType(e.target.value) } type='text'>
                                    <option value="Evento">Evento</option>
                                    <option value="Taller">Taller</option>
                                </select>
                            </div>
                        </div>

                        <div className='w-full h-full flex flex-col gap-3'>
                            <p>Descripción:</p>
                            <textarea class='w-full h-full bg-colorTourq text-lg font-normal rounded-[10px] px-[13px] py-[10px]' type='text' onChange={ (e) => setDescription(e.target.value) } />
                        </div>

                    </div>

                </div>

                <div className='w-full flex justify-center pb-3'>
                    <button className='px-5 py-[10px]  | text-colorBlack text-lg font-inter font-medium | border-2 rounded-lg border-colorTourq hover:bg-colorGreen hover:text-colorWhite  '>
                        Agregar
                    </button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default EventForm
if (document.getElementById('event-form')) {
    const root = createRoot(document.getElementById("event-form"));
    root.render(<EventForm />);
  }