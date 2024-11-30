import React, { useState } from 'react'
import {register} from '../api/api'

const Register = () => {
    const [formData,setFormData] = useState({
        name:'', email:'', password: '', role: 'user'
    })

    const handleChange = (e) => {
        const {name,value} = e.target
        setFormData({...formData,[name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await register(formData)
            if(response && response.data && response.data.message){
                alert(response.data.message)
                window.location.href = '/login'
            }
            else
                alert('Unexpected response format from the server.')
        }
        catch(error){
            console.error('Error:',error);
            alert(error.response?.data?.message || 'Something went wrong')
        }
    }

  return (
    <div>
        <div className='m-auto w-50 my-5'>
            <h3 className='text-center'>Register Form</h3>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input className='form-control' type='text' name='name' id='name' value={formData.name} onChange={handleChange} placeholder='Name'/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input className='form-control' type='email' name='email' id='email' value={formData.email} onChange={handleChange} placeholder='Email'/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input className='form-control' type='password' name='password' id='password' value={formData.password} onChange={handleChange} placeholder='Password'/>
                </div>
                <label className='form-label'>Role</label>
                <select className='form-select' name='role' id='role' value={formData.role} onChange={handleChange}>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
                <div className='text-center mt-3'>
                    <button type='submit' className='btn btn-primary'>Register</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register