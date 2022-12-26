import axios from "axios"

const URL = "http://192.168.78.254:3001"

const login=async (newObj)=>{
    const res = await axios.post(URL+'/login',newObj)
    return res;
}

export default login