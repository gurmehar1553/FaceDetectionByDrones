import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {login} from '../server'

export const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPwd] = useState('')
    
    const navigate = useNavigate()

    const handlePwd = (e) => {
        setPwd(e.target.value)
    }
    const handleUsername=(e)=>{
        setUsername(e.target.value)
    }
    const handleLogin = async (e) => {
        e.preventDefault()
        const newObj = {
            username,
            password
        }
        const res = await login(newObj);
        res && navigate('/Dashboard')
    }
  return (
    <div className='outer-main' >
        <div className="p-5 my-5 shadow col-lg-4 col-sm-12 col-md-6 main-div bg-info bg-opacity-10"  id="sign-in">
            <form onSubmit={handleLogin} >
                <div className="my-5">
                    <input type="text" className="form-control" id="username" placeholder="Username" name="username" onChange={handleUsername} />
                </div>
                <div className="mb-5">
                    <input type="password" className="form-control" id="pwd" placeholder="Password" name="pswd" onChange={handlePwd} />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-4">Sign In</button>
            </form>
        </div>
    </div>
  )
}

// export Login