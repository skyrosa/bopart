import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { createRoot } from "react-dom/client"

const UsersTable = () => {

    const [users, setUsers] = useState([])
    const [update, setUpdate] = useState(false)

  const getUsers = async () => {
    try {
      const response = await axios.get('/getAllUsers')
      setUsers(response.data)
      setUpdate(false)
    } catch(err) {
      console.log(err.response.request.response)
    }
  }

  const alert = (user) => {
    swal({
      text: 'Estas a punto de eliminar a ' + user.name,
      icon: 'info',
      buttons: ['No', 'Si'],
    }).then(response =>{
      response ? deleteUser(user.id) : ''
    })
  }

  const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`/users/${ id }`)
        setUpdate(true)
        swal({
          text: response.data.message,
          icon: response.data.deleted ?'success' : 'warning',
        })
        getUsers()
    } catch(err) {
        console.log(JSON.parse(err.response.request.response).message)
    }
  }

  useEffect(()=>{
    getUsers()
  },[])
  return (
    <>
        {
          !users.length ? '' :
          users.map((user, index) => {
            return user.id != 1 ?
                  <tr key={index}>
                      <th className='px-3 py-2 text-xl font-bold font-sansita text-colorWhite hover:text-colorWhite'>
                        {user.name}
                      </th>
                      <th className='flex flex-row w-full justify-end mt-2 '>
                      <button onClick={() => alert(user)} className='focus:outline-none text-white bg-colorPink hover:bg-[#be6665] focus:ring-4 focus:ring-bg-[#4e9f4c] font-inter rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 '>Eliminar</button>
                      </th>
                   </tr> : ''
          })
        }
    </>
  )
}

export default UsersTable
if (document.getElementById('users-table')) {
    const root = createRoot(document.getElementById('users-table'));
    root.render(<UsersTable />);
}