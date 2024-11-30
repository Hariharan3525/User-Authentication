import React, { useState } from 'react'
import {login} from '../api/api'
import { Link } from 'react-router-dom'

const Login = () => {
    const [formData,setFormData] = useState({
        email:'', password:''
    })

    const handleChange = (e) => {
        const {name,value} = e.target
        setFormData({...formData,[name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await login(formData)
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('role',response.data.role)
            alert("Login Successful")
            if (response.data.role === 'admin'){
                console.log('Token:',response.data.token)
                window.location.href = '/admin'
            }
            else if (response.data.role === 'user'){
                console.log('Token:',response.data.token)
                window.location.href = '/user'
            }
            else
                alert('Unknown role');
        }
        catch(error){
            alert(error.response.data.message || 'Something went wrong')
        }
    }

  return (
    <div>
        <div className='m-auto w-50 my-5'>
            <h3 className='text-center'>Login Form</h3>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input className='form-control' type='email' name='email' id='email' value={formData.email} onChange={handleChange} placeholder='Email'/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input className='form-control' type='password' name='password' id='password' value={formData.password} onChange={handleChange} placeholder='Password'/>
                </div>
                <div className='text-center my-3'>
                    <button type='submit' className='btn btn-success'>Login</button>
                </div>
                <Link to='/'><p className='btn btn-danger'>New User - Register Here</p></Link>
            </form>
        </div>
    </div>
  )
}

export default Login