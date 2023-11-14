import axios from '../axios'


export const useAuth = (user) => axios.post("/api/v1/auth/login/admin", user)

