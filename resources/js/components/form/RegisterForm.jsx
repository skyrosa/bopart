import React, {useState} from 'react'
import { createRoot } from "react-dom/client"

const RegisterForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const [error, setError] = useState({})

  const register = async (e) => {
    let user = {
      name:name,
      email:email,
      password:password,
      password_confirmation:passwordConfirmation,
    }
    
      try {
          e.preventDefault()
          await axios.post('/register',user)
          window.location = '/profile'
      } catch (err) {
          setError(JSON.parse(err.response.request.response))
      }
  }

  const changeType = () => {
      type=='password' ? setType('text') : setType('password')
  }
  
  return (
<>


<section className=' lg:max-w-xl max-h-screen lg:flex lg:flex-col lg:gap-[25px] lg:pb-[30px] || md:max-w-xl md:flex md:flex-col md:pb-[30px] md: || sm:max-w-sm sm:flex  sm:pb-5 || max-w-xs flex gap-[px] pb-[30px] || items-center justify-center self-center container     font-inter font-semibold    rounded-[28px] bg-colorWhite '>
      <div className=" md:flex md:flex-col flex gap-5 pt-[60px] pb-[25px]">
        <p className='font-bold sm:text-[32px] text-[24px] lg:block hidden'>
          Registrar Usuario</p>

      <form className=" gap-[25px] sm:flex-col " onSubmit={register}  >
          <section className='   md:gap-[22px] sm:gap-[12px] gap-1 flex flex-col'>
              
                <p>Nombre y Apellido:</p>
                <input type="text" className=" bg-colorTourq pl-3 sm:py-[15px] py-[10px] sm:rounded-[10px] rounded-[6px] sm:text-[18px] text-[14px] font-normal text-colorWhite" placeholder="NombreDeEjemplo"
                value={name}
                onChange={(e) =>   setName(e.target.value) }
                />  

                <p>Correo Electronico:</p>
                <input type="email" className=" bg-colorTourq pl-3 sm:py-[15px] py-[10px] rounded-[10px] sm:text-[18px] text-[14px] font-normal text-colorWhite" placeholder="Ejemplo@gmail.com"
                value={email}
                onChange={(e) =>    setEmail(e.target.value) }
                /> 

                <p>Contraseña:</p>
                <input type="password" className=" bg-colorTourq pl-3 sm:py-[15px] py-[10px] rounded-[10px] sm:text-[18px] text-[14px] font-normal text-colorWhite" placeholder="*******"
                value={password}
                onChange={(e) =>    setPassword(e.target.value) }
                />  

                <p>Confirmar Contraseña:</p>
                <input type="password" className=" bg-colorTourq pl-3 sm:py-[15px] py-[10px] rounded-[10px] sm:text-[18px] text-[14px] font-normal text-colorWhite" placeholder="*******"
                value={passwordConfirmation}
                onChange={(e) =>   setPasswordConfirmation(e.target.value) }
                />  
            
            
          </section>

          <section className='flex  justify-center lg:justify-center sm:items-end py-[10px]'>
            <button type='submit' className=" px-5 py-[10px] max-w-fit h-fit  md:text-lg text-sm font-inter font-medium   border-colorTourq text-colorBlack border-2 rounded-lg | hover:bg-colorGreen hover:text-colorWhite">
              Crear Cuenta
            </button>
        </section>


      </form>
      </div>
</section> 
</>
  )
}

export default RegisterForm
if (document.getElementById('register-form')) {
    const root = createRoot(document.getElementById("register-form"));
    root.render(<RegisterForm />);
}




