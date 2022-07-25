import React from 'react'
import swal from 'sweetalert'

const SmallCard = (props) => {

  const changeFormat = (date) => {
    let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"]
    let getMonth = date.split('-')[1];
    let getDay = date.split('-')[2]
    let month = getMonth[0] == 0 ? getMonth[1] : getMonth
    return getDay+' '+months[month]
  }

  const alert = () => {
    swal({
      text: 'Estas a punto de unirte al evento ' + props.event.name,
      icon: 'info',
      buttons: ['No', 'Si'],
    }).then(response =>{
      response ? checkIn(props.event.id) : ''
    })
  }

  const checkIn = async (id) => {
    try {
        const response = await axios.get(`/events/${ id }/check-in`)
        swal({
          text: response.data.message,
          icon: response.data.checkIn ?'success' : 'warning',
        }).then(res => {
          window.location = `/events/${ id }`
        })
    } catch(err) {
        console.log(err.response.request.response)
    }
  }

  return (
    <div className='w-56 md:w-96 flex flex-col justify-between h-full md:h-[500px]  bg-colorWhite rounded-[10px] font-extrabold font-sansita gap-6'>
      <a href={`/events/`+ props.event.id} className={`w-full h-28  md:h-52 rounded-t-[10px] ${!props.event.image ? 'bg-colorBlack': ''} bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url(`+props.event.image+`)` }}></a>
      <h1 className='w-full text-center px-2 text-[17px] md:text-[26px]'>{props.event.name}</h1>
      <h1 className='w-full text-center text-[17px] md:text-[26px] text-colorPink'>{props.event.date}</h1>
      <h2 className='font-bold text-center text-xs md:text-base'>{props.event.address}</h2>
      <button onClick={alert} className='tracking-[0.20em] py-4 px-[69px] font-librefranklin font-bold uppercase bg-colorGreen hover:bg-[#50a34e] rounded-b-[10px] flex justify-center items-center text-colorWhite text-base md:text-xl'>
        Apuntate
      </button>
    </div>
  )
}
export default SmallCard
