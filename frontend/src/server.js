import axios from "axios"

const URL = "/"

const login=async (newObj)=>{
    const res = await axios.post(URL+'login',newObj)
    return res.data;
}

const checkStatus = async ()=>{
<<<<<<< HEAD
<<<<<<< HEAD
    const res = await axios.get(URL+'detected_status')
=======
    const res = await axios.get('/detected_status')
>>>>>>> refs/rewritten/master
=======
    const res = await axios.get(URL+'detected_status')
>>>>>>> aa7ae42a1d50edd698bf3dcb78c5d7a21d8db342
    return res;
}
export {login,checkStatus}