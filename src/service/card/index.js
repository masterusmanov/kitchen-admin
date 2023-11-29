import axios from "../axios";

export const card = {
    create: (state) => axios.put("/api/v1/cards/update", state, {
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
