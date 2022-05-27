import axios from 'axios'

export let api = axios.create({
    baseURL:"http://camabulo.com/api/v2/",
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    }
})

api.interceptors.request.use((config)=>{
    const token = sessionStorage.getItem("Session");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
})