import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:5000/api/auth'})

API.interceptors.request.use((req)=>{
    const token = localStorage.getItem('token')
    if(token)
        req.headers.Authorization = token
    return req
})

export const register = (formData) => API.post('/register',formData)
export const login = (formData) => API.post('/login',formData)
export const fetchAdminData = () => API.get('/admin')
export const fetchUserData = () => API.get('/user')