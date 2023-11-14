import axios from "../axios";

export const set = {
    create: (state) => axios.post("/api/v1/foods/create", state, {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    list : () => axios.get(`/api/v1/foods/all`, {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    remove: (id)=> axios.delete(`/api/v1/foods/delete/${id}`, {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    update: (id, state)=> axios.put(`/api/v1/foods/update/${id}`, state, {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    
}
