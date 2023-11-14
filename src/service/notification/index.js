import axios from "../axios";

export const notification = {
    create: (state) => axios.post("/api/v1/notifications/set-notification", state, {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    list : () => axios.get(`/api/v1/notifications/all`, {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    remove: (id)=> axios.delete(`/api/v1/notifications/${id}`, {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    createId: (id, state)=> axios.post(`/api/v1/notifications/${id}/send-notification`, state, {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    
}
