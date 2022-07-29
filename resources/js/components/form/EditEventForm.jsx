import React, { useState, useCallback, useEffect } from 'react'
import { createRoot } from "react-dom/client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBoxOpen} from '@fortawesome/free-solid-svg-icons'
import {useDropzone} from 'react-dropzone'
import swal from 'sweetalert'
import axios from 'axios'
import { set } from 'lodash'


const EditEventForm = (props) => {

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

    const updateEvent = async (e) => {
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
                const response = await axios.put(`/events/${props.event}`, event)
                console.log(response.data)
                swal({
                    text: 'Cambios guardados con éxito  ',
                    icon: 'success',
                  }).then(response =>{
                      window.location = `/events/${props.event}`
                  })
            }catch (err){
                let error = JSON.parse(err.response.request.response)
                setError(!error.errors ? [] : error.errors )
                setMessage(error.message)
            }
    }

    const getEvent = async () => {
        const response = await axios.get(`/searchEvent/${props.event}`)
        const data = response.data

        setName(data.name)
        setDescription(data.description)
        setDate(data.date)
        setStartTime(data.startTime)
        setEndTime(data.endTime)
        setImage(data.image)
        setAddress(data.address)
        setCapacity(data.capacity)
        setType(data.type)
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

    useEffect(() => {
        getEvent()
    },[])
  return (
    <div className='w-full h-full flex justify-center'>
        <div className='flex flex-col w-full md:w-5/5 lg:w-3/5 rounded-[28px] bg-colorWhite '>
            <form className='flex flex-col w-full font-semibold font-inter gap-4' onSubmit={updateEvent} encType="multipart/form-data">

                <div>
                    <div {...getRootProps()} className='flex justify-center items-center relative rounded-t-[28px] bg-colorBlack h-60 cursor-pointer'>
                        <button className='px-2 py-[5px]text-lg font-inter font-medium border-2 rounded-lg bg-colorPink border-colorPink hover:bg-[#e17978] text-colorWhite right-0 top-0 absolute z-50 '
                        onClick={(e) => {
                            e.preventDefault()
                            setImage([])
                            }}>
                            Eliminar imagen
                        </button>
                        {   typeof image != 'string' ?
                            image.map(i => <div key={i.name} className='w-full h-full absolute bg-cover bg-center bg-no-repeat rounded-t-[28px]' style={{ backgroundImage: `url(`+i.preview+`)`}}></div>):
                            <div className='w-full h-full absolute bg-cover bg-center bg-no-repeat rounded-t-[28px]' style={{ backgroundImage: `url(`+ image +`)`}}></div>
                        }
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
                                    type='text'
                                    value={type}>
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

                        <div className='w-full flex flex-col gap-3'>
                            <p>Url de la imagen:</p>
                            <div>
                                <input className={`w-full ${error['image'] ? 'bg-colorPink' : 'bg-colorTourq'} text-lg font-normal rounded-[10px] px-[13px] py-[10px] focus:outline-0`} 
                                type='url' 
                                onChange={ (e) => setImage(e.target.value) }
                                />
                                {error['image'] ? <p className='text-colorPink '>{error['image']}</p> : ''}
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

export default EditEventForm
if (document.getElementById('edit-event-form')) {
    const root = createRoot(document.getElementById("edit-event-form"));
    let event = document.getElementById('edit-event-form').getAttribute('event');
    root.render(<EditEventForm  event={event} />);
  }