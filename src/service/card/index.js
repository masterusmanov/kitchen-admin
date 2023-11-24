import axios from "../axios";

export const card = {
    create: (state) => axios.post("/api/v1/cards/create", state, {
        headers:{
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    list : () => axios.get(`/api/v1/cards/get`, {
        headers:{
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })    
}
