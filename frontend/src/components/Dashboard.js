import React, { useEffect, useState } from 'react'
import { checkStatus } from '../server'

function Video({src}) {

    return (
      <iframe width="800" height="480" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        /* <video width="1000px" height="480px" controls>
            <source src={src}></source>
        </video> */
  )
}

export const Dashboard = () => {
    const [src,setSrc] = useState(false)
    useEffect(() => {
      const key = setInterval(async function(){
        const status = await checkStatus();
<<<<<<< HEAD
<<<<<<< HEAD
        // if(status){
        //     alert("Target found")
        //     clearInterval(key)
        // }
=======
=======
>>>>>>> aa7ae42a1d50edd698bf3dcb78c5d7a21d8db342
        if(status){
            alert("Target found")
            clearInterval(key)
        }
<<<<<<< HEAD
>>>>>>> refs/rewritten/master
=======
>>>>>>> aa7ae42a1d50edd698bf3dcb78c5d7a21d8db342
      },1000)
    }, [])
    
    const showVideo=()=>{
        setSrc(!src)
    }
  return (
    <div className='my-5'>
        <div className='d-flex justify-content-center align-items-center video-outer text-light bg-info bg-opacity-10'>
                {src? <Video src={"http://192.168.0.101:8080/browserfs.html"}/>:"No Signal"}
        </div>
        <div className='d-flex flex-row justify-content-center mx-5'>
            <table className='mx-auto'>
                <tr>
                    <td className='p-5'><button className='btn btn-lg btn-info buttons-style'>Upload Image</button></td>
                    <td className='p-5'>
                        <button className='btn btn-lg btn-info buttons-style' onClick={showVideo}>
                            {src? "Stop":"Start"}
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}
