import axios from "axios"

const URL = "/"

const login=async (newObj)=>{
    const res = await axios.post(URL+'login',newObj)
    return res.data;
}

const checkStatus = async ()=>{
    const res = await axios.get(URL+'detected_status')
    return res;
}
export {login,checkStatus}