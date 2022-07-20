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
  <section className=' w-fit items-center   flex flex-col font-inter font-semibold gap-[25px] pb-[30px] px-[67px] border rounded-[28px] bg-colorWhite '>
    <div className="flex flex-col gap-5 pt-[60px] pb-[25px]">
      <p className='font-bold text-[32px]'>
        Registrar Usuario</p>
    <div/>
        
    </div>

    <form className="gap-[25px] flex flex-col " onSubmit={register}  >
      <section className='space-y-[22px]'>
        
        <p>Nombre y Apellido:</p>
        <input type="text" className="bg-colorTourq pl-3 py-[15px] rounded-[10px] text-[18px] font-normal text-colorWhite" placeholder="NombreDeEjemplo"
        value={name}
        onChange={(e) => setName(e.target.value) }
        />

        <p>Correo Electronico:</p>
        <input type="email" className="bg-colorTourq pl-3 py-[15px] rounded-[10px] text-[18px] font-normal text-colorWhite" placeholder="Ejemplo@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value) }
        />

        <p>Contraseña:</p>
        <input type="password" className="bg-colorTourq pl-3 py-[15px] rounded-[10px] text-[18px] font-normal text-colorWhite" placeholder="*******"
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        />

        <p>Confirmar Contraseña:</p>
        <input type="password" className="bg-colorTourq pl-3 py-[15px] rounded-[10px] text-[18px] font-normal text-colorWhite" placeholder="*******"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value) }
        />
        
      </section>

      <section className='flex justify-center py-[10px]'>
        <button type='submit' className=" px-5 py-[10px] max-w-fit h-fit  text-lg font-inter font-medium   border-colorTourq text-colorBlack border-2 rounded-lg | hover:bg-colorGreen hover:text-colorWhite">
          Crear Cuenta
        </button>
      </section>

    </form>

  </section>



  </>
  )
}

export default RegisterForm
if (document.getElementById('register-form')) {
    const root = createRoot(document.getElementById("register-form"));
    root.render(<RegisterForm />);
  }
