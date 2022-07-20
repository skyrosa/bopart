import React from 'react'
import { createRoot } from 'react-dom/client'
import Logo from '../../../public/storage/pictures/logo.svg'
import Banner from '../../../public/storage/pictures/banner.png'

const Header = () => {
  return (
    <div className='w-full bg-colorBlack text-colorWhite  font-sansita py-2 space-y-2 lg:space-y-6 lg:text-2xl bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${Banner})` }}>

        <div className='flex flex-row justify-end gap-2 mr-2'>
            <a href='#' className='hover:text-colorWhite'> Registrarse </a>|
            <a href='/login' className='hover:text-colorWhite'>Iniciar Sesión</a>
        </div>

        <div className='w-full flex flex-row'>

            <div className='w-full flex items-center justify-center'>
                <a href='#' className='hover:text-colorWhite'>
                    Que ofrecemos
                </a>
            </div>

            <div className='w-full flex justify-center items-center'>
                <a href='/' className=' flex justify-center items-center bg-colorPink rounded-full w-[90px] h-[90px] md:w-[140px] md:h-[140px] lg:w-[200px] lg:h-[200px] drop-shadow-lg'>
                    <div className='w-[80px] h-[80px] md:w-[130px] md:h-[130px] lg:w-[190px] lg:h-[190px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${Logo})` }}></div>
                </a>
            </div>

            <div className='w-full flex items-center justify-center'>
                <a href='#' className='hover:text-colorWhite'>
                    Quienes somos
                </a>
            </div>

        </div>

        <div className='flex justify-center gap-2'>
            <a href='#' className='hover:text-colorWhite'>Contacto</a>|
            <a href='/events' className='hover:text-colorWhite'>Evento</a>
        </div>
    </div>
  )
}

export default Header
if (document.getElementById('header')) {
    const root = createRoot(document.getElementById('header'));
    root.render(<Header />);
}