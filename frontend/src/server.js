import axios from "axios"

const URL = "/"

const login=async (newObj)=>{
    const res = await axios.post(URL+'login',newObj)
    return res.data;
}

const checkStatus = async ()=>{
<<<<<<< HEAD
    const res = await axios.get(URL+'detected_status')
=======
    const res = await axios.get('/detected_status')
>>>>>>> refs/rewritten/master
    return res;
}
export {login,checkStatus}