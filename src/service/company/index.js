import axios from "../axios";

export const company = {
    create: (state) => axios.post("/api/v1/workplaces/create", state, {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    list : () => axios.get(`/api/v1/workplaces/all`, {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    remove: (id)=> axios.delete(`/api/v1/workplaces/delete/${id}`, {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    update: (id, state)=> axios.put(`/api/v1/workplaces/update/${id}`, state, {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    
}
