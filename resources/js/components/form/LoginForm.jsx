import React, {useState} from 'react'
import { createRoot } from "react-dom/client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import Background from '../../../../public/storage/pictures/login.jpg'

const LoginForm = () => {
    const [type, setType] = useState('password')

    const changeType = () => {
        type=='password' ? setType('text') : setType('password')
    }

  return (
    <section className='w-full flex justify-center'>
        <div className='bg-colorWhite w-full lg:w-3/5 rounded-[28px] flex flex-row'>
            <div className='w-full rounded-l-[28px] hidden md:block bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(`+Background+`)`}} >
            </div>
            
            <div className='w-full font-inter flex flex-col gap-[60px] py-14 lg:py-24'>

                <div className='flex flex-col items-center gap-4'>
                    <p className='text-[25px] lg:text-[32px] font-bold'>Login de Usuario</p>
                    <div className="border-b-2 border-[#959393] w-4/6"></div>
                </div>

                <form className='flex flex-col gap-[22px] items-center'>
                    <div className='flex flex-col items-center gap-[5px] lg:gap-[22px] w-3/4 '>
                        <span className='w-full'>
                        <p className='text-left font-bold'>Correo electrónico :</p>
                        </span>
                        <input className="w-full rounded-[10px] px-[13px] py-[10px] text-lg font-normal text-colorWhite bg-colorTourq focus:outline-0" type="text" />
                    </div>

                    <div className='flex flex-col items-center gap-[5px] lg:gap-[22px] w-3/4 '>
                        <span className='w-full'>
                        <p className='text-left font-bold '>Contraseña:</p>
                        </span>
                        <span className='relative w-full flex items-center justify-end'>
                            <FontAwesomeIcon icon={type=='password' ? faEye : faEyeSlash} onClick={changeType} className='absolute mr-5 hover:text-[#080909] cursor-pointer' />
                            <input className="w-full rounded-[10px] pl-[13px] pr-[48px] py-[10px] text-lg font-normal text-colorWhite bg-colorTourq focus:outline-0" type={type} />
                        </span>
                    </div>

                    <div className='w-3/4'>
                        <a href='#' className='underline underline-offset-4 text-xs	text-left'>
                            Olvide mi contraseña
                        </a>
                    </div>

                    <div className="flex flex-row justify-evenly items-center mt-2 w-3/4 ">
                        <button type='submit' className="px-3 py-[10px] text-colorBlack text-sm lg:text-lg font-inter font-medium border-2 rounded-lg border-colorTourq hover:bg-colorGreen hover:text-colorWhite">
                            Iniciar sesión
                        </button>

                        <button type='submit' className="px-3 py-[10px] text-colorBlack text-sm lg:text-lg font-inter font-medium  rounded-lg border-colorTourq hover:bg-colorGreen hover:text-colorWhite">
                            Registrarse
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </section>
  )
}

export default LoginForm
if (document.getElementById('login-form')) {
    const root = createRoot(document.getElementById("login-form"));
    root.render(<LoginForm />);
  }