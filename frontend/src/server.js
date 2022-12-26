import axios from "axios"

const URL = "/"

const login=async (newObj)=>{
    const res = await axios.post(URL+'/login',newObj)
    return res;
}

export default login