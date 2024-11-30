import React, { useEffect, useState } from 'react'
import { fetchAdminData } from '../api/api'

const AdminDashboard = () => {
    const [data,setData] = useState('')

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetchAdminData()
                setData(response.data.message)
            }
            catch(error){
                console.error('Error Fetching Admin Data:',error.response?.data?.message || error.message);
            }
        }
        fetchData()
    },[])

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        window.location.href = '/login'
    }

  return (
    <div>
        <div className='my-5'>
            <h1 className='text-center'>Admin Dashboard</h1>
            <p className='text-center'>{data}</p>
            <div className='text-center'>
                <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard