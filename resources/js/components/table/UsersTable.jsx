import React, {useState, useEffect} from 'react'
import { createRoot } from "react-dom/client"

const UsersTable = () => {

    const [users, setUsers] = useState([])
    const [update, setUpdate] = useState(false)

    const getUsers = async () => {
        try {
            const response = await axios.get('/getAllUsers')
            setUsers(response.data)
            console.log(response.data)
            setUpdate(false)
        } catch(err) {
            console.log(err.response.request.response)
        }
    }

    const alert = (user) => {
        swal({
          text: 'Estas a punto de unirte al usero ' + user.name,
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

    useEffect(() => {
        getUsers()
    }, [])

  return (
    <>
        <tr>
            <th>{users.length}</th>
        </tr>
        
    </>
  )
}

export default UsersTable
if (document.getElementById('users-table')) {
    const root = createRoot(document.getElementById('users-table'));
    root.render(<UsersTable />);
}