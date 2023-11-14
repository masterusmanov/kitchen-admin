import axios from "../axios";

export const reklama = {
    create: (state) => axios.post("/api/v1/banners/create", state, {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    list : () => axios.get(`/api/v1/banners/all`, {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    remove: (id)=> axios.delete(`/api/v1/banners/delete/${id}`, {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),    
}
