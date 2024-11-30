import React, { useEffect, useState } from 'react'
import { fetchUserData } from '../api/api'

const UserDashboard = () => {
    const [data,setData] = useState('')

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetchUserData()
                setData(response.data.message)
            }
            catch(error){
                console.error('Error Fetching User Data:',error.response?.data?.message || error.message);
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
            <h1 className='text-center'>User Dashboard</h1>
            <p className='text-center'>{data}</p>
            <div className='text-center mt-3'>
                <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default UserDashboard