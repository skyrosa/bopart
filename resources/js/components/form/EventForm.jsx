import React, { useState, useCallback } from 'react'
import { createRoot } from "react-dom/client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBoxOpen} from '@fortawesome/free-solid-svg-icons'
import {useDropzone} from 'react-dropzone'
import swal from 'sweetalert'


const EventForm = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [image, setImage] = useState([])
    const [address, setAddress] = useState('')
    const [capacity, setCapacity] = useState(0)
    const [type, setType] = useState('')

    const [error, setError] = useState([])
    const [message, setMessage] = useState([])

    const storeEvent = async (e) => {
        console.log(image)
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
            try{
                const response = await axios.post('/events', event)
                console.log(response.data)
                swal({
                    text: 'Evento creado Exitosamente ',
                    icon: 'success',
                  }).then(response =>{
                      window.location = '/events'
                  })
            }catch (err){
                let error = JSON.parse(err.response.request.response)
                setError(!error.errors ? [] : error.errors )
                setMessage(error.message)
            }
    }

    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()
            reader.onload = () => {
                const binaryStr = reader.result
                console.log(binaryStr)
            }
            reader.readAsArrayBuffer(file)
        })
    }, [])


    const  { getRootProps , getInputProps , isDragActive }  =  useDropzone ( {

        accept: {
            'image/*': []
        },
         onDrop: acceptedFiles => {
            setImage(acceptedFiles.map(file => Object.assign(file, {
              preview: URL.createObjectURL(file)
            })));
          }
    }) 

  return (
    <div className='w-full h-full flex justify-center'>
        <div className='flex flex-col w-full md:w-5/5 lg:w-3/5 rounded-[28px] bg-colorWhite '>
            <form className='flex flex-col w-full font-semibold font-inter gap-4' onSubmit={storeEvent} encType="multipart/form-data">

                <div>
                    <div {...getRootProps()} className='flex justify-center items-center relative rounded-t-[28px] bg-colorBlack h-60 cursor-pointer'>
                        <button className='px-2 py-[5px]text-lg font-inter font-medium border-2 rounded-lg bg-colorPink border-colorPink hover:bg-[#e17978] text-colorWhite right-0 top-0 absolute z-50 '
                        onClick={(e) => {
                            e.preventDefault()
                            setImage([])
                            }}>
                            Eliminar imagen
                        </button>
                        {image.map(i => <div key={i.name} className='w-full h-full absolute bg-cover bg-center bg-no-repeat rounded-t-[28px]' style={{ backgroundImage: `url(`+i.preview+`)`}}></div>)}
                        <input {...getInputProps()} type='file' className='z-10 rounded-t-[28px] h-60 w-full cursor-pointer absolute'/>
                        <FontAwesomeIcon icon={faBoxOpen} className='text-colorWhite text-8xl' />

                    </div>
                    {message ? <p className='text-colorPink text-center'>{message}</p> : ''}
                </div>

                <div className='flex flex-col md:flex-row w-full gap-4 pt-3'>
                    <div className='w-full flex flex-col gap-4 px-4'>

                        <div className='w-full flex flex-col gap-3'>
                            <p>Nombre del Evento:</p>
                            <div>
                                <input className={`w-full ${error['name'] ? 'bg-colorPink' : 'bg-colorTourq'} text-lg font-normal rounded-[10px] px-[13px] py-[10px] focus:outline-0`} 
                                type='text' 
                                value={name}
                                onChange={ (e) => setName(e.target.value) }
                                />
                                {error['name'] ? <p className='text-colorPink '>{error['name']}</p> : ''}
                            </div>

                        </div>

                        <div className='w-full flex flex-col gap-3'>
                            <p>Fecha del Evento:</p>
                            <div>
                                <input className={`w-full ${error['date'] ? 'bg-colorPink' : 'bg-colorTourq'} text-lg font-normal rounded-[10px] px-[13px] py-[10px] focus:outline-0`} 
                                type='date' 
                                value={date}
                                onChange={ (e) => setDate(e.target.value) }
                                />
                                {error['date'] ? <p className='text-colorPink '>{error['date']}</p> : ''}
                            </div>
                        </div>

                        <div className='w-full flex flex-row gap-3'>
                            <div className='w-full flex flex-col gap-3'>
                                <p>Hora de Inicio:</p>
                                <div>
                                    <input className={`w-full ${error['startTime'] ? 'bg-colorPink' : 'bg-colorTourq'} text-lg font-normal rounded-[10px] px-[13px] py-[10px] focus:outline-0`}
                                    type='time'
                                    value={startTime}
                                    onChange={ (e) => setStartTime(e.target.value) }
                                    />
                                    {error['startTime'] ? <p className='text-colorPink '>{error['startTime']}</p> : ''}
                                </div>
                            </div>
                            <div className='w-full flex flex-col gap-3'>
                                <p>Hora de Finalizado:</p>
                                <div>
                                    <input className={`w-full ${error['endTime'] ? 'bg-colorPink' : 'bg-colorTourq'} text-lg font-normal rounded-[10px] px-[13px] py-[10px] focus:outline-0`} 
                                    type='time' 
                                    value={endTime}
                                    onChange={ (e) => setEndTime(e.target.value) }
                                    />
                                    {error['endTime'] ? <p className='text-colorPink '>{error['endTime']}</p> : ''}
                                </div>
                            </div>
                        </div>

                        <div className='w-full flex flex-col gap-3'>
                            <p>Dirección:</p>
                            <div>
                                <input className={`w-full ${error['address'] ? 'bg-colorPink' : 'bg-colorTourq'} text-lg font-normal rounded-[10px] px-[13px] py-[10px] focus:outline-0`} 
                                type='text'
                                value={address}
                                onChange={ (e) => setAddress(e.target.value) }
                                />
                                {error['address'] ? <p className='text-colorPink '>{error['address']}</p> : ''}
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-full flex flex-col gap-4 px-4'>

                        <div className='w-full flex flex-row-reverse gap-3'>
                            <div className='w-full flex flex-col gap-3'>
                                <p>Maximo de persona:</p>
                                <div>
                                    <input className={`w-full ${error['capacity'] ? 'bg-colorPink' : 'bg-colorTourq'} text-lg font-normal rounded-[10px] px-[13px] py-[10px] focus:outline-0`}
                                    type='number' 
                                    value={capacity}
                                    onChange={ (e) => setCapacity(Math.max(0, Number(e.target.value))) }                                  
                                    />
                                    {error['capacity'] ? <p className='text-colorPink '>{error['capacity']}</p> : ''}
                                </div>
                            </div>
                            <div className='w-full flex flex-col gap-3'>
                                <p>Categoria:</p>
                                <div>
                                    <select className={`w-full ${error['type'] ? 'bg-colorPink' : 'bg-colorTourq'} text-lg font-normal rounded-[10px] px-[13px] py-[10px] focus:outline-0`}
                                    onChange={ (e) => setType(e.target.value) } 
                                    type='text'>
                                        <option value=""></option>
                                        <option value="Evento">Evento</option>
                                        <option value="Taller">Taller</option>
                                    </select>
                                    {error['type'] ? <p className='text-colorPink '>{error['type']}</p> : ''}
                                </div>
                            </div>
                        </div>

                        <div className='w-full h-full flex flex-col gap-3'>
                            <p>Descripción:</p>
                            <div className='w-full h-full'>
                                <textarea className={`w-full h-full ${error['description'] ? 'bg-colorPink' : 'bg-colorTourq'} text-lg font-normal rounded-[10px] px-[13px] py-[10px] focus:outline-0`}
                                type='text' 
                                onChange={ (e) => setDescription(e.target.value) } 
                                value={description}
                                />
                                {error['description'] ? <p className='text-colorPink '>{error['description']}</p> : ''}
                            </div>
                        </div>

                    </div>
                </div>

                <div className='w-full flex justify-center pb-3'>
                    <button type='submit' className='px-5 py-[10px] text-colorBlack text-lg font-inter font-medium border-2 rounded-lg border-colorTourq hover:bg-colorGreen hover:text-colorWhite'>
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