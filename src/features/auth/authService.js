import axios from "axios";

const API_URL = 'api/user'

const registerUser = async(user)=>{
    const res = await axios.post(API_URL + '/register' , user)
    if(res.data){
        localStorage.setItem('user' , JSON.stringify(res.data))
    }
    return res.data
}
const loginUser = async(user)=>{
    const res = await axios.post(API_URL + '/login' , user)
    if(res.data){
        localStorage.setItem('user' , JSON.stringify(res.data))
    }
    return res.data
}
const authService = {
    registerUser,
    loginUser,
}
export default authService

